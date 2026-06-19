import { useState, useRef, useEffect } from "react";
import Ragfoundation from "../assets/docs/rag-foundations.md?raw";

import ReactMarkdown from "react-markdown";


const RECIPES = [

  {
  id: "query-basic",
  category: "Query",
  title: "Query Processing Pipeline",
  difficulty: "Beginner",
  time: "~20 min",

  description:
    "Core pipeline that transforms raw user queries into retrieval-ready structured queries.",

  tags: ["query", "pipeline", "nlp"],

  steps: [
    { label: "Input Query", icon: "⌨️", detail: "Raw user query is received." },
    { label: "Normalization", icon: "🧹", detail: "Clean and standardize text." },
    { label: "Intent Detection", icon: "🧠", detail: "Understand user intent." },
    { label: "Transformation", icon: "🔄", detail: "Convert into structured form." },
    { label: "Routing", icon: "🚦", detail: "Send to correct retriever." },
    { label: "Output Query", icon: "📤", detail: "Final optimized query." }
  ],

  code: `
def process_query(query):
    query = normalize(query)
    intent = detect_intent(query)
    query = transform(query, intent)
    return route(query, intent)
`
},
{
  id: "multi-query-retrieval",
  category: "Query",
  title: "Multi-Query Retrieval",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Improves retrieval performance by generating multiple query variations and merging results from each.",

  tags: ["query", "retrieval", "expansion", "rag"],

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User provides the original query."
    },
    {
      label: "Query Expansion",
      icon: "🔀",
      detail: "Generate multiple paraphrased queries."
    },
    {
      label: "Parallel Retrieval",
      icon: "🔍",
      detail: "Run search for each query variant."
    },
    {
      label: "Merge Results",
      icon: "🧩",
      detail: "Combine retrieved documents."
    },
    {
      label: "Deduplication",
      icon: "🧹",
      detail: "Remove duplicate documents."
    }
  ],

  code: `
def multi_query_retrieval(query):
    queries = expand_query(query)

    results = []
    for q in queries:
        results.extend(retrieve(q))

    return list(set(results))
`
},
{
  id: "self-query-retrieval",
  category: "Query",
  title: "Self-Query Retrieval",
  difficulty: "Advanced",
  time: "~30 min",

  description:
    "Automatically converts natural language queries into structured queries with metadata filters for precise retrieval.",

  tags: ["query", "metadata", "retrieval", "llm"],

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User provides a natural language query."
    },
    {
      label: "Intent + Metadata Extraction",
      icon: "🏷️",
      detail: "Extract filters like date, category, or attributes."
    },
    {
      label: "Structured Query Generation",
      icon: "🧾",
      detail: "Convert query into structured format."
    },
    {
      label: "Filtered Retrieval",
      icon: "🔍",
      detail: "Retrieve documents using filters + embeddings."
    }
  ],

  code: `
def self_query_retrieval(query):
    structured = llm_to_structured_query(query)

    results = vector_db.search(
        text=structured["text"],
        filter=structured["metadata"]
    )

    return results
`
},
{
  id: "step-back-prompting",
  category: "Query",
  title: "Step-Back Prompting",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Improves reasoning by converting a specific query into a more general abstraction before retrieval, then refining the answer back to the original context.",

  tags: ["query", "reasoning", "abstraction", "retrieval"],

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User provides a specific question."
    },
    {
      label: "Step Back Transformation",
      icon: "⬅️",
      detail: "Convert query into a more general concept."
    },
    {
      label: "General Retrieval",
      icon: "📚",
      detail: "Retrieve broad foundational knowledge."
    },
    {
      label: "Context Mapping",
      icon: "🔗",
      detail: "Map general knowledge back to specific case."
    },
    {
      label: "Final Answer",
      icon: "✨",
      detail: "Generate refined response."
    }
  ],

  code: `
def step_back_prompting(query):
    general_query = llm.step_back(query)

    docs = retrieve(general_query)

    answer = llm.refine(query=query, context=docs)

    return answer
`
},
{
  id: "sub-question-generation",
  category: "Query",
  title: "Sub-Question Generation",
  difficulty: "Advanced",
  time: "~30 min",

  description:
    "Breaks complex queries into smaller sub-questions, retrieves answers individually, and combines them into a final response.",

  tags: ["query", "decomposition", "reasoning", "retrieval"],

  steps: [
    {
      label: "Input Complex Query",
      icon: "🧠",
      detail: "User provides a multi-part or complex question."
    },
    {
      label: "Decomposition",
      icon: "✂️",
      detail: "Split query into smaller sub-questions."
    },
    {
      label: "Independent Retrieval",
      icon: "🔍",
      detail: "Retrieve information for each sub-question."
    },
    {
      label: "Answer Aggregation",
      icon: "🧩",
      detail: "Combine all sub-answers into one response."
    },
    {
      label: "Final Response",
      icon: "✨",
      detail: "Generate coherent final output."
    }
  ],

  code: `
def sub_question_generation(query):
    sub_questions = decompose(query)

    answers = []
    for q in sub_questions:
        answers.append(retrieve(q))

    final_answer = aggregate(answers)

    return final_answer
`
},
{
  id: "cot-retrieval",
  category: "Query",
  title: "Chain-of-Thought Retrieval",
  difficulty: "Advanced",
  time: "~30 min",

  description:
    "Uses step-by-step reasoning to guide retrieval at each intermediate stage, improving multi-step question answering accuracy.",

  tags: ["query", "reasoning", "cot", "retrieval"],

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User provides a complex reasoning question."
    },
    {
      label: "Reasoning Breakdown",
      icon: "🧠",
      detail: "Decompose problem into logical steps."
    },
    {
      label: "Step-wise Retrieval",
      icon: "🔍",
      detail: "Retrieve evidence for each reasoning step."
    },
    {
      label: "Intermediate Synthesis",
      icon: "🧩",
      detail: "Combine step-level findings."
    },
    {
      label: "Final Answer",
      icon: "✨",
      detail: "Produce final grounded response."
    }
  ],

  code: `
def cot_retrieval(query):
    steps = llm.reason_steps(query)

    docs = []
    for step in steps:
        docs.extend(retrieve(step))

    return llm.generate_answer(query, docs)
`
},
{
  id: "follow-up-query-generation",
  category: "Query",
  title: "Follow-Up Query Generation",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Generates additional follow-up queries based on missing information in conversation to improve completeness of retrieval.",

  tags: ["query", "conversation", "retrieval", "llm"],

  steps: [
    {
      label: "Conversation Input",
      icon: "💬",
      detail: "User query with chat history context."
    },
    {
      label: "Gap Detection",
      icon: "🕳️",
      detail: "Identify missing or unclear information."
    },
    {
      label: "Follow-up Query Generation",
      icon: "🔄",
      detail: "Generate additional clarifying queries."
    },
    {
      label: "Retrieval Execution",
      icon: "🔍",
      detail: "Run retrieval for generated queries."
    },
    {
      label: "Answer Refinement",
      icon: "✨",
      detail: "Combine results into final response."
    }
  ],

  code: `
def follow_up_query_generation(query, history):
    followups = llm.generate_followups(query, history)

    results = []
    for q in followups:
        results.append(retrieve(q))

    return llm.summarize(results)
`
},
{
  id: "conversational-query-reformulation",
  category: "Query",
  title: "Conversational Query Reformulation",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Rewrites context-dependent conversational queries into standalone, retrieval-ready queries using chat history.",

  tags: ["query", "conversation", "reformulation", "retrieval"],

  steps: [
    {
      label: "Input Conversation",
      icon: "💬",
      detail: "User query with chat history."
    },
    {
      label: "Context Understanding",
      icon: "🧠",
      detail: "Analyze previous conversation turns."
    },
    {
      label: "Query Rewrite",
      icon: "✍️",
      detail: "Convert ambiguous query into standalone form."
    },
    {
      label: "Retrieval Execution",
      icon: "🔍",
      detail: "Run search with reformulated query."
    },
    {
      label: "Final Answer",
      icon: "✨",
      detail: "Generate response using retrieved context."
    }
  ],

  code: `
def reformulate_query(query, history):
    standalone_query = llm.rewrite(query, history)

    results = retrieve(standalone_query)

    return results
`
},
{
  id: "context-aware-querying",
  category: "Query",
  title: "Context-Aware Querying",
  difficulty: "Advanced",
  time: "~30 min",

  description:
    "Enhances queries using user context such as role, domain, preferences, and prior interactions to improve retrieval relevance.",

  tags: ["query", "context", "personalization", "retrieval"],

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User provides a query."
    },
    {
      label: "Context Collection",
      icon: "👤",
      detail: "Gather user profile, role, and history."
    },
    {
      label: "Query Enrichment",
      icon: "🔧",
      detail: "Inject contextual signals into query."
    },
    {
      label: "Contextual Retrieval",
      icon: "🔍",
      detail: "Retrieve results based on enriched query."
    },
    {
      label: "Ranking & Filtering",
      icon: "📊",
      detail: "Prioritize results based on relevance to context."
    }
  ],

  code: `
def context_aware_querying(query, user_context):
    enriched_query = inject_context(query, user_context)

    results = retrieve(enriched_query)

    ranked = rank_by_context(results, user_context)

    return ranked
`
},
{
  id: "metadata-query-generation",
  category: "Query",
  title: "Metadata Query Generation",
  difficulty: "Advanced",
  time: "~30 min",

  description:
    "Transforms natural language queries into structured metadata filters combined with text search for precise retrieval.",

  tags: ["query", "metadata", "filters", "retrieval"],

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User provides a natural language query."
    },
    {
      label: "Metadata Extraction",
      icon: "🏷️",
      detail: "Identify filters like date, category, author, or domain."
    },
    {
      label: "Structured Query Build",
      icon: "🧾",
      detail: "Convert into hybrid text + metadata query."
    },
    {
      label: "Filtered Retrieval",
      icon: "🔍",
      detail: "Retrieve documents using both filters and embeddings."
    },
    {
      label: "Result Ranking",
      icon: "📊",
      detail: "Rank results based on relevance and constraints."
    }
  ],

  code: `
def metadata_query_generation(query):
    metadata = extract_metadata(query)

    results = db.search(
        text=query,
        filter=metadata
    )

    return results
`
},
{
  id: "agent-based-query-planning",
  category: "Query",
  title: "Agent-Based Query Planning",
  difficulty: "Advanced",
  time: "~40 min",

  description:
    "Uses an autonomous LLM agent to plan, decompose, and execute multi-step query strategies using tools and iterative reasoning.",

  tags: ["query", "agent", "planning", "tool-use", "retrieval"],

  steps: [
    {
      label: "Input Query",
      icon: "⌨️",
      detail: "User submits a complex query."
    },
    {
      label: "Task Understanding",
      icon: "🧠",
      detail: "Agent interprets intent and requirements."
    },
    {
      label: "Plan Generation",
      icon: "📋",
      detail: "Break query into actionable steps."
    },
    {
      label: "Tool Execution",
      icon: "🛠️",
      detail: "Run retrieval, search, or external tools."
    },
    {
      label: "Iteration Loop",
      icon: "🔄",
      detail: "Refine plan based on intermediate results."
    },
    {
      label: "Final Answer",
      icon: "✨",
      detail: "Synthesize final response from all outputs."
    }
  ],

  code: `
def agent_based_query_planning(query):
    plan = agent.create_plan(query)

    results = []

    for step in plan:
        result = execute_tool(step)
        results.append(result)

        plan = agent.refine_plan(plan, result)

    return agent.summarize(results)
`
},
{
  id: "cross-encoder-reranking",
  category: "Reranking",
  title: "Cross Encoder Reranking",
  difficulty: "Advanced",
  time: "~25 min",

  description:
    "Re-ranks retrieved documents using a cross-encoder model that jointly encodes query and document for higher relevance accuracy.",

  tags: ["ranking", "reranking", "cross-encoder", "retrieval"],

  steps: [
    { label: "Initial Retrieval", icon: "🔍", detail: "Fetch top-K candidate documents." },
    { label: "Pair Encoding", icon: "🔗", detail: "Encode query-document pairs together." },
    { label: "Score Calculation", icon: "📊", detail: "Compute relevance scores." },
    { label: "Re-ranking", icon: "🔝", detail: "Sort based on scores." }
  ],

  code: `
def cross_encoder_rerank(query, docs):
    pairs = [(query, doc) for doc in docs]

    scores = cross_encoder.predict(pairs)

    ranked_docs = sort_by_score(docs, scores)

    return ranked_docs
`
},
{
  id: "cohere-reranker",
  category: "Reranking",
  title: "Cohere Reranker",
  difficulty: "Advanced",
  time: "~20 min",

  description:
    "Uses Cohere’s rerank model to improve retrieval relevance by scoring query-document pairs.",

  tags: ["reranking", "cohere", "ranking", "llm"],

  steps: [
    { label: "Retrieve Candidates", icon: "🔍", detail: "Get top-K documents." },
    { label: "Send to Cohere", icon: "🌐", detail: "Pass query + docs to reranker API." },
    { label: "Score Results", icon: "📊", detail: "Receive relevance scores." },
    { label: "Sort Output", icon: "🔝", detail: "Rank documents." }
  ],

  code: `
import cohere

co = cohere.Client("API_KEY")

def cohere_rerank(query, docs):
    results = co.rerank(
        model="rerank-english-v3.0",
        query=query,
        documents=docs
    )

    return sorted(results, key=lambda x: x.relevance_score, reverse=True)
`
},

