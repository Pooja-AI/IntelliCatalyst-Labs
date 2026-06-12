const multiAgentProjects = [
  {
    id: "ai-research-team",
    title: "AI Research Team System",
    category: "Multi-Agent Systems",
    description:
      "Collaborative agents automate end-to-end research from data collection to structured reporting.",
    problemStatement:
      "Researchers spend significant time manually searching, summarizing, and structuring information from multiple sources. This system automates research workflows using multiple coordinated agents.",
    architecture: "/architecture/multi-agent-research.png",
    workflow: [
      "User submits research query",
      "Search agent gathers relevant data",
      "Summarizer agent processes raw information",
      "Reporter agent structures final insights",
      "Final report is generated and delivered"
    ],
    deployment:
      "Deployed using FastAPI backend with multi-agent orchestration layer and React UI for interaction.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Multi-Agent Systems", "RAG"]
  },

  {
    id: "business-intelligence-system",
    title: "Autonomous Business Intelligence System",
    category: "Analytics Multi-Agent",
    description:
      "Multi-agent system that automates business intelligence reporting using data, analytics, and insight agents.",
    problemStatement:
      "Business analysts spend excessive time generating reports from raw data. This system automates data-to-insight pipelines using autonomous agents.",
    architecture: "/architecture/bi-multi-agent.png",
    workflow: [
      "Data agent collects raw business data",
      "Analytics agent processes KPIs",
      "Insight agent generates business insights",
      "Final BI report is created automatically"
    ],
    deployment:
      "Deployed as cloud-based analytics service with API integration and dashboard interface.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Pandas", "LLMs", "Agentic AI"]
  },

  {
    id: "customer-support-multi-agent",
    title: "Customer Support Multi-Agent System",
    category: "Enterprise Support Agents",
    description:
      "Multi-agent support system for ticket classification, resolution, and escalation.",
    problemStatement:
      "Customer support teams struggle with high ticket volume and slow resolution times due to manual routing and handling.",
    architecture: "/architecture/support-multi-agent.png",
    workflow: [
      "User submits support ticket",
      "Triage agent classifies issue",
      "Resolution agent attempts automated solution",
      "Escalation agent handles complex cases",
      "Response sent to user"
    ],
    deployment:
      "Integrated into enterprise support portal using FastAPI and chatbot interface.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Tool Calling", "LLMs", "Agents"]
  },

  {
    id: "devops-monitoring-system",
    title: "AI DevOps Monitoring System",
    category: "DevOps Multi-Agent",
    description:
      "Automated monitoring system using agents for logs, alerts, and remediation suggestions.",
    problemStatement:
      "DevOps teams face challenges in detecting system failures early and resolving them quickly in complex distributed systems.",
    architecture: "/architecture/devops-multi-agent.png",
    workflow: [
      "Log agent collects system logs",
      "Monitoring agent detects anomalies",
      "Alert agent triggers notifications",
      "Fix agent suggests remediation steps"
    ],
    deployment:
      "Deployed with Kubernetes-based microservices and monitoring dashboard.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Monitoring", "LLMs", "DevOps"]
  },

  {
    id: "intelligent-hiring-system",
    title: "Intelligent Hiring System",
    category: "HR Multi-Agent",
    description:
      "Automated recruitment system using resume parsing, ranking, and interview simulation agents.",
    problemStatement:
      "HR teams spend significant time manually screening resumes and evaluating candidates.",
    architecture: "/architecture/hiring-multi-agent.png",
    workflow: [
      "Resume parser extracts candidate data",
      "Ranking agent evaluates candidates",
      "Interview agent simulates Q&A",
      "Final hiring recommendation generated"
    ],
    deployment:
      "Deployed as HR automation tool integrated with recruitment portal.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "NLP", "LLMs", "Recruitment AI"]
  },

  {
    id: "financial-analysis-multi-agent",
    title: "Financial Analysis Multi-Agent System",
    category: "Finance Multi-Agent",
    description:
      "Multi-agent financial system for data analysis, forecasting, and risk evaluation.",
    problemStatement:
      "Financial analysts struggle with analyzing large datasets and generating timely insights.",
    architecture: "/architecture/finance-multi-agent.png",
    workflow: [
      "Data agent collects financial data",
      "Risk agent evaluates risk factors",
      "Forecast agent predicts trends",
      "Final financial report generated"
    ],
    deployment:
      "Deployed in secure financial analytics environment with API-based access.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Finance ML", "LLMs", "Agents"]
  },

  {
    id: "ecommerce-optimization",
    title: "E-commerce Optimization System",
    category: "Business Multi-Agent",
    description:
      "Multi-agent system for pricing, inventory, and recommendation optimization.",
    problemStatement:
      "E-commerce platforms struggle to dynamically optimize pricing, inventory, and recommendations in real time.",
    architecture: "/architecture/ecommerce-multi-agent.png",
    workflow: [
      "Pricing agent optimizes product prices",
      "Inventory agent tracks stock levels",
      "Recommendation agent suggests products",
      "System updates e-commerce strategy"
    ],
    deployment:
      "Deployed as cloud-based e-commerce optimization engine.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Recommender Systems", "LLMs"]
  },

  {
    id: "smart-travel-planning",
    title: "Smart Travel Planning System",
    category: "Planning Multi-Agent",
    description:
      "Multi-agent travel system for itinerary creation, booking, and budget optimization.",
    problemStatement:
      "Travel planning requires coordination between itinerary creation, budgeting, and bookings which is time-consuming for users.",
    architecture: "/architecture/travel-multi-agent.png",
    workflow: [
      "Itinerary agent creates travel plan",
      "Booking agent suggests flights/hotels",
      "Budget agent optimizes cost",
      "Final travel plan generated"
    ],
    deployment:
      "Deployed as web-based travel assistant with API integrations.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "APIs"]
  }
];

export default multiAgentProjects;