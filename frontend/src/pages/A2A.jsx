import { useState } from "react";

const A2A = [
  {
    id: "a2a-agent-card",
    category: "Foundations",
    title: "Agent Card & Discovery",
    difficulty: "Beginner",
    time: "~15 min",
    description: "Every A2A agent publishes an Agent Card at /.well-known/agent.json — a machine-readable identity document listing capabilities, skills, and endpoints.",
    tags: ["agent card", "discovery", "well-known"],
    steps: [
      { label: "Define Agent Card", icon: "🪪", detail: "Create an agent.json with name, description, version, url, and capabilities. This is the agent's public identity — keep descriptions precise so client agents can route tasks correctly." },
      { label: "List Skills", icon: "🎯", detail: "Each skill has an id, name, description, and input/output modes (text, file, data). Skills are the unit of capability discovery — agents pick skills by matching them to tasks." },
      { label: "Declare Auth", icon: "🔐", detail: "Specify authentication schemes (none, bearer, oauth2) in the card. Client agents read this before initiating contact to know which credentials to attach." },
      { label: "Serve at Well-Known", icon: "🌐", detail: "Host the card at GET /.well-known/agent.json with Content-Type: application/json. This URL is the universal discovery entry point in the A2A protocol." },
      { label: "Validate Schema", icon: "✅", detail: "Validate your card against the official A2A JSON Schema. Malformed cards silently break discovery — schema validation catches issues before deployment." },
    ],
    code: `import express from "express";

const app = express();

// The Agent Card — your agent's public identity
const AGENT_CARD = {
  name: "Data Analysis Agent",
  description: "Analyzes structured datasets, generates statistical summaries, and produces visualizations.",
  url: "https://my-agent.example.com",
  version: "1.0.0",
  documentationUrl: "https://my-agent.example.com/docs",
  capabilities: {
    streaming: true,
    pushNotifications: false,
    stateTransitionHistory: true,
  },
  authentication: {
    schemes: ["bearer"],
  },
  defaultInputModes: ["text", "data"],
  defaultOutputModes: ["text", "data", "file"],
  skills: [
    {
      id: "summarize-dataset",
      name: "Summarize Dataset",
      description: "Accepts a CSV or JSON dataset and returns descriptive statistics.",
      tags: ["analytics", "statistics", "csv"],
      inputModes: ["data", "file"],
      outputModes: ["text", "data"],
      examples: [
        {
          name: "CSV summary",
          input: { data: { mimeType: "text/csv", data: "..." } },
        },
      ],
    },
    {
      id: "trend-analysis",
      name: "Trend Analysis",
      description: "Identifies trends and anomalies in time-series data.",
      tags: ["timeseries", "anomaly", "trends"],
      inputModes: ["data"],
      outputModes: ["text", "data"],
    },
  ],
};

// Serve the Agent Card at the well-known URL
app.get("/.well-known/agent.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow cross-origin discovery
  res.json(AGENT_CARD);
});

app.listen(3000, () => {
  console.log("Agent Card available at http://localhost:3000/.well-known/agent.json");
});

// Client: discover an agent
async function discoverAgent(agentUrl) {
  const res = await fetch(\`\${agentUrl}/.well-known/agent.json\`);
  if (!res.ok) throw new Error(\`Discovery failed: \${res.status}\`);
  const card = await res.json();
  console.log(\`Found agent: \${card.name} with \${card.skills.length} skills\`);
  return card;
}

const card = await discoverAgent("https://my-agent.example.com");`,
  },
  {
    id: "a2a-task-lifecycle",
    category: "Foundations",
    title: "Task Lifecycle",
    difficulty: "Beginner",
    time: "~20 min",
    description: "Tasks are the core unit of work in A2A. Learn how tasks are created, transition through states, and return artifacts to the client agent.",
    tags: ["tasks", "state machine", "artifacts"],
    steps: [
      { label: "Send Task", icon: "📤", detail: "POST to /tasks/send with a unique taskId, skill id, and message. The taskId is client-generated — use a UUID. The server must be idempotent on duplicate taskIds." },
      { label: "submitted → working", icon: "⚙️", detail: "The server acknowledges immediately with status: submitted, then transitions to working as it begins processing. Return the full Task object in the response." },
      { label: "working → completed", icon: "✅", detail: "On success, set status to completed and attach artifacts (text, data, or file parts) to the task. Artifacts are the deliverables the client agent consumes." },
      { label: "working → failed", icon: "❌", detail: "On error, transition to failed and populate the error field with a code and message. Client agents must handle this state explicitly." },
      { label: "Poll or Stream", icon: "🔄", detail: "Client agents poll GET /tasks/{id} for status, or subscribe to SSE at /tasks/{id}/subscribe for push updates. Prefer streaming for long-running tasks." },
      { label: "canceled state", icon: "🛑", detail: "Client agents can abort work with POST /tasks/{id}/cancel. Servers should check for cancellation at yield points and transition to canceled gracefully." },
    ],
    code: `import express from "express";
import { randomUUID } from "crypto";

const app = express();
app.use(express.json());

// In-memory task store (use Redis or DB in production)
const tasks = new Map();

function createTask(taskId, skillId, message) {
  return {
    id: taskId,
    skillId,
    status: "submitted",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    messages: [message],
    artifacts: [],
    error: null,
  };
}

function updateTask(taskId, patch) {
  const task = tasks.get(taskId);
  if (!task) return null;
  const updated = { ...task, ...patch, updatedAt: new Date().toISOString() };
  tasks.set(taskId, updated);
  return updated;
}

// POST /tasks/send — create and start a task
app.post("/tasks/send", async (req, res) => {
  const { id: taskId = randomUUID(), skillId, message } = req.body;

  if (tasks.has(taskId)) {
    return res.json(tasks.get(taskId)); // idempotent
  }

  const task = createTask(taskId, skillId, message);
  tasks.set(taskId, task);

  // Start async processing — don't await
  processTask(taskId).catch((err) => {
    updateTask(taskId, { status: "failed", error: { code: -32000, message: err.message } });
  });

  res.json({ ...task, status: "submitted" });
});

// GET /tasks/:id — poll for current status
app.get("/tasks/:id", (req, res) => {
  const task = tasks.get(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// POST /tasks/:id/cancel — request cancellation
app.post("/tasks/:id/cancel", (req, res) => {
  const task = tasks.get(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  if (["completed", "failed", "canceled"].includes(task.status)) {
    return res.status(409).json({ error: \`Cannot cancel task in state: \${task.status}\` });
  }
  const updated = updateTask(req.params.id, { status: "canceled" });
  res.json(updated);
});

// Background processor — simulates real async work
async function processTask(taskId) {
  updateTask(taskId, { status: "working" });

  // Simulate multi-step work with cancellation checks
  for (let step = 0; step < 3; step++) {
    await new Promise((r) => setTimeout(r, 1000));
    const task = tasks.get(taskId);
    if (task?.status === "canceled") return; // respect cancellation
  }

  updateTask(taskId, {
    status: "completed",
    artifacts: [{
      id: randomUUID(),
      type: "text",
      mimeType: "text/plain",
      data: "Analysis complete: 42 rows processed, mean=3.14, stddev=0.92",
    }],
  });
}

app.listen(3000);`,
  },
  {
    id: "a2a-streaming",
    category: "Streaming",
    title: "Streaming with SSE",
    difficulty: "Intermediate",
    time: "~25 min",
    description: "Stream task progress and partial artifacts to the client agent in real time using Server-Sent Events — no polling required.",
    tags: ["SSE", "streaming", "real-time"],
    steps: [
      { label: "tasks/sendSubscribe", icon: "📡", detail: "Client sends POST /tasks/sendSubscribe instead of /tasks/send. The connection stays open; the server streams events over it as SSE." },
      { label: "Set SSE Headers", icon: "🔧", detail: "Set Content-Type: text/event-stream, Cache-Control: no-cache, Connection: keep-alive. Disable response buffering (res.flushHeaders()) so events flow immediately." },
      { label: "Emit Status Events", icon: "📊", detail: "Send TaskStatusUpdateEvent as the task transitions: submitted → working. Each event is a JSON object with id, status, and timestamp." },
      { label: "Stream Artifacts", icon: "🧩", detail: "Emit TaskArtifactUpdateEvent with partial artifact chunks as they're produced. Clients can render incrementally — ideal for long text or large data payloads." },
      { label: "Final Event", icon: "🏁", detail: "Send a final TaskStatusUpdateEvent with status: completed (or failed) and final: true. The client closes the SSE connection on receipt of a final event." },
      { label: "Reconnection", icon: "🔁", detail: "Set event id fields so clients can reconnect with Last-Event-ID and resume from where they left off without reprocessing earlier chunks." },
    ],
    code: `import express from "express";
import { randomUUID } from "crypto";

const app = express();
app.use(express.json());

// POST /tasks/sendSubscribe — create task and stream updates
app.post("/tasks/sendSubscribe", async (req, res) => {
  const { id: taskId = randomUUID(), message } = req.body;

  // Set SSE headers
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  function sendEvent(eventType, data, eventId) {
    if (eventId) res.write(\`id: \${eventId}\\n\`);
    res.write(\`event: \${eventType}\\n\`);
    res.write(\`data: \${JSON.stringify(data)}\\n\\n\`);
  }

  // Initial submitted event
  sendEvent("TaskStatusUpdateEvent", {
    id: taskId, status: "submitted", final: false,
    timestamp: new Date().toISOString(),
  }, "1");

  // Transition to working
  await delay(200);
  sendEvent("TaskStatusUpdateEvent", {
    id: taskId, status: "working", final: false,
    timestamp: new Date().toISOString(),
  }, "2");

  // Stream partial artifact chunks
  const chunks = [
    "Analyzing dataset... ",
    "Found 1,042 rows. ",
    "Computing statistics... ",
    "Mean: 3.14 | Std: 0.92 | ",
    "Detected 3 anomalies. ",
    "Summary complete.",
  ];

  for (let i = 0; i < chunks.length; i++) {
    if (req.socket.destroyed) return; // client disconnected
    await delay(400);
    sendEvent("TaskArtifactUpdateEvent", {
      id: taskId,
      artifact: {
        id: "artifact-1",
        type: "text",
        mimeType: "text/plain",
        chunk: chunks[i],
        chunkIndex: i,
        final: i === chunks.length - 1,
      },
    }, String(3 + i));
  }

  // Final completion event
  await delay(200);
  sendEvent("TaskStatusUpdateEvent", {
    id: taskId, status: "completed", final: true,
    timestamp: new Date().toISOString(),
  }, String(3 + chunks.length));

  res.end();
});

function delay(ms) { return new Promise((r) => setTimeout(r, ms)); }

// ── Client-side SSE consumer ──────────────────────────────────────────────────
async function streamTask(agentUrl, message) {
  const response = await fetch(\`\${agentUrl}/tasks/sendSubscribe\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    const events = buffer.split("\\n\\n");
    buffer = events.pop() ?? "";

    for (const eventStr of events) {
      const dataLine = eventStr.split("\\n").find((l) => l.startsWith("data:"));
      if (!dataLine) continue;
      const event = JSON.parse(dataLine.slice(5));

      if (event.artifact?.chunk) process.stdout.write(event.artifact.chunk);
      if (event.final) { console.log("\\n✓ Task complete"); return; }
    }
  }
}

app.listen(3000);`,
  },
  {
    id: "a2a-multi-turn",
    category: "Streaming",
    title: "Multi-Turn Conversations",
    difficulty: "Intermediate",
    time: "~30 min",
    description: "A2A supports stateful back-and-forth: an agent can pause a task in input-required state and wait for the client to supply additional information before continuing.",
    tags: ["multi-turn", "input-required", "stateful"],
    steps: [
      { label: "input-required State", icon: "⏸️", detail: "When the server needs clarification, transition the task to input-required and emit a message explaining what's needed. The task is paused — no artifact produced yet." },
      { label: "Client Receives Pause", icon: "📥", detail: "The client agent receives the input-required status event with the agent's question. It may ask its own LLM, its user, or another agent to supply the answer." },
      { label: "tasks/send Again", icon: "📤", detail: "Client resumes the task by POSTing to /tasks/send with the same taskId and a new message containing the requested input. The server continues processing." },
      { label: "Conversation History", icon: "📚", detail: "The server appends each new message to task.messages. This full history is available to the processing logic and can be passed to the LLM as conversation context." },
      { label: "Loop Until Done", icon: "🔄", detail: "The pattern repeats: working → input-required → working → ... → completed. There's no limit on turns; design your agent to detect when it has enough information." },
    ],
    code: `import express from "express";
import Anthropic from "@anthropic-ai/sdk";
import { randomUUID } from "crypto";

const app = express();
app.use(express.json());
const claude = new Anthropic();
const tasks = new Map();

app.post("/tasks/send", async (req, res) => {
  const { id: taskId = randomUUID(), message } = req.body;

  let task = tasks.get(taskId);
  if (!task) {
    task = { id: taskId, status: "submitted", messages: [], artifacts: [], error: null };
    tasks.set(taskId, task);
  }

  // Append new message and start/resume processing
  task.messages.push(message);
  task.status = "working";
  task.updatedAt = new Date().toISOString();
  res.json(task);

  // Process asynchronously
  processConversationalTask(taskId).catch(console.error);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.get(req.params.id);
  if (!task) return res.status(404).json({ error: "Not found" });
  res.json(task);
});

async function processConversationalTask(taskId) {
  const task = tasks.get(taskId);

  // Build Claude conversation from A2A message history
  const claudeMessages = task.messages.map((msg) => ({
    role: msg.role === "agent" ? "assistant" : "user",
    content: msg.parts.map((p) => ({ type: "text", text: p.text })),
  }));

  const response = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    system: \`You are a data analysis agent. If you need clarification (e.g. which column to analyze, date range), ask exactly one question. When you have all the info, produce the analysis.\`,
    messages: claudeMessages,
  });

  const replyText = response.content[0].text;

  // Detect if Claude is asking a clarifying question
  const isQuestion = replyText.trim().endsWith("?") || replyText.toLowerCase().includes("could you");

  if (isQuestion) {
    // Pause — need more input from the client
    task.status = "input-required";
    task.messages.push({
      role: "agent",
      parts: [{ type: "text", text: replyText }],
      timestamp: new Date().toISOString(),
    });
  } else {
    // Done — deliver the artifact
    task.status = "completed";
    task.messages.push({
      role: "agent",
      parts: [{ type: "text", text: replyText }],
      timestamp: new Date().toISOString(),
    });
    task.artifacts.push({
      id: randomUUID(),
      type: "text",
      mimeType: "text/plain",
      data: replyText,
    });
  }
  task.updatedAt = new Date().toISOString();
}

// ── Client: handle multi-turn ─────────────────────────────────────────────────
async function runMultiTurnTask(agentUrl, initialPrompt) {
  const taskId = randomUUID();
  let message = { role: "user", parts: [{ type: "text", text: initialPrompt }] };

  while (true) {
    const res = await fetch(\`\${agentUrl}/tasks/send\`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: taskId, message }),
    });
    let task = await res.json();

    // Poll until status changes from working
    while (task.status === "working" || task.status === "submitted") {
      await new Promise((r) => setTimeout(r, 500));
      task = await (await fetch(\`\${agentUrl}/tasks/\${taskId}\`)).json();
    }

    if (task.status === "completed") {
      return task.artifacts[0]?.data;
    }

    if (task.status === "input-required") {
      const agentQuestion = task.messages.at(-1).parts[0].text;
      console.log("Agent asks:", agentQuestion);
      // In a real system, ask a human or another LLM
      const answer = "Please analyze the 'revenue' column for Q1 2024.";
      message = { role: "user", parts: [{ type: "text", text: answer }] };
    }

    if (task.status === "failed") throw new Error(task.error?.message);
  }
}

app.listen(3000);`,
  },
  {
    id: "a2a-agent-orchestration",
    category: "Multi-Agent",
    title: "Agent-to-Agent Delegation",
    difficulty: "Advanced",
    time: "~45 min",
    description: "An orchestrator agent discovers specialist agents via their Agent Cards and delegates subtasks to them over the A2A protocol — no shared codebase required.",
    tags: ["orchestration", "delegation", "discovery"],
    steps: [
      { label: "Discover Agents", icon: "🔍", detail: "Fetch /.well-known/agent.json from each known agent URL. Parse skills and capabilities to build a registry of what each agent can do." },
      { label: "Route by Skill", icon: "🗺️", detail: "Match the subtask description against skill tags and descriptions using keyword or semantic matching. Pick the best-fit agent for each piece of work." },
      { label: "Delegate via A2A", icon: "📤", detail: "POST /tasks/send to the chosen agent with a well-formed message. Include the parent taskId in metadata so you can correlate results later." },
      { label: "Parallel Dispatch", icon: "⚡", detail: "Fan out independent subtasks to multiple agents simultaneously with Promise.all. Each agent runs in its own process — true parallelism without shared state." },
      { label: "Collect Results", icon: "📥", detail: "Poll or stream each delegated task. Aggregate artifacts from all sub-tasks into the orchestrator's context for final synthesis." },
      { label: "Synthesize", icon: "✨", detail: "Pass all collected artifacts to the orchestrator's LLM to produce a unified final answer, resolving any conflicts or gaps between specialist outputs." },
    ],
    code: `import Anthropic from "@anthropic-ai/sdk";

const claude = new Anthropic();

// ── Agent Registry ────────────────────────────────────────────────────────────

async function fetchAgentCard(agentUrl) {
  const res = await fetch(\`\${agentUrl}/.well-known/agent.json\`);
  if (!res.ok) throw new Error(\`Failed to fetch agent card from \${agentUrl}\`);
  return { url: agentUrl, ...(await res.json()) };
}

async function buildRegistry(agentUrls) {
  const cards = await Promise.all(agentUrls.map(fetchAgentCard));
  return cards; // [{url, name, skills, ...}]
}

function findBestAgent(registry, taskDescription) {
  // Simple keyword matching — replace with embedding similarity in production
  const words = taskDescription.toLowerCase().split(/\\s+/);
  let best = null, bestScore = -1;

  for (const agent of registry) {
    for (const skill of agent.skills) {
      const skillText = (skill.name + " " + skill.description + " " + (skill.tags ?? []).join(" ")).toLowerCase();
      const score = words.filter((w) => skillText.includes(w)).length;
      if (score > bestScore) { bestScore = score; best = { agent, skill }; }
    }
  }
  return best;
}

// ── A2A Task Client ───────────────────────────────────────────────────────────

async function delegateTask(agentUrl, skillId, text, parentTaskId) {
  const taskId = crypto.randomUUID();
  const res = await fetch(\`\${agentUrl}/tasks/send\`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: taskId,
      skillId,
      metadata: { parentTaskId },
      message: { role: "user", parts: [{ type: "text", text }] },
    }),
  });
  let task = await res.json();

  // Poll until terminal state
  while (!["completed", "failed", "canceled"].includes(task.status)) {
    await new Promise((r) => setTimeout(r, 600));
    const poll = await fetch(\`\${agentUrl}/tasks/\${taskId}\`);
    task = await poll.json();
  }

  if (task.status !== "completed") throw new Error(\`Subtask failed: \${task.error?.message}\`);
  return task.artifacts.map((a) => a.data).join("\\n");
}

// ── Orchestrator ──────────────────────────────────────────────────────────────

async function orchestrate(goal, agentUrls) {
  const registry = await buildRegistry(agentUrls);

  // Ask Claude to decompose the goal into subtasks
  const planRes = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 512,
    messages: [{
      role: "user",
      content: \`Decompose this goal into 2–4 independent subtasks that specialist agents can work on in parallel.
Return ONLY a JSON array of strings — one per subtask. No explanation.
Goal: \${goal}\`,
    }],
  });

  const subtasks = JSON.parse(planRes.content[0].text.replace(/\`\`\`json|\\n\`\`\`/g, "").trim());
  console.log("Subtasks:", subtasks);

  // Route each subtask to the best agent and run in parallel
  const parentTaskId = crypto.randomUUID();
  const results = await Promise.all(
    subtasks.map(async (subtask) => {
      const match = findBestAgent(registry, subtask);
      if (!match) return \`No agent found for: \${subtask}\`;
      console.log(\`Delegating "\${subtask}" → \${match.agent.name} (\${match.skill.id})\`);
      return delegateTask(match.agent.url, match.skill.id, subtask, parentTaskId);
    })
  );

  // Synthesize all results into a final answer
  const synthesisRes = await claude.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: \`Synthesize these specialist agent outputs into a unified answer for: \${goal}\\n\\n\${
        results.map((r, i) => \`Subtask \${i + 1} result:\\n\${r}\`).join("\\n\\n")
      }\`,
    }],
  });

  return synthesisRes.content[0].text;
}

// Run
const result = await orchestrate(
  "Produce a market analysis report for the EV sector with financial data and trend forecasting.",
  [
    "https://financial-data-agent.example.com",
    "https://trend-analysis-agent.example.com",
    "https://report-writer-agent.example.com",
  ]
);
console.log(result);`,
  },
  {
    id: "a2a-push-notifications",
    category: "Production",
    title: "Push Notifications",
    difficulty: "Intermediate",
    time: "~30 min",
    description: "For fire-and-forget tasks, agents register a webhook so the server can push completion events without the client holding an open connection.",
    tags: ["webhooks", "push", "async"],
    steps: [
      { label: "Register Webhook", icon: "🔗", detail: "Include a pushNotification object in the task request with url and optional authentication headers. The server stores this alongside the task." },
      { label: "Validate URL", icon: "✅", detail: "Before accepting the task, send a GET challenge request to the webhook URL to verify it's reachable and under the client's control. Reject unverifiable URLs." },
      { label: "Process Task", icon: "⚙️", detail: "Run the task asynchronously. The client does not need to poll or keep a connection open — it can shut down and come back later." },
      { label: "Deliver Notification", icon: "📬", detail: "On completion (or failure), POST a TaskStatusUpdateEvent JSON body to the registered webhook URL. Include the full task object with artifacts." },
      { label: "Sign Payload", icon: "🔏", detail: "HMAC-sign the notification body with a shared secret so the receiving agent can verify authenticity. Reject unsigned or tampered webhooks." },
      { label: "Retry on Failure", icon: "🔁", detail: "If the webhook POST fails (non-2xx or timeout), retry with exponential backoff — 1s, 2s, 4s, up to 5 attempts. Log permanently failed deliveries for debugging." },
    ],
    code: `import express from "express";
import crypto from "crypto";
import { randomUUID } from "crypto";

const app = express();
app.use(express.json());
const tasks = new Map();
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET ?? "super-secret-key";

// ── Server: accept task with webhook registration ─────────────────────────────

app.post("/tasks/send", async (req, res) => {
  const { id: taskId = randomUUID(), message, pushNotification } = req.body;

  // Validate webhook URL (challenge request)
  if (pushNotification?.url) {
    try {
      const challenge = randomUUID();
      const challengeRes = await fetch(pushNotification.url, {
        method: "GET",
        headers: { "x-a2a-challenge": challenge },
        signal: AbortSignal.timeout(5000),
      });
      if (!challengeRes.ok) throw new Error("Challenge failed");
    } catch (err) {
      return res.status(400).json({ error: \`Webhook validation failed: \${err.message}\` });
    }
  }

  const task = { id: taskId, status: "submitted", messages: [message], artifacts: [], pushNotification };
  tasks.set(taskId, task);
  res.json(task);

  // Fire and forget
  processTask(taskId).catch(console.error);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.get(req.params.id);
  res.json(task ?? { error: "Not found" });
});

async function processTask(taskId) {
  const task = tasks.get(taskId);
  task.status = "working";

  await new Promise((r) => setTimeout(r, 3000)); // simulate work

  task.status = "completed";
  task.artifacts = [{ id: randomUUID(), type: "text", data: "Analysis complete." }];
  task.updatedAt = new Date().toISOString();

  if (task.pushNotification?.url) {
    await deliverWebhook(task.pushNotification.url, task);
  }
}

function signPayload(body) {
  return crypto.createHmac("sha256", WEBHOOK_SECRET).update(body).digest("hex");
}

async function deliverWebhook(url, task, attempt = 1) {
  const body = JSON.stringify({ event: "TaskStatusUpdateEvent", task });
  const signature = signPayload(body);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-a2a-signature": \`sha256=\${signature}\`,
      },
      body,
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    console.log(\`Webhook delivered to \${url}\`);
  } catch (err) {
    if (attempt < 5) {
      const delay = Math.pow(2, attempt) * 1000;
      console.warn(\`Webhook attempt \${attempt} failed, retrying in \${delay}ms\`);
      await new Promise((r) => setTimeout(r, delay));
      return deliverWebhook(url, task, attempt + 1);
    }
    console.error(\`Webhook permanently failed after \${attempt} attempts\`);
  }
}

// ── Client: receive webhook ───────────────────────────────────────────────────

const clientApp = express();
clientApp.use(express.json());

// Challenge handler — proves we own the URL
clientApp.get("/webhook/a2a", (req, res) => {
  res.setHeader("x-a2a-challenge", req.headers["x-a2a-challenge"] ?? "");
  res.sendStatus(200);
});

// Notification receiver
clientApp.post("/webhook/a2a", (req, res) => {
  const sig = req.headers["x-a2a-signature"];
  const body = JSON.stringify(req.body);
  const expected = \`sha256=\${crypto.createHmac("sha256", WEBHOOK_SECRET).update(body).digest("hex")}\`;

  if (sig !== expected) return res.status(401).json({ error: "Invalid signature" });

  const { task } = req.body;
  console.log(\`Task \${task.id} completed. Artifacts:\`, task.artifacts);
  res.sendStatus(200);
});

app.listen(3000);
clientApp.listen(3001);`,
  },
  {
    id: "a2a-auth",
    category: "Production",
    title: "Authentication & Security",
    difficulty: "Advanced",
    time: "~45 min",
    description: "Secure agent-to-agent communication with Bearer tokens and OAuth 2.0 client credentials. Agents authenticate to each other without human involvement.",
    tags: ["OAuth", "bearer", "security", "M2M"],
    steps: [
      { label: "Read Auth from Card", icon: "🔍", detail: "Inspect the target agent's card authentication.schemes array before making any request. Only proceed if you support one of the declared schemes." },
      { label: "Client Credentials", icon: "🤝", detail: "For machine-to-machine (M2M) auth, use OAuth 2.0 client credentials flow: POST to the token endpoint with client_id and client_secret to get a Bearer token." },
      { label: "Cache Tokens", icon: "💾", detail: "Cache the access token and reuse it until expires_in seconds have elapsed. Fetching a new token per request is wasteful and may hit rate limits." },
      { label: "Attach Bearer", icon: "🔐", detail: "Include Authorization: Bearer <token> on every A2A request. The receiving agent validates the token before processing — reject all unauthenticated requests with 401." },
      { label: "Validate on Server", icon: "✅", detail: "On the server, verify the JWT signature, issuer (iss), audience (aud), and expiry (exp). Use a JWKS endpoint for key rotation without redeployment." },
      { label: "Scope Enforcement", icon: "🛡️", detail: "Encode allowed skills in token scopes (e.g. a2a:summarize-dataset). Reject requests for skills not covered by the presented token's scopes." },
    ],
    code: `import express from "express";
import jwt from "jsonwebtoken";
import jwksClient from "jwks-rsa";

const app = express();
app.use(express.json());

// ── Token cache (client-side) ─────────────────────────────────────────────────

const tokenCache = new Map(); // clientId → { token, expiresAt }

async function getAccessToken(tokenEndpoint, clientId, clientSecret) {
  const cached = tokenCache.get(clientId);
  if (cached && Date.now() < cached.expiresAt) return cached.token;

  const res = await fetch(tokenEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: clientId,
      client_secret: clientSecret,
      scope: "a2a:summarize-dataset a2a:trend-analysis",
    }),
  });

  if (!res.ok) throw new Error(\`Token request failed: \${res.status}\`);
  const { access_token, expires_in } = await res.json();

  tokenCache.set(clientId, {
    token: access_token,
    expiresAt: Date.now() + (expires_in - 30) * 1000, // refresh 30s early
  });

  return access_token;
}

// ── Authenticated A2A client ──────────────────────────────────────────────────

async function sendAuthenticatedTask(agentCard, skillId, message, credentials) {
  const scheme = agentCard.authentication.schemes[0];

  let headers = { "Content-Type": "application/json" };

  if (scheme === "bearer" || scheme === "oauth2") {
    const token = await getAccessToken(
      agentCard.authentication.tokenEndpoint,
      credentials.clientId,
      credentials.clientSecret
    );
    headers["Authorization"] = \`Bearer \${token}\`;
  }

  const res = await fetch(\`\${agentCard.url}/tasks/send\`, {
    method: "POST",
    headers,
    body: JSON.stringify({ skillId, message }),
  });

  if (res.status === 401) throw new Error("Authentication failed — check credentials");
  if (res.status === 403) throw new Error("Insufficient scope for this skill");
  return res.json();
}

// ── Server: JWT validation middleware ─────────────────────────────────────────

const jwks = jwksClient({ jwksUri: "https://auth.example.com/.well-known/jwks.json" });

async function getSigningKey(header) {
  return new Promise((resolve, reject) => {
    jwks.getSigningKey(header.kid, (err, key) =>
      err ? reject(err) : resolve(key.getPublicKey())
    );
  });
}

async function requireA2AAuth(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) return res.status(401).json({ error: "Missing Bearer token" });

  try {
    const token = auth.slice(7);
    const decoded = jwt.decode(token, { complete: true });
    const signingKey = await getSigningKey(decoded.header);

    const payload = jwt.verify(token, signingKey, {
      algorithms: ["RS256"],
      audience: "https://my-agent.example.com",
      issuer: "https://auth.example.com",
    });

    req.tokenPayload = payload;
    req.agentScopes = (payload.scope ?? "").split(" ");
    next();
  } catch (err) {
    res.status(401).json({ error: \`Invalid token: \${err.message}\` });
  }
}

function requireScope(scope) {
  return (req, res, next) => {
    if (!req.agentScopes.includes(scope)) {
      return res.status(403).json({ error: \`Required scope: \${scope}\` });
    }
    next();
  };
}

// ── Protected endpoints ───────────────────────────────────────────────────────

app.post(
  "/tasks/send",
  requireA2AAuth,
  async (req, res) => {
    const { skillId } = req.body;
    const requiredScope = \`a2a:\${skillId}\`;

    if (!req.agentScopes.includes(requiredScope)) {
      return res.status(403).json({ error: \`Skill requires scope: \${requiredScope}\` });
    }

    // Process task...
    res.json({
      id: crypto.randomUUID(),
      status: "submitted",
      processedBy: req.tokenPayload.sub,
    });
  }
);

app.listen(3000);`,
  },
];

const CATEGORIES = ["All", "Foundations", "Streaming", "Multi-Agent", "Production"];
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
        🤝
      </div>
      <div>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: "-0.3px" }}>A2A Cookbook</h1>
        <p style={{ margin: 0, fontSize: 13, color: "var(--color-text-secondary)" }}>
          End-to-end Agent-to-Agent protocol recipes
        </p>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {[
          { label: "Recipes", value: A2A.length },
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
  const [selected, setSelected] = useState(A2A[0]);
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
            recipes={A2A}
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