{
  id: "bge-reranker",
  category: "Reranking",
  title: "BGE Reranker",
  difficulty: "Advanced",
  time: "~20 min",

  description:
    "Uses BAAI's BGE reranker model to improve semantic ranking of retrieved documents.",

  tags: ["bge", "reranking", "embedding", "retrieval"],

  steps: [
    { label: "Retrieve Docs", icon: "🔍", detail: "Initial candidate retrieval." },
    { label: "Encode Pairs", icon: "🔗", detail: "Query-document encoding." },
    { label: "Score with BGE", icon: "🧠", detail: "Compute semantic relevance." },
    { label: "Re-rank", icon: "🔝", detail: "Sort by score." }
  ],

  code: `
def bge_rerank(query, docs):
    pairs = [(query, doc) for doc in docs]

    scores = bge_model.score(pairs)

    return sort_by_score(docs, scores)
`
},
{
  id: "llm-reranking",
  category: "Reranking",
  title: "LLM Reranking",
  difficulty: "Advanced",
  time: "~30 min",

  description:
    "Uses a large language model to evaluate and reorder retrieved documents based on semantic understanding.",

  tags: ["llm", "reranking", "ranking", "reasoning"],

  steps: [
    { label: "Retrieve Candidates", icon: "🔍", detail: "Fetch top-K documents." },
    { label: "LLM Evaluation", icon: "🧠", detail: "Model evaluates relevance." },
    { label: "Score Assignment", icon: "📊", detail: "Assign relevance scores." },
    { label: "Final Ranking", icon: "🔝", detail: "Sort results." }
  ],

  code: `
def llm_rerank(query, docs):
    scored_docs = []

    for doc in docs:
        score = llm.evaluate_relevance(query, doc)
        scored_docs.append((doc, score))

    return sorted(scored_docs, key=lambda x: x[1], reverse=True)
`
},

  {
  id: "fixed-chunking",
  category: "Chunking",
  title: "Fixed Chunking",
  difficulty: "Beginner",
  time: "~10 min",
  description:
    "Fixed Chunking divides documents into chunks of a predefined size regardless of semantic boundaries. It is simple, fast, and widely used in basic RAG systems.",

  tags: [
    "chunking",
    "fixed-chunking",
    "document-processing",
    "rag"
  ],

  steps: [
    {
      label: "Load Document",
      icon: "📄",
      detail:
        "Read the source document."
    },
    {
      label: "Define Chunk Size",
      icon: "📏",
      detail:
        "Choose a fixed size such as 500 tokens."
    },
    {
      label: "Split Text",
      icon: "✂️",
      detail:
        "Break the document into equal-sized chunks."
    },
    {
      label: "Add Overlap",
      icon: "🔗",
      detail:
        "Include overlap between chunks to preserve context."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Convert chunks into vector embeddings."
    },
    {
      label: "Store Chunks",
      icon: "🗄️",
      detail:
        "Save embeddings and metadata in a vector database."
    }
  ],

  code: `function fixedChunk(
  text,
  chunkSize = 500,
  overlap = 50
) {

  const chunks = [];

  for (
    let i = 0;
    i < text.length;
    i += chunkSize - overlap
  ) {
    chunks.push(
      text.slice(
        i,
        i + chunkSize
      )
    );
  }

  return chunks;
}

const chunks = fixedChunk(
  document,
  500,
  50
);

console.log(chunks);`
},
  
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
  id: "semantic-rag",
  category: "Foundations",
  title: "Semantic RAG",
  difficulty: "Beginner",
  time: "~20 min",
  description:
    "Retrieves documents based on semantic similarity rather than keyword matching.",

  tags: ["semantic-search", "embeddings", "retrieval"],

  steps: [
    { label: "Embed Documents", icon: "📄", detail: "Generate embeddings for document chunks." },
    { label: "Store Vectors", icon: "🗄️", detail: "Save embeddings in a vector database." },
    { label: "Embed Query", icon: "🔍", detail: "Convert user question into a vector." },
    { label: "Semantic Search", icon: "🧠", detail: "Find semantically similar chunks." },
    { label: "Build Context", icon: "📚", detail: "Combine retrieved chunks." },
    { label: "Generate Answer", icon: "✨", detail: "Generate grounded response." }
  ],

  code: `const docs = await vectorStore.similaritySearch(
  question,
  5
);

const answer =
  await llm.invoke(
    buildPrompt(docs, question)
  );`
},
{
  id: "hybrid-rag",
  category: "Foundations",
  title: "Hybrid RAG",
  difficulty: "Intermediate",
  time: "~25 min",
  description:
    "Combines vector search and keyword search for better retrieval accuracy.",

  tags: ["hybrid", "bm25", "vector-search"],

  steps: [
    { label: "Keyword Search", icon: "🔤", detail: "Perform BM25 search." },
    { label: "Semantic Search", icon: "🧠", detail: "Perform vector search." },
    { label: "Merge Results", icon: "🔗", detail: "Combine retrieved results." },
    { label: "Rerank", icon: "📊", detail: "Sort by relevance." },
    { label: "Build Context", icon: "📚", detail: "Create final prompt context." },
    { label: "Generate", icon: "✨", detail: "Generate answer." }
  ],

  code: `const keywordDocs =
  await bm25.search(question);

const semanticDocs =
  await vectorStore.similaritySearch(
    question,
    10
  );

const results =
  mergeResults(
    keywordDocs,
    semanticDocs
  );`
},
{
  id: "parent-child-rag",
  category: "Foundations",
  title: "Parent-Child RAG",
  difficulty: "Intermediate",
  time: "~30 min",

  description:
    "Retrieves small chunks but returns larger parent context.",

  tags: ["parent-child", "hierarchical"],

  steps: [
    { label: "Create Parents", icon: "📚", detail: "Generate large chunks." },
    { label: "Create Children", icon: "📄", detail: "Split into smaller chunks." },
    { label: "Index Children", icon: "🗄️", detail: "Store child embeddings." },
    { label: "Retrieve Children", icon: "🔍", detail: "Find matching chunks." },
    { label: "Fetch Parents", icon: "📖", detail: "Retrieve larger context." },
    { label: "Generate", icon: "✨", detail: "Generate answer." }
  ],

  code: `const retriever =
  new ParentDocumentRetriever({
    vectorstore,
    docstore,
  });

const docs =
  await retriever.invoke(
    question
  );`
},
{
  id: "multi-hop-rag",
  category: "Foundations",
  title: "Multi-Hop RAG",
  difficulty: "Advanced",
  time: "~35 min",

  description:
    "Retrieves information across multiple retrieval steps and combines evidence.",

  tags: ["multi-hop", "reasoning"],

  steps: [
    { label: "Analyze Query", icon: "🧠", detail: "Understand information needs." },
    { label: "Create Subqueries", icon: "❓", detail: "Break into smaller questions." },
    { label: "Retrieve Evidence", icon: "🔍", detail: "Search each query." },
    { label: "Combine Facts", icon: "🔗", detail: "Merge evidence." },
    { label: "Reason", icon: "📚", detail: "Perform multi-hop reasoning." },
    { label: "Generate", icon: "✨", detail: "Return answer." }
  ],

  code: `const subQueries =
  await planner(question);

const evidence =
  await Promise.all(
    subQueries.map(
      q => retriever.invoke(q)
    )
  );`
},
{
  id: "graph-rag",
  category: "Foundations",
  title: "Graph RAG",
  difficulty: "Advanced",
  time: "~45 min",

  description:
    "Uses knowledge graphs to retrieve entities and relationships.",

  tags: ["graph", "knowledge-graph"],

  steps: [
    { label: "Extract Entities", icon: "🏷️", detail: "Identify entities." },
    { label: "Build Graph", icon: "🕸️", detail: "Create relationships." },
    { label: "Store Graph", icon: "🗄️", detail: "Persist graph data." },
    { label: "Traverse Graph", icon: "🔍", detail: "Find connected knowledge." },
    { label: "Build Context", icon: "📚", detail: "Gather graph evidence." },
    { label: "Generate", icon: "✨", detail: "Answer using graph context." }
  ],

  code: `const entities =
  await extractEntities(
    document
  );

const graph =
  await buildKnowledgeGraph(
    entities
  );`
},
{
  id: "agentic-rag",
  category: "Foundations",
  title: "Agentic RAG",
  difficulty: "Advanced",
  time: "~45 min",

  description:
    "Uses autonomous agents to plan, retrieve, reason, and answer.",

  tags: ["agentic", "agents", "reasoning"],

  steps: [
    { label: "Plan", icon: "🧠", detail: "Create execution strategy." },
    { label: "Retrieve", icon: "🔍", detail: "Search knowledge sources." },
    { label: "Evaluate", icon: "📊", detail: "Assess retrieval quality." },
    { label: "Refine", icon: "🔄", detail: "Retry if needed." },
    { label: "Reason", icon: "📚", detail: "Combine evidence." },
    { label: "Generate", icon: "✨", detail: "Produce final answer." }
  ],

  code: `const result =
  await agent.invoke({
    question
  });`
},
{
  id: "crag",
  category: "Advanced",
  title: "Corrective RAG (CRAG)",
  difficulty: "Advanced",
  time: "~40 min",

  description:
    "Evaluates retrieval quality and corrects poor retrieval results.",

  tags: ["crag", "corrective-rag"],

  steps: [
    { label: "Retrieve", icon: "🔍", detail: "Retrieve documents." },
    { label: "Evaluate", icon: "📊", detail: "Check retrieval quality." },
    { label: "Correct", icon: "🔄", detail: "Perform additional retrieval." },
    { label: "Filter", icon: "🧹", detail: "Remove noisy chunks." },
    { label: "Context Build", icon: "📚", detail: "Create final context." },
    { label: "Generate", icon: "✨", detail: "Generate response." }
  ],

  code: `if(score < threshold){
  docs =
    await webSearch(question);
}`
},
{
  id: "self-rag",
  category: "Advanced",
  title: "Self-RAG",
  difficulty: "Advanced",
  time: "~45 min",

  description:
    "Allows the model to self-reflect on retrieval and generation quality.",

  tags: ["self-rag", "reflection"],

  steps: [
    { label: "Retrieve", icon: "🔍", detail: "Fetch context." },
    { label: "Generate", icon: "✨", detail: "Create answer." },
    { label: "Reflect", icon: "🤔", detail: "Evaluate answer quality." },
    { label: "Retrieve Again", icon: "🔄", detail: "Get more evidence if needed." },
    { label: "Improve", icon: "📈", detail: "Refine response." },
    { label: "Finalize", icon: "✅", detail: "Return answer." }
  ],

  code: `const reflection =
  await llm.invoke(
    evaluateAnswer(answer)
  );`
},
{
  id: "adaptive-rag",
  category: "Advanced",
  title: "Adaptive RAG",
  difficulty: "Advanced",
  time: "~45 min",

  description:
    "Dynamically selects retrieval strategies based on query complexity.",

  tags: ["adaptive", "routing"],

  steps: [
    { label: "Classify Query", icon: "🏷️", detail: "Analyze complexity." },
    { label: "Route Strategy", icon: "🚦", detail: "Select retrieval type." },
    { label: "Retrieve", icon: "🔍", detail: "Perform retrieval." },
    { label: "Evaluate", icon: "📊", detail: "Assess results." },
    { label: "Optimize", icon: "⚙️", detail: "Adjust retrieval." },
    { label: "Generate", icon: "✨", detail: "Answer question." }
  ],

  code: `const route =
  await classifier(question);

if(route === "simple"){
  useNaiveRAG();
}else{
  useMultiHopRAG();
}`
},
{
  id: "multimodal-rag",
  category: "Advanced",
  title: "Multimodal RAG",
  difficulty: "Advanced",
  time: "~50 min",

  description:
    "Retrieves and reasons over text, images, audio, and video.",

  tags: ["multimodal", "vision", "audio"],

  steps: [
    { label: "Ingest Data", icon: "📂", detail: "Load multiple modalities." },
    { label: "Create Embeddings", icon: "🔢", detail: "Generate multimodal vectors." },
    { label: "Store Data", icon: "🗄️", detail: "Index content." },
    { label: "Retrieve", icon: "🔍", detail: "Search across modalities." },
    { label: "Fuse Context", icon: "🔗", detail: "Combine evidence." },
    { label: "Generate", icon: "✨", detail: "Produce answer." }
  ],

  code: `const imageResults =
  await imageRetriever.search(
    query
  );

const textResults =
  await textRetriever.search(
    query
  );`
},
{
  id: "fusion-rag",
  category: "Advanced",
  title: "Fusion RAG",
  difficulty: "Advanced",
  time: "~45 min",

  description:
    "Combines multiple retrieval strategies (dense, sparse, semantic) to improve answer accuracy.",

  tags: ["hybrid", "retrieval", "ranking", "fusion"],

  steps: [
    { label: "Query Input", icon: "🧠", detail: "User submits query." },
    { label: "Multi-Retrieval", icon: "🔍", detail: "Run BM25, vector, and hybrid search." },
    { label: "Score Fusion", icon: "⚖️", detail: "Combine results using weighted ranking." },
    { label: "Deduplication", icon: "🧹", detail: "Remove redundant documents." },
    { label: "Context Build", icon: "🔗", detail: "Prepare final context window." },
    { label: "Generate Answer", icon: "✨", detail: "LLM produces final response." }
  ],

  code: `
const denseResults = await vectorSearch(query);
const sparseResults = await keywordSearch(query);

const fused = fuseResults(denseResults, sparseResults, {
  strategy: "weighted-rerank"
});
`
},
{
  id: "enterprise-rag",
  category: "Production",
  title: "Enterprise RAG",
  difficulty: "Advanced",
  time: "~60 min",

  description:
    "Scalable RAG system designed for enterprise-grade security, compliance, and multi-source knowledge ingestion.",

  tags: ["enterprise", "security", "scalable", "governance", "llmops"],

  steps: [
    { label: "Data Sources", icon: "🏢", detail: "Connect databases, APIs, documents." },
    { label: "Ingestion Pipeline", icon: "📥", detail: "ETL + chunking + cleaning." },
    { label: "Indexing Layer", icon: "🗄️", detail: "Store embeddings in vector DB." },
    { label: "Access Control", icon: "🔐", detail: "Role-based data filtering." },
    { label: "Retrieval Service", icon: "🔍", detail: "Secure context retrieval." },
    { label: "LLM Orchestration", icon: "🤖", detail: "Prompt + governance layer." },
    { label: "Monitoring", icon: "📊", detail: "Logging, tracing, evaluation." }
  ],

  code: `
const userContext = getUserRole(user);

const docs = await secureRetrieval(query, {
  filters: { accessLevel: userContext.role }
});

const response = await llm.generate({
  context: docs,
  policy: "enterprise-safe"
});
`
},
{
  id: "federated-rag",
  category: "Advanced",
  title: "Federated RAG",
  difficulty: "Advanced",
  time: "~55 min",

  description:
    "Retrieves knowledge from multiple distributed nodes without centralizing sensitive data.",

  tags: ["federated", "privacy", "distributed", "edge-ai"],

  steps: [
    { label: "Local Nodes", icon: "📱", detail: "Each node holds private data." },
    { label: "Local Retrieval", icon: "🔍", detail: "Search happens at edge." },
    { label: "Embedding Sync", icon: "🔄", detail: "Share only embeddings, not raw data." },
    { label: "Aggregation", icon: "🧩", detail: "Combine partial results securely." },
    { label: "Context Fusion", icon: "🔗", detail: "Merge distributed knowledge." },
    { label: "Generate Response", icon: "✨", detail: "Final LLM output." }
  ],

  code: `
const localResultsA = await nodeA.search(query);
const localResultsB = await nodeB.search(query);

const merged = secureAggregate([
  localResultsA,
  localResultsB
]);

const answer = await llm.generate({ context: merged });
`
},


