const nlpProjects = [
  {
    id: "text-classification",
    title: "Text Classification System (News / Topic Classification)",
    category: "Text Classification",
    description:
      "AI system that classifies news articles or documents into predefined categories using NLP models.",
    problemStatement:
      "Organizations struggle to automatically categorize large volumes of text data such as news, emails, and documents.",
    architecture: "/architecture/nlp-text-classification.png",
    workflow: [
      "Text data collection",
      "Text preprocessing (cleaning, tokenization)",
      "Feature extraction (TF-IDF / embeddings)",
      "Model training (ML or transformer)",
      "Prediction on unseen text"
    ],
    deployment:
      "Deployed as REST API using FastAPI with model inference endpoint.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Scikit-Learn", "NLP"]
  },

  {
    id: "spam-detection-nlp",
    title: "Spam Email Detection System",
    category: "Text Classification",
    description:
      "Detects spam emails using machine learning and NLP-based text classification.",
    problemStatement:
      "Email systems are flooded with spam messages that reduce productivity and security.",
    architecture: "/architecture/nlp-spam-detection.png",
    workflow: [
      "Email ingestion",
      "Text preprocessing",
      "Feature extraction",
      "Spam classification model training",
      "Real-time email prediction"
    ],
    deployment:
      "Deployed as email filtering service integrated with backend API.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Naive Bayes", "NLP"]
  },

  {
    id: "sentiment-analysis-reviews",
    title: "Sentiment Analysis on Customer Reviews",
    category: "Sentiment Analysis",
    description:
      "Analyzes customer sentiment from product reviews using NLP and deep learning models.",
    problemStatement:
      "Businesses need automated insights from customer reviews to understand sentiment at scale.",
    architecture: "/architecture/nlp-sentiment-analysis.png",
    workflow: [
      "Review data collection",
      "Text cleaning and preprocessing",
      "Sentiment feature extraction",
      "Model training (LSTM / ML models)",
      "Sentiment prediction"
    ],
    deployment:
      "Deployed as analytics API for real-time sentiment scoring.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LSTM", "TF-IDF"]
  },

  {
    id: "fake-news-detection",
    title: "Fake News Detection System",
    category: "Text Classification",
    description:
      "Detects fake news articles using transformer-based NLP models.",
    problemStatement:
      "Misinformation spreads quickly on digital platforms and needs automated detection systems.",
    architecture: "/architecture/nlp-fake-news.png",
    workflow: [
      "News data collection",
      "Text preprocessing",
      "Feature extraction",
      "Transformer model training",
      "Fake vs real classification"
    ],
    deployment:
      "Deployed as API service integrated with web applications.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "BERT", "NLP"]
  },

  {
    id: "ner-system",
    title: "Named Entity Recognition (NER) System",
    category: "Information Extraction",
    description:
      "Extracts entities like names, locations, and organizations from text.",
    problemStatement:
      "Structured information extraction from unstructured text is essential for enterprise applications.",
    architecture: "/architecture/nlp-ner.png",
    workflow: [
      "Text ingestion",
      "Tokenization",
      "NER model inference",
      "Entity extraction",
      "Structured output generation"
    ],
    deployment:
      "Deployed as NLP microservice with REST API.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "SpaCy", "Transformers"]
  },

  {
    id: "question-answering",
    title: "Question Answering System using NLP",
    category: "QA Systems",
    description:
      "Answers user questions based on given document context using transformer models.",
    problemStatement:
      "Users need fast and accurate answers from large documents without manual search.",
    architecture: "/architecture/nlp-qa.png",
    workflow: [
      "Context document ingestion",
      "Question processing",
      "Embedding generation",
      "Context retrieval",
      "Answer generation using transformer model"
    ],
    deployment:
      "Deployed as intelligent QA API service.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "BERT", "Transformers"]
  },

  {
    id: "intent-chatbot",
    title: "Chatbot using Intent Classification",
    category: "Conversational AI",
    description:
      "Conversational chatbot that understands user intent using NLP models.",
    problemStatement:
      "Customer support requires automated conversational systems to handle repetitive queries.",
    architecture: "/architecture/nlp-chatbot.png",
    workflow: [
      "User input processing",
      "Intent classification",
      "Entity extraction",
      "Response generation",
      "Chat interaction loop"
    ],
    deployment:
      "Deployed as chatbot service integrated into web applications.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LSTM", "NLU"]
  },

  {
    id: "text-summarization",
    title: "Document Summarization System (Extractive)",
    category: "Text Summarization",
    description:
      "Automatically summarizes long documents into concise key points.",
    problemStatement:
      "Reading large documents is time-consuming and inefficient for users.",
    architecture: "/architecture/nlp-summarization.png",
    workflow: [
      "Document ingestion",
      "Sentence segmentation",
      "Importance scoring",
      "Sentence ranking",
      "Summary generation"
    ],
    deployment:
      "Deployed as text summarization API service.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "NLTK", "Transformers"]
  },

  {
    id: "keyword-extraction",
    title: "Keyword Extraction from Text Documents",
    category: "Information Extraction",
    description:
      "Extracts important keywords from large text documents using NLP techniques.",
    problemStatement:
      "Manual keyword extraction from large documents is inefficient and error-prone.",
    architecture: "/architecture/nlp-keywords.png",
    workflow: [
      "Text preprocessing",
      "TF-IDF computation",
      "Keyword ranking",
      "Top keyword selection"
    ],
    deployment:
      "Deployed as lightweight NLP microservice.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "TF-IDF", "RAKE"]
  }
];

export default nlpProjects;