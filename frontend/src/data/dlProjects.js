const dlProjects = [
  {
    id: "cnn-image-classification",
    title: "Image Classification using CNN",
    category: "Computer Vision",
    description:
      "Deep learning system for classifying images using Convolutional Neural Networks (CNN).",

    problemStatement:
      "Manual image classification is inefficient and error-prone. This system automates image recognition using CNN-based deep learning models.",

    architecture: "/architecture/cnn-classification.png",

    workflow: [
      "Image data collection",
      "Preprocessing and augmentation",
      "CNN model design",
      "Model training",
      "Evaluation and prediction"
    ],

    deployment:
      "Deployed using TensorFlow model serving with Python API backend.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "TensorFlow", "Keras", "CNN"]
  },

  {
    id: "yolo-object-detection",
    title: "Real-Time Object Detection using YOLO",
    category: "Computer Vision",
    description:
      "Deep learning system for detecting multiple objects in real-time using YOLO architecture.",

    problemStatement:
      "Traditional image classification cannot identify multiple objects in real-time scenes.",

    architecture: "/architecture/yolo.png",

    workflow: [
      "Video/image input capture",
      "Frame preprocessing",
      "YOLO model inference",
      "Bounding box detection",
      "Result visualization"
    ],

    deployment:
      "Deployed using OpenCV + YOLO inference pipeline with real-time video stream.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "YOLO", "OpenCV"]
  },

  {
    id: "face-recognition",
    title: "Face Recognition and Verification System",
    category: "Computer Vision",
    description:
      "Deep learning system for face detection, recognition, and verification.",

    problemStatement:
      "Security systems require reliable and automated identity verification methods.",

    architecture: "/architecture/face-recognition.png",

    workflow: [
      "Face detection",
      "Feature extraction",
      "Embedding generation",
      "Face matching",
      "Identity verification"
    ],

    deployment:
      "Deployed using FaceNet embeddings with API-based verification system.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "FaceNet", "OpenCV"]
  },

  {
    id: "medical-imaging",
    title: "Medical Image Diagnosis using Deep Learning",
    category: "Healthcare AI",
    description:
      "AI system for detecting diseases from medical images using CNN models.",

    problemStatement:
      "Manual medical image diagnosis is time-consuming and requires expert analysis.",

    architecture: "/architecture/medical-dl.png",

    workflow: [
      "Medical image ingestion",
      "Preprocessing",
      "CNN model training",
      "Feature extraction",
      "Disease prediction"
    ],

    deployment:
      "Deployed in healthcare AI pipeline with secure model inference API.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "CNN", "TensorFlow"]
  },

  {
    id: "lane-detection",
    title: "Autonomous Driving Lane Detection System",
    category: "Computer Vision",
    description:
      "Deep learning system for detecting road lanes in autonomous driving.",

    problemStatement:
      "Autonomous vehicles require accurate lane detection for safe navigation.",

    architecture: "/architecture/lane-detection.png",

    workflow: [
      "Road image capture",
      "Edge detection",
      "Lane segmentation",
      "Model prediction",
      "Overlay visualization"
    ],

    deployment:
      "Deployed using OpenCV + deep learning pipeline for real-time lane detection.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "OpenCV", "Deep Learning"]
  },

  {
    id: "mnist-digit",
    title: "Handwritten Digit Recognition (MNIST)",
    category: "Computer Vision",
    description:
      "Deep learning model for recognizing handwritten digits.",

    problemStatement:
      "Manual digit recognition systems are inefficient for large-scale input processing.",

    architecture: "/architecture/mnist.png",

    workflow: [
      "Dataset loading (MNIST)",
      "Data preprocessing",
      "CNN model training",
      "Evaluation",
      "Digit prediction"
    ],

    deployment:
      "Deployed using TensorFlow/Keras inference API.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "TensorFlow", "MNIST"]
  },

  {
    id: "speech-emotion",
    title: "Speech Emotion Recognition System",
    category: "Audio AI",
    description:
      "Deep learning system to detect emotions from speech signals.",

    problemStatement:
      "Understanding human emotions from speech is important for conversational AI systems.",

    architecture: "/architecture/speech-emotion.png",

    workflow: [
      "Audio preprocessing",
      "Feature extraction (MFCC)",
      "LSTM model training",
      "Emotion classification",
      "Result visualization"
    ],

    deployment:
      "Deployed using LSTM-based audio classification pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LSTM", "Librosa"]
  },

  {
    id: "text-to-speech",
    title: "Text-to-Speech Conversion System",
    category: "NLP + Audio",
    description:
      "Deep learning system to convert text into natural human speech.",

    problemStatement:
      "Accessibility systems require natural-sounding speech synthesis from text.",

    architecture: "/architecture/tts.png",

    workflow: [
      "Text preprocessing",
      "Phoneme conversion",
      "Neural speech synthesis",
      "Audio generation",
      "Playback output"
    ],

    deployment:
      "Deployed using neural TTS engine with API interface.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "TTS", "Deep Learning"]
  },

  {
    id: "neural-translation",
    title: "Neural Machine Translation System",
    category: "NLP",
    description:
      "Deep learning system for language translation using seq2seq models.",

    problemStatement:
      "Traditional translation systems lack contextual understanding.",

    architecture: "/architecture/translation.png",

    workflow: [
      "Text preprocessing",
      "Tokenization",
      "Seq2Seq model training",
      "Attention mechanism",
      "Translation generation"
    ],

    deployment:
      "Deployed using LSTM-based translation pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Seq2Seq", "LSTM"]
  },

  {
    id: "chatbot-seq2seq",
    title: "Chatbot using Sequence-to-Sequence Models",
    category: "NLP",
    description:
      "Deep learning chatbot built using seq2seq architecture.",

    problemStatement:
      "Rule-based chatbots lack flexibility and contextual understanding.",

    architecture: "/architecture/chatbot.png",

    workflow: [
      "Conversation dataset preparation",
      "Tokenization",
      "Seq2Seq training",
      "Response generation",
      "Dialogue flow"
    ],

    deployment:
      "Deployed as conversational AI API service.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Seq2Seq", "TensorFlow"]
  },

  {
    id: "dl-sentiment",
    title: "Sentiment Analysis using Deep Learning",
    category: "NLP",
    description:
      "Deep learning system for sentiment classification of text.",

    problemStatement:
      "Understanding customer sentiment is critical for business intelligence.",

    architecture: "/architecture/sentiment.png",

    workflow: [
      "Text preprocessing",
      "Embedding generation",
      "LSTM model training",
      "Sentiment classification",
      "Result visualization"
    ],

    deployment:
      "Deployed using LSTM-based NLP pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "LSTM", "Deep Learning"]
  }
];

export default dlProjects;