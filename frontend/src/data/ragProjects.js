const ragProjects = [
  {
    id: "enterprise-knowledge-qa",
    title: "Enterprise Knowledge Base Q&A System",
    category: "RAG Systems",
    description:
      "Enterprise-grade Q&A system over internal knowledge base using RAG architecture.",

    problemStatement:
      "Organizations struggle to extract relevant insights from large internal knowledge bases. This system enables accurate, context-aware answers using Retrieval-Augmented Generation.",

    architecture: "/architecture/rag-chatbot.png",

    workflow: [
      "Document ingestion",
      "Text chunking & preprocessing",
      "Embedding generation",
      "Vector database storage",
      "Query retrieval",
      "LLM response generation"
    ],

    deployment: "Deployed using FastAPI + FAISS + React UI",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Vector DB", "RAG", "FastAPI"]
  },

  {
    id: "pdf-chat-assistant",
    title: "PDF / Document Chat Assistant using Vector Search",
    category: "Document Intelligence",
    description:
      "Chat with PDF documents using embeddings and semantic vector search.",

    problemStatement:
      "Users struggle to manually read large PDF documents. This system enables natural language interaction with documents using RAG-based retrieval.",

    architecture: "/architecture/pdf-rag.png",

    workflow: [
      "PDF ingestion & parsing",
      "Text extraction",
      "Chunking strategy",
      "Embedding generation",
      "FAISS vector storage",
      "Query-based retrieval",
      "LLM response generation"
    ],

    deployment: "Hosted using FastAPI backend with FAISS vector database and React frontend",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "FAISS", "Embeddings", "RAG"]
  },

  {
    id: "multi-doc-research",
    title: "Multi-Document Research Assistant",
    category: "Research AI",
    description:
      "AI system for analyzing and summarizing multiple documents using RAG pipeline.",

    problemStatement:
      "Researchers need efficient ways to extract insights from multiple documents simultaneously.",

    architecture: "/architecture/multi-doc-rag.png",

    workflow: [
      "Multi-document ingestion",
      "Data preprocessing",
      "Embedding generation",
      "Cross-document retrieval",
      "Context aggregation",
      "LLM summarization"
    ],

    deployment: "Deployed using scalable RAG pipeline with vector database and API service",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Vector DB", "RAG"]
  },

  {
    id: "customer-support-rag",
    title: "Customer Support Knowledge Retrieval Bot",
    category: "Enterprise Support AI",
    description:
      "AI-powered system that retrieves answers from enterprise knowledge base for customer support automation.",

    problemStatement:
      "Customer support teams spend significant time searching knowledge bases manually. This system automates retrieval of accurate answers.",

    architecture: "/architecture/support-rag.png",

    workflow: [
      "Support ticket ingestion",
      "Knowledge base indexing",
      "Embedding generation",
      "Intent detection",
      "Semantic retrieval",
      "Response generation"
    ],

    deployment: "Integrated into enterprise support systems via API and chatbot UI",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "RAG", "Embeddings", "LLMs"]
  },

  {
    id: "legal-rag",
    title: "Legal Document Q&A System using RAG",
    category: "Legal AI",
    description:
      "Query legal documents and extract precise answers using AI-powered retrieval.",

    problemStatement:
      "Legal professionals require fast and accurate retrieval from large legal document repositories.",

    architecture: "/architecture/legal-rag.png",

    workflow: [
      "Legal document ingestion",
      "Text normalization",
      "Embedding generation",
      "Case law retrieval",
      "Context ranking",
      "LLM response generation"
    ],

    deployment: "Secure RAG system with encrypted vector database",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Vector DB", "RAG"]
  },

  {
    id: "healthcare-rag",
    title: "Healthcare Report Understanding Assistant",
    category: "Healthcare AI",
    description:
      "AI system for analyzing medical reports and generating insights using RAG.",

    problemStatement:
      "Healthcare professionals need faster interpretation of complex medical reports.",

    architecture: "/architecture/healthcare-rag.png",

    workflow: [
      "Medical report ingestion",
      "Data anonymization",
      "Embedding generation",
      "Context retrieval",
      "Medical summarization",
      "Insight generation"
    ],

    deployment: "Deployed in secure healthcare environment with compliance standards",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "RAG", "LLMs"]
  },

  {
    id: "tech-doc-chat",
    title: "Technical Documentation Chat System",
    category: "Developer AI",
    description:
      "Chat system for interacting with technical documentation using semantic search.",

    problemStatement:
      "Developers waste time searching through large technical documentation.",

    architecture: "/architecture/dev-doc-rag.png",

    workflow: [
      "Documentation ingestion",
      "Markdown parsing",
      "Embedding generation",
      "Semantic search",
      "Context retrieval",
      "Answer generation"
    ],

    deployment: "Deployed as developer portal with API access",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Embeddings", "RAG"]
  },

  {
    id: "hr-policy-assistant",
    title: "HR Policy and Employee Handbook Assistant",
    category: "Enterprise HR AI",
    description:
      "AI assistant for answering HR policy and employee handbook queries.",

    problemStatement:
      "Employees struggle to find HR policy answers from large documents.",

    architecture: "/architecture/hr-rag.png",

    workflow: [
      "HR document ingestion",
      "Policy segmentation",
      "Embedding generation",
      "Query matching",
      "Context retrieval",
      "Answer generation"
    ],

    deployment: "Integrated into internal HR portal",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Vector DB"]
  },

  {
    id: "financial-rag",
    title: "Financial Report Analysis Assistant using RAG",
    category: "Finance AI",
    description:
      "AI system for analyzing financial reports and extracting insights.",

    problemStatement:
      "Financial analysts need faster insights from complex financial documents.",

    architecture: "/architecture/finance-rag.png",

    workflow: [
      "Financial report ingestion",
      "Data extraction",
      "Embedding generation",
      "Trend analysis retrieval",
      "Context aggregation",
      "Insight generation"
    ],

    deployment: "Deployed in secure financial analytics environment",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Finance NLP", "RAG"]
  },

  {
    id: "research-paper-qa",
    title: "Academic Research Paper Q&A System",
    category: "Research AI",
    description:
      "AI system for querying academic papers and extracting insights.",

    problemStatement:
      "Researchers struggle to extract insights from large academic papers.",

    architecture: "/architecture/research-rag.png",

    workflow: [
      "Paper ingestion",
      "Citation parsing",
      "Embedding generation",
      "Semantic retrieval",
      "Cross-paper comparison",
      "Answer generation"
    ],

    deployment: "Deployed as research assistant tool",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Embeddings", "RAG"]
  }
];

export default ragProjects;