const llmopsProjects = [
  {
    id: "end-to-end-llmops-pipeline",
    title: "End-to-End LLMOps Pipeline for Enterprise Applications",
    category: "LLMOps Pipeline",
    description:
      "Complete lifecycle pipeline for building, deploying, and managing LLM applications at scale.",

    problemStatement:
      "Enterprises struggle to manage LLM lifecycle from development to production reliably and at scale.",

    architecture: "/architecture/llmops-pipeline.png",

    workflow: [
      "Data ingestion",
      "Prompt/Model development",
      "Experiment tracking",
      "CI/CD pipeline setup",
      "Deployment",
      "Monitoring & feedback loop"
    ],

    deployment:
      "Deployed using Docker, Kubernetes, and CI/CD pipelines for scalable LLM application management.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["LLMs", "MLOps", "CI/CD", "Docker", "Kubernetes"]
  },

  {
    id: "prompt-lifecycle-management",
    title: "Prompt Lifecycle Management System",
    category: "Prompt Engineering Ops",
    description:
      "System for versioning, testing, and deploying prompts in production environments.",

    problemStatement:
      "Prompts in production systems lack version control and systematic evaluation.",

    architecture: "/architecture/prompt-lifecycle.png",

    workflow: [
      "Prompt creation",
      "Version control",
      "A/B testing",
      "Performance evaluation",
      "Production deployment"
    ],

    deployment:
      "Deployed as a prompt management platform integrated with LLM APIs.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Prompt Engineering", "LLMs", "Version Control"]
  },

  {
    id: "llm-fine-tuning-pipeline",
    title: "LLM Fine-Tuning Pipeline with Experiment Tracking",
    category: "Model Training Ops",
    description:
      "Pipeline for fine-tuning LLMs with tracking and evaluation.",

    problemStatement:
      "Fine-tuning LLMs without experiment tracking leads to inconsistent results.",

    architecture: "/architecture/llm-finetune.png",

    workflow: [
      "Dataset preparation",
      "Tokenization",
      "Model fine-tuning",
      "Experiment tracking (MLflow)",
      "Evaluation",
      "Model registry"
    ],

    deployment:
      "Deployed using HuggingFace + MLflow tracking pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["HuggingFace", "MLflow", "LLMs", "Fine-Tuning"]
  },

  {
    id: "rag-monitoring-pipeline",
    title: "RAG Pipeline with Continuous Evaluation and Monitoring",
    category: "RAG Ops",
    description:
      "System to continuously monitor and evaluate RAG pipeline performance.",

    problemStatement:
      "RAG systems degrade over time without monitoring retrieval and generation quality.",

    architecture: "/architecture/rag-monitoring.png",

    workflow: [
      "Query logging",
      "Embedding retrieval tracking",
      "LLM response evaluation",
      "Drift detection",
      "Performance monitoring dashboard"
    ],

    deployment:
      "Deployed using monitoring tools like Prometheus and LLM evaluation pipelines.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["RAG", "Vector DB", "LLMs", "Monitoring"]
  },

  {
    id: "llm-evaluation-framework",
    title: "LLM Evaluation Framework for Response Quality",
    category: "LLM Evaluation",
    description:
      "Framework for evaluating LLM outputs and detecting hallucinations.",

    problemStatement:
      "LLM outputs are not always reliable and require systematic evaluation.",

    architecture: "/architecture/llm-eval.png",

    workflow: [
      "Response collection",
      "Ground truth comparison",
      "Metric calculation",
      "Hallucination detection",
      "Scoring system"
    ],

    deployment:
      "Deployed as evaluation service integrated with LLM pipelines.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["LLMs", "Evaluation Metrics", "NLP"]
  },

  {
    id: "llm-ci-cd-deployment",
    title: "LLM Deployment Pipeline using CI/CD",
    category: "Deployment Ops",
    description:
      "Automated deployment system for LLM applications.",

    problemStatement:
      "Manual deployment of LLM applications is error-prone and not scalable.",

    architecture: "/architecture/llm-cicd.png",

    workflow: [
      "Code commit",
      "Automated testing",
      "Docker build",
      "Kubernetes deployment",
      "Monitoring"
    ],

    deployment:
      "Deployed using CI/CD pipelines with Docker and Kubernetes.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Docker", "Kubernetes", "CI/CD", "LLMs"]
  },

  {
    id: "ai-model-monitoring-system",
    title: "AI Model Monitoring System",
    category: "Monitoring Ops",
    description:
      "System for tracking AI model performance, drift, and latency.",

    problemStatement:
      "AI models in production degrade over time without monitoring systems.",

    architecture: "/architecture/model-monitoring.png",

    workflow: [
      "Log collection",
      "Performance tracking",
      "Drift detection",
      "Alert system",
      "Dashboard visualization"
    ],

    deployment:
      "Deployed using Prometheus + MLflow monitoring stack.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Monitoring", "MLflow", "Prometheus", "LLMs"]
  },

  {
    id: "prompt-ab-testing",
    title: "Prompt A/B Testing and Optimization Platform",
    category: "Prompt Optimization",
    description:
      "Platform for testing and optimizing prompt versions.",

    problemStatement:
      "Prompt performance varies and needs systematic A/B testing.",

    architecture: "/architecture/prompt-ab.png",

    workflow: [
      "Prompt creation",
      "A/B test setup",
      "User interaction logging",
      "Performance comparison",
      "Optimization"
    ],

    deployment:
      "Deployed as prompt experimentation platform.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["A/B Testing", "LLMs", "Analytics"]
  },

  {
    id: "llm-feedback-loop",
    title: "LLM Feedback Loop System",
    category: "Human-in-the-Loop AI",
    description:
      "System to improve LLMs using human feedback.",

    problemStatement:
      "LLMs require continuous improvement using real user feedback.",

    architecture: "/architecture/llm-feedback.png",

    workflow: [
      "User response collection",
      "Feedback labeling",
      "Model retraining",
      "Evaluation",
      "Improvement cycle"
    ],

    deployment:
      "Deployed using RLHF-style feedback loop system.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["RLHF", "LLMs", "Feedback Systems"]
  },

  {
    id: "vector-db-lifecycle",
    title: "Vector Database Lifecycle Management System",
    category: "RAG Infrastructure",
    description:
      "System for managing vector database indexing and updates.",

    problemStatement:
      "Vector databases require lifecycle management for efficient retrieval.",

    architecture: "/architecture/vector-db.png",

    workflow: [
      "Data ingestion",
      "Embedding generation",
      "Index creation",
      "Updates and optimization",
      "Query handling"
    ],

    deployment:
      "Deployed using FAISS / Pinecone / Weaviate infrastructure.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["FAISS", "Pinecone", "Weaviate", "Embeddings"]
  },

  {
    id: "llm-routing-system",
    title: "Multi-Model LLM Routing System",
    category: "AI Optimization",
    description:
      "System to route queries to best LLM based on cost and performance.",

    problemStatement:
      "Different LLMs have different cost-performance tradeoffs.",

    architecture: "/architecture/llm-routing.png",

    workflow: [
      "Query analysis",
      "Model selection",
      "Routing logic",
      "Response generation",
      "Optimization feedback"
    ],

    deployment:
      "Deployed as intelligent routing layer between LLM APIs.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["LLMs", "Routing", "Optimization"]
  },

  {
    id: "ai-governance-system",
    title: "Enterprise AI Governance and Compliance System",
    category: "AI Governance",
    description:
      "System ensuring safety, compliance, and governance in AI workflows.",

    problemStatement:
      "Enterprise AI systems require governance for compliance and safety.",

    architecture: "/architecture/ai-governance.png",

    workflow: [
      "Policy definition",
      "Model auditing",
      "Risk analysis",
      "Compliance checks",
      "Reporting"
    ],

    deployment:
      "Deployed as enterprise AI governance framework.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Governance", "LLMs", "Security"]
  }
];

export default llmopsProjects;