{
  id: "recursive-chunking",
  category: "Chunking",
  title: "Recursive Chunking",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "Recursively splits documents using separators such as paragraphs, sentences, and words while preserving document structure.",

  tags: [
    "chunking",
    "recursive",
    "langchain",
    "rag"
  ],

  steps: [
    {
      label: "Load Document",
      icon: "📄",
      detail:
        "Read the source document."
    },
    {
      label: "Define Separators",
      icon: "📑",
      detail:
        "Use paragraphs, sentences, and spaces."
    },
    {
      label: "Recursive Split",
      icon: "🔄",
      detail:
        "Split progressively until chunk size is reached."
    },
    {
      label: "Apply Overlap",
      icon: "🔗",
      detail:
        "Preserve context between chunks."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Convert chunks into vectors."
    },
    {
      label: "Store Chunks",
      icon: "🗄️",
      detail:
        "Index chunks in a vector database."
    }
  ],

  code: `import {
  RecursiveCharacterTextSplitter
} from "langchain/text_splitter";

const splitter =
  new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

const chunks =
  await splitter.splitText(document);

console.log(chunks);`
},
{
  id: "hierarchical-chunking",
  category: "Chunking",
  title: "Hierarchical Chunking",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Creates parent and child chunks to support hierarchical retrieval and context expansion.",

  tags: [
    "hierarchical",
    "parent-child",
    "chunking",
    "rag"
  ],

  steps: [
    {
      label: "Create Parent Chunks",
      icon: "📚",
      detail:
        "Split into larger sections."
    },
    {
      label: "Create Child Chunks",
      icon: "📄",
      detail:
        "Further divide parent sections."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Embed child chunks."
    },
    {
      label: "Store Relationships",
      icon: "🔗",
      detail:
        "Maintain parent-child mapping."
    },
    {
      label: "Retrieve Child Chunks",
      icon: "🔍",
      detail:
        "Search smaller chunks."
    },
    {
      label: "Return Parent Context",
      icon: "📖",
      detail:
        "Provide larger context window."
    }
  ],

  code: `const parentChunks =
  splitDocument(
    document,
    2000
  );

const childChunks =
  parentChunks.flatMap(
    chunk =>
      splitDocument(
        chunk,
        500
      )
  );

console.log(childChunks);`
},
{
  id: "sliding-window-chunking",
  category: "Chunking",
  title: "Sliding Window Chunking",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Creates overlapping chunks to preserve context between neighboring chunks.",

  tags: [
    "sliding-window",
    "chunking",
    "overlap",
    "rag"
  ],

  steps: [
    {
      label: "Define Window Size",
      icon: "📏",
      detail:
        "Choose chunk size."
    },
    {
      label: "Define Overlap",
      icon: "🔗",
      detail:
        "Specify overlap amount."
    },
    {
      label: "Slide Window",
      icon: "➡️",
      detail:
        "Move through document incrementally."
    },
    {
      label: "Generate Chunks",
      icon: "📄",
      detail:
        "Create overlapping chunks."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Convert chunks to vectors."
    },
    {
      label: "Store Chunks",
      icon: "🗄️",
      detail:
        "Save for retrieval."
    }
  ],

  code: `function slidingWindow(
  text,
  size,
  overlap
) {

  const chunks = [];

  for (
    let i = 0;
    i < text.length;
    i += size - overlap
  ) {
    chunks.push(
      text.slice(
        i,
        i + size
      )
    );
  }

  return chunks;
}`
},
{
  id: "token-based-chunking",
  category: "Chunking",
  title: "Token-Based Chunking",
  difficulty: "Intermediate",
  time: "~15 min",
  description:
    "Splits documents based on token counts to optimize LLM context windows.",

  tags: [
    "token",
    "chunking",
    "llm",
    "rag"
  ],

  steps: [
    {
      label: "Tokenize Document",
      icon: "🔤",
      detail:
        "Convert text into tokens."
    },
    {
      label: "Define Token Limit",
      icon: "📏",
      detail:
        "Set maximum token count."
    },
    {
      label: "Split Tokens",
      icon: "✂️",
      detail:
        "Create chunks within token limits."
    },
    {
      label: "Apply Overlap",
      icon: "🔗",
      detail:
        "Preserve context."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Embed chunks."
    },
    {
      label: "Store Chunks",
      icon: "🗄️",
      detail:
        "Save to vector database."
    }
  ],

  code: `import {
  TokenTextSplitter
} from "langchain/text_splitter";

const splitter =
  new TokenTextSplitter({
    chunkSize: 512,
    chunkOverlap: 50,
  });

const chunks =
  await splitter.splitText(
    document
  );`
},
{
  id: "agentic-chunking",
  category: "Chunking",
  title: "Agentic Chunking",
  difficulty: "Advanced",
  time: "~30 min",
  description:
    "Uses an LLM or agent to intelligently determine chunk boundaries based on document meaning and structure.",

  tags: [
    "agentic",
    "chunking",
    "llm",
    "advanced-rag"
  ],

  steps: [
    {
      label: "Analyze Document",
      icon: "🧠",
      detail:
        "Understand document structure."
    },
    {
      label: "Identify Topics",
      icon: "🏷️",
      detail:
        "Detect semantic sections."
    },
    {
      label: "Determine Boundaries",
      icon: "✂️",
      detail:
        "Create meaningful chunk breaks."
    },
    {
      label: "Generate Chunks",
      icon: "📚",
      detail:
        "Produce context-rich chunks."
    },
    {
      label: "Create Embeddings",
      icon: "🔢",
      detail:
        "Embed generated chunks."
    },
    {
      label: "Store in Vector DB",
      icon: "🗄️",
      detail:
        "Index chunks for retrieval."
    }
  ],

  code: `const chunks =
  await llm.invoke(\`
Analyze the document and
split it into logical,
self-contained sections.

Document:
\${document}
\`);

console.log(chunks);`
},

