import { useState } from "react";


const FRAMEWORKS = [
  {
    id: "crewai-basic",
    framework: "CrewAI",
    frameworkColor: "#FF6B6B",
    frameworkBg: "#FFF0F0",
    title: "Role-Based Crew",
    difficulty: "Beginner",
    time: "~20 min",
    description:
      "Compose a crew of agents each with a distinct role, goal, and backstory. Assign tasks and let CrewAI manage the collaboration flow.",
    tags: ["roles", "tasks", "sequential"],
    steps: [
      {
        label: "Define agents",
        icon: "🧑‍💼",
        detail:
          "Create Agent objects with role, goal, and backstory. Each agent gets its own LLM instance and optional tool set.",
      },
      {
        label: "Create tasks",
        icon: "📋",
        detail:
          "Define Task objects with a description and expected output. Assign each task to the agent best suited for it.",
      },
      {
        label: "Assemble crew",
        icon: "👥",
        detail:
          "Instantiate a Crew with agents, tasks, and a process type (sequential or hierarchical).",
      },
      {
        label: "Kickoff",
        icon: "🚀",
        detail:
          "Call crew.kickoff() with optional inputs. CrewAI routes tasks through agents and manages context passing.",
      },
      {
        label: "Collect output",
        icon: "✅",
        detail:
          "Receive structured CrewOutput with per-task results and a final combined answer.",
      },
    ],
    code: `from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool

# Tools
search_tool = SerperDevTool()

# Agents
researcher = Agent(
    role="Senior Research Analyst",
    goal="Uncover accurate, up-to-date information on {topic}",
    backstory=(
        "You are a veteran research analyst with 15 years of experience "
        "distilling complex information into clear, actionable insights."
    ),
    tools=[search_tool],
    verbose=True,
)

writer = Agent(
    role="Content Strategist",
    goal="Craft compelling, well-structured content based on research",
    backstory=(
        "You are an award-winning content strategist who transforms raw "
        "research into engaging narratives for technical audiences."
    ),
    verbose=True,
)

# Tasks
research_task = Task(
    description=(
        "Research {topic} thoroughly. Identify key trends, statistics, "
        "and expert opinions. Produce a structured research brief."
    ),
    expected_output="A detailed research brief with 5+ key findings and sources.",
    agent=researcher,
)

writing_task = Task(
    description=(
        "Using the research brief, write a 500-word blog post about {topic}. "
        "Include an engaging intro, 3 main sections, and a conclusion."
    ),
    expected_output="A polished 500-word blog post in Markdown format.",
    agent=writer,
    context=[research_task],   # receives researcher's output automatically
)

# Crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential,
    verbose=True,
)

result = crew.kickoff(inputs={"topic": "LLM agent architectures in 2025"})
print(result.raw)`,
  },
  {
    id: "crewai-hierarchical",
    framework: "CrewAI",
    frameworkColor: "#FF6B6B",
    frameworkBg: "#FFF0F0",
    title: "Hierarchical Crew",
    difficulty: "Intermediate",
    time: "~35 min",
    description:
      "A manager agent automatically delegates tasks to worker agents, handling task assignment, re-delegation, and quality checks.",
    tags: ["manager", "delegation", "hierarchical"],
    steps: [
      {
        label: "Manager agent",
        icon: "👔",
        detail:
          "Designate a manager_agent or use manager_llm. The manager plans, delegates, and reviews work without needing explicit task assignment.",
      },
      {
        label: "Worker agents",
        icon: "⚙️",
        detail:
          "Define specialist worker agents. The manager selects them dynamically based on task requirements.",
      },
      {
        label: "Hierarchical process",
        icon: "🗂️",
        detail:
          "Set process=Process.hierarchical. CrewAI activates the manager-worker delegation loop automatically.",
      },
      {
        label: "Delegation loop",
        icon: "🔄",
        detail:
          "Manager calls Delegate Work and Ask Question tools to coordinate workers. Workers report back with results.",
      },
      {
        label: "Final synthesis",
        icon: "✨",
        detail:
          "Manager reviews all worker outputs and produces the final, unified response.",
      },
    ],
    code: `from crewai import Agent, Task, Crew, Process
from langchain_openai import ChatOpenAI

manager_llm = ChatOpenAI(model="gpt-4o", temperature=0.1)

# Worker agents (no task assignment needed — manager decides)
data_analyst = Agent(
    role="Data Analyst",
    goal="Analyze datasets and extract statistical insights",
    backstory="Expert in pandas, SQL, and statistical analysis.",
    allow_delegation=False,
)

visualizer = Agent(
    role="Data Visualizer",
    goal="Create clear charts and visual summaries from data insights",
    backstory="Specialist in Matplotlib, Plotly, and data storytelling.",
    allow_delegation=False,
)

report_writer = Agent(
    role="Report Writer",
    goal="Synthesize insights into executive-ready reports",
    backstory="Senior business analyst with expertise in clear communication.",
    allow_delegation=False,
)

# Single high-level task — manager decomposes it
analysis_task = Task(
    description=(
        "Perform a complete analysis of our Q4 sales data: "
        "identify trends, create visualizations, and produce an executive report."
    ),
    expected_output="A complete report with data insights, charts, and recommendations.",
    # No agent= assigned — manager delegates dynamically
)

crew = Crew(
    agents=[data_analyst, visualizer, report_writer],
    tasks=[analysis_task],
    process=Process.hierarchical,
    manager_llm=manager_llm,       # LLM powering the manager
    verbose=True,
)

result = crew.kickoff()
print(result.raw)`,
  },
  {
    id: "crewai-flows",
    framework: "CrewAI",
    frameworkColor: "#FF6B6B",
    frameworkBg: "#FFF0F0",
    title: "CrewAI Flows",
    difficulty: "Advanced",
    time: "~50 min",
    description:
      "Event-driven orchestration with @start, @listen, and @router decorators. Mix deterministic Python logic with crew execution for complex pipelines.",
    tags: ["flows", "event-driven", "routing"],
    steps: [
      {
        label: "Define Flow class",
        icon: "🏗️",
        detail:
          "Subclass Flow and use FlowState to share state across methods. State is automatically persisted between steps.",
      },
      {
        label: "@start method",
        icon: "▶️",
        detail:
          "Decorate the entry point with @start(). This method runs first and may trigger downstream listeners.",
      },
      {
        label: "@listen methods",
        icon: "👂",
        detail:
          "Methods decorated with @listen(method_name) automatically run when the named method completes.",
      },
      {
        label: "@router for branching",
        icon: "🔀",
        detail:
          "Use @router to conditionally route execution to different listeners based on output values.",
      },
      {
        label: "flow.kickoff()",
        icon: "🚀",
        detail:
          "Start the flow. CrewAI topologically sorts the DAG of listeners and executes them in order.",
      },
    ],
    code: `from crewai.flow.flow import Flow, listen, start, router
from pydantic import BaseModel

class ContentState(BaseModel):
    topic: str = ""
    research: str = ""
    outline: str = ""
    draft: str = ""
    quality_score: int = 0
    final_content: str = ""

class ContentPipeline(Flow[ContentState]):

    @start()
    def fetch_topic(self):
        """Entry point — initialise the topic."""
        self.state.topic = "The future of multi-agent AI systems"
        return self.state.topic

    @listen(fetch_topic)
    def research_phase(self, topic):
        """Run a research crew on the topic."""
        from crewai import Crew, Agent, Task

        researcher = Agent(role="Researcher", goal="Research {topic} deeply", backstory="...")
        task = Task(description="Research {topic}", expected_output="Research brief", agent=researcher)
        crew = Crew(agents=[researcher], tasks=[task])
        result = crew.kickoff(inputs={"topic": topic})
        self.state.research = result.raw
        return result.raw

    @listen(research_phase)
    def write_draft(self, research):
        """Write a draft based on research."""
        writer = Agent(role="Writer", goal="Write an article", backstory="...")
        task = Task(
            description=f"Write an article using this research:\n{research}",
            expected_output="Article draft",
            agent=writer,
        )
        crew = Crew(agents=[writer], tasks=[task])
        result = crew.kickoff()
        self.state.draft = result.raw
        self.state.quality_score = self._score_draft(result.raw)
        return self.state.quality_score

    @router(write_draft)
    def quality_gate(self, score):
        """Route based on quality score."""
        return "approved" if score >= 8 else "needs_revision"

    @listen("approved")
    def publish(self):
        self.state.final_content = self.state.draft
        print("✅ Published:", self.state.final_content[:100])

    @listen("needs_revision")
    def revise(self):
        print("🔄 Revising draft (score too low)...")
        # Trigger another write cycle
        self.write_draft(self.state.research)

    def _score_draft(self, draft: str) -> int:
        # Simplified scoring — in practice, use an LLM evaluator
        return min(10, len(draft.split()) // 50)

flow = ContentPipeline()
flow.kickoff()`,
  },
  {
    id: "autogen-basic",
    framework: "AutoGen",
    frameworkColor: "#4ECDC4",
    frameworkBg: "#F0FFFE",
    title: "Two-Agent Chat",
    difficulty: "Beginner",
    time: "~20 min",
    description:
      "The foundational AutoGen pattern: an AssistantAgent generates responses and a UserProxyAgent executes code, providing feedback in a back-and-forth dialogue.",
    tags: ["conversation", "code execution", "feedback"],
    steps: [
      {
        label: "AssistantAgent",
        icon: "🤖",
        detail:
          "Create an AssistantAgent backed by an LLM. It generates plans, code, and responses.",
      },
      {
        label: "UserProxyAgent",
        icon: "🧑‍💻",
        detail:
          "Create a UserProxyAgent with human_input_mode and code_execution_config. It runs code and replies with output.",
      },
      {
        label: "Initiate chat",
        icon: "💬",
        detail:
          "Call user_proxy.initiate_chat(assistant, message=task). AutoGen manages the multi-turn conversation.",
      },
      {
        label: "Execution loop",
        icon: "🔁",
        detail:
          "Assistant proposes code → UserProxy executes it → result fed back → assistant refines → repeat.",
      },
      {
        label: "Termination",
        icon: "🏁",
        detail:
          "Chat ends when TERMINATE appears in a message or max_turns is reached.",
      },
    ],
    code: `import autogen

config_list = [{"model": "gpt-4o", "api_key": "YOUR_KEY"}]

llm_config = {
    "config_list": config_list,
    "cache_seed": 42,
    "temperature": 0,
}

assistant = autogen.AssistantAgent(
    name="Assistant",
    llm_config=llm_config,
    system_message=(
        "You are a helpful AI assistant. "
        "Solve tasks using Python code. "
        "When done, reply TERMINATE."
    ),
)

user_proxy = autogen.UserProxyAgent(
    name="UserProxy",
    human_input_mode="NEVER",          # fully automated
    max_consecutive_auto_reply=10,
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
    code_execution_config={
        "work_dir": "coding",
        "use_docker": False,           # set True in production
    },
    llm_config=False,
)

user_proxy.initiate_chat(
    assistant,
    message=(
        "Plot a bar chart of the top 5 programming languages "
        "by popularity in 2024 and save it as chart.png."
    ),
)`,
  },
  {
    id: "autogen-groupchat",
    framework: "AutoGen",
    frameworkColor: "#4ECDC4",
    frameworkBg: "#F0FFFE",
    title: "Group Chat",
    difficulty: "Intermediate",
    time: "~40 min",
    description:
      "Multiple agents collaborate in a shared conversation. A GroupChatManager uses an LLM to decide who speaks next — enabling dynamic multi-agent debate and specialization.",
    tags: ["group chat", "multi-agent", "manager"],
    steps: [
      {
        label: "Create specialists",
        icon: "👥",
        detail:
          "Instantiate multiple AssistantAgents, each with a distinct system message defining their expertise.",
      },
      {
        label: "GroupChat object",
        icon: "💬",
        detail:
          "Create a GroupChat with all agents, max_round, and speaker selection strategy (auto, round_robin, manual).",
      },
      {
        label: "GroupChatManager",
        icon: "🧑‍⚖️",
        detail:
          "Wrap GroupChat in a GroupChatManager. The manager LLM selects the next speaker each turn.",
      },
      {
        label: "Initiate conversation",
        icon: "🚀",
        detail:
          "Call user_proxy.initiate_chat(manager, message=task). Agents take turns contributing.",
      },
      {
        label: "Shared transcript",
        icon: "📜",
        detail:
          "All messages are appended to a shared transcript each agent can reference.",
      },
    ],
    code: `import autogen

config_list = [{"model": "gpt-4o", "api_key": "YOUR_KEY"}]
llm_config = {"config_list": config_list, "temperature": 0}

# Specialist agents
planner = autogen.AssistantAgent(
    name="Planner",
    system_message=(
        "You are a project planner. Break complex tasks into clear steps. "
        "Coordinate the team and summarize progress."
    ),
    llm_config=llm_config,
)

engineer = autogen.AssistantAgent(
    name="Engineer",
    system_message=(
        "You are a senior software engineer. Write clean, efficient code. "
        "Focus on implementation and technical correctness."
    ),
    llm_config=llm_config,
)

critic = autogen.AssistantAgent(
    name="Critic",
    system_message=(
        "You are a code reviewer. Identify bugs, edge cases, and improvements. "
        "Be specific and constructive."
    ),
    llm_config=llm_config,
)

user_proxy = autogen.UserProxyAgent(
    name="User",
    human_input_mode="NEVER",
    code_execution_config={"work_dir": "groupchat_code", "use_docker": False},
    is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
)

group_chat = autogen.GroupChat(
    agents=[user_proxy, planner, engineer, critic],
    messages=[],
    max_round=15,
    speaker_selection_method="auto",   # LLM picks the best next speaker
)

manager = autogen.GroupChatManager(
    groupchat=group_chat,
    llm_config=llm_config,
)

user_proxy.initiate_chat(
    manager,
    message=(
        "Build a REST API endpoint in Python using FastAPI that accepts a "
        "JSON payload, validates it with Pydantic, and returns a summary."
    ),
)`,
  },
  {
    id: "autogen-swarm",
    framework: "AutoGen",
    frameworkColor: "#4ECDC4",
    frameworkBg: "#F0FFFE",
    title: "Swarm Orchestration",
    difficulty: "Advanced",
    time: "~55 min",
    description:
      "AutoGen 0.4+ Swarm pattern: agents hand off control via structured handoff objects. Enables stateful, parallel, event-driven multi-agent pipelines.",
    tags: ["swarm", "handoff", "stateful"],
    steps: [
      {
        label: "Define handoffs",
        icon: "🤝",
        detail:
          "Create SwarmAgent instances with on_condition handoffs that transfer control based on tool results or conditions.",
      },
      {
        label: "Shared context",
        icon: "📦",
        detail:
          "Pass a context_variables dict that persists across all agents in the swarm — the shared blackboard.",
      },
      {
        label: "Entry agent",
        icon: "🚪",
        detail:
          "Designate the first agent to receive the task. It decides to act or hand off immediately.",
      },
      {
        label: "Handoff chain",
        icon: "⛓️",
        detail:
          "Each agent processes its part and calls a handoff function to transfer control and updated context.",
      },
      {
        label: "Termination",
        icon: "🏁",
        detail:
          "Any agent can trigger AFTER_WORK.TERMINATE or hand off to a closing agent.",
      },
    ],
    code: `from autogen import (
    SwarmAgent, initiate_swarm_chat,
    ON_CONDITION, AFTER_WORK, AfterWorkOption
)
from openai import OpenAI

client = OpenAI()

def triage_ticket(ticket: str, context_variables: dict) -> str:
    """Classify support ticket and route to specialist."""
    category = "billing" if "invoice" in ticket.lower() else "technical"
    context_variables["ticket"] = ticket
    context_variables["category"] = category
    return f"Ticket categorized as: {category}"

def resolve_billing(context_variables: dict) -> str:
    """Handle billing queries."""
    return f"Resolved billing issue for: {context_variables['ticket']}"

def resolve_technical(context_variables: dict) -> str:
    """Handle technical queries."""
    return f"Resolved technical issue for: {context_variables['ticket']}"

# Swarm agents
triage_agent = SwarmAgent(
    name="Triage",
    system_message="Classify customer tickets and route to the right specialist.",
    functions=[triage_ticket],
    handoffs=[
        ON_CONDITION(
            target="BillingAgent",
            condition="When category is billing",
        ),
        ON_CONDITION(
            target="TechAgent",
            condition="When category is technical",
        ),
    ],
    llm_config={"model": "gpt-4o"},
)

billing_agent = SwarmAgent(
    name="BillingAgent",
    system_message="Resolve billing and payment issues professionally.",
    functions=[resolve_billing],
    after_work=AFTER_WORK(AfterWorkOption.TERMINATE),
    llm_config={"model": "gpt-4o"},
)

tech_agent = SwarmAgent(
    name="TechAgent",
    system_message="Diagnose and resolve technical issues with clear steps.",
    functions=[resolve_technical],
    after_work=AFTER_WORK(AfterWorkOption.TERMINATE),
    llm_config={"model": "gpt-4o"},
)

context = {}
chat_result, final_context, last_agent = initiate_swarm_chat(
    initial_agent=triage_agent,
    agents=[triage_agent, billing_agent, tech_agent],
    messages="My invoice shows a double charge from last month.",
    context_variables=context,
)`,
  },
  {
    id: "langgraph-basic",
    framework: "LangGraph",
    frameworkColor: "#6BCB77",
    frameworkBg: "#F0FFF4",
    title: "State Machine Graph",
    difficulty: "Beginner",
    time: "~25 min",
    description:
      "Model your agent as a directed graph where nodes are Python functions and edges are transitions. LangGraph manages state flow, cycles, and conditionals.",
    tags: ["graph", "state", "nodes"],
    steps: [
      {
        label: "Define state",
        icon: "📦",
        detail:
          "Create a TypedDict (or Pydantic model) as the shared state schema. Every node reads from and writes to this state.",
      },
      {
        label: "Write nodes",
        icon: "⬡",
        detail:
          "Each node is a plain Python function that takes state and returns a dict of updates. Nodes can call LLMs, tools, or any logic.",
      },
      {
        label: "Build graph",
        icon: "🔗",
        detail:
          "Instantiate StateGraph(State), add nodes, add edges (including conditional edges for branching).",
      },
      {
        label: "Compile",
        icon: "⚙️",
        detail:
          "Call graph.compile() (optionally with a checkpointer for persistence). Returns a runnable app.",
      },
      {
        label: "Invoke",
        icon: "▶️",
        detail:
          "Call app.invoke({initial_state}) or app.stream() for token-level streaming.",
      },
    ],
    code: `from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, AIMessage
import operator

# ── State schema ──────────────────────────────────────────────────────────────
class AgentState(TypedDict):
    messages: Annotated[list, operator.add]  # auto-append each node's messages
    next_step: str

# ── LLM ───────────────────────────────────────────────────────────────────────
llm = ChatOpenAI(model="gpt-4o", temperature=0)

# ── Nodes ─────────────────────────────────────────────────────────────────────
def plan_node(state: AgentState) -> dict:
    """Break the task into sub-steps."""
    response = llm.invoke(
        [HumanMessage(content=f"Create a brief plan for: {state['messages'][-1].content}")]
    )
    return {"messages": [response], "next_step": "execute"}

def execute_node(state: AgentState) -> dict:
    """Execute based on the plan."""
    plan = state["messages"][-1].content
    response = llm.invoke(
        [HumanMessage(content=f"Execute this plan step by step:\n{plan}")]
    )
    return {"messages": [response], "next_step": "review"}

def review_node(state: AgentState) -> dict:
    """Review the result and decide if done."""
    result = state["messages"][-1].content
    response = llm.invoke(
        [HumanMessage(content=f"Is this result complete and correct? Reply 'done' or 'retry'.\nResult: {result}")]
    )
    verdict = "done" if "done" in response.content.lower() else "retry"
    return {"messages": [response], "next_step": verdict}

def route(state: AgentState) -> str:
    return state["next_step"]

# ── Graph ─────────────────────────────────────────────────────────────────────
builder = StateGraph(AgentState)
builder.add_node("plan", plan_node)
builder.add_node("execute", execute_node)
builder.add_node("review", review_node)

builder.set_entry_point("plan")
builder.add_edge("plan", "execute")
builder.add_edge("execute", "review")
builder.add_conditional_edges(
    "review",
    route,
    {"done": END, "retry": "execute"},
)

app = builder.compile()

result = app.invoke({
    "messages": [HumanMessage(content="Summarise the key risks of LLM agents in production.")],
    "next_step": "plan",
})
print(result["messages"][-1].content)`,
  },
  {
    id: "langgraph-multiagent",
    framework: "LangGraph",
    frameworkColor: "#6BCB77",
    frameworkBg: "#F0FFF4",
    title: "Multi-Agent Supervisor",
    difficulty: "Intermediate",
    time: "~45 min",
    description:
      "A supervisor node routes tasks to specialist subgraph agents. Each subgraph can have its own state, tools, and memory.",
    tags: ["supervisor", "subgraph", "routing"],
    steps: [
      {
        label: "Supervisor node",
        icon: "🗺️",
        detail:
          "The supervisor is a node that calls an LLM with a list of available workers and decides who acts next.",
      },
      {
        label: "Worker subgraphs",
        icon: "🤖",
        detail:
          "Each worker is its own compiled StateGraph with dedicated tools and system prompts.",
      },
      {
        label: "Route to worker",
        icon: "➡️",
        detail:
          "Conditional edges route from the supervisor to the selected worker or to END.",
      },
      {
        label: "Worker → Supervisor",
        icon: "↩️",
        detail:
          "After completing work, each worker returns control to the supervisor by routing back.",
      },
      {
        label: "Termination",
        icon: "🏁",
        detail:
          "Supervisor routes to END when all subtasks are complete.",
      },
    ],
    code: `from typing import TypedDict, Literal
from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage
import json

llm = ChatOpenAI(model="gpt-4o", temperature=0)

WORKERS = ["researcher", "coder", "writer"]

class SupervisorState(TypedDict):
    task: str
    results: dict
    next_worker: str

# ── Supervisor ─────────────────────────────────────────────────────────────────
def supervisor_node(state: SupervisorState) -> dict:
    completed = list(state.get("results", {}).keys())
    prompt = f"""
You are a supervisor. Route this task to the best worker.
Task: {state['task']}
Completed by: {completed}
Workers: {WORKERS}
Reply with JSON: {{"next": "<worker_name> or FINISH"}}
"""
    response = llm.invoke([HumanMessage(content=prompt)])
    decision = json.loads(response.content)
    return {"next_worker": decision["next"]}

def route_supervisor(state: SupervisorState) -> str:
    return state["next_worker"] if state["next_worker"] != "FINISH" else END

# ── Worker factories ───────────────────────────────────────────────────────────
def make_worker(name: str, system_prompt: str):
    def worker_node(state: SupervisorState) -> dict:
        response = llm.invoke([
            SystemMessage(content=system_prompt),
            HumanMessage(content=state["task"]),
        ])
        results = state.get("results", {})
        results[name] = response.content
        return {"results": results, "next_worker": "supervisor"}
    return worker_node

researcher_node = make_worker(
    "researcher",
    "You are a research specialist. Gather and summarize key facts.",
)
coder_node = make_worker(
    "coder",
    "You are a software engineer. Write clean, working code.",
)
writer_node = make_worker(
    "writer",
    "You are a technical writer. Create clear, engaging documentation.",
)

# ── Graph ─────────────────────────────────────────────────────────────────────
builder = StateGraph(SupervisorState)
builder.add_node("supervisor", supervisor_node)
builder.add_node("researcher", researcher_node)
builder.add_node("coder", coder_node)
builder.add_node("writer", writer_node)

builder.set_entry_point("supervisor")
builder.add_conditional_edges("supervisor", route_supervisor,
    {"researcher": "researcher", "coder": "coder", "writer": "writer", END: END})

for worker in WORKERS:
    builder.add_edge(worker, "supervisor")

app = builder.compile()
result = app.invoke({"task": "Build a Python CLI tool for CSV analysis", "results": {}, "next_worker": ""})`,
  },
  {
    id: "langgraph-persistence",
    framework: "LangGraph",
    frameworkColor: "#6BCB77",
    frameworkBg: "#F0FFF4",
    title: "Persistent Memory & Human-in-the-Loop",
    difficulty: "Advanced",
    time: "~60 min",
    description:
      "Use LangGraph's checkpointer for cross-session memory and interrupt_before to pause and request human approval at critical nodes.",
    tags: ["persistence", "checkpointer", "human-in-loop"],
    steps: [
      {
        label: "Checkpointer",
        icon: "💾",
        detail:
          "Attach a SqliteSaver or PostgresSaver to graph.compile(). Every state update is checkpointed by thread_id.",
      },
      {
        label: "Thread IDs",
        icon: "🧵",
        detail:
          "Pass config={'configurable':{'thread_id':'user-123'}} to invoke. Same thread_id resumes the previous session.",
      },
      {
        label: "interrupt_before",
        icon: "⏸️",
        detail:
          "Compile with interrupt_before=['dangerous_node'] to pause automatically before sensitive operations.",
      },
      {
        label: "Inspect & approve",
        icon: "👁️",
        detail:
          "Call app.get_state(config) to see the pending state. Update it with app.update_state() if needed.",
      },
      {
        label: "Resume",
        icon: "▶️",
        detail:
          "Call app.invoke(None, config) to resume from the checkpoint with None as input.",
      },
    ],
    code: `from langgraph.graph import StateGraph, END
from langgraph.checkpoint.sqlite import SqliteSaver
from typing import TypedDict, Annotated
from langchain_openai import ChatOpenAI
from langchain_core.messages import BaseMessage, HumanMessage
import operator

class ChatState(TypedDict):
    messages: Annotated[list[BaseMessage], operator.add]
    pending_action: str | None

llm = ChatOpenAI(model="gpt-4o")

def chat_node(state: ChatState) -> dict:
    response = llm.invoke(state["messages"])
    # If response contains a dangerous action, flag it
    if "DELETE" in response.content or "DROP" in response.content:
        return {"messages": [response], "pending_action": response.content}
    return {"messages": [response], "pending_action": None}

def execute_action_node(state: ChatState) -> dict:
    """Only reached after human approval."""
    print(f"Executing approved action: {state['pending_action']}")
    return {"pending_action": None}

def route_after_chat(state: ChatState) -> str:
    return "execute_action" if state.get("pending_action") else END

builder = StateGraph(ChatState)
builder.add_node("chat", chat_node)
builder.add_node("execute_action", execute_action_node)
builder.set_entry_point("chat")
builder.add_conditional_edges("chat", route_after_chat, {
    "execute_action": "execute_action",
    END: END,
})
builder.add_edge("execute_action", END)

# ── Persistence + Human-in-the-Loop ──────────────────────────────────────────
memory = SqliteSaver.from_conn_string(":memory:")
app = builder.compile(
    checkpointer=memory,
    interrupt_before=["execute_action"],   # pause before destructive ops
)

config = {"configurable": {"thread_id": "session-42"}}

# Turn 1
app.invoke({"messages": [HumanMessage("DROP the users table")], "pending_action": None}, config)

# Inspect pending state
state = app.get_state(config)
print("Pending action:", state.values.get("pending_action"))
approval = input("Approve? (yes/no): ")

if approval.strip().lower() == "yes":
    app.invoke(None, config)   # ← resume from checkpoint
else:
    app.update_state(config, {"pending_action": None})
    print("Action cancelled.")`,
  },
  {
    id: "semantic-kernel",
    framework: "Semantic Kernel",
    frameworkColor: "#A78BFA",
    frameworkBg: "#F5F3FF",
    title: "Plugin & Planner",
    difficulty: "Intermediate",
    time: "~35 min",
    description:
      "Microsoft's Semantic Kernel uses Plugins (collections of KernelFunctions) and Planners to automatically decompose goals into function call sequences.",
    tags: ["plugins", "planner", "functions"],
    steps: [
      {
        label: "Create Kernel",
        icon: "⚙️",
        detail:
          "Instantiate a Kernel and add an AI service (OpenAI, Azure OpenAI, etc.) with add_service().",
      },
      {
        label: "Define plugins",
        icon: "🔌",
        detail:
          "Decorate Python methods with @kernel_function. Group related functions in a class and register as a plugin.",
      },
      {
        label: "Choose a planner",
        icon: "📋",
        detail:
          "FunctionChoiceBehavior.Auto() lets the kernel automatically invoke plugins. Or use SequentialPlanner for step-by-step plans.",
      },
      {
        label: "Invoke with goal",
        icon: "🎯",
        detail:
          "Call kernel.invoke() or chat_completion.get_chat_message_content() with auto function calling enabled.",
      },
      {
        label: "Observe plan",
        icon: "👁️",
        detail:
          "Inspect the execution trace to see which functions were called and in what order.",
      },
    ],
    code: `import asyncio
from semantic_kernel import Kernel
from semantic_kernel.functions import kernel_function
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion
from semantic_kernel.connectors.ai.function_choice_behavior import FunctionChoiceBehavior
from semantic_kernel.connectors.ai.open_ai import OpenAIChatPromptExecutionSettings
from semantic_kernel.contents import ChatHistory

kernel = Kernel()
kernel.add_service(OpenAIChatCompletion(service_id="gpt4o", ai_model_id="gpt-4o"))

# ── Plugin definitions ─────────────────────────────────────────────────────────
class SearchPlugin:
    @kernel_function(name="web_search", description="Search the web for current information")
    def web_search(self, query: str) -> str:
        return f"[Search results for '{query}']: Latest data on {query}..."

class MathPlugin:
    @kernel_function(name="calculate", description="Evaluate a math expression")
    def calculate(self, expression: str) -> str:
        try:
            return str(eval(expression, {"__builtins__": {}}))
        except Exception as e:
            return f"Error: {e}"

class EmailPlugin:
    @kernel_function(name="send_email", description="Send an email to a recipient")
    def send_email(self, to: str, subject: str, body: str) -> str:
        print(f"📧 Email sent to {to}: {subject}")
        return f"Email successfully sent to {to}."

# Register plugins
kernel.add_plugin(SearchPlugin(), plugin_name="Search")
kernel.add_plugin(MathPlugin(), plugin_name="Math")
kernel.add_plugin(EmailPlugin(), plugin_name="Email")

async def run_agent(goal: str):
    chat_completion = kernel.get_service("gpt4o")
    history = ChatHistory()
    history.add_user_message(goal)

    settings = OpenAIChatPromptExecutionSettings(
        function_choice_behavior=FunctionChoiceBehavior.Auto()
    )

    response = await chat_completion.get_chat_message_content(
        chat_history=history,
        settings=settings,
        kernel=kernel,
    )
    print("Final answer:", response)
    return response

asyncio.run(run_agent(
    "Search for the current EUR/USD exchange rate, calculate 1500 EUR in USD, "
    "then email the result to finance@example.com with subject 'FX Update'."
))`,
  },
  {
    id: "dspy-basic",
    framework: "DSPy",
    frameworkColor: "#F59E0B",
    frameworkBg: "#FFFBEB",
    title: "Signature & Module",
    difficulty: "Beginner",
    time: "~20 min",
    description:
      "DSPy replaces prompt engineering with typed Signatures and compiled Modules. Define inputs/outputs declaratively; DSPy optimizes the prompts automatically.",
    tags: ["signatures", "modules", "optimization"],
    steps: [
      {
        label: "Configure LM",
        icon: "⚙️",
        detail:
          "Call dspy.configure(lm=...) to set the global language model. All modules use this unless overridden.",
      },
      {
        label: "Define Signature",
        icon: "📝",
        detail:
          "Subclass dspy.Signature with docstring + InputField/OutputField. The docstring IS the task description.",
      },
      {
        label: "Build Module",
        icon: "🧩",
        detail:
          "Compose Signatures into Modules using Predict, ChainOfThought, or ReAct. Modules are composable.",
      },
      {
        label: "Compile (optional)",
        icon: "🔧",
        detail:
          "Use dspy.BootstrapFewShot or MIPROv2 optimizers with a metric + training set to auto-tune prompts.",
      },
      {
        label: "Forward pass",
        icon: "▶️",
        detail:
          "Call module(**inputs) to run inference. DSPy handles prompt construction and output parsing.",
      },
    ],
    code: `import dspy

# ── Configure LM ──────────────────────────────────────────────────────────────
lm = dspy.LM("openai/gpt-4o", temperature=0.1)
dspy.configure(lm=lm)

# ── Signatures (declarative I/O contracts) ────────────────────────────────────
class ResearchQuery(dspy.Signature):
    """Extract a precise search query from a user question."""
    question: str = dspy.InputField(desc="The user's raw question")
    query: str = dspy.OutputField(desc="Optimised search query (≤ 8 words)")

class Summarize(dspy.Signature):
    """Summarise search results to answer the original question."""
    question: str = dspy.InputField()
    search_results: str = dspy.InputField(desc="Raw search results")
    answer: str = dspy.OutputField(desc="Concise, factual 2-3 sentence answer")
    confidence: float = dspy.OutputField(desc="Confidence 0.0–1.0")

# ── Module (composable pipeline) ──────────────────────────────────────────────
class ResearchAgent(dspy.Module):
    def __init__(self):
        self.query_extractor = dspy.ChainOfThought(ResearchQuery)
        self.summarizer = dspy.ChainOfThought(Summarize)

    def forward(self, question: str) -> dspy.Prediction:
        # Step 1: Extract search query
        query_pred = self.query_extractor(question=question)

        # Step 2: Simulate search (replace with real retriever)
        search_results = self._search(query_pred.query)

        # Step 3: Summarise
        summary = self.summarizer(question=question, search_results=search_results)
        return summary

    def _search(self, query: str) -> str:
        return f"[Mock results for '{query}']: Recent studies show that {query} ..."

agent = ResearchAgent()
result = agent(question="What are the latest benchmarks for GPT-4o vs Claude 3.5?")
print("Answer:", result.answer)
print("Confidence:", result.confidence)

# ── Compile with optimizer ────────────────────────────────────────────────────
# trainset = [dspy.Example(question=q, answer=a) for q, a in training_data]
# metric = lambda example, pred, trace=None: example.answer.lower() in pred.answer.lower()
# optimizer = dspy.BootstrapFewShot(metric=metric, max_bootstrapped_demos=4)
# compiled_agent = optimizer.compile(agent, trainset=trainset)`,
  },
  {
    id: "haystack-pipeline",
    framework: "Haystack",
    frameworkColor: "#14B8A6",
    frameworkBg: "#F0FDFA",
    title: "RAG Pipeline",
    difficulty: "Intermediate",
    time: "~40 min",
    description:
      "Build production RAG pipelines with Haystack's component graph. Connect document stores, embedders, retrievers, and generators as typed nodes.",
    tags: ["RAG", "retrieval", "pipeline"],
    steps: [
      {
        label: "Document store",
        icon: "🗄️",
        detail:
          "Choose a DocumentStore (InMemory, Elasticsearch, Pinecone, Weaviate). Documents are indexed with embeddings.",
      },
      {
        label: "Indexing pipeline",
        icon: "📥",
        detail:
          "Connect Converter → Splitter → Embedder → DocumentWriter. Run once to index your corpus.",
      },
      {
        label: "Query pipeline",
        icon: "🔍",
        detail:
          "Connect Embedder → Retriever → PromptBuilder → Generator. Haystack validates connections by type.",
      },
      {
        label: "Connect components",
        icon: "🔗",
        detail:
          "Use pipeline.connect('component_a.output', 'component_b.input') with typed socket names.",
      },
      {
        label: "Run pipeline",
        icon: "▶️",
        detail:
          "Call pipeline.run({'component': {'param': value}}) with a dict of component-level inputs.",
      },
    ],
    code: `from haystack import Pipeline, Document
from haystack.document_stores.in_memory import InMemoryDocumentStore
from haystack.components.embedders import (
    SentenceTransformersDocumentEmbedder,
    SentenceTransformersTextEmbedder,
)
from haystack.components.retrievers.in_memory import InMemoryEmbeddingRetriever
from haystack.components.builders import PromptBuilder
from haystack.components.generators import OpenAIGenerator

# ── Document store & sample docs ──────────────────────────────────────────────
store = InMemoryDocumentStore()

sample_docs = [
    Document(content="LangGraph is a graph-based multi-agent orchestration framework by LangChain."),
    Document(content="CrewAI enables role-based multi-agent collaboration with tasks and tools."),
    Document(content="AutoGen uses conversational agents that collaborate through message passing."),
]

# ── Indexing pipeline ─────────────────────────────────────────────────────────
indexer = Pipeline()
indexer.add_component("embedder", SentenceTransformersDocumentEmbedder())
indexer.add_component("writer", haystack.components.writers.DocumentWriter(document_store=store))
indexer.connect("embedder.documents", "writer.documents")
indexer.run({"embedder": {"documents": sample_docs}})

# ── RAG query pipeline ────────────────────────────────────────────────────────
template = """
You are a helpful AI assistant. Answer the question based on the provided context.
Context:
{% for doc in documents %}
  {{ doc.content }}
{% endfor %}

Question: {{ question }}
Answer:
"""

rag = Pipeline()
rag.add_component("text_embedder", SentenceTransformersTextEmbedder())
rag.add_component("retriever", InMemoryEmbeddingRetriever(document_store=store, top_k=3))
rag.add_component("prompt_builder", PromptBuilder(template=template))
rag.add_component("llm", OpenAIGenerator(model="gpt-4o"))

# Connect components
rag.connect("text_embedder.embedding", "retriever.query_embedding")
rag.connect("retriever.documents", "prompt_builder.documents")
rag.connect("prompt_builder.prompt", "llm.prompt")

# Run
result = rag.run({
    "text_embedder": {"text": "What is CrewAI?"},
    "prompt_builder": {"question": "What is CrewAI?"},
})
print(result["llm"]["replies"][0])`,
  },
];

