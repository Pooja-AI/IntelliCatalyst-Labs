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
import TravelAgent from "../assets/architecture/TravelAgent.png"
import TravelAgentBanner from "../assets/banners/TravelAgent-banner.png"
import Businessanalystagent from "../assets/architecture/Businessanalystagent.png"
import BusinessanalystagentBanner from "../assets/banners/Businessanalystagent-banner.png"
import EmailManagement from "../assets/architecture/Emailmanagement.png"
import EnterpriseEmailBanner from "../assets/banners/EnterpriseEmail-banner.png"


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

  title: "Enterprise Agentic AI Travel Planning Platform",
  banner:TravelAgentBanner,

  category: "Planning Agents",

  description:
    "Production-ready multi-agent Agentic AI platform that autonomously plans, optimizes, books, and manages end-to-end travel using Amazon Bedrock, LangGraph, RAG, enterprise knowledge, and external travel services. The platform leverages intelligent planning, reasoning, reflection, and dynamic replanning to deliver personalized, policy-compliant travel experiences.",

  problemStatement:
    "Enterprise and personal travel planning requires coordinating flights, hotels, transportation, budgets, travel policies, visa regulations, weather conditions, and real-time disruptions across multiple platforms. Manual planning is inefficient, difficult to optimize, and challenging to adapt to changing travel conditions.",

  architecture: TravelAgent,

  workflow: [
    "User submits travel preferences, destination, travel dates, budget, and constraints through the web application",
    "Amazon API Gateway invokes AWS Lambda, which authenticates the user using Amazon Cognito",
    "Amazon Bedrock receives the system prompt, user prompt, conversation context, and retrieved knowledge",
    "Amazon Bedrock Guardrails validate prompts and enforce enterprise safety policies",
    "LangGraph Coordinator Agent validates the request and orchestrates the complete multi-agent workflow",
    "Planner Agent decomposes the travel goal into parallel executable tasks using Plan-and-Execute reasoning",
    "Flight, Hotel, Transportation, Weather, Visa, Budget, and Policy Agents retrieve real-time information using external travel APIs and enterprise tools",
    "RAG Agent retrieves travel policies, destination knowledge, previous itineraries, and organizational guidelines from Amazon Bedrock Knowledge Bases using Amazon OpenSearch Vector Engine",
    "Reasoning Engine applies ReAct, Chain-of-Thought, Reflection, and Dynamic Planning to generate optimized itinerary options",
    "Budget Optimization Agent selects the most cost-effective itinerary while satisfying business rules and user constraints",
    "Policy & Compliance Agent validates enterprise travel policies, approvals, and visa requirements",
    "Reflection Agent evaluates, refines, and improves itinerary quality before finalization",
    "Human-in-the-Loop requests approval for premium bookings or policy exceptions when required",
    "Dynamic Replanning Agent continuously monitors delays, cancellations, weather updates, and schedule changes through event-driven workflows",
    "Notification Agent sends itinerary updates, booking confirmations, reminders, and travel alerts",
    "Final personalized itinerary, booking recommendations, estimated cost, and travel notifications are delivered to the user"
  ],

  deployment:
    "Production-ready deployment on AWS using Amazon Bedrock, Bedrock Knowledge Bases, Amazon API Gateway, AWS Lambda, AWS Step Functions, Amazon EventBridge, Amazon OpenSearch Vector Engine, Amazon DynamoDB, Amazon S3, Amazon Cognito, AWS IAM, Amazon CloudWatch, Docker, Amazon EKS, GitHub Actions CI/CD, and Terraform with auto scaling, monitoring, security, and high availability.",

  github: "",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Amazon Bedrock",
    "Bedrock Knowledge Bases",
    "LangGraph",
    "LangChain",
    "AWS Lambda",
    "Amazon API Gateway",
    "AWS Step Functions",
    "Amazon EventBridge",
    "Amazon OpenSearch Vector Engine",
    "Amazon DynamoDB",
    "Amazon S3",
    "Amazon Cognito",
    "Amazon CloudWatch",
    "AWS IAM",
    "AWS Secrets Manager",
    "Docker",
    "Kubernetes (Amazon EKS)",
    "GitHub Actions",
    "Terraform",
    "REST APIs",
    "RAG",
    "MCP",
    "A2A",
    "OpenTelemetry",
    "Langfuse"
  ]
},
  {
  id: "business-analyst-agent",

  title: "Enterprise Agentic AI Business Intelligence & Analytics Platform",
  banner:BusinessanalystagentBanner,

  category: "Analytics Agents",

  description:
    "Production-ready multi-agent Agentic AI platform that autonomously ingests enterprise data, analyzes KPIs, performs root cause analysis, generates actionable business insights, forecasts trends, and creates executive reports using Azure OpenAI, Azure AI Search, RAG, and intelligent multi-agent collaboration.",

  problemStatement:
    "Business teams spend significant time collecting data from multiple enterprise systems, calculating KPIs, analyzing trends, identifying anomalies, preparing dashboards, and generating executive reports. Manual analytics delays decision-making, lacks scalability, and makes real-time business intelligence difficult.",

  architecture: Businessanalystagent,

  workflow: [
    "Business users submit analytics requests, business questions, KPIs, or reporting requirements through the web application",
    "Azure API Management authenticates requests using Microsoft Entra ID and routes them to Azure Functions",
    "Azure OpenAI receives the system prompt, user query, conversation context, and retrieved enterprise knowledge",
    "Azure AI Content Safety validates prompts and enforces enterprise governance policies",
    "LangGraph Coordinator Agent validates requests and orchestrates the complete multi-agent workflow",
    "Planner Agent decomposes complex business questions into parallel analytical tasks using Plan-and-Execute reasoning",
    "Data Ingestion Agents collect structured and unstructured data from Azure SQL Database, Azure Data Lake Storage, Microsoft Fabric, Power BI, SAP, Salesforce, Dynamics 365, and REST APIs",
    "RAG Agent retrieves business policies, KPI definitions, historical reports, SOPs, and enterprise documentation from Azure AI Search",
    "Analytics Agents perform KPI computation, trend analysis, anomaly detection, forecasting, customer segmentation, root cause analysis, and predictive analytics",
    "Reasoning Engine applies ReAct, Chain-of-Thought, Reflection, and Dynamic Planning to generate business insights and recommendations",
    "Business Rule Agent validates insights against enterprise governance policies and KPI thresholds",
    "Reflection Agent reviews analytical outputs, verifies reasoning quality, and improves recommendations",
    "Human-in-the-Loop requests approval before publishing executive reports or strategic recommendations",
    "Report Generation Agent creates interactive dashboards, executive summaries, Power BI reports, and downloadable documents",
    "Notification Agent delivers insights, alerts, anomaly notifications, and scheduled reports through Microsoft Teams, Outlook, and Power BI"
  ],

  deployment:
    "Production-ready deployment on Microsoft Azure using Azure OpenAI, Azure AI Search, Azure API Management, Azure Functions, Azure Logic Apps, Azure Event Grid, Azure Service Bus, Azure SQL Database, Azure Data Lake Storage Gen2, Azure Monitor, Microsoft Entra ID, AKS, Docker, GitHub Actions, and Azure DevOps with enterprise security, scalability, monitoring, CI/CD, and high availability.",

  github: "",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Azure OpenAI",
    "Azure AI Search",
    "LangGraph",
    "LangChain",
    "Azure Functions",
    "Azure API Management",
    "Azure Logic Apps",
    "Azure Event Grid",
    "Azure Service Bus",
    "Azure SQL Database",
    "Azure Data Lake Storage Gen2",
    "Microsoft Fabric",
    "Power BI",
    "Azure Blob Storage",
    "Azure Cosmos DB",
    "Microsoft Entra ID",
    "Azure Monitor",
    "Azure Application Insights",
    "Azure Key Vault",
    "Azure Kubernetes Service (AKS)",
    "Docker",
    "GitHub Actions",
    "Azure DevOps",
    "Terraform",
    "REST APIs",
    "RAG",
    "MCP",
    "A2A",
    "OpenTelemetry",
    "Langfuse",
    "Pandas",
    "NumPy",
    "Scikit-learn"
  ]
},

  {
  id: "email-management-agent",

  title: "Enterprise Agentic AI Email Management & Productivity Platform",
  banner: EnterpriseEmailBanner,

  category: "Productivity Agents",

  description:
    "Production-ready multi-agent Agentic AI platform that intelligently manages enterprise emails by classifying messages, prioritizing actions, generating contextual responses, scheduling follow-ups, detecting risks, summarizing conversations, and automating email workflows using Azure OpenAI, Azure AI Search, RAG, and Azure-native services.",

  problemStatement:
    "Organizations receive thousands of emails daily across multiple departments. Employees spend significant time prioritizing emails, drafting responses, tracking conversations, scheduling follow-ups, identifying urgent requests, and ensuring compliance. Manual email management reduces productivity, delays response times, and increases operational risk.",

  architecture: EmailManagement,

  workflow: [
    "Users connect Outlook or enterprise mailboxes through Microsoft Entra ID authentication",
    "Azure API Management securely routes requests to Azure Functions and Azure Logic Apps",
    "Email Ingestion Agent continuously monitors Microsoft Graph API and enterprise mailboxes",
    "Azure OpenAI receives the system prompt, email content, conversation history, user preferences, and retrieved enterprise knowledge",
    "Azure AI Content Safety validates prompts and filters malicious or unsafe content",
    "LangGraph Coordinator Agent validates incoming emails and orchestrates the multi-agent workflow",
    "Planner Agent decomposes email processing into parallel tasks using Plan-and-Execute reasoning",
    "Classification Agent categorizes emails into business, support, HR, finance, legal, sales, meetings, and personal folders",
    "Priority Agent scores emails based on urgency, sender importance, deadlines, sentiment, and business rules",
    "RAG Agent retrieves enterprise policies, SOPs, historical conversations, templates, FAQs, and customer knowledge from Azure AI Search",
    "Reasoning Engine applies ReAct, Chain-of-Thought, Reflection, and Dynamic Planning to determine the optimal response strategy",
    "Response Generation Agent drafts context-aware, policy-compliant email replies using Azure OpenAI",
    "Summarization Agent generates concise conversation summaries and extracts action items",
    "Task & Calendar Agent creates follow-up tasks, schedules meetings, and synchronizes with Microsoft Outlook Calendar and Microsoft Teams",
    "Business Rule Agent validates compliance, approvals, confidentiality, and organizational policies before sending responses",
    "Reflection Agent reviews generated responses, verifies quality, and refines outputs before final approval",
    "Human-in-the-Loop requests approval for sensitive, legal, financial, or executive communications",
    "Automation Agent triggers downstream workflows through Azure Logic Apps and Power Automate",
    "Notification Agent sends alerts, reminders, and follow-up notifications through Microsoft Teams and Outlook",
    "Final approved responses are delivered automatically while dashboards track productivity, response quality, and SLA compliance"
  ],

  deployment:
    "Production-ready deployment on Microsoft Azure using Azure OpenAI, Azure AI Search, Azure API Management, Azure Functions, Azure Logic Apps, Microsoft Graph API, Azure Event Grid, Azure Service Bus, Azure SQL Database, Azure Blob Storage, Microsoft Entra ID, Azure Monitor, Azure Kubernetes Service (AKS), Docker, GitHub Actions, Azure DevOps, Terraform, and Application Insights with enterprise-grade security, scalability, governance, observability, CI/CD, and high availability.",

  github: "",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Azure OpenAI",
    "Azure AI Search",
    "LangGraph",
    "LangChain",
    "Azure Functions",
    "Azure API Management",
    "Azure Logic Apps",
    "Azure Event Grid",
    "Azure Service Bus",
    "Microsoft Graph API",
    "Microsoft Outlook API",
    "Microsoft Teams API",
    "Azure SQL Database",
    "Azure Cosmos DB",
    "Azure Blob Storage",
    "Azure Data Lake Storage Gen2",
    "Azure Key Vault",
    "Microsoft Entra ID",
    "Azure Monitor",
    "Application Insights",
    "Azure Kubernetes Service (AKS)",
    "Docker",
    "GitHub Actions",
    "Azure DevOps",
    "Terraform",
    "REST APIs",
    "RAG",
    "MCP",
    "A2A",
    "OpenTelemetry",
    "Langfuse",
    "Power Automate",
    "Power BI"
  ]
}
];

export default agenticAIProjects;