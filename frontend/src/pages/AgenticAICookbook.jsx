import { useState } from "react";

const AgenticAICookbook = [
  {
    id: "tool-use-agent",
    category: "Foundations",
    title: "Tool-Use Agent",
    difficulty: "Beginner",
    time: "~15 min",
    description: "The baseline agentic pattern: give the LLM tools, let it decide when to call them, parse the result, and loop until done.",
    tags: ["tools", "function calling", "loop"],
    steps: [
      { label: "Define Tools", icon: "🔧", detail: "Declare tools as JSON schemas with name, description, and input_schema. Clear descriptions are critical — the model reads them to decide when to call." },
      { label: "Send to LLM", icon: "💬", detail: "Pass messages + tools to claude.messages.create. Claude returns either a text response or a tool_use block." },
      { label: "Parse tool_use", icon: "🔍", detail: "Inspect response.content for blocks with type === 'tool_use'. Extract tool name and input JSON." },
      { label: "Execute Tool", icon: "⚙️", detail: "Run the actual function locally (API call, DB query, shell command, etc.) and capture the result." },
      { label: "Return tool_result", icon: "📤", detail: "Append the assistant's message and a user message containing the tool_result block back into the conversation." },
      { label: "Loop Until Done", icon: "🔄", detail: "Repeat until stop_reason === 'end_turn'. The agent may call multiple tools across multiple turns before finishing." },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const tools = [
  {
    name: "get_weather",
    description: "Get current weather for a location.",
    input_schema: {
      type: "object",
      properties: {
        location: { type: "string", description: "City and country, e.g. 'Tokyo, Japan'" },
      },
      required: ["location"],
    },
  },
  {
    name: "web_search",
    description: "Search the web for current information.",
    input_schema: {
      type: "object",
      properties: {
        query: { type: "string", description: "The search query" },
      },
      required: ["query"],
    },
  },
];

// Simulated tool implementations
async function executeTool(name, input) {
  if (name === "get_weather") {
    return { temperature: "22°C", condition: "Sunny", location: input.location };
  }
  if (name === "web_search") {
    return { results: ["Result 1 for: " + input.query, "Result 2"] };
  }
  throw new Error(\`Unknown tool: \${name}\`);
}

async function runAgent(userMessage) {
  const messages = [{ role: "user", content: userMessage }];

  while (true) {
    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      tools,
      messages,
    });

    // Append assistant response
    messages.push({ role: "assistant", content: response.content });

    // Done — no more tool calls
    if (response.stop_reason === "end_turn") {
      return response.content.find((b) => b.type === "text")?.text;
    }

    // Process all tool_use blocks
    const toolResults = [];
    for (const block of response.content) {
      if (block.type === "tool_use") {
        const result = await executeTool(block.name, block.input);
        toolResults.push({
          type: "tool_result",
          tool_use_id: block.id,
          content: JSON.stringify(result),
        });
      }
    }

    // Return results to the model
    messages.push({ role: "user", content: toolResults });
  }
}

// Usage
const answer = await runAgent("What's the weather in Tokyo and any recent news about it?");
console.log(answer);`,
  },
  {
    id: "react-agent",
    category: "Foundations",
    title: "ReAct Agent",
    difficulty: "Beginner",
    time: "~20 min",
    description: "Reason then Act: the model emits explicit Thought → Action → Observation chains before producing a final answer. Improves traceability.",
    tags: ["reasoning", "chain-of-thought", "structured"],
    steps: [
      { label: "System Prompt", icon: "📋", detail: "Instruct the model to always output Thought: / Action: / Observation: blocks before answering. This structures its reasoning visibly." },
      { label: "Thought", icon: "🤔", detail: "Model reasons about what it knows and what it needs. E.g. 'I need the current stock price before I can compare.'" },
      { label: "Action", icon: "⚡", detail: "Model outputs a structured action: tool name + arguments, parsed by your loop." },
      { label: "Observation", icon: "👁️", detail: "Your code executes the action and injects the result as Observation: back into the prompt." },
      { label: "Repeat or Answer", icon: "🔄", detail: "The model continues Thought → Action → Observation until it has enough to produce a final Answer: block." },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const REACT_SYSTEM = \`You are an agent that thinks step by step before acting.
Always follow this format:
Thought: <your reasoning about what to do next>
Action: <tool_name>(<json_args>)
Observation: <result will be filled in by the system>
... repeat as needed ...
Answer: <your final answer to the user>

Available tools: calculator({"expr": "2+2"}), search({"query": "..."})
\`;

function parseAction(text) {
  const match = text.match(/Action:\\s*(\\w+)\\(({[^}]+})\\)/);
  if (!match) return null;
  return { tool: match[1], args: JSON.parse(match[2]) };
}

async function executeTool(tool, args) {
  if (tool === "calculator") {
    // eslint-disable-next-line no-eval
    return String(eval(args.expr));
  }
  if (tool === "search") {
    return \`Search results for "\${args.query}": [mock result 1, mock result 2]\`;
  }
  return "Unknown tool";
}

async function reactAgent(question, maxSteps = 10) {
  let prompt = \`Question: \${question}\\n\`;

  for (let step = 0; step < maxSteps; step++) {
    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 512,
      system: REACT_SYSTEM,
      messages: [{ role: "user", content: prompt }],
    });

    const output = response.content[0].text;
    prompt += output;

    // Check for final answer
    if (output.includes("Answer:")) {
      const answer = output.split("Answer:")[1].trim();
      return { answer, trace: prompt };
    }

    // Parse and execute action
    const action = parseAction(output);
    if (action) {
      const observation = await executeTool(action.tool, action.args);
      prompt += \`\\nObservation: \${observation}\\n\`;
    } else {
      break; // No action found, stop
    }
  }

  return { answer: "Max steps reached", trace: prompt };
}

const { answer, trace } = await reactAgent("What is 1234 * 5678?");
console.log("Answer:", answer);`,
  },
  {
    id: "plan-execute",
    category: "Planning",
    title: "Plan & Execute",
    difficulty: "Intermediate",
    time: "~30 min",
    description: "Separate planning from execution: first generate a full task plan, then execute each step with a smaller model. Reduces token cost and improves reliability.",
    tags: ["planning", "multi-step", "decomposition"],
    steps: [
      { label: "Planner LLM", icon: "🗺️", detail: "A capable model (e.g. claude-opus-4-6) receives the goal and outputs a structured JSON plan: an ordered list of steps with tool assignments." },
      { label: "Parse Plan", icon: "📋", detail: "Extract the step list. Validate that each step has a clear action, tool, and expected output field." },
      { label: "Execute Steps", icon: "⚙️", detail: "A smaller executor model (or direct tool calls) runs each step in sequence, passing outputs as inputs to the next step." },
      { label: "Context Passing", icon: "🔗", detail: "Maintain a shared context dict. Each step reads from and writes to context, so outputs flow naturally to downstream steps." },
      { label: "Replan on Failure", icon: "🔁", detail: "If a step fails, optionally call the planner again with the error context to generate a revised sub-plan." },
      { label: "Synthesize", icon: "✨", detail: "After all steps complete, pass the full context to the LLM to synthesize a final coherent answer." },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function planTask(goal) {
  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Create a step-by-step plan to accomplish this goal.
Return ONLY a JSON array of steps, each with: step, action, tool, expected_output.
Goal: \${goal}\`,
    }],
  });

  const text = response.content[0].text;
  const clean = text.replace(/\`\`\`json|\\n\`\`\`/g, "").trim();
  return JSON.parse(clean);
}

async function executeStep(step, context) {
  // Simulate tool execution based on step.tool
  const toolResult = await mockToolCall(step.tool, step.action, context);
  return toolResult;
}

async function mockToolCall(tool, action, context) {
  // Replace with real tool implementations
  return \`Executed [\${tool}]: \${action} — result stored in context.\`;
}

async function synthesize(goal, context) {
  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Goal: \${goal}\\n\\nExecution results:\\n\${JSON.stringify(context, null, 2)}\\n\\nSynthesize a final answer.\`,
    }],
  });
  return response.content[0].text;
}

async function planAndExecute(goal) {
  // Step 1: Plan
  const plan = await planTask(goal);
  console.log("Plan:", plan);

  // Step 2: Execute each step
  const context = { goal };
  for (const step of plan) {
    console.log(\`Executing step \${step.step}: \${step.action}\`);
    try {
      context[\`step_\${step.step}_result\`] = await executeStep(step, context);
    } catch (err) {
      console.error(\`Step \${step.step} failed: \${err.message}\`);
      // Optionally replan here
    }
  }

  // Step 3: Synthesize
  return await synthesize(goal, context);
}

const result = await planAndExecute("Research the latest AI safety papers and summarize key findings");
console.log(result);`,
  },
  {
    id: "multi-agent",
    category: "Multi-Agent",
    title: "Multi-Agent Orchestration",
    difficulty: "Advanced",
    time: "~60 min",
    description: "An orchestrator agent delegates subtasks to specialized sub-agents running in parallel. Each sub-agent has its own tools and system prompt.",
    tags: ["orchestration", "parallelism", "specialization"],
    steps: [
      { label: "Orchestrator", icon: "🎯", detail: "A coordinator LLM receives the high-level goal and decomposes it into subtasks, routing each to the appropriate specialist agent." },
      { label: "Agent Registry", icon: "📚", detail: "Define a registry of sub-agents: each with a name, system prompt, and tool set. The orchestrator picks agents by name." },
      { label: "Parallel Dispatch", icon: "⚡", detail: "Use Promise.all to run multiple sub-agents concurrently, dramatically reducing total wall-clock time." },
      { label: "Sub-Agent Execution", icon: "🤖", detail: "Each sub-agent runs its own tool-use loop independently, returning a structured result when done." },
      { label: "Result Aggregation", icon: "🔗", detail: "The orchestrator receives all sub-agent outputs and synthesizes them into a coherent final response." },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

// Sub-agent definitions
const AGENTS = {
  researcher: {
    system: "You are a research agent. Find and summarize information on the given topic.",
    tools: [{ name: "web_search", description: "Search the web", input_schema: { type: "object", properties: { query: { type: "string" } }, required: ["query"] } }],
  },
  analyst: {
    system: "You are a data analysis agent. Analyze data and produce structured insights.",
    tools: [{ name: "run_analysis", description: "Run statistical analysis", input_schema: { type: "object", properties: { data: { type: "string" } }, required: ["data"] } }],
  },
  writer: {
    system: "You are a writing agent. Produce clear, well-structured written content.",
    tools: [],
  },
};

async function runSubAgent(agentName, task, context = "") {
  const agent = AGENTS[agentName];
  const messages = [{ role: "user", content: \`Task: \${task}\\nContext: \${context}\` }];

  while (true) {
    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: agent.system,
      tools: agent.tools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "end_turn") {
      return response.content.find((b) => b.type === "text")?.text ?? "";
    }

    const toolResults = [];
    for (const block of response.content) {
      if (block.type === "tool_use") {
        // Mock tool execution
        toolResults.push({ type: "tool_result", tool_use_id: block.id, content: \`Mock result for \${block.name}\` });
      }
    }
    messages.push({ role: "user", content: toolResults });
  }
}

async function orchestrate(goal) {
  // Orchestrator decides how to split the work
  const planResponse = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 512,
    messages: [{
      role: "user",
      content: \`Split this goal into subtasks for these agents: researcher, analyst, writer.
Return JSON: [{"agent": "...", "task": "..."}]
Goal: \${goal}\`,
    }],
  });

  const plan = JSON.parse(planResponse.content[0].text.replace(/\`\`\`json|\\n\`\`\`/g, "").trim());

  // Run all sub-agents in parallel
  const results = await Promise.all(
    plan.map(({ agent, task }) => runSubAgent(agent, task))
  );

  // Synthesize results
  const synthesis = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Combine these agent outputs into a final answer for: \${goal}\\n\\n\${results.map((r, i) => \`Agent \${i + 1}:\\n\${r}\`).join("\\n\\n")}\`,
    }],
  });

  return synthesis.content[0].text;
}

const result = await orchestrate("Write a competitive analysis report on AI coding assistants");
console.log(result);`,
  },
  {
    id: "reflection-agent",
    category: "Advanced",
    title: "Reflection & Self-Correction",
    difficulty: "Intermediate",
    time: "~25 min",
    description: "The agent critiques its own output, identifies weaknesses, and iteratively improves until a quality threshold is met or max rounds exhausted.",
    tags: ["self-critique", "iterative", "quality"],
    steps: [
      { label: "Initial Generation", icon: "📝", detail: "Generate a first-pass response to the user's request without any external constraints." },
      { label: "Critic Pass", icon: "🔎", detail: "A separate critic prompt evaluates the output on dimensions like accuracy, completeness, clarity, and tone." },
      { label: "Parse Score", icon: "📊", detail: "Extract a numeric quality score (1–10) and a list of specific critiques from the critic's response." },
      { label: "Refine", icon: "✏️", detail: "If score < threshold, pass the original output + critiques back to the generator with instruction to improve." },
      { label: "Loop / Stop", icon: "🔄", detail: "Repeat up to N rounds. Stop early if score meets threshold or critique indicates no further improvement possible." },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

async function generate(task, previousOutput = null, critiques = null) {
  const content = previousOutput
    ? \`Improve this output based on the critiques below.
Task: \${task}
Previous output: \${previousOutput}
Critiques: \${critiques}
Produce an improved version.\`
    : task;

  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{ role: "user", content }],
  });
  return response.content[0].text;
}

async function critique(task, output) {
  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 512,
    messages: [{
      role: "user",
      content: \`Evaluate this output for the task below.
Task: \${task}
Output: \${output}

Return JSON only:
{
  "score": <1-10>,
  "critiques": ["issue 1", "issue 2"],
  "strengths": ["strength 1"],
  "can_improve": true/false
}\`,
    }],
  });

  const text = response.content[0].text.replace(/\`\`\`json|\\n\`\`\`/g, "").trim();
  return JSON.parse(text);
}

async function reflectionAgent(task, maxRounds = 3, threshold = 8) {
  let output = await generate(task);
  const history = [];

  for (let round = 0; round < maxRounds; round++) {
    const evaluation = await critique(task, output);
    history.push({ round: round + 1, score: evaluation.score, critiques: evaluation.critiques });

    console.log(\`Round \${round + 1}: Score \${evaluation.score}/10\`);

    // Stop if quality threshold met or no more improvements possible
    if (evaluation.score >= threshold || !evaluation.can_improve) {
      break;
    }

    // Refine based on critique
    output = await generate(task, output, evaluation.critiques.join("; "));
  }

  return { finalOutput: output, history };
}

const { finalOutput, history } = await reflectionAgent(
  "Explain the concept of gradient descent to a high school student."
);
console.log("Final output:", finalOutput);
console.log("Improvement history:", history);`,
  },
  {
    id: "memory-agent",
    category: "Memory",
    title: "Agent with Long-Term Memory",
    difficulty: "Advanced",
    time: "~45 min",
    description: "Equip an agent with episodic and semantic memory: store past interactions as embeddings, retrieve relevant context at query time.",
    tags: ["memory", "embeddings", "persistence"],
    steps: [
      { label: "Episodic Store", icon: "💾", detail: "After each conversation turn, embed and store the exchange (user msg + agent response) with a timestamp in a vector DB." },
      { label: "Memory Retrieval", icon: "🔍", detail: "At the start of each turn, embed the current query and retrieve the top-K most semantically similar past episodes." },
      { label: "Semantic Summary", icon: "📝", detail: "Periodically compress older episodes into a semantic summary to reduce context length without losing key facts." },
      { label: "Context Assembly", icon: "🧩", detail: "Inject retrieved memories and the semantic summary into the system prompt before the current turn." },
      { label: "Tool-Use Loop", icon: "🔄", detail: "Run the standard tool-use agent loop with the enriched context, giving the agent access to its own history." },
      { label: "Prune & Archive", icon: "🗂️", detail: "Implement a TTL or importance score to prune stale memories and archive rarely-accessed episodes." },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";
import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";

const client = new Anthropic();
const openai = new OpenAI();
const pinecone = new Pinecone();
const memoryIndex = pinecone.index("agent-memory");

async function embed(text) {
  const { data } = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return data[0].embedding;
}

async function storeMemory(userMsg, agentResponse, sessionId) {
  const text = \`User: \${userMsg}\\nAgent: \${agentResponse}\`;
  const vector = await embed(text);
  await memoryIndex.upsert([{
    id: \`\${sessionId}-\${Date.now()}\`,
    values: vector,
    metadata: { text, timestamp: new Date().toISOString(), session: sessionId },
  }]);
}

async function retrieveMemories(query, topK = 3) {
  const vector = await embed(query);
  const results = await memoryIndex.query({ vector, topK, includeMetadata: true });
  return results.matches.map((m) => ({
    text: m.metadata.text,
    timestamp: m.metadata.timestamp,
    score: m.score,
  }));
}

async function buildSystemPrompt(query) {
  const memories = await retrieveMemories(query);
  if (memories.length === 0) return "You are a helpful assistant.";

  const memoryText = memories
    .map((m) => \`[\${m.timestamp}] \${m.text}\`)
    .join("\\n---\\n");

  return \`You are a helpful assistant with access to past conversation history.
Relevant memories from past interactions:
\${memoryText}

Use these memories to provide consistent, contextually-aware responses.\`;
}

async function memoryAgent(userMessage, sessionId) {
  // Build context-aware system prompt
  const systemPrompt = await buildSystemPrompt(userMessage);

  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });

  const agentResponse = response.content[0].text;

  // Store this interaction in memory
  await storeMemory(userMessage, agentResponse, sessionId);

  return agentResponse;
}

// Multi-turn conversation with persistent memory
const SESSION_ID = "user-123";
console.log(await memoryAgent("My name is Alice and I'm working on a climate model.", SESSION_ID));
console.log(await memoryAgent("What was I working on again?", SESSION_ID)); // Recalls from memory`,
  },
];

const CATEGORIES = ["All", "Foundations", "Planning", "Multi-Agent", "Memory", "Advanced"];
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
        background: "#E1F5EE", display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 20,
      }}>
        🤖
      </div>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: "-0.3px" }}>Agentic AI Cookbook</h1>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>
          End-to-end patterns for building autonomous AI agents
        </p>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {[
          { label: "Recipes", value: AgenticAICookbook.length },
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
  const [selected, setSelected] = useState(AgenticAICookbook[0]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      height: "100vh", fontFamily: "var(--font-sans, system-ui, sans-serif)",
      background: "var(--color-background-tertiary, #152060)",
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
            recipes={AgenticAICookbook}
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