// ─── Constants ────────────────────────────────────────────────────────────────

const ALL_FRAMEWORKS = ["All", "CrewAI", "AutoGen", "LangGraph", "Semantic Kernel", "DSPy", "Haystack"];

const DIFFICULTY_STYLES = {
  Beginner: { bg: "#E1F5EE", color: "#0F6E56" },
  Intermediate: { bg: "#EEEDFE", color: "#534AB7" },
  Advanced: { bg: "#FAECE7", color: "#993C1D" },
};

const FRAMEWORK_DOT = {
  CrewAI: "#FF6B6B",
  AutoGen: "#4ECDC4",
  LangGraph: "#6BCB77",
  "Semantic Kernel": "#A78BFA",
  DSPy: "#F59E0B",
  Haystack: "#14B8A6",
};

// ─── Components ───────────────────────────────────────────────────────────────

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
                border: active === i
                  ? "1.5px solid #7F77DD"
                  : "0.5px solid var(--color-border-tertiary, #e0e0e0)",
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

function FrameworkBadge({ name, color, bg }) {
  return (
    <span
      style={{
        fontSize: 11,
        padding: "2px 8px",
        borderRadius: 20,
        fontWeight: 600,
        background: bg,
        color: color,
        letterSpacing: "0.01em",
      }}
    >
      {name}
    </span>
  );
}

