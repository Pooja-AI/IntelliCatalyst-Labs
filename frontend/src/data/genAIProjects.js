import CorrosionDetection from "../assets/architecture/corrosion-detection.png";
import CorrosionDetectionDocs from "../assets/docs/CorrosionDetectionDocs.pdf";
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
    id: "content-assistant",
    title: "Smart Content Creation Assistant",
    category: "Content Generation",
    description:
      "AI-powered tool for generating blogs, articles, and long-form content.",

    problemStatement:
      "Content creators need faster and high-quality content generation tools.",

    architecture: "/architecture/content-gen.png",

    workflow: [
      "Topic input",
      "Prompt optimization",
      "LLM content generation",
      "SEO refinement",
      "Final output formatting"
    ],

    deployment:
      "Deployed as a web-based content generation tool using LLM APIs.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "GPT", "NLP"]
  },

  {
    id: "resume-optimizer",
    title: "AI Resume Optimization Tool",
    category: "Career AI",
    description:
      "AI system to improve resumes with suggestions, formatting, and keyword optimization.",

    problemStatement:
      "Job seekers struggle to optimize resumes for ATS and recruiter expectations.",

    architecture: "/architecture/resume-ai.png",

    workflow: [
      "Resume parsing",
      "Skill extraction",
      "LLM-based analysis",
      "Improvement suggestions",
      "Optimized resume generation"
    ],

    deployment:
      "Deployed as SaaS-based resume optimization platform.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Prompt Engineering"]
  },

  {
    id: "meeting-summarizer",
    title: "Meeting Notes Summarizer and Action Generator",
    category: "Productivity AI",
    description:
      "AI system to summarize meetings and extract actionable insights.",

    problemStatement:
      "Meetings generate large amounts of unstructured notes that are difficult to process.",

    architecture: "/architecture/meeting-summary.png",

    workflow: [
      "Audio transcription",
      "Text cleaning",
      "Summarization using LLMs",
      "Action item extraction",
      "Output generation"
    ],

    deployment:
      "Deployed using speech-to-text + LLM summarization pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Speech-to-Text"]
  },

  {
    id: "learning-generator",
    title: "Personalized Learning Content Generator",
    category: "Education AI",
    description:
      "AI system that generates personalized learning materials for students.",

    problemStatement:
      "Students need personalized learning content tailored to their skill level.",

    architecture: "/architecture/learning-ai.png",

    workflow: [
      "User profile analysis",
      "Knowledge gap detection",
      "Prompt generation",
      "Content creation",
      "Personalization layer"
    ],

    deployment:
      "Deployed using RAG + LLM-based educational assistant system.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "RAG"]
  },

  {
    id: "marketing-copy",
    title: "AI Marketing Copy Generator",
    category: "Marketing AI",
    description:
      "Generates marketing ads, social media posts, and promotional content.",

    problemStatement:
      "Marketing teams require fast and creative copy generation for campaigns.",

    architecture: "/architecture/marketing-gen.png",

    workflow: [
      "Campaign input",
      "Tone selection",
      "Prompt engineering",
      "Content generation",
      "Optimization"
    ],

    deployment:
      "Deployed using LLM-based marketing automation tool.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "GPT", "Prompt Engineering"]
  },

  {
    id: "story-generator",
    title: "AI Story and Script Writing Assistant",
    category: "Creative AI",
    description:
      "Generates creative stories, scripts, and narrative content using AI.",

    problemStatement:
      "Writers need creative assistance for story and script development.",

    architecture: "/architecture/story-ai.png",

    workflow: [
      "Idea input",
      "Story structure generation",
      "Character building",
      "Narrative generation",
      "Final script output"
    ],

    deployment:
      "Deployed using LLM creative writing pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Creative Prompting"]
  },

  {
    id: "product-description",
    title: "AI Product Description Generator",
    category: "E-commerce AI",
    description:
      "Generates SEO-friendly product descriptions for e-commerce platforms.",

    problemStatement:
      "E-commerce sellers need scalable product description generation.",

    architecture: "/architecture/product-desc.png",

    workflow: [
      "Product input",
      "Feature extraction",
      "Prompt creation",
      "LLM generation",
      "SEO optimization"
    ],

    deployment:
      "Deployed as SaaS tool for e-commerce content generation.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Prompt Engineering"]
  },

  {
    id: "code-explainer",
    title: "Code Explanation and Documentation Generator",
    category: "Developer AI",
    description:
      "AI system that explains code and generates documentation automatically.",

    problemStatement:
      "Developers spend significant time documenting and understanding code.",

    architecture: "/architecture/code-ai.png",

    workflow: [
      "Code input parsing",
      "AST analysis",
      "LLM explanation generation",
      "Documentation formatting",
      "Output generation"
    ],

    deployment:
      "Deployed using LLM-based developer assistant tool.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Code Understanding"]
  },

  {
    id: "idea-generator",
    title: "AI Startup Idea Generator",
    category: "Innovation AI",
    description:
      "Generates startup and project ideas using generative AI models.",

    problemStatement:
      "Entrepreneurs struggle to generate innovative startup ideas consistently.",

    architecture: "/architecture/idea-gen.png",

    workflow: [
      "User interest input",
      "Domain selection",
      "LLM brainstorming",
      "Idea ranking",
      "Final idea output"
    ],

    deployment:
      "Deployed using LLM-based idea generation engine.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LLMs", "Brainstorming AI"]
  }
];

export default genAIProjects;