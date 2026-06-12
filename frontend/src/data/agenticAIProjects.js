const agenticAIProjects = [
  {
    id: "personal-productivity-agent",
    title: "AI Personal Productivity Agent",
    category: "Autonomous Agents",
    description:
      "Autonomous AI agent that plans, prioritizes, and executes personal productivity tasks using tool-calling and reasoning loops.",

    problemStatement:
      "Individuals struggle to manage tasks efficiently across multiple tools and calendars. This agent automates planning and execution of daily workflows.",

    architecture: "/architecture/productivity-agent.png",

    workflow: [
      "User input task collection",
      "Task prioritization",
      "LLM-based planning",
      "Tool selection and execution",
      "Feedback loop optimization"
    ],

    deployment:
      "Deployed as an autonomous agent system with API-based tool integration and LLM orchestration layer.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Tool Calling", "Agents"]
  },

  {
    id: "autonomous-data-analysis",
    title: "Autonomous Data Analysis Agent",
    category: "Data Agents",
    description:
      "AI agent that automatically fetches, analyzes, and generates structured reports from data sources.",

    problemStatement:
      "Data analysts spend time manually processing and summarizing datasets. This agent automates end-to-end analysis.",

    architecture: "/architecture/data-agent.png",

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
    category: "Multi-Agent Systems",
    description:
      "Collaborative AI agents working together to execute complex enterprise workflows.",

    problemStatement:
      "Single agents cannot efficiently handle complex multi-step workflows requiring specialization and coordination.",

    architecture: "/architecture/multi-agent.png",

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
    category: "Research Agents",
    description:
      "Autonomous agent that searches, summarizes, and generates structured research reports.",

    problemStatement:
      "Researchers spend significant time gathering and summarizing information manually from multiple sources.",

    architecture: "/architecture/research-agent.png",

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
    category: "Enterprise Agents",
    description:
      "AI agent that handles customer queries using tool calling, escalation logic, and knowledge retrieval.",

    problemStatement:
      "Customer support teams face high response delays due to manual handling of repetitive queries.",

    architecture: "/architecture/support-agent.png",

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
    title: "AI Sales Agent",
    category: "Business Agents",
    description:
      "AI-powered sales automation agent for lead qualification and customer engagement.",

    problemStatement:
      "Sales teams spend time manually qualifying leads and following up with prospects.",

    architecture: "/architecture/sales-agent.png",

    workflow: [
      "Lead ingestion",
      "Lead scoring",
      "Personalized messaging",
      "Follow-up automation",
      "CRM updates"
    ],

    deployment:
      "Deployed with CRM integration and LLM-based communication engine.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "CRM Automation", "LLMs"]
  },

  {
    id: "devops-agent",
    title: "AI DevOps Assistant Agent",
    category: "DevOps Agents",
    description:
      "Autonomous monitoring agent that detects system issues and suggests fixes.",

    problemStatement:
      "DevOps teams need real-time system monitoring and intelligent failure detection.",

    architecture: "/architecture/devops-agent.png",

    workflow: [
      "System monitoring",
      "Log analysis",
      "Anomaly detection",
      "Issue diagnosis",
      "Fix recommendation"
    ],

    deployment:
      "Integrated with monitoring systems and cloud infrastructure APIs.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Monitoring", "LLMs", "DevOps"]
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