function RecipeCard({ recipe, onSelect, selected }) {
  const diff = DIFFICULTY_STYLES[recipe.difficulty];
  return (
    <div
      onClick={() => onSelect(recipe)}
      style={{
        padding: "14px 16px",
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: FRAMEWORK_DOT[recipe.framework] || "#999",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 12, color: "var(--color-text-secondary, #555)", fontWeight: 400 }}>
            {recipe.framework}
          </span>
        </div>
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
      <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 4, color: "var(--color-text-primary, #111)" }}>
        {recipe.title}
      </div>
      <div style={{ fontSize: 12, color: "var(--color-text-secondary, #555)", lineHeight: 1.5 }}>
        {recipe.description}
      </div>
      <div style={{ marginTop: 8, display: "flex", gap: 5, flexWrap: "wrap" }}>
        {recipe.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 10,
              padding: "2px 7px",
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
        <div>
          <FrameworkBadge
            name={recipe.framework}
            color={recipe.frameworkColor}
            bg={recipe.frameworkBg}
          />
          <h2 style={{ margin: "6px 0 6px", fontSize: 22, fontWeight: 500 }}>{recipe.title}</h2>
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
      <p style={{ margin: "0 0 20px", color: "var(--color-text-secondary, #555)", fontSize: 14, lineHeight: 1.6 }}>
        {recipe.description}
      </p>

      <div
        style={{
          display: "flex",
          gap: 4,
          marginBottom: 18,
          borderBottom: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
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
              color: tab === t ? "var(--color-text-primary, #111)" : "var(--color-text-secondary, #555)",
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

function Sidebar({ recipes, selected, onSelect, framework, setFramework, search, setSearch }) {
  const filtered = recipes.filter((r) => {
    const matchFw = framework === "All" || r.framework === framework;
    const matchSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.framework.toLowerCase().includes(search.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchFw && matchSearch;
  });

  // Group by framework for display
  const grouped = {};
  filtered.forEach((r) => {
    if (!grouped[r.framework]) grouped[r.framework] = [];
    grouped[r.framework].push(r);
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 0 }}>
      <div style={{ padding: "0 0 14px" }}>
        <input
          type="text"
          placeholder="Search patterns…"
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
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 14 }}>
        {ALL_FRAMEWORKS.map((f) => (
          <button
            key={f}
            onClick={() => setFramework(f)}
            style={{
              padding: "3px 10px",
              borderRadius: 20,
              fontSize: 11,
              cursor: "pointer",
              fontFamily: "inherit",
              border: framework === f
                ? `1.5px solid ${FRAMEWORK_DOT[f] || "#7F77DD"}`
                : "0.5px solid var(--color-border-tertiary, #e0e0e0)",
              background: framework === f
                ? (f === "All" ? "#EEEDFE" : undefined)
                : "var(--color-background-primary, #fff)",
              backgroundColor: framework === f && f !== "All"
                ? FRAMEWORK_DOT[f] + "22"
                : undefined,
              color: framework === f
                ? (FRAMEWORK_DOT[f] || "#534AB7")
                : "var(--color-text-secondary, #555)",
              fontWeight: framework === f ? 600 : 400,
            }}
          >
            {f !== "All" && (
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: FRAMEWORK_DOT[f],
                  display: "inline-block",
                  marginRight: 4,
                  verticalAlign: "middle",
                }}
              />
            )}
            {f}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, overflowY: "auto", flex: 1 }}>
        {filtered.length === 0 ? (
          <div style={{ color: "var(--color-text-tertiary, #aaa)", fontSize: 13, padding: "12px 0" }}>
            No recipes found.
          </div>
        ) : framework === "All" ? (
          // Show grouped by framework when "All" is selected
          Object.entries(grouped).map(([fw, items]) => (
            <div key={fw} style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 8,
                  paddingBottom: 6,
                  borderBottom: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: FRAMEWORK_DOT[fw],
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 600, color: "var(--color-text-secondary, #555)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {fw}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {items.map((r) => (
                  <RecipeCard key={r.id} recipe={r} onSelect={onSelect} selected={selected?.id === r.id} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((r) => (
              <RecipeCard key={r.id} recipe={r} onSelect={onSelect} selected={selected?.id === r.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Header({ totalRecipes }) {
  const frameworkCount = ALL_FRAMEWORKS.length - 1;
  return (
    <div
      style={{
        padding: "18px 28px 14px",
        borderBottom: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
        display: "flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "linear-gradient(135deg, #EEEDFE 0%, #F0FFF4 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          flexShrink: 0,
          border: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
        }}
      >
        🕸️
      </div>
      <div>
        <h1 style={{ margin: 0, fontSize: 19, fontWeight: 500, letterSpacing: "-0.3px" }}>
          Multi-Agent Frameworks
        </h1>
        <p style={{ margin: 0, fontSize: 12, color: "var(--color-text-secondary, #555)" }}>
          Patterns for CrewAI, AutoGen, LangGraph, Semantic Kernel, DSPy & Haystack
        </p>
      </div>
      <div style={{ marginLeft: "auto", display: "flex", gap: 20 }}>
        {[
          { label: "Recipes", value: totalRecipes },
          { label: "Frameworks", value: frameworkCount },
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

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [selected, setSelected] = useState(FRAMEWORKS[0]);
  const [framework, setFramework] = useState("All");
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
      <Header totalRecipes={FRAMEWORKS.length} />
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div
          style={{
            width: 330,
            minWidth: 260,
            padding: "18px 16px",
            borderRight: "0.5px solid var(--color-border-tertiary, #e0e0e0)",
            background: "var(--color-background-primary, #fff)",
            overflowY: "auto",
          }}
        >
          <Sidebar
            recipes={FRAMEWORKS}
            selected={selected}
            onSelect={setSelected}
            framework={framework}
            setFramework={setFramework}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "22px 24px" }}>
          {selected ? (
            <RecipeDetail recipe={selected} />
          ) : (
            <div style={{ color: "var(--color-text-tertiary, #aaa)", padding: 40, textAlign: "center" }}>
              Select a recipe to get started
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
