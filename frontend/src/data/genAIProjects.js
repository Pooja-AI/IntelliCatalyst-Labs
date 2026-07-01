import CorrosionDetection from "../assets/architecture/corrosion-detection.png";
import CorrosionDetectionDocs from "../assets/docs/CorrosionDetectionDocs.pdf";
import SmartContentCreation from "../assets/architecture/smartcontent_creation.png"
import ResumeOptimizationTool from "../assets/architecture/ResumeOptimizationTool.png"
import MeetingNotes from "../assets/architecture/MeetingNotes.png"
const genAIProjects = [
  {
    id: "corrosion-detection-genai",
    title: "Corrosion Detection GenAI - Vision + LLM Inspection Assistant",
    category: "Computer Vision & GenAI",
    description:
      "Multimodal AI system that detects corrosion in images of metal structures using a CNN/YOLO/ViT vision model, then uses an LLM to generate inspection reports and answer follow-up questions via a chat assistant.",

    problemStatement:
      "Manual visual inspection of industrial assets (pipelines, tanks, beams, platforms) for corrosion is slow, inconsistent, and relies heavily on inspector expertise. This system automates corrosion detection from images and uses GenAI to produce structured severity assessments, risk levels, and maintenance recommendations.",

    architecture: CorrosionDetection,

    workflow: [
      "Plant/asset selection and image upload",
      "Image preprocessing and resizing",
      "Vision model inference (corrosion detection + severity classification)",
      "LLM reasoning over detections (risk level + inspection report)",
      "Multimodal fusion of vision and LLM outputs",
      "Interactive chat assistant for follow-up questions"
    ],

    deployment:
      "Deployed as a FastAPI backend (vision model + LLM reasoning, config-driven via YAML) with a React (Vite) frontend; containerized with Docker and docker-compose for backend + frontend.",

    github: "https://github.com/Pooja-AI/corrosion-detection-genai",
    demo: "",
    documentation: CorrosionDetectionDocs,
    tech: ["Python", "FastAPI", "React", "PyTorch", "YOLO/CNN/ViT", "LLMs", "Prompt Engineering", "Docker"]
  },

  {
  id: "smart-content-creation-assistant",

  title: "Smart Content Creation Assistant",

  category: "Generative AI",

  description:
    "An enterprise-grade AI-powered content creation platform that generates SEO-optimized blogs, articles, marketing copy, social media posts, and long-form content using Multi-Agent AI, RAG, and LLMs.",

  problemStatement:
    "Content teams spend significant time researching, drafting, optimizing, fact-checking, and formatting content. Existing AI tools often produce generic, inaccurate, or non-SEO-friendly content without domain knowledge or collaboration capabilities.",

  architecture: SmartContentCreation,

  workflow: [
    "User submits topic or content request",
    "Intent detection & prompt enhancement",
    "Content planning using Planner Agent",
    "Research Agent performs web search and RAG retrieval",
    "Knowledge retrieval from Vector Database",
    "Outline generation",
    "Writer Agent generates section-wise content",
    "SEO Agent optimizes headings, keywords, and metadata",
    "Fact Checker validates claims and citations",
    "Reviewer Agent improves grammar, readability, and tone",
    "Quality evaluation using Ragas/DeepEval",
    "Human feedback (optional)",
    "Export to PDF, DOCX, HTML, Markdown, or CMS"
  ],

  features: [
    "Multi-Agent AI Workflow",
    "Retrieval-Augmented Generation (RAG)",
    "Hybrid Search (Vector + Keyword)",
    "SEO Optimization",
    "Automatic Outline Generation",
    "Citation Generation",
    "Fact Checking",
    "Grammar & Readability Enhancement",
    "Content Templates",
    "Human-in-the-Loop Review",
    "Version History",
    "Streaming Content Generation",
    "Analytics Dashboard",
    "Multi-Format Export",
    "Multi-LLM Support"
  ],

  deployment:
    "Containerized using Docker and deployed on Kubernetes with FastAPI backend, Next.js frontend, LangGraph orchestration, Redis caching, PostgreSQL database, Qdrant vector database, and cloud object storage.",

  github: "https://github.com/Pooja-AI/Forge-Smart-Content-Creation-Assistant",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "FastAPI",
    "Next.js",
    "React",
    "LangGraph",
    "LangChain",
    "OpenAI GPT-5.5",
    "Claude",
    "Gemini",
    "RAG",
    "Qdrant",
    "PostgreSQL",
    "Redis",
    "OpenAI Embeddings",
    "Tavily Search",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "LangSmith",
    "Ragas",
    "DeepEval",
    "OpenTelemetry",
    "AWS S3"
  ]
},

  {
    id: "resume-optimizer",
    title: "AI Resume Optimization Tool",
    category: "Career AI",
    description:
      "AI-powered resume analyzer that scores resumes for ATS compatibility, identifies missing keywords against a target job description, and rewrites weak bullet points using a self-hosted open-source LLM.",

    problemStatement:
      "Job seekers struggle to optimize resumes for ATS and recruiter expectations.",

    architecture: ResumeOptimizationTool,

    workflow: [
      "Resume upload (PDF / DOCX / TXT) or paste-text input",
      "Text extraction & parsing (pdfplumber, python-docx)",
      "Job description keyword matching",
      "LLM-based analysis via self-hosted Ollama (Llama 3.1 / Mistral / Phi-3)",
      "Rule-based offline fallback when no LLM is running",
      "ATS scoring, strengths/weaknesses, and section feedback generation",
      "Bullet-point rewrite suggestions",
      "Results rendered in React UI"
    ],

    deployment:
      "Containerized with Docker Compose (FastAPI backend + React/Vite frontend + Ollama LLM server); deployable as a self-hosted SaaS-style resume optimization platform on any container host (Render, Railway, Fly.io, AWS ECS, or a GPU VPS for the LLM).",

    github: "https://github.com/Pooja-AI/Resumatic-AI-ResumeOptimizationTool.git",
    demo: "",
    documentation: "README.md (included in project root — setup, API reference, Docker deployment guide)",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Open-source LLMs (Llama 3.1 / Mistral / Phi-3 via Ollama)",
      "Prompt Engineering",
      "pdfplumber",
      "python-docx",
      "Docker"
    ]
  },

 {
  id: "meeting-summarizer",
  title: "Meeting Notes Summarizer and Action Generator",
  category: "Productivity AI",

  description:
   "An AI-powered meeting intelligence platform that transforms meeting audio or notes into structured summaries, action items, decisions, and key insights. It uses locally hosted speech-to-text and open-source LLMs to ensure privacy, offline capability, and zero dependency on paid APIs.",
  problemStatement:
    "Meetings generate large volumes of unstructured notes, recordings, and verbal commitments that are time-consuming to revisit and easy to lose track of. Important decisions get buried in rambling discussion, action items go unassigned or forgotten, and teams spend valuable time manually transcribing and summarizing calls after the fact. This project automates that entire process — turning a raw recording into clear, structured, shareable minutes within minutes of the meeting ending.",

  architecture: MeetingNotes,

  workflow: [
    "Audio upload (drag-and-drop file, or paste raw notes/transcript directly)",
    "Speech-to-text transcription using faster-whisper, with timestamped segments and language detection",
    "Text cleaning — filler-word removal, repeated-word deduplication, and sentence-aware chunking for long transcripts",
    "Structured summarization & action item extraction via a locally-run open-weight instruct LLM (Hugging Face transformers), prompted to return a strict JSON schema",
    "Output generation — executive summary, key points, decisions, prioritized action items (owner/due date/priority), and risks/open questions, rendered in an interactive UI"
  ],

  deployment:
    "FastAPI backend exposing /transcribe, /summarize, and /process endpoints, paired with a React (Vite) frontend featuring a custom tape-deck-inspired UI with live waveform feedback during processing. Fully containerized with Docker Compose for one-command deployment. Speech-to-text runs via faster-whisper (CPU or GPU); summarization runs via a swappable open-weight model (default Mistral-7B-Instruct, with Qwen2.5 and Phi-3-mini supported as lighter alternatives) loaded directly through Hugging Face transformers — no OpenAI/Anthropic API key or paid LLM service required. Includes an automatic fallback to a lightweight BART summarization pipeline if the primary LLM can't be loaded.",

  github: "https://github.com/Pooja-AI/meeting-summarizer.git",
  demo: "",
  documentation: "https://github.com/Pooja-AI/meeting-summarizer.git#readme",
  tech: [
    "Python",
    "FastAPI",
    "React",
    "faster-whisper",
    "Hugging Face Transformers",
    "Mistral-7B-Instruct / Qwen2.5",
    "Docker"
  ]
}
];

export default genAIProjects;