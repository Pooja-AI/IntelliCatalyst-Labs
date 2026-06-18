import { useState } from "react";

const AgenticAICookbook  = [
  {
    id: "react-agent",
    category: "Foundations",
    title: "ReAct Agent",
    difficulty: "Beginner",
    time: "~20 min",
    description:
      "The baseline agent loop: Reason → Act → Observe, repeated until the task is complete. The foundation of most agentic systems.",
    tags: ["reasoning", "tool use", "loop"],
    steps: [
      {
        label: "Receive task",
        icon: "💬",
        detail:
          "Accept the user task and initialize the agent loop with a system prompt defining available tools.",
      },
      {
        label: "Reason",
        icon: "🧠",
        detail:
          "LLM decides what to do next based on task, history, and available tools. Emits a thought and an action.",
      },
      {
        label: "Act (tool call)",
        icon: "🔧",
        detail:
          "Execute the chosen tool (e.g. search, calculator, code runner) and capture its output.",
      },
      {
        label: "Observe",
        icon: "👁️",
        detail:
          "Append the tool result to the message history so the LLM can reason about it next turn.",
      },
      {
        label: "Loop / finish",
        icon: "🔁",
        detail:
          "If the task is complete, emit a final answer. Otherwise loop back to Reason.",
      },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();

const tools = [
  {
    name: "search",
    description: "Search the web for current information",
    input_schema: {
      type: "object",
      properties: { query: { type: "string", description: "Search query" } },
      required: ["query"],
    },
  },
  {
    name: "calculator",
    description: "Evaluate a mathematical expression",
    input_schema: {
      type: "object",
      properties: { expression: { type: "string" } },
      required: ["expression"],
    },
  },
];

async function executeTool(name, input) {
  if (name === "calculator") return String(eval(input.expression));
  if (name === "search") return \`Search results for "\${input.query}": ...\`;
  throw new Error(\`Unknown tool: \${name}\`);
}

async function reactAgent(task) {
  const messages = [{ role: "user", content: task }];

  while (true) {
    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      tools,
      messages,
    });

    messages.push({ role: "assistant", content: response.content });

    if (response.stop_reason === "end_turn") {
      return response.content.find((b) => b.type === "text")?.text;
    }

    const toolResults = [];
    for (const block of response.content) {
      if (block.type === "tool_use") {
        const result = await executeTool(block.name, block.input);
        toolResults.push({ type: "tool_result", tool_use_id: block.id, content: result });
      }
    }
    messages.push({ role: "user", content: toolResults });
  }
}`,
  },
  {
    id: "plan-execute",
    category: "Foundations",
    title: "Plan & Execute",
    difficulty: "Beginner",
    time: "~25 min",
    description:
      "Split planning and execution into two phases. A planner LLM decomposes the task; an executor LLM carries out each step independently.",
    tags: ["planning", "decomposition", "multi-step"],
    steps: [
      {
        label: "Planner call",
        icon: "📋",
        detail:
          "Ask the LLM to output a JSON array of ordered sub-tasks needed to complete the goal.",
      },
      {
        label: "Parse plan",
        icon: "🔍",
        detail: "Parse the structured plan and validate step dependencies.",
      },
      {
        label: "Execute steps",
        icon: "▶️",
        detail:
          "Run each step in order (or in parallel if independent), passing outputs forward.",
      },
      {
        label: "Aggregate results",
        icon: "🗂️",
        detail:
          "Collect all step outputs and pass them to a final synthesis call.",
      },
      {
        label: "Synthesize",
        icon: "✨",
        detail:
          "A final LLM call combines step results into a coherent, user-facing answer.",
      },
    ],
    code: `async function planAndExecute(goal) {
  // Phase 1: Plan
  const planResponse = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    messages: [{
      role: "user",
      content: \`Decompose this goal into ordered steps. Return JSON array only.
Goal: \${goal}
Format: [{"step": 1, "task": "...", "depends_on": []}]\`,
    }],
  });

  const plan = JSON.parse(planResponse.content[0].text);

  // Phase 2: Execute
  const results = {};
  for (const step of plan) {
    const context = step.depends_on
      .map((i) => \`Step \${i} result: \${results[i]}\`)
      .join("\\n");

    const res = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      messages: [{
        role: "user",
        content: \`\${context}\\nExecute this task: \${step.task}\\nBe concise.\`,
      }],
    });
    results[step.step] = res.content[0].text;
  }

  // Phase 3: Synthesize
  const synthesis = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Goal: \${goal}\\nStep results:\\n\${
        Object.entries(results).map(([k, v]) => \`Step \${k}: \${v}\`).join("\\n")
      }\\nSynthesize a final answer.\`,
    }],
  });

  return synthesis.content[0].text;
}`,
  },
  {
    id: "parallel-tools",
    category: "Tool Use",
    title: "Parallel Tool Calls",
    difficulty: "Intermediate",
    time: "~30 min",
    description:
      "Invoke multiple tools in a single turn by letting the model emit several tool_use blocks simultaneously. Cuts latency on independent sub-tasks.",
    tags: ["parallelism", "tool use", "latency"],
    steps: [
      {
        label: "Model decides",
        icon: "🧠",
        detail:
          "Given the task, the model emits multiple tool_use blocks in a single response when sub-tasks are independent.",
      },
      {
        label: "Fan out",
        icon: "↗️",
        detail:
          "Use Promise.all() to execute all tool calls concurrently — never await them sequentially.",
      },
      {
        label: "Collect results",
        icon: "📥",
        detail:
          "Wait for all promises to settle; build one tool_result block per tool_use id.",
      },
      {
        label: "Return results",
        icon: "↩️",
        detail: "Send all tool_result blocks back in a single user message.",
      },
      {
        label: "Final answer",
        icon: "✨",
        detail: "The model synthesizes all tool results into a final answer.",
      },
    ],
    code: `async function parallelTools(task) {
  const messages = [{ role: "user", content: task }];

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    tools,
    messages,
  });

  messages.push({ role: "assistant", content: response.content });

  // Fan out: execute all tool calls in parallel
  const toolUseBlocks = response.content.filter((b) => b.type === "tool_use");

  const toolResults = await Promise.all(
    toolUseBlocks.map(async (block) => {
      const result = await executeTool(block.name, block.input);
      return {
        type: "tool_result",
        tool_use_id: block.id,
        content: result,
      };
    })
  );

  // Send all results back at once
  messages.push({ role: "user", content: toolResults });

  const final = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    tools,
    messages,
  });

  return final.content.find((b) => b.type === "text")?.text;
}`,
  },
  {
    id: "multi-agent",
    category: "Multi-Agent",
    title: "Orchestrator–Subagent",
    difficulty: "Intermediate",
    time: "~45 min",
    description:
      "An orchestrator LLM routes subtasks to specialized subagent LLMs. Enables parallel specialization and cleaner separation of concerns.",
    tags: ["orchestration", "specialization", "routing"],
    steps: [
      {
        label: "Orchestrator plans",
        icon: "🗺️",
        detail:
          "Orchestrator receives the task and emits a routing plan: which subagent handles which subtask.",
      },
      {
        label: "Dispatch subtasks",
        icon: "📤",
        detail:
          "Fire each subtask to its assigned subagent concurrently via Promise.all.",
      },
      {
        label: "Subagents execute",
        icon: "🤖",
        detail:
          "Each subagent runs its own ReAct loop with a specialized system prompt and tool set.",
      },
      {
        label: "Return outputs",
        icon: "📨",
        detail:
          "All subagent outputs are collected and returned to the orchestrator.",
      },
      {
        label: "Orchestrator synthesizes",
        icon: "✨",
        detail: "Orchestrator merges all outputs into a final coherent response.",
      },
    ],
    code: `const SUBAGENTS = {
  researcher: "You are a research specialist. Search and summarize information accurately.",
  coder: "You are a coding specialist. Write clean, well-commented code.",
  analyst: "You are a data analyst. Interpret data and provide insights.",
};

async function runSubagent(role, task) {
  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    system: SUBAGENTS[role],
    messages: [{ role: "user", content: task }],
    tools: role === "researcher" ? [searchTool] : [],
  });
  return response.content.find((b) => b.type === "text")?.text;
}

async function orchestratorAgent(task) {
  const planRes = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    system: "You are an orchestrator. Route subtasks to specialists.",
    messages: [{
      role: "user",
      content: \`Task: \${task}\\nAvailable agents: researcher, coder, analyst.
Return JSON: [{"agent": "...", "subtask": "..."}]\`,
    }],
  });

  const plan = JSON.parse(planRes.content[0].text);

  const results = await Promise.all(
    plan.map(({ agent, subtask }) => runSubagent(agent, subtask))
  );

  const synthesis = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Original task: \${task}\\n\\nSubagent results:\\n\${
        plan.map((p, i) => \`[\${p.agent}]: \${results[i]}\`).join("\\n\\n")
      }\\n\\nSynthesize a final answer.\`,
    }],
  });

  return synthesis.content[0].text;
}`,
  },
  {
    id: "reflection",
    category: "Advanced",
    title: "Self-Reflection Loop",
    difficulty: "Intermediate",
    time: "~35 min",
    description:
      "Generate a draft, critique it with a second LLM call, then revise. Repeat until quality threshold is met or max iterations reached.",
    tags: ["reflection", "quality", "iterative"],
    steps: [
      {
        label: "Generate draft",
        icon: "✏️",
        detail: "Produce an initial response to the task with a standard LLM call.",
      },
      {
        label: "Critic call",
        icon: "🔎",
        detail:
          "A second LLM call reviews the draft for quality, accuracy, and completeness. Returns structured feedback.",
      },
      {
        label: "Score check",
        icon: "⚖️",
        detail:
          "Parse the critic score (1–10). If score ≥ threshold or max iterations reached, stop.",
      },
      {
        label: "Revise",
        icon: "📝",
        detail:
          "Feed the draft + critique back into a revision call to produce an improved version.",
      },
      {
        label: "Loop",
        icon: "🔁",
        detail:
          "Repeat critic → score check → revise until quality is sufficient.",
      },
    ],
    code: `async function reflectionLoop(task, maxIterations = 3, threshold = 8) {
  let draft = await generate(task);

  for (let i = 0; i < maxIterations; i++) {
    const critiqueRes = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 512,
      messages: [{
        role: "user",
        content: \`Critique this response to the task: "\${task}"
Response: \${draft}
Rate 1-10. Reply JSON: {"score": N, "issues": ["..."], "suggestions": ["..."]}\`,
      }],
    });

    const critique = JSON.parse(critiqueRes.content[0].text);

    if (critique.score >= threshold) break;

    const revisionRes = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      messages: [{
        role: "user",
        content: \`Task: \${task}
Current draft: \${draft}
Issues: \${critique.issues.join(", ")}
Suggestions: \${critique.suggestions.join(", ")}
Write an improved version.\`,
      }],
    });

    draft = revisionRes.content[0].text;
  }

  return draft;
}`,
  },
  {
    id: "memory",
    category: "Memory",
    title: "Agent Memory",
    difficulty: "Intermediate",
    time: "~40 min",
    description:
      "Give agents persistent memory with short-term conversation buffers, long-term semantic storage, and episodic summaries.",
    tags: ["memory", "embeddings", "context"],
    steps: [
      {
        label: "Short-term buffer",
        icon: "🕐",
        detail:
          "Keep the last N turns in context. Sliding window: drop oldest when limit is reached.",
      },
      {
        label: "Summarize episodes",
        icon: "📄",
        detail:
          "Periodically ask the LLM to compress older turns into a concise episode summary.",
      },
      {
        label: "Store memories",
        icon: "🗄️",
        detail:
          "Embed and store important facts/summaries in a vector DB for long-term retrieval.",
      },
      {
        label: "Retrieve relevant",
        icon: "🔍",
        detail:
          "At query time, retrieve semantically similar past memories and inject them into context.",
      },
      {
        label: "Compose context",
        icon: "🧩",
        detail:
          "Combine: retrieved memories + episode summaries + recent buffer → send to LLM.",
      },
    ],
    code: `class AgentMemory {
  constructor(shortTermLimit = 10) {
    this.shortTermBuffer = [];
    this.shortTermLimit = shortTermLimit;
    this.episodeSummaries = [];
    this.vectorStore = new VectorStore();
  }

  async addTurn(role, content) {
    this.shortTermBuffer.push({ role, content });
    if (this.shortTermBuffer.length >= this.shortTermLimit) {
      await this.summarizeAndCompress();
    }
  }

  async summarizeAndCompress() {
    const toSummarize = this.shortTermBuffer.splice(0, 5);
    const res = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 256,
      messages: [{
        role: "user",
        content: \`Summarize in 2-3 sentences:\\n\${
          toSummarize.map((t) => \`\${t.role}: \${t.content}\`).join("\\n")
        }\`,
      }],
    });
    const summary = res.content[0].text;
    this.episodeSummaries.push(summary);
    const embedding = await embed(summary);
    await this.vectorStore.upsert({ id: Date.now().toString(), vector: embedding, text: summary });
  }

  async getContext(query) {
    const qEmb = await embed(query);
    const relevant = await this.vectorStore.query(qEmb, 3);
    return [
      ...relevant.map((r) => ({ role: "system", content: \`[Memory] \${r.text}\` })),
      ...this.episodeSummaries.slice(-2).map((s) => ({ role: "system", content: \`[Episode] \${s}\` })),
      ...this.shortTermBuffer,
    ];
  }
}`,
  },
  {
    id: "evaluator",
    category: "Advanced",
    title: "Evaluator–Optimizer",
    difficulty: "Advanced",
    time: "~50 min",
    description:
      "An evaluator agent scores outputs against a rubric; an optimizer agent refines based on the score. Separate models for judgment and generation.",
    tags: ["evaluation", "optimization", "rubric"],
    steps: [
      {
        label: "Define rubric",
        icon: "📋",
        detail:
          "Create a structured evaluation rubric with named criteria and weights.",
      },
      {
        label: "Generator call",
        icon: "✏️",
        detail:
          "Generator LLM produces an initial output for the given task.",
      },
      {
        label: "Evaluator scores",
        icon: "⭐",
        detail:
          "Evaluator LLM assesses the output against each rubric criterion. Returns structured JSON scores.",
      },
      {
        label: "Compute score",
        icon: "🧮",
        detail:
          "Multiply each criterion score by its weight and sum for a total quality score.",
      },
      {
        label: "Optimize or stop",
        icon: "🎯",
        detail:
          "If score < threshold: pass rubric failures to optimizer for targeted revision. Else: done.",
      },
    ],
    code: `const RUBRIC = [
  { criterion: "accuracy", weight: 0.4, description: "Factually correct and well-sourced" },
  { criterion: "clarity", weight: 0.3, description: "Clear, readable, well-structured" },
  { criterion: "completeness", weight: 0.3, description: "Covers all aspects of the task" },
];

async function evaluate(task, output) {
  const res = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 512,
    system: "You are a strict evaluator. Score responses against the rubric. JSON only.",
    messages: [{
      role: "user",
      content: \`Task: \${task}\\nOutput: \${output}\\nRubric: \${JSON.stringify(RUBRIC)}
Score each criterion 0-10. Reply: {"scores": {"accuracy": N, "clarity": N, "completeness": N}, "feedback": "..."}\`,
    }],
  });
  return JSON.parse(res.content[0].text);
}

async function evaluatorOptimizer(task, maxRounds = 3, threshold = 8) {
  let output = await generate(task);

  for (let round = 0; round < maxRounds; round++) {
    const { scores, feedback } = await evaluate(task, output);
    const weightedScore = RUBRIC.reduce(
      (sum, r) => sum + (scores[r.criterion] || 0) * r.weight, 0
    );
    if (weightedScore >= threshold) break;
    output = await optimize(task, output, feedback);
  }

  return output;
}`,
  },
  {
    id: "computer-use",
    category: "Advanced",
    title: "Computer Use Agent",
    difficulty: "Advanced",
    time: "~60 min",
    description:
      "Let an agent control a real browser or desktop via Anthropic's computer use beta — screenshot → decide → click/type → repeat.",
    tags: ["computer use", "browser", "vision"],
    steps: [
      {
        label: "Capture screenshot",
        icon: "📸",
        detail:
          "Take a screenshot of the current screen state and encode it as base64.",
      },
      {
        label: "Send to model",
        icon: "📤",
        detail:
          "Pass the screenshot + task to Claude using the computer_use_20250124 beta tool.",
      },
      {
        label: "Parse action",
        icon: "🔍",
        detail:
          "Extract the action from the model response: click, type, scroll, key, or screenshot.",
      },
      {
        label: "Execute action",
        icon: "▶️",
        detail:
          "Use Playwright or PyAutoGUI to execute the action on the actual browser/desktop.",
      },
      {
        label: "Loop until done",
        icon: "🔁",
        detail:
          "Take a new screenshot after each action and loop until the model signals task completion.",
      },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";
import { chromium } from "playwright";

const client = new Anthropic();

async function computerUseAgent(task) {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  const messages = [];

  async function screenshot() {
    const buf = await page.screenshot();
    return buf.toString("base64");
  }

  async function executeAction(action) {
    switch (action.type) {
      case "click":
        await page.mouse.click(action.coordinate[0], action.coordinate[1]);
        break;
      case "type":
        await page.keyboard.type(action.text);
        break;
      case "key":
        await page.keyboard.press(action.key);
        break;
      case "scroll":
        await page.mouse.wheel(0, action.direction === "down" ? 300 : -300);
        break;
    }
  }

  messages.push({
    role: "user",
    content: [
      { type: "image", source: { type: "base64", media_type: "image/png", data: await screenshot() } },
      { type: "text", text: \`Task: \${task}\` },
    ],
  });

  while (true) {
    const response = await client.beta.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1024,
      betas: ["computer-use-20250124"],
      tools: [{ type: "computer_20250124", name: "computer", display_width_px: 1280, display_height_px: 800 }],
      messages,
    });

    messages.push({ role: "assistant", content: response.content });
    if (response.stop_reason === "end_turn") break;

    const toolUse = response.content.find((b) => b.type === "tool_use");
    if (!toolUse) break;

    await executeAction(toolUse.input);
    const newShot = await screenshot();

    messages.push({
      role: "user",
      content: [
        { type: "tool_result", tool_use_id: toolUse.id, content: "" },
        { type: "image", source: { type: "base64", media_type: "image/png", data: newShot } },
      ],
    });
  }

  await browser.close();
}`,
  },
];

const CATEGORIES = ["All", "Foundations", "Tool Use", "Multi-Agent", "Memory", "Advanced"];

const DIFFICULTY_STYLES = {
  Beginner: { bg: "#E1F5EE", color: "#0F6E56" },
  Intermediate: { bg: "#EEEDFE", color: "#534AB7" },
  Advanced: { bg: "#FAECE7", color: "#993C1D" },
};

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
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 12px",
                borderRadius: 20,
                border: active === i ? "1.5px solid #7F77DD" : "0.5px solid var(--color-border-tertiary, #e0e0e0)",
                background: active === i ? "#EEEDFE" : "var(--color-background-primary, #fff)",
                color: active === i ? "#534AB7" : "var(--color-text-primary, #111)",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: active === i ? 500 : 400,
                fontFamily: "inherit",
                transition: "all 0.15s",
              }}
            >
              <span>{step.icon}</span>
              <span>{step.label}</span>
            </button>
            {i < steps.length - 1 && (
              <span style={{ color: "var(--color-text-tertiary, #aaa)", fontSize: 12 }}>→</span>
            )}
          </div>
        ))}
      </div>
      {active !== null && (
        <div
          style={{
            marginTop: 10,
            padding: "10px 14px",
            borderRadius: 8,
            background: "var(--color-background-secondary, #f5f5f5)",
            border: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
            fontSize: 13,
            color: "var(--color-text-secondary, #555)",
            lineHeight: 1.6,
          }}
        >
          <span style={{ fontWeight: 500, color: "var(--color-text-primary, #111)" }}>
            {steps[active].label}:{" "}
          </span>
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
          position: "absolute",
          top: 8,
          right: 8,
          padding: "4px 10px",
          borderRadius: 6,
          border: "0.5px solid var(--color-border-secondary, #ccc)",
          background: "var(--color-background-secondary, #f5f5f5)",
          cursor: "pointer",
          fontSize: 12,
          color: "var(--color-text-secondary, #555)",
          fontFamily: "inherit",
          zIndex: 1,
        }}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
      <pre
        style={{
          margin: 0,
          padding: "14px 16px",
          borderRadius: 10,
          overflowX: "auto",
          background: "var(--color-background-secondary, #f5f5f5)",
          border: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
          fontSize: 12,
          lineHeight: 1.65,
          fontFamily: "var(--font-mono, monospace)",
          color: "var(--color-text-primary, #111)",
          whiteSpace: "pre",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function RecipeCard({ recipe, onSelect, selected }) {
  const diff = DIFFICULTY_STYLES[recipe.difficulty];
  return (
    <div
      onClick={() => onSelect(recipe)}
      style={{
        padding: "16px 18px",
        borderRadius: 12,
        cursor: "pointer",
        border: selected
          ? "1.5px solid #7F77DD"
          : "0.5px solid var(--color-border-tertiary, #e0e0e0)",
        background: selected
          ? "var(--color-background-secondary, #f5f5f5)"
          : "var(--color-background-primary, #fff)",
        transition: "all 0.15s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 6,
        }}
      >
        <span style={{ fontSize: 13, color: "var(--color-text-secondary, #555)", fontWeight: 400 }}>
          {recipe.category}
        </span>
        <span
          style={{
            fontSize: 11,
            padding: "2px 8px",
            borderRadius: 20,
            fontWeight: 500,
            background: diff.bg,
            color: diff.color,
          }}
        >
          {recipe.difficulty}
        </span>
      </div>
      <div
        style={{
          fontWeight: 500,
          fontSize: 15,
          marginBottom: 4,
          color: "var(--color-text-primary, #111)",
        }}
      >
        {recipe.title}
      </div>
      <div
        style={{
          fontSize: 13,
          color: "var(--color-text-secondary, #555)",
          lineHeight: 1.5,
        }}
      >
        {recipe.description}
      </div>
      <div style={{ marginTop: 10, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {recipe.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              padding: "2px 8px",
              borderRadius: 20,
              background: "var(--color-background-tertiary, #ececec)",
              color: "var(--color-text-secondary, #555)",
              border: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function RecipeDetail({ recipe }) {
  const [tab, setTab] = useState("steps");
  const diff = DIFFICULTY_STYLES[recipe.difficulty];
  return (
    <div
      style={{
        padding: 24,
        borderRadius: 14,
        background: "var(--color-background-primary, #fff)",
        border: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 4,
        }}
      >
        <div>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary, #aaa)" }}>
            {recipe.category}
          </span>
          <h2 style={{ margin: "4px 0 6px", fontSize: 22, fontWeight: 500 }}>{recipe.title}</h2>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", paddingTop: 4 }}>
          <span
            style={{
              fontSize: 12,
              padding: "3px 10px",
              borderRadius: 20,
              fontWeight: 500,
              background: diff.bg,
              color: diff.color,
            }}
          >
            {recipe.difficulty}
          </span>
          <span style={{ fontSize: 12, color: "var(--color-text-tertiary, #aaa)" }}>
            ⏱ {recipe.time}
          </span>
        </div>
      </div>
      <p
        style={{
          margin: "0 0 20px",
          color: "var(--color-text-secondary, #555)",
          fontSize: 14,
          lineHeight: 1.6,
        }}
      >
        {recipe.description}
      </p>

      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 18,
          borderBottom: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
          paddingBottom: 0,
        }}
      >
        {["steps", "code"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "8px 16px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: 14,
              fontFamily: "inherit",
              fontWeight: tab === t ? 500 : 400,
              color:
                tab === t
                  ? "var(--color-text-primary, #111)"
                  : "var(--color-text-secondary, #555)",
              borderBottom: tab === t ? "2px solid #7F77DD" : "2px solid transparent",
              marginBottom: -1,
              transition: "all 0.12s",
            }}
          >
            {t === "steps" ? "Pipeline steps" : "Code"}
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
    const matchSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
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
            width: "100%",
            boxSizing: "border-box",
            padding: "8px 12px",
            borderRadius: 8,
            border: "0.5px solid var(--color-border-secondary, #ccc)",
            background: "var(--color-background-secondary, #f5f5f5)",
            color: "var(--color-text-primary, #111)",
            fontSize: 13,
            fontFamily: "inherit",
            outline: "none",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "4px 12px",
              borderRadius: 20,
              fontSize: 12,
              cursor: "pointer",
              fontFamily: "inherit",
              border:
                category === c
                  ? "1.5px solid #7F77DD"
                  : "0.5px solid var(--color-border-tertiary, #e0e0e0)",
              background:
                category === c ? "#EEEDFE" : "var(--color-background-primary, #fff)",
              color: category === c ? "#534AB7" : "var(--color-text-secondary, #555)",
              fontWeight: category === c ? 500 : 400,
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          overflowY: "auto",
          flex: 1,
        }}
      >
        {filtered.length === 0 ? (
          <div
            style={{
              color: "var(--color-text-tertiary, #aaa)",
              fontSize: 13,
              padding: "12px 0",
            }}
          >
            No recipes found.
          </div>
        ) : (
          filtered.map((r) => (
            <RecipeCard
              key={r.id}
              recipe={r}
              onSelect={onSelect}
              selected={selected?.id === r.id}
            />
          ))
        )}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div
      style={{
        padding: "20px 32px 16px",
        borderBottom: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "#EEEDFE",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
        }}
      >
        🤖
      </div>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: "-0.3px" }}>
          Agentic AI Cookbook
        </h1>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary, #555)" }}>
          End-to-end patterns for building reliable AI agents
        </p>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {[
          { label: "Recipes", value: AgenticAICookbook.length },
          { label: "Patterns", value: CATEGORIES.length - 1 },
        ].map(({ label, value }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 500 }}>{value}</div>
            <div style={{ fontSize: 11, color: "var(--color-text-tertiary, #aaa)" }}>{label}</div>
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        fontFamily: "var(--font-sans, system-ui, sans-serif)",
        background: "var(--color-background-tertiary, #152060)",
        color: "var(--color-text-primary, #f2f2f2)",
      }}
    >
      <Header />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div
          style={{
            width: 320,
            minWidth: 260,
            padding: "20px 20px",
            borderRight: "0.5px solid var(--color-border-tertiary, #152060)",
            background: "var(--color-background-primary, #152060)",
            overflowY: "auto",
          }}
        >
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
            <div
              style={{
                color: "var(--color-text-tertiary, #aaa)",
                padding: 40,
                textAlign: "center",
              }}
            >
              Select a recipe to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
