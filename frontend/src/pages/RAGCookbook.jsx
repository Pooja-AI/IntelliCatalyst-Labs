import { useState, useRef, useEffect } from "react";

const RECIPES = [
  {
    id: "naive-rag",
    category: "Foundations",
    title: "Naive RAG",
    difficulty: "Beginner",
    time: "~15 min",
    description: "The baseline pattern: embed, store, retrieve, generate. A great starting point before adding complexity.",
    tags: ["retrieval", "embeddings", "generation"],
    steps: [
      { label: "Chunk Documents", icon: "📄", detail: "Split documents into fixed-size or semantic chunks (e.g. 512 tokens with 10% overlap)." },
      { label: "Embed Chunks", icon: "🔢", detail: "Use a dense embedding model (e.g. text-embedding-3-small) to vectorize each chunk." },
      { label: "Store in Vector DB", icon: "🗄️", detail: "Upsert (id, vector, metadata) into a vector store like Pinecone, Weaviate, or pgvector." },
      { label: "Embed Query", icon: "🔍", detail: "At query time, embed the user question using the same model." },
      { label: "Top-K Retrieval", icon: "🎯", detail: "Cosine similarity search for top-K (K=5) most relevant chunks." },
      { label: "Prompt + Generate", icon: "✨", detail: "Inject retrieved chunks into prompt as context, then call the LLM to generate an answer." },
    ],
    code: `import anthropic from "@anthropic-ai/sdk";
import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI();
const pinecone = new Pinecone();
const claude = new anthropic.Anthropic();
const index = pinecone.index("my-rag-index");

// Step 1: Ingest documents
async function ingest(docs) {
  for (const doc of docs) {
    const chunks = chunkText(doc.text, 512);
    for (const chunk of chunks) {
      const { data } = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: chunk,
      });
      await index.upsert([{
        id: crypto.randomUUID(),
        values: data[0].embedding,
        metadata: { text: chunk, source: doc.source },
      }]);
    }
  }
}

// Step 2: Query
async function query(question) {
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });

  const results = await index.query({
    vector: data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  const context = results.matches
    .map((m) => m.metadata.text)
    .join("\\n\\n---\\n\\n");

  const response = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Answer using the context below.\\n\\nContext:\\n\${context}\\n\\nQuestion: \${question}\`,
    }],
  });

  return response.content[0].text;
}`,
  },
  {
    id: "hybrid-search",
    category: "Retrieval",
    title: "Hybrid Search",
    difficulty: "Intermediate",
    time: "~30 min",
    description: "Combine dense semantic vectors with sparse BM25 keyword search, then re-rank. Handles both conceptual and exact-match queries.",
    tags: ["BM25", "reranking", "fusion"],
    steps: [
      { label: "Dense Embed", icon: "🔢", detail: "Embed all chunks with a dense model for semantic search." },
      { label: "Build BM25 Index", icon: "🔑", detail: "Build a sparse BM25 index over the same corpus for keyword matching." },
      { label: "Dual Retrieval", icon: "⚡", detail: "Run both dense (vector) and sparse (BM25) retrieval in parallel." },
      { label: "Reciprocal Rank Fusion", icon: "🔀", detail: "Merge result lists using RRF: score = Σ 1/(k + rank_i) where k=60." },
      { label: "Cross-Encoder Rerank", icon: "🏆", detail: "Pass top-20 fused results through a cross-encoder to get a final top-5." },
      { label: "Generate", icon: "✨", detail: "Use reranked top-5 as context for the LLM." },
    ],
    code: `import { BM25 } from "bm25-ts";
import { CrossEncoder } from "cross-encoders";

// Reciprocal Rank Fusion
function rrf(denseRanks, sparseRanks, k = 60) {
  const scores = new Map();
  const merge = (ranks) => {
    ranks.forEach((id, i) => {
      scores.set(id, (scores.get(id) || 0) + 1 / (k + i + 1));
    });
  };
  merge(denseRanks);
  merge(sparseRanks);
  return [...scores.entries()].sort((a, b) => b[1] - a[1]);
}

async function hybridQuery(question, corpus, vectorIndex) {
  // Dense retrieval
  const qEmbed = await embed(question);
  const denseHits = await vectorIndex.query({ vector: qEmbed, topK: 20 });

  // Sparse BM25 retrieval
  const bm25 = new BM25(corpus.map((c) => c.text));
  const sparseHits = bm25.search(question, 20);

  // Fuse
  const fused = rrf(
    denseHits.matches.map((m) => m.id),
    sparseHits.map((h) => h.id)
  ).slice(0, 20);

  // Rerank
  const reranker = new CrossEncoder("cross-encoder/ms-marco-MiniLM-L-6-v2");
  const pairs = fused.map(([id]) => [question, corpus.find((c) => c.id === id).text]);
  const rerankScores = await reranker.predict(pairs);
  const top5 = fused
    .map(([id], i) => ({ id, score: rerankScores[i] }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return generateAnswer(question, top5);
}`,
  },
  {
    id: "hyde",
    category: "Query",
    title: "HyDE",
    difficulty: "Intermediate",
    time: "~20 min",
    description: "Hypothetical Document Embedding: generate a fake answer first, embed it, then retrieve. Closes the query-document gap.",
    tags: ["query expansion", "embeddings", "hallucination"],
    steps: [
      { label: "Receive Query", icon: "💬", detail: "Receive the original user question." },
      { label: "Generate Hypothesis", icon: "🤔", detail: "Ask the LLM to write a hypothetical document that would answer the question." },
      { label: "Embed Hypothesis", icon: "🔢", detail: "Embed the hypothetical document (not the original query)." },
      { label: "Retrieve by Hypothesis", icon: "🎯", detail: "Use the hypothesis vector for retrieval — it's semantically richer than a short query." },
      { label: "Generate Final Answer", icon: "✨", detail: "Feed real retrieved chunks into the LLM to produce the grounded final answer." },
    ],
    code: `async function hydeQuery(question, vectorIndex) {
  // Step 1: Generate a hypothetical document
  const hypothesisResponse = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 512,
    messages: [{
      role: "user",
      content: \`Write a detailed paragraph that directly answers: "\${question}".
Be specific and factual. This is a hypothetical document for search.\`,
    }],
  });
  const hypothesis = hypothesisResponse.content[0].text;

  // Step 2: Embed the hypothesis
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: hypothesis,
  });

  // Step 3: Retrieve using hypothesis embedding
  const results = await vectorIndex.query({
    vector: data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  const context = results.matches
    .map((m) => m.metadata.text)
    .join("\\n---\\n");

  // Step 4: Generate grounded answer
  const finalResponse = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Context:\\n\${context}\\n\\nQuestion: \${question}\\nProvide a grounded answer using only the context.\`,
    }],
  });

  return finalResponse.content[0].text;
}`,
  },
  {
    id: "corrective-rag",
    category: "Advanced",
    title: "Corrective RAG (CRAG)",
    difficulty: "Advanced",
    time: "~45 min",
    description: "Evaluate retrieved documents for relevance before generation. Fall back to web search if local retrieval is insufficient.",
    tags: ["self-correction", "web search", "evaluation"],
    steps: [
      { label: "Initial Retrieval", icon: "🔍", detail: "Retrieve top-K documents from local vector store." },
      { label: "Relevance Grading", icon: "⚖️", detail: "Use LLM-as-judge to score each chunk: relevant / ambiguous / irrelevant." },
      { label: "Branch Decision", icon: "🔀", detail: "If all chunks score < threshold → trigger web search. Mixed → use both." },
      { label: "Web Search Fallback", icon: "🌐", detail: "Run a targeted web search query derived from the original question." },
      { label: "Knowledge Refinement", icon: "✂️", detail: "Strip irrelevant sentences from ambiguous chunks, keep only relevant sub-passages." },
      { label: "Generate", icon: "✨", detail: "Generate final answer from curated, high-signal context." },
    ],
    code: `async function gradeDocs(question, docs) {
  const grades = await Promise.all(docs.map(async (doc) => {
    const res = await claude.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 50,
      messages: [{
        role: "user",
        content: \`Is this document relevant to answering: "\${question}"?
Document: \${doc.text}
Reply with exactly one word: relevant, ambiguous, or irrelevant.\`,
      }],
    });
    return { doc, grade: res.content[0].text.trim().toLowerCase() };
  }));
  return grades;
}

async function correctiveRag(question, vectorIndex, webSearch) {
  const results = await vectorIndex.query({ vector: await embed(question), topK: 5, includeMetadata: true });
  const docs = results.matches.map((m) => ({ id: m.id, text: m.metadata.text }));

  const graded = await gradeDocs(question, docs);
  const relevant = graded.filter((g) => g.grade === "relevant").map((g) => g.doc);
  const ambiguous = graded.filter((g) => g.grade === "ambiguous").map((g) => g.doc);
  const allIrrelevant = relevant.length === 0;

  let context = relevant.map((d) => d.text);

  // Web search fallback
  if (allIrrelevant || ambiguous.length > 0) {
    const webResults = await webSearch(question);
    context = [...context, ...webResults];
  }

  return generateAnswer(question, context.join("\\n---\\n"));
}`,
  },
  {
    id: "rag-fusion",
    category: "Query",
    title: "RAG Fusion",
    difficulty: "Intermediate",
    time: "~25 min",
    description: "Generate multiple query variations with an LLM, retrieve for each, then fuse results. Handles ambiguous or under-specified queries.",
    tags: ["query expansion", "multi-query", "fusion"],
    steps: [
      { label: "Generate Sub-Queries", icon: "🧠", detail: "Ask the LLM to produce 4 semantically different rephrasings of the original query." },
      { label: "Parallel Retrieval", icon: "⚡", detail: "Run vector search for each sub-query simultaneously via Promise.all." },
      { label: "RRF Fusion", icon: "🔀", detail: "Merge all per-query result lists using Reciprocal Rank Fusion." },
      { label: "Deduplicate", icon: "🧹", detail: "Remove duplicate chunks that appeared in multiple per-query results." },
      { label: "Generate", icon: "✨", detail: "Use the diverse, fused context to answer the original question." },
    ],
    code: `async function generateSubQueries(question) {
  const res = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 300,
    messages: [{
      role: "user",
      content: \`Generate 4 different search queries to retrieve relevant documents for:
"\${question}"
Return only a JSON array of strings. No explanation.\`,
    }],
  });
  return JSON.parse(res.content[0].text);
}

async function ragFusion(question, vectorIndex) {
  const subQueries = await generateSubQueries(question);
  const allQueries = [question, ...subQueries];

  // Parallel retrieval for each query variant
  const allResults = await Promise.all(
    allQueries.map(async (q) => {
      const emb = await embed(q);
      const hits = await vectorIndex.query({ vector: emb, topK: 10, includeMetadata: true });
      return hits.matches.map((m) => m.id);
    })
  );

  // RRF fusion across all query results
  const scores = new Map();
  allResults.forEach((ranks) => {
    ranks.forEach((id, i) => {
      scores.set(id, (scores.get(id) || 0) + 1 / (60 + i + 1));
    });
  });

  const topIds = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => id);

  const context = await fetchByIds(topIds, vectorIndex);
  return generateAnswer(question, context);
}`,
  },
  {
    id: "self-rag",
    category: "Advanced",
    title: "Self-RAG",
    difficulty: "Advanced",
    time: "~60 min",
    description: "The model decides whether to retrieve at all, evaluates retrieved passages, and critiques its own output using special reflection tokens.",
    tags: ["agentic", "self-reflection", "adaptive"],
    steps: [
      { label: "Retrieve? Token", icon: "❓", detail: "LLM generates a [Retrieve] vs [No Retrieve] token — retrieval only happens when needed." },
      { label: "Conditional Retrieval", icon: "🔍", detail: "If [Retrieve]: embed query and fetch top-K passages." },
      { label: "ISREL Grading", icon: "✅", detail: "For each passage, generate [Relevant] / [Irrelevant] to filter noise." },
      { label: "Generate with ISSUP", icon: "📝", detail: "Generate answer segment-by-segment; each segment gets [Fully Supported] / [Partial] / [No Support]." },
      { label: "ISUSE Scoring", icon: "⭐", detail: "Rate overall answer utility on a 1–5 scale; re-generate low-scoring segments." },
    ],
    code: `// Self-RAG uses special tokens as structured outputs
const TOKENS = {
  RETRIEVE: "[Retrieve]",
  NO_RETRIEVE: "[No Retrieve]",
  RELEVANT: "[Relevant]",
  IRRELEVANT: "[Irrelevant]",
  FULLY_SUPPORTED: "[Fully Supported]",
  PARTIAL: "[Partially Supported]",
  NO_SUPPORT: "[No Support]",
};

async function selfRag(question, vectorIndex) {
  // Step 1: Should we retrieve?
  const retrieveDecision = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 20,
    messages: [{
      role: "user",
      content: \`Do you need to retrieve documents to answer: "\${question}"?
Reply with exactly: [Retrieve] or [No Retrieve]\`,
    }],
  });

  if (retrieveDecision.content[0].text.includes(TOKENS.NO_RETRIEVE)) {
    return generateAnswer(question, "");
  }

  // Step 2: Retrieve and grade relevance
  const docs = await retrieve(question, vectorIndex);
  const gradedDocs = await Promise.all(docs.map(async (doc) => {
    const grade = await claude.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 20,
      messages: [{
        role: "user",
        content: \`Is this relevant to "\${question}"? Doc: \${doc.text}
Reply: [Relevant] or [Irrelevant]\`,
      }],
    });
    return { ...doc, relevant: grade.content[0].text.includes(TOKENS.RELEVANT) };
  }));

  const relevant = gradedDocs.filter((d) => d.relevant);

  // Step 3: Generate with support scoring
  const generations = await Promise.all(relevant.map(async (doc) => {
    const gen = await claude.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 256,
      messages: [{
        role: "user",
        content: \`Context: \${doc.text}\\nQuestion: \${question}\\nAnswer, then rate support as [Fully Supported], [Partially Supported], or [No Support].\`,
      }],
    });
    const text = gen.content[0].text;
    const score = text.includes(TOKENS.FULLY_SUPPORTED) ? 3
      : text.includes(TOKENS.PARTIAL) ? 2 : 1;
    return { text, score };
  }));

  return generations.sort((a, b) => b.score - a.score)[0].text;
}`,
  },
];

const CATEGORIES = ["All", "Foundations", "Retrieval", "Query", "Advanced"];
const DIFFICULTIES = { Beginner: "#0F6E56", Intermediate: "#185FA5", Advanced: "#993C1D" };
const DIFFICULTY_BG = { Beginner: "#E1F5EE", Intermediate: "#E6F1FB", Advanced: "#FAECE7" };

function StepFlow({ steps }) {
  const [active, setActive] = useState(null);
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              onClick={() => setActive(active === i ? null : i)}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "6px 12px",
                borderRadius: 20, border: active === i ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
                background: active === i ? "#E6F1FB" : "var(--color-background-primary)",
                color: active === i ? "#185FA5" : "var(--color-text-primary)",
                cursor: "pointer", fontSize: 13, fontWeight: active === i ? 500 : 400,
                transition: "all 0.15s",
              }}
            >
              <span>{step.icon}</span>
              <span>{step.label}</span>
            </button>
            {i < steps.length - 1 && (
              <span style={{ color: "var(--color-text-tertiary)", fontSize: 12 }}>→</span>
            )}
          </div>
        ))}
      </div>
      {active !== null && (
        <div style={{
          marginTop: 10, padding: "10px 14px", borderRadius: 8,
          background: "var(--color-background-secondary)",
          border: "0.5px solid var(--color-border-tertiary)",
          fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6,
        }}>
          <span style={{ fontWeight: 500, color: "var(--color-text-primary)" }}>{steps[active].label}: </span>
          {steps[active].detail}
        </div>
      )}
    </div>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div style={{ position: "relative", marginTop: 16 }}>
      <button
        onClick={copy}
        style={{
          position: "absolute", top: 8, right: 8, padding: "4px 10px",
          borderRadius: 6, border: "0.5px solid var(--color-border-secondary)",
          background: "var(--color-background-secondary)", cursor: "pointer",
          fontSize: 12, color: "var(--color-text-secondary)", zIndex: 1,
        }}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre style={{
        margin: 0, padding: "14px 16px", borderRadius: 10, overflowX: "auto",
        background: "var(--color-background-secondary)",
        border: "0.5px solid var(--color-border-tertiary)",
        fontSize: 12, lineHeight: 1.65, fontFamily: "var(--font-mono)",
        color: "var(--color-text-primary)", whiteSpace: "pre",
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function RecipeCard({ recipe, onSelect, selected }) {
  return (
    <div
      onClick={() => onSelect(recipe)}
      style={{
        padding: "16px 18px", borderRadius: 12, cursor: "pointer",
        border: selected ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
        background: selected ? "#061320" : "var(--color-background-primary)",
        transition: "all 0.15s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: "var(--color-text-secondary)", fontWeight: 400 }}>
          {recipe.category}
        </span>
        <span style={{
          fontSize: 11, padding: "2px 8px", borderRadius: 20, fontWeight: 500,
          background: DIFFICULTY_BG[recipe.difficulty], color: DIFFICULTIES[recipe.difficulty],
        }}>
          {recipe.difficulty}
        </span>
      </div>
      <div style={{ fontWeight: 500, fontSize: 15, marginBottom: 4, color: "var(--color-text-primary)" }}>
        {recipe.title}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
        {recipe.description}
      </div>
      <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {recipe.tags.map((t) => (
          <span key={t} style={{
            fontSize: 11, padding: "2px 8px", borderRadius: 20,
            background: "var(--color-background-tertiary)",
            color: "var(--color-text-secondary)", border: "0.5px solid var(--color-border-tertiary)",
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function RecipeDetail({ recipe }) {
  const [tab, setTab] = useState("steps");
  return (
    <div style={{ padding: "24px", borderRadius: 14, background: "var(--color-background-primary)", border: "0.5px solid var(--color-border-tertiary)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
        <div>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>{recipe.category}</span>
          <h2 style={{ margin: "4px 0 6px", fontSize: 22, fontWeight: 500 }}>{recipe.title}</h2>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", paddingTop: 4 }}>
          <span style={{
            fontSize: 12, padding: "3px 10px", borderRadius: 20, fontWeight: 500,
            background: DIFFICULTY_BG[recipe.difficulty], color: DIFFICULTIES[recipe.difficulty],
          }}>{recipe.difficulty}</span>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary)" }}>⏱ {recipe.time}</span>
        </div>
      </div>
      <p style={{ margin: "0 0 20px", color: "var(--color-text-secondary)", fontSize: 14, lineHeight: 1.6 }}>
        {recipe.description}
      </p>

      <div style={{ display: "flex", gap: 4, marginBottom: 18, borderBottom: "0.5px solid var(--color-border-tertiary)", paddingBottom: 0 }}>
        {["steps", "code"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "8px 16px", border: "none", background: "none", cursor: "pointer",
              fontSize: 14, fontWeight: tab === t ? 500 : 400,
              color: tab === t ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              borderBottom: tab === t ? "2px solid #185FA5" : "2px solid transparent",
              marginBottom: -1, transition: "all 0.12s",
            }}
          >
            {t === "steps" ? "Pipeline Steps" : "Code"}
          </button>
        ))}
      </div>

      {tab === "steps" && <StepFlow steps={recipe.steps} />}
      {tab === "code" && <CodeBlock code={recipe.code} />}
    </div>
  );
}

function Sidebar({ recipes, selected, onSelect, category, setCategory, search, setSearch }) {
  const filtered = recipes.filter((r) => {
    const matchCat = category === "All" || r.category === category;
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 0 }}>
      <div style={{ padding: "0 0 16px" }}>
        <input
          type="text"
          placeholder="Search recipes…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box", padding: "8px 12px",
            borderRadius: 8, border: "0.5px solid var(--color-border-secondary)",
            background: "var(--color-background-secondary)",
            color: "var(--color-text-primary)", fontSize: 13,
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "4px 12px", borderRadius: 20, fontSize: 12, cursor: "pointer",
              border: category === c ? "1.5px solid #185FA5" : "0.5px solid var(--color-border-tertiary)",
              background: category === c ? "#E6F1FB" : "var(--color-background-primary)",
              color: category === c ? "#185FA5" : "var(--color-text-secondary)",
              fontWeight: category === c ? 500 : 400,
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, overflowY: "auto", flex: 1 }}>
        {filtered.length === 0 ? (
          <div style={{ color: "var(--color-text-tertiary)", fontSize: 13, padding: "12px 0" }}>No recipes found.</div>
        ) : filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} onSelect={onSelect} selected={selected?.id === r.id} />
        ))}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div style={{
      padding: "20px 32px 16px",
      borderBottom: "0.5px solid var(--color-border-tertiary)",
      display: "flex", alignItems: "center", gap: 16,
    }}>
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: "#E6F1FB", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20,
      }}>
        📚
      </div>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: "-0.3px" }}>RAG Cookbook</h1>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>
          End-to-end retrieval-augmented generation recipes
        </p>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {[
          { label: "Recipes", value: RECIPES.length },
          { label: "Patterns", value: CATEGORIES.length - 1 },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 500 }}>{value}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary)" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(RECIPES[0]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      height: "100vh", fontFamily: "var(--font-sans, system-ui, sans-serif)",
      background: "var(--color-background-tertiary, #474f80)",
      color: "var(--color-text-primary)",
    }}>
      <Header />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div style={{
          width: 320, minWidth: 260, padding: "20px 20px",
          borderRight: "0.5px solid var(--color-border-tertiary)",
          background: "var(--color-background-primary)",
          overflowY: "auto",
        }}>
          <Sidebar
            recipes={RECIPES}
            selected={selected}
            onSelect={setSelected}
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>
          {selected ? (
            <RecipeDetail recipe={selected} />
          ) : (
            <div style={{ color: "var(--color-text-tertiary)", padding: 40, textAlign: "center" }}>
              Select a recipe to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