{
  id: "semantic-chunking",
  category: "Chunking",
  title: "Semantic Chunking",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Creates chunks based on semantic meaning rather than fixed sizes, resulting in more coherent retrieval.",

  tags: [
    "semantic",
    "chunking",
    "embeddings",
    "rag"
  ],

  steps: [
    {
      label: "Load Document",
      icon: "📄",
      detail:
        "Read source content."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Create embeddings for sentences."
    },
    {
      label: "Measure Similarity",
      icon: "📊",
      detail:
        "Compare adjacent sentence embeddings."
    },
    {
      label: "Detect Boundaries",
      icon: "✂️",
      detail:
        "Identify topic changes."
    },
    {
      label: "Create Chunks",
      icon: "📚",
      detail:
        "Group semantically related sentences."
    },
    {
      label: "Store Chunks",
      icon: "🗄️",
      detail:
        "Save chunks for retrieval."
    }
  ],

  code: `import {
  SemanticChunker
} from "langchain_experimental";

const chunker =
  new SemanticChunker(
    embeddings
  );

const chunks =
  await chunker.createDocuments([
    document
  ]);

console.log(chunks);`
},
{
  id: "similarity-search",
  category: "Retrieval",
  title: "Similarity Search Retrieval",
  difficulty: "Beginner",
  time: "~15 min",
  description:
    "The most common retrieval strategy in RAG systems. Query embeddings are compared against document embeddings using vector similarity metrics such as cosine similarity.",

  tags: [
    "retrieval",
    "vector-search",
    "similarity-search",
    "embeddings"
  ],

  steps: [
    {
      label: "Embed Documents",
      icon: "📄",
      detail:
        "Generate embeddings for document chunks using an embedding model."
    },
    {
      label: "Store Vectors",
      icon: "🗄️",
      detail:
        "Store embeddings in a vector database such as Pinecone, ChromaDB, or FAISS."
    },
    {
      label: "Embed Query",
      icon: "🔍",
      detail:
        "Convert the user query into the same embedding space."
    },
    {
      label: "Calculate Similarity",
      icon: "📐",
      detail:
        "Compare query vectors with document vectors using cosine similarity."
    },
    {
      label: "Retrieve Top-K",
      icon: "🎯",
      detail:
        "Return the most similar document chunks."
    },
    {
      label: "Generate Response",
      icon: "✨",
      detail:
        "Pass retrieved chunks to the LLM for answer generation."
    }
  ],

  code: `import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI();
const pinecone = new Pinecone();

const index = pinecone.index("documents");

async function retrieve(query) {

  const embedding = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: query,
  });

  const results = await index.query({
    vector: embedding.data[0].embedding,
    topK: 5,
    includeMetadata: true,
  });

  return results.matches.map(
    doc => doc.metadata.text
  );
}`
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
  id: "semantic-search",
  category: "Retrieval",
  title: "Semantic Search",
  difficulty: "Intermediate",
  time: "~20 min",
  description:
    "Retrieves documents based on meaning rather than exact keyword matching.",

  tags: [
    "semantic-search",
    "embeddings",
    "retrieval"
  ],

  steps: [
    {
      label: "Generate Embeddings",
      icon: "🧠",
      detail:
        "Encode documents and queries into semantic vectors."
    },
    {
      label: "Vector Search",
      icon: "🔍",
      detail:
        "Search nearest neighbors in vector space."
    },
    {
      label: "Retrieve Context",
      icon: "📚",
      detail:
        "Collect semantically relevant chunks."
    },
    {
      label: "Pass to LLM",
      icon: "✨",
      detail:
        "Use retrieved context during generation."
    }
  ],

  code: `const results = await vectorStore.similaritySearch(
  query,
  5
);

const context = results
  .map(doc => doc.pageContent)
  .join("\\n");

const answer = await llm.invoke(
  \`Context:
  \${context}

  Question:
  \${query}\`
);`
},
{
  id: "metadata-filtering",
  category: "Retrieval",
  title: "Metadata Filtering",
  difficulty: "Advanced",
  time: "~20 min",
  description:
    "Restrict retrieval results using metadata such as department, date, author, source, or access level.",

  tags: [
    "metadata",
    "filters",
    "enterprise-rag",
    "retrieval"
  ],

  steps: [
    {
      label: "Attach Metadata",
      icon: "🏷️",
      detail:
        "Store metadata with every document chunk."
    },
    {
      label: "Apply Filters",
      icon: "🔒",
      detail:
        "Filter retrieval by attributes."
    },
    {
      label: "Vector Search",
      icon: "🔍",
      detail:
        "Search only within filtered documents."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Return answers using filtered context."
    }
  ],

  code: `const results = await index.query({
  vector: embedding,
  topK: 10,
  filter: {
    department: "finance",
    year: { "$gte": 2024 }
  },
  includeMetadata: true,
});`
},

