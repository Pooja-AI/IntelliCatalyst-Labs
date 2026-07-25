import ProductivityAgent from "../assets/architecture/ProductivityAgent.png"
import AgentProductivityBanner from "../assets/banners/AgentProductivity-banner.png"
import AutonomousDataanalysis from "../assets/architecture/autonomous-data-analysis-arch.png"
import AutonomousDataanalysisBanner from "../assets/banners/autonomous-data-analysis.png"
import MultiagentWorkflow from "../assets/architecture/multiagentworkflow.png"
import MultiAgentBanner from "../assets/banners/MultiAgentOrch.png"
import ResearchAgentBanner from "../assets/banners/ResearchAgent-banner.png"
import ResearchAgent from "../assets/architecture/research-agent-arch.png"
import CustomerSupportAgent from "../assets/architecture/CustomerSupportAgent.png"
import CustomerSupportAgentBanner from "../assets/banners/CustomerSupportAgentBanner.png"
import SalesAgent from "../assets/architecture/SalesAgent.png"
import SalesAgentBanner from "../assets/banners/SalesAgent.png"

const agenticAIProjects = [
  {
    id: "personal-productivity-agent",
    title: "AI Personal Productivity Agent",
    banner:AgentProductivityBanner,
    category: "Autonomous Agents",
    description:
      "Autonomous AI agent that plans, prioritizes, and executes personal productivity tasks using tool-calling and reasoning loops.",

    problemStatement:
      "Individuals struggle to manage tasks efficiently across multiple tools and calendars. This agent automates planning and execution of daily workflows.",

    architecture: ProductivityAgent,

    workflow: [
      "User input task collection",
      "Task prioritization",
      "LLM-based planning",
      "Tool selection and execution",
      "Feedback loop optimization"
    ],

    deployment:
      "Deployed as an autonomous agent system with API-based tool integration and LLM orchestration layer.",

    github: "https://github.com/Pooja-AI/productivity-agent",
    demo: "",
    documentation: "https://github.com/Pooja-AI/productivity-agent/blob/main/README.md",
    tech: ["Python", "LLMs", "Tool Calling", "Agents"]
  },


  {
    id: "autonomous-data-analysis",
    title: "Autonomous Data Analysis Agent",
    banner:AutonomousDataanalysisBanner,
    category: "Data Agents",
    description:
      "AI agent that automatically fetches, analyzes, and generates structured reports from data sources.",

    problemStatement:
      "Data analysts spend time manually processing and summarizing datasets. This agent automates end-to-end analysis.",

    architecture: AutonomousDataanalysis,

    workflow: [
      "Data source connection",
      "Data ingestion",
      "Cleaning and preprocessing",
      "Automated EDA",
      "Insight generation",
      "Report creation"
    ],

    deployment:
      "Deployed using Python-based automation pipeline with LLM-powered analysis engine.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Pandas", "LLMs", "Automation"]
  },

  {
    id: "multi-agent-workflow",
    title: "Multi-Agent Workflow Automation System",
    banner: MultiAgentBanner,
    category: "Multi-Agent Systems",
    description:
      "Collaborative AI agents working together to execute complex enterprise workflows.",

    problemStatement:
      "Single agents cannot efficiently handle complex multi-step workflows requiring specialization and coordination.",

    architecture: MultiagentWorkflow,

    workflow: [
      "Task decomposition",
      "Agent assignment",
      "Parallel execution",
      "Inter-agent communication",
      "Result aggregation"
    ],

    deployment:
      "Built using CrewAI / LangChain multi-agent orchestration framework.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "CrewAI", "LangChain", "Agents"]
  },

  {
    id: "research-agent",
    title: "AI Research Agent",
    banner:ResearchAgentBanner,
    category: "Research Agents",
    description:
      "Autonomous agent that searches, summarizes, and generates structured research reports.",

    problemStatement:
      "Researchers spend significant time gathering and summarizing information manually from multiple sources.",

    architecture: ResearchAgent,

    workflow: [
      "Query understanding",
      "Web/document search",
      "Information extraction",
      "Summarization",
      "Report generation"
    ],

    deployment:
      "Deployed with web-search enabled LLM agent pipeline and structured report generator.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "RAG", "LLMs", "Web Search"]
  },

  {
    id: "customer-support-agent",
    title: "Customer Support Agent with Tool Calling",
    banner:CustomerSupportAgentBanner,
    category: "Enterprise Agents",
    description:
      "AI agent that handles customer queries using tool calling, escalation logic, and knowledge retrieval.",

    problemStatement:
      "Customer support teams face high response delays due to manual handling of repetitive queries.",

    architecture: CustomerSupportAgent,

    workflow: [
      "Query classification",
      "Tool selection",
      "Knowledge retrieval",
      "Response generation",
      "Escalation handling"
    ],

    deployment:
      "Integrated into enterprise support systems with API-based tool execution.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Tool Calling", "LLMs"]
  },

  {
  id: "sales-agent",

  title: "Enterprise AI Sales Agent",
  banner:SalesAgentBanner,

  category: "Business Agents",

  description:
    "Production-grade AI Sales Agent that automates lead qualification, customer engagement, personalized outreach, proposal generation, CRM updates, and follow-up workflows using LLMs, RAG, Tool Calling, and Multi-Agent orchestration.",

  problemStatement:
    "Sales teams spend significant time qualifying leads, personalizing communication, updating CRM systems, scheduling meetings, and following up with prospects, reducing productivity and slowing revenue growth.",

  architecture: SalesAgent,

  workflow: [
    "Lead Ingestion",
    "Customer Data Enrichment",
    "AI Lead Scoring",
    "Intent Detection",
    "Knowledge Retrieval (RAG)",
    "Personalized Email & Proposal Generation",
    "Meeting Scheduling",
    "CRM Update",
    "Follow-up Automation",
    "Opportunity Prediction",
    "Sales Analytics Dashboard",
    "Human Approval (Optional)"
  ],

  deployment:
    "Deployed on Microsoft Azure using Azure OpenAI, Azure AI Search, Azure Functions, Azure Logic Apps, Azure Cosmos DB, Azure API Management, Azure Container Apps, Azure Monitor, and GitHub Actions CI/CD.",

  github: "",
  demo: "",
  documentation: "",

  tech: [
    "Python",
    "FastAPI",
    "Azure OpenAI",
    "GPT-4o",
    "LangGraph",
    "Semantic Kernel",
    "LangChain",
    "LlamaIndex",
    "RAG",
    "Tool Calling",
    "Function Calling",
    "MCP",
    "A2A",
    "Azure AI Search",
    "Azure Functions",
    "Azure Logic Apps",
    "Azure Cosmos DB",
    "Azure Blob Storage",
    "Azure API Management",
    "Azure Container Apps",
    "Azure Monitor",
    "Azure Application Insights",
    "Azure Key Vault",
    "Microsoft Entra ID",
    "Docker",
    "GitHub Actions",
    "Dynamics 365",
    "Salesforce",
    "HubSpot",
    "Microsoft Graph API",
    "Redis",
    "OpenTelemetry",
    "Langfuse"
  ]
},
  {
    id: "travel-agent",
    title: "Travel Planning Agent",
    category: "Planning Agents",
    description:
      "AI agent that generates travel itineraries and booking suggestions.",

    problemStatement:
      "Travel planning is time-consuming and requires coordination across multiple platforms.",

    architecture: "/architecture/travel-agent.png",

    workflow: [
      "User preference collection",
      "Destination analysis",
      "Itinerary generation",
      "Budget optimization",
      "Booking suggestions"
    ],

    deployment:
      "Deployed using API-based travel recommendation system with LLM planner.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "APIs"]
  },

  {
    id: "business-analyst-agent",
    title: "AI Business Analyst Agent",
    category: "Analytics Agents",
    description:
      "AI agent that performs KPI analysis and generates business insights automatically.",

    problemStatement:
      "Business analysts spend significant time manually generating reports and dashboards.",

    architecture: "/architecture/business-agent.png",

    workflow: [
      "Data ingestion",
      "KPI computation",
      "Trend analysis",
      "Insight generation",
      "Report creation"
    ],

    deployment:
      "Deployed as BI automation layer integrated with dashboards.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Pandas", "LLMs", "BI"]
  },

  {
    id: "email-management-agent",
    title: "Autonomous Email Management Agent",
    category: "Productivity Agents",
    description:
      "AI agent that sorts, prioritizes, and responds to emails intelligently.",

    problemStatement:
      "Professionals struggle with email overload and prioritization.",

    architecture: "/architecture/email-agent.png",

    workflow: [
      "Email ingestion",
      "Classification",
      "Priority scoring",
      "Auto-response generation",
      "Scheduling follow-ups"
    ],

    deployment:
      "Integrated with email APIs and LLM-based response engine.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Email APIs", "LLMs"]
  }
];

export default agenticAIProjects;