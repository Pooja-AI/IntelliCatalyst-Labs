const systemDesignProjects = [
  {
    id: "end-to-end-ml-system-architecture",
    title: "End-to-End Machine Learning System Architecture",
    category: "ML Architecture",
    description: "Complete ML lifecycle architecture from training to deployment and monitoring.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["ML Systems", "MLOps", "Cloud Architecture"]
  },

  {
    id: "real-time-ml-inference",
    title: "Real-Time ML Inference System for Low-Latency Predictions",
    category: "Inference Systems",
    description: "Low-latency real-time prediction architecture for production ML systems.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["FastAPI", "Kafka", "Redis", "ML Serving"]
  },

  {
    id: "batch-streaming-pipeline",
    title: "Batch and Streaming Prediction Pipeline Architecture",
    category: "Data Pipelines",
    description: "Hybrid architecture combining batch and streaming ML predictions.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Spark", "Kafka", "Airflow"]
  },

  {
    id: "feature-store-architecture",
    title: "Feature Store Design for Scalable ML Systems",
    category: "Feature Engineering Systems",
    description: "Centralized feature store architecture for reusable ML features.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Feast", "Redis", "Snowflake"]
  },

  {
    id: "model-monitoring-architecture",
    title: "Model Monitoring and Drift Detection Architecture",
    category: "Monitoring Systems",
    description: "Detect drift and monitor ML models in production environments.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Prometheus", "Grafana", "Evidently AI"]
  },

  {
    id: "recommendation-system-architecture",
    title: "Scalable Recommendation System Architecture",
    category: "Recommendation Systems",
    description: "Large-scale recommendation engine architecture design.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Collaborative Filtering", "Vector DB", "Spark"]
  },

  {
    id: "fraud-detection-architecture",
    title: "Fraud Detection System (Hybrid Real-Time + Batch Architecture)",
    category: "Fraud Systems",
    description: "Hybrid architecture for fraud detection combining streaming and batch analytics.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Kafka", "Spark", "ML Models"]
  },

  {
    id: "ai-search-ranking-system",
    title: "AI-Powered Search and Ranking System Design",
    category: "Search Systems",
    description: "Search engine architecture with ranking and relevance scoring.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Elasticsearch", "NLP", "Ranking Models"]
  },

  {
    id: "enterprise-rag-system",
    title: "Enterprise RAG-Based Knowledge System Architecture",
    category: "RAG Architecture",
    description: "Enterprise-grade Retrieval-Augmented Generation system design.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Vector DB", "LLMs", "RAG"]
  },

  {
    id: "vector-db-architecture",
    title: "Vector Database and Semantic Search System Design",
    category: "Search Architecture",
    description: "Semantic search system using vector embeddings and ANN search.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["FAISS", "Pinecone", "Embeddings"]
  },

  {
    id: "llm-serving-architecture",
    title: "LLM Serving Architecture (API Gateway + Model Router + Cache Layer)",
    category: "LLM Infrastructure",
    description: "Scalable architecture for serving multiple LLMs efficiently.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["API Gateway", "Redis", "LLM Routing"]
  },

  {
    id: "multi-llm-routing",
    title: "Multi-LLM Routing System for Cost and Performance Optimization",
    category: "LLM Optimization",
    description: "Route queries to best LLM based on cost-performance tradeoff.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["LLM Router", "Optimization", "APIs"]
  },

  {
    id: "ai-chatbot-architecture",
    title: "AI Chatbot Architecture with Memory and Context Handling",
    category: "Conversational AI",
    description: "Chatbot system with memory, context retention, and retrieval.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["LLMs", "Memory DB", "RAG"]
  },

  {
    id: "document-intelligence-architecture",
    title: "Document Intelligence System using LLMs",
    category: "Document AI",
    description: "Ingestion → Retrieval → Generation pipeline for document understanding.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["OCR", "LLMs", "RAG"]
  },

  {
    id: "genai-saas-architecture",
    title: "GenAI Content Generation Platform Architecture (SaaS Model)",
    category: "GenAI SaaS",
    description: "Multi-tenant SaaS architecture for GenAI content generation.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["SaaS", "LLMs", "Cloud"]
  },

  {
    id: "prompt-lifecycle-architecture",
    title: "Prompt Lifecycle Management System Architecture",
    category: "Prompt Engineering Systems",
    description: "Versioning, testing, and deployment architecture for prompts.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Prompt Ops", "LLMs", "CI/CD"]
  },

  {
    id: "llmops-architecture",
    title: "LLMOps Pipeline Architecture",
    category: "LLMOps",
    description: "Evaluation → Deployment → Monitoring → Feedback loop architecture.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["LLMOps", "CI/CD", "Monitoring"]
  },

  {
    id: "ml-ci-cd-architecture",
    title: "CI/CD Pipeline for ML and GenAI Models",
    category: "DevOps for AI",
    description: "Automated deployment pipeline for ML and GenAI systems.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["GitHub Actions", "Docker", "Kubernetes"]
  },

  {
    id: "model-registry-architecture",
    title: "Model Registry and Version Control System Architecture",
    category: "Model Governance",
    description: "Centralized model registry for tracking ML and LLM versions.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["MLflow", "DVC", "Registry"]
  },

  {
    id: "continuous-training-pipeline",
    title: "Continuous Training and Retraining Pipeline for AI Systems",
    category: "Continuous Learning",
    description: "Automated retraining pipeline based on new data and drift.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Airflow", "MLflow", "Automation"]
  },

  {
    id: "ai-observability-system",
    title: "AI Observability System (Logs, Metrics, Traces)",
    category: "Observability",
    description: "Full observability stack for ML and LLM systems.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Prometheus", "Grafana", "OpenTelemetry"]
  },

  {
    id: "llm-evaluation-framework",
    title: "Evaluation Framework for LLM Quality and Hallucination Detection",
    category: "LLM Evaluation",
    description: "Framework to evaluate LLM accuracy and hallucinations.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["LLMs", "Evaluation Metrics"]
  },

  {
    id: "ai-guardrails-architecture",
    title: "Guardrails and Safe AI Architecture for Responsible GenAI",
    category: "AI Safety",
    description: "Safety layer for controlling LLM outputs and ensuring compliance.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Guardrails AI", "Moderation", "LLMs"]
  },

  {
    id: "multi-agent-architecture",
    title: "Multi-Agent AI System Architecture for Task Automation",
    category: "Agent Systems",
    description: "Architecture for multiple agents collaborating on tasks.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["CrewAI", "LangGraph", "Agents"]
  },

  {
    id: "autonomous-workflow-architecture",
    title: "Autonomous AI Workflow System (Planner → Executor → Validator Agents)",
    category: "Autonomous Systems",
    description: "End-to-end autonomous workflow using multiple AI agents.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Agents", "LLMs", "Automation"]
  },

  {
    id: "ai-research-agent-architecture",
    title: "AI Research Agent Architecture (Search → Reason → Summarize)",
    category: "Research AI",
    description: "Intelligent research automation system architecture.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["RAG", "Web Search", "LLMs"]
  },

  {
    id: "ai-devops-architecture",
    title: "AI DevOps Automation System (Monitoring + Fix Suggestions + Alerts)",
    category: "DevOps AI",
    description: "AI-powered DevOps automation system architecture.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["DevOps", "LLMs", "Monitoring"]
  },

  {
    id: "llm-cost-optimization",
    title: "Cost Optimization System for LLM and AI Infrastructure",
    category: "AI Optimization",
    description: "Optimize inference cost across multiple LLM providers.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["LLMs", "Cost Optimization", "Cloud"]
  },

  {
    id: "hybrid-cloud-ai",
    title: "Hybrid Cloud AI Deployment Architecture (Azure / AWS / GCP)",
    category: "Cloud Architecture",
    description: "Multi-cloud AI deployment architecture for scalability and resilience.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Azure", "AWS", "GCP", "Kubernetes"]
  },

  {
    id: "scalable-ai-data-pipeline",
    title: "Scalable AI Data Pipeline for End-to-End ML Workflows",
    category: "Data Engineering",
    description: "End-to-end scalable data pipeline for ML systems.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Spark", "Airflow", "Kafka"]
  }
];

export default systemDesignProjects;