{
  id: "multi-query-retrieval",
  category: "Retrieval",
  title: "Multi-Query Retrieval",
  difficulty: "Advanced",
  time: "~25 min",
  description:
    "Generate multiple semantically different versions of a user query and retrieve documents for each query. This improves recall and reduces the chance of missing relevant context.",

  tags: [
    "multi-query",
    "retrieval",
    "query-expansion",
    "rag"
  ],

  steps: [
    {
      label: "Generate Query Variations",
      icon: "🧠",
      detail:
        "Use an LLM to create multiple reformulations of the user question."
    },
    {
      label: "Embed Queries",
      icon: "🔢",
      detail:
        "Convert each generated query into vector embeddings."
    },
    {
      label: "Retrieve Documents",
      icon: "🔍",
      detail:
        "Perform retrieval independently for each query."
    },
    {
      label: "Merge Results",
      icon: "🔗",
      detail:
        "Combine retrieved documents and remove duplicates."
    },
    {
      label: "Rank Context",
      icon: "📊",
      detail:
        "Sort retrieved documents by relevance score."
    },
    {
      label: "Generate Response",
      icon: "✨",
      detail:
        "Provide the consolidated context to the LLM."
    }
  ],

  code: `import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const openai = new OpenAI();
const pinecone = new Pinecone();
const index = pinecone.index("rag-index");

async function generateQueries(question) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{
      role: "user",
      content: \`
Generate 4 alternative search queries
for the following question:

\${question}
\`
    }]
  });

  return response.choices[0].message.content
    .split("\\n")
    .filter(Boolean);
}

async function retrieve(question) {

  const queries = await generateQueries(question);

  const allResults = [];

  for (const query of queries) {

    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: query,
    });

    const results = await index.query({
      vector: embedding.data[0].embedding,
      topK: 5,
      includeMetadata: true,
    });

    allResults.push(...results.matches);
  }

  const uniqueDocs = [
    ...new Map(
      allResults.map(doc => [doc.id, doc])
    ).values()
  ];

  return uniqueDocs;
}`
},

