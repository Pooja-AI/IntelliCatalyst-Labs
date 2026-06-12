const systemDesignProjects = [
  {
    id: "end-to-end-ml-system-architecture",
    title: "End-to-End Machine Learning System Architecture",
    category: "ML Architecture",
    description: "Complete ML lifecycle architecture from training to deployment and monitoring.",

    problemStatement:
      "Design a scalable end-to-end ML system that handles data ingestion, training, deployment, and continuous monitoring in production environments.",

    architecture:
      "Data Sources → Data Ingestion Layer → Feature Store → Training Pipeline → Model Registry → Deployment (API/Batch) → Monitoring & Feedback Loop",

    workflow: [
      "Ingest raw data from multiple sources",
      "Data preprocessing and feature engineering",
      "Train ML models using pipelines",
      "Register best model in model registry",
      "Deploy model as API or batch service",
      "Monitor drift and performance continuously"
    ],

    deployment:
      "Deployed using Docker + Kubernetes with CI/CD pipelines and MLflow tracking",

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

    problemStatement:
      "Build a real-time inference system capable of serving ML predictions with low latency under high traffic loads.",

    architecture:
      "Client Request → API Gateway → Load Balancer → Model Serving Layer → Cache (Redis) → ML Model → Response",

    workflow: [
      "Receive real-time user request",
      "Route request through API gateway",
      "Fetch cached results if available",
      "Send request to ML model server",
      "Return prediction response",
      "Log request for monitoring"
    ],

    deployment:
      "Deployed using FastAPI + Redis + Kubernetes for scalable inference",

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

    problemStatement:
      "Design a hybrid data processing system that supports both real-time streaming and batch ML predictions.",

    architecture:
      "Data Sources → Kafka (Streaming) + Data Lake (Batch) → Processing Layer (Spark) → Feature Store → ML Models → Output Layer",

    workflow: [
      "Ingest streaming and batch data",
      "Process data using Spark",
      "Generate features for ML models",
      "Run batch and streaming predictions",
      "Store results in data warehouse",
      "Serve results to applications"
    ],

    deployment:
      "Deployed using Spark clusters + Kafka streaming + cloud storage",

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

    problemStatement:
      "Create a centralized feature store that enables consistent, reusable, and real-time feature access across ML systems.",

    architecture:
      "Data Sources → Feature Engineering Pipeline → Feature Store (Offline + Online) → Training + Inference Systems",

    workflow: [
      "Collect raw data",
      "Generate features using pipelines",
      "Store features in offline store",
      "Sync features to online store",
      "Serve features for training and inference",
      "Maintain versioning of features"
    ],

    deployment:
      "Implemented using Feast + Redis + Snowflake",

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

    problemStatement:
      "Design a monitoring system that tracks model performance, detects data drift, and triggers alerts for retraining.",

    architecture:
      "Live Data → Prediction Service → Logging Layer → Monitoring Engine → Drift Detection → Alert System",

    workflow: [
      "Capture real-time predictions",
      "Log input and output data",
      "Compare distributions over time",
      "Detect drift using statistical methods",
      "Trigger alerts if drift exceeds threshold",
      "Initiate retraining pipeline"
    ],

    deployment:
      "Deployed using Prometheus + Grafana + Evidently AI",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Prometheus", "Grafana", "Evidently AI"]
  },

  {
    id: "enterprise-rag-system",
    title: "Enterprise RAG-Based Knowledge System Architecture",
    category: "RAG Architecture",
    description: "Enterprise-grade Retrieval-Augmented Generation system design.",

    problemStatement:
      "Build a scalable enterprise RAG system that enables semantic search and accurate LLM-based answers over private knowledge bases.",

    architecture:
      "Documents → Chunking → Embeddings → Vector DB → Retriever → LLM Generator → Response API",

    workflow: [
      "Ingest enterprise documents",
      "Split into chunks",
      "Generate embeddings",
      "Store in vector database",
      "Retrieve relevant context",
      "Generate response using LLM"
    ],

    deployment:
      "Deployed using FastAPI + FAISS/Pinecone + LLM API",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Vector DB", "LLMs", "RAG"]
  },

  {
    id: "multi-agent-architecture",
    title: "Multi-Agent AI System Architecture for Task Automation",
    category: "Agent Systems",
    description: "Architecture for multiple agents collaborating on tasks.",

    problemStatement:
      "Design a multi-agent system where specialized agents collaborate to solve complex tasks autonomously.",

    architecture:
      "User Input → Orchestrator Agent → Task Decomposition → Specialist Agents → Shared Memory → Final Output",

    workflow: [
      "Receive user request",
      "Orchestrator breaks task into subtasks",
      "Assign subtasks to agents",
      "Agents collaborate via shared memory",
      "Aggregate outputs",
      "Return final response"
    ],

    deployment:
      "Deployed using LangGraph / CrewAI framework with API layer",

    github: "",
    demo: "",
    documentation: "",
    tech: ["CrewAI", "LangGraph", "Agents"]
  }
];

export default systemDesignProjects;