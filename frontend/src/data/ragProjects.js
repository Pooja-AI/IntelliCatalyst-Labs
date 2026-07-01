import EnterpriseQA from "../assets/architecture/enterprise-knowledge-qa.png"
const ragProjects = [
  {
    id: "enterprise-knowledge-qa",
    title: "Enterprise Knowledge Base Q&A System",
    category: "RAG Systems",
    description:
      "Enterprise-grade Q&A system over an internal knowledge base using a full Retrieval-Augmented Generation pipeline, with 7 advanced retrieval techniques toggleable live from the UI.",

    problemStatement:
      "Organizations struggle to extract relevant insights from large internal knowledge bases. This system enables accurate, context-aware answers using Retrieval-Augmented Generation — combining dense + sparse retrieval, reranking, and query transformation techniques to close common RAG failure modes like vocabulary mismatch, noisy context, and chunk-size trade-offs.",

    architecture: EnterpriseQA,

    workflow: [
      "Document ingestion (PDF, DOCX, TXT, MD)",
      "Recursive & parent-child (small-to-big) chunking",
      "Embedding generation (sentence-transformers)",
      "Dual indexing: FAISS dense vector store + BM25 sparse index",
      "Hybrid retrieval via Reciprocal Rank Fusion",
      "Optional query transformation: expansion, HyDE, multi-query",
      "Cross-encoder reranking of top candidates",
      "Optional contextual compression of retrieved chunks",
      "LLM response generation with cited sources"
    ],

    deployment: "FastAPI backend (FAISS + BM25 + sentence-transformers) with a React (Vite) frontend; runs locally via uvicorn + npm, or containerized with Docker Compose",

    github: "https://github.com/Pooja-AI/Enterprise-rag-qa-system",
    demo: "",
    documentation: "https://github.com/Pooja-AI/Enterprise-rag-qa-system/blob/main/README.md",
    tech: ["Python", "FastAPI", "React", "FAISS", "BM25", "sentence-transformers", "Anthropic Claude / OpenAI", "RAG"]
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