{
  id: "parent-child-retrieval",
  category: "Retrieval",
  title: "Parent-Child Retrieval",
  difficulty: "Advanced",
  time: "~30 min",
  description:
    "Store small child chunks for retrieval while returning larger parent documents for richer context and better answer generation.",

  tags: [
    "parent-child",
    "retrieval",
    "context",
    "enterprise-rag"
  ],

  steps: [
    {
      label: "Split Parent Documents",
      icon: "📚",
      detail:
        "Break documents into large parent chunks."
    },
    {
      label: "Create Child Chunks",
      icon: "📄",
      detail:
        "Further split parent chunks into smaller retrievable chunks."
    },
    {
      label: "Generate Embeddings",
      icon: "🔢",
      detail:
        "Create embeddings for child chunks."
    },
    {
      label: "Store Relationships",
      icon: "🔗",
      detail:
        "Maintain mapping between child and parent documents."
    },
    {
      label: "Retrieve Child Chunks",
      icon: "🔍",
      detail:
        "Perform retrieval on child chunks."
    },
    {
      label: "Return Parent Context",
      icon: "✨",
      detail:
        "Fetch parent documents before sending to the LLM."
    }
  ],

  code: `const retriever =
  new ParentDocumentRetriever({
    vectorstore,
    docstore,
    childSplitter,
    parentSplitter,
  });

const results =
  await retriever.getRelevantDocuments(
    "Explain transformer architecture"
  );

console.log(results);`
},
{
  id: "contextual-compression",
  category: "Retrieval",
  title: "Contextual Compression Retrieval",
  difficulty: "Advanced",
  time: "~25 min",
  description:
    "Compress retrieved documents to keep only the information relevant to the user query before sending it to the LLM.",

  tags: [
    "compression",
    "retrieval",
    "rag",
    "cost-optimization"
  ],

  steps: [
    {
      label: "Retrieve Documents",
      icon: "🔍",
      detail:
        "Fetch top-K relevant documents."
    },
    {
      label: "Apply Compression",
      icon: "🗜️",
      detail:
        "Extract only query-relevant sentences."
    },
    {
      label: "Remove Noise",
      icon: "✂️",
      detail:
        "Discard unrelated content."
    },
    {
      label: "Build Context",
      icon: "📚",
      detail:
        "Create a compact context window."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Send compressed context to the LLM."
    }
  ],

  code: `import { ContextualCompressionRetriever }
from "langchain/retrievers/contextual_compression";

const retriever =
  new ContextualCompressionRetriever({
    baseRetriever,
    compressor,
  });

const docs =
  await retriever.invoke(
    "Explain vector databases"
  );`
},
{
  id: "self-query-retrieval",
  category: "Retrieval",
  title: "Self Query Retrieval",
  difficulty: "Expert",
  time: "~30 min",
  description:
    "Use an LLM to automatically generate metadata filters and retrieval queries.",

  tags: [
    "metadata",
    "self-query",
    "retrieval",
    "enterprise-rag"
  ],

  steps: [
    {
      label: "Analyze Query",
      icon: "🧠",
      detail:
        "Understand user intent."
    },
    {
      label: "Extract Filters",
      icon: "🏷️",
      detail:
        "Identify metadata constraints."
    },
    {
      label: "Build Search Query",
      icon: "🔍",
      detail:
        "Generate optimized retrieval query."
    },
    {
      label: "Apply Filters",
      icon: "🔒",
      detail:
        "Limit retrieval scope."
    },
    {
      label: "Retrieve Documents",
      icon: "📚",
      detail:
        "Search matching documents."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Provide grounded response."
    }
  ],

  code: `const retriever =
  SelfQueryRetriever.fromLLM(
    llm,
    vectorStore,
    metadataInfo
  );

const docs =
  await retriever.invoke(
    "Find finance reports from 2025"
  );`
},

{
  id: "recursive-retrieval",
  category: "Retrieval",
  title: "Recursive Retrieval",
  difficulty: "Expert",
  time: "~35 min",
  description:
    "Retrieve documents iteratively until sufficient context is collected.",

  tags: [
    "recursive",
    "retrieval",
    "multi-hop",
    "rag"
  ],

  steps: [
    {
      label: "Initial Retrieval",
      icon: "🔍",
      detail:
        "Retrieve initial documents."
    },
    {
      label: "Analyze Context",
      icon: "🧠",
      detail:
        "Determine missing information."
    },
    {
      label: "Generate Follow-up Query",
      icon: "❓",
      detail:
        "Create additional retrieval queries."
    },
    {
      label: "Retrieve Again",
      icon: "🔄",
      detail:
        "Search for supporting evidence."
    },
    {
      label: "Merge Context",
      icon: "📚",
      detail:
        "Combine all retrieved information."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Produce final response."
    }
  ],

  code: `let context = [];

while(needsMoreContext(context)) {

  const docs =
    await retriever.invoke(query);

  context.push(...docs);

  query =
    await generateFollowupQuery(
      context
    );
}`
},

{
  id: "knowledge-graph-retrieval",
  category: "Retrieval",
  title: "Knowledge Graph Retrieval",
  difficulty: "Expert",
  time: "~45 min",
  description:
    "Retrieve information using entities and relationships stored in a knowledge graph.",

  tags: [
    "graph-rag",
    "knowledge-graph",
    "neo4j",
    "retrieval"
  ],

  steps: [
    {
      label: "Extract Entities",
      icon: "🏷️",
      detail:
        "Identify entities from documents."
    },
    {
      label: "Build Graph",
      icon: "🕸️",
      detail:
        "Create relationships between entities."
    },
    {
      label: "Store Graph",
      icon: "🗄️",
      detail:
        "Save in Neo4j or graph database."
    },
    {
      label: "Traverse Graph",
      icon: "🔍",
      detail:
        "Find relevant relationships."
    },
    {
      label: "Retrieve Context",
      icon: "📚",
      detail:
        "Collect graph-connected knowledge."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Use graph context for generation."
    }
  ],

  code: `MATCH (p:Person)-[:WORKS_FOR]->
(c:Company)

RETURN p,c

LIMIT 10`
},

{
  id: "agentic-retrieval",
  category: "Retrieval",
  title: "Agentic Retrieval",
  difficulty: "Expert",
  time: "~50 min",
  description:
    "Use multiple AI agents to plan, retrieve, validate, and synthesize information before generating an answer.",

  tags: [
    "agentic-ai",
    "retrieval",
    "multi-agent",
    "rag"
  ],

  steps: [
    {
      label: "Plan Retrieval",
      icon: "🧠",
      detail:
        "Planner agent decides strategy."
    },
    {
      label: "Knowledge Search",
      icon: "📚",
      detail:
        "Retriever agent queries vector stores."
    },
    {
      label: "Web Search",
      icon: "🌐",
      detail:
        "Search agent gathers external information."
    },
    {
      label: "Validate Results",
      icon: "✅",
      detail:
        "Critic agent verifies relevance."
    },
    {
      label: "Merge Evidence",
      icon: "🔗",
      detail:
        "Combine validated information."
    },
    {
      label: "Generate Response",
      icon: "✨",
      detail:
        "Final agent produces answer."
    }
  ],

  code: `const workflow = new StateGraph()
  .addNode("planner", plannerAgent)
  .addNode("retriever", retrieverAgent)
  .addNode("critic", criticAgent)
  .addNode("answer", answerAgent)

  .addEdge("planner", "retriever")
  .addEdge("retriever", "critic")
  .addEdge("critic", "answer");

const result =
  await workflow.invoke({
    query: question
  });`
},

{
  id: "ensemble-retrieval",
  category: "Retrieval",
  title: "Ensemble Retrieval",
  difficulty: "Expert",
  time: "~40 min",
  description:
    "Combine multiple retrievers such as BM25, vector search, and graph search to maximize recall.",

  tags: [
    "ensemble",
    "hybrid",
    "retrieval",
    "enterprise-rag"
  ],

  steps: [
    {
      label: "BM25 Search",
      icon: "🔤",
      detail:
        "Perform keyword retrieval."
    },
    {
      label: "Vector Search",
      icon: "🔍",
      detail:
        "Perform semantic retrieval."
    },
    {
      label: "Graph Search",
      icon: "🕸️",
      detail:
        "Retrieve graph relationships."
    },
    {
      label: "Merge Results",
      icon: "🔗",
      detail:
        "Combine retrieved documents."
    },
    {
      label: "Rerank Results",
      icon: "📊",
      detail:
        "Improve ranking quality."
    },
    {
      label: "Generate Answer",
      icon: "✨",
      detail:
        "Pass ranked context to the LLM."
    }
  ],

  code: `const retriever =
  new EnsembleRetriever({
    retrievers: [
      bm25Retriever,
      vectorRetriever
    ],
    weights: [0.5, 0.5]
  });

const docs =
  await retriever.invoke(query);`
},

{
  id: "multi-vector-retrieval",
  category: "Retrieval",
  title: "Multi Vector Retrieval",
  difficulty: "Expert",
  time: "~35 min",
  description:
    "Store multiple vector representations for the same document such as summaries, questions, and chunks to improve retrieval quality.",

  tags: [
    "multi-vector",
    "retrieval",
    "rag",
    "embeddings"
  ],

  steps: [
    {
      label: "Generate Chunk Embeddings",
      icon: "📄",
      detail:
        "Create embeddings for document chunks."
    },
    {
      label: "Generate Summary Embeddings",
      icon: "📝",
      detail:
        "Create embeddings from document summaries."
    },
    {
      label: "Generate Question Embeddings",
      icon: "❓",
      detail:
        "Generate likely user questions."
    },
    {
      label: "Store All Vectors",
      icon: "🗄️",
      detail:
        "Maintain multiple vector representations."
    },
    {
      label: "Retrieve",
      icon: "🔍",
      detail:
        "Search across all representations."
    },
    {
      label: "Merge Results",
      icon: "✨",
      detail:
        "Combine retrieved documents."
    }
  ],

  code: `const retriever =
  new MultiVectorRetriever({
    vectorstore,
    byteStore,
    idKey: "doc_id",
  });

const docs =
  await retriever.invoke(
    "How does GraphRAG work?"
  );`
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

const CATEGORIES = ["All", "Foundations","Chunking", "Retrieval", "Query", "Advanced"];
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

function ContentViewer({ content }) {
  return (
    <div className="prose max-w-none">
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
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
      background: "var(--color-background-tertiary, #0e1643)",
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
