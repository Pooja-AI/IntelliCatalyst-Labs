import IDP from "../assets/architecture/IDP.png";
import MedicalImaging from "../assets/architecture/MedicalImaging.png";
import ManufacturingVisualInspection from "../assets/architecture/ManufacturingVisualInspection.png";
import SmartTrafficAnalytics from "../assets/architecture/SmartTrafficAnalytics.png";
import ResumeIntelligencePlatform from "../assets/architecture/ResumeIntelligencePlatform.png";
import IntelligentDocumentProcessingBanner from "../assets/banners/intelligent-banner.png";
import MedicalImagingBanner from "../assets/banners/Medical-banner.png";
import ManufacturingVisualInspectionBanner from "../assets/banners/Manufacturing-banner.png";
import SmartTrafficAnalyticsBanner from "../assets/banners/smarttraffic-banner.png";
import EResumeIntelligenceBanner from "../assets/banners/ERIP-banner.png";
import ESKSBanner from "../assets/banners/ESKS-banner.png";
import AIVisualSearchBanner from "../assets/banners/AIVisual-banner.png";
import VideoIntelligenceBanner from "../assets/banners/AIVideo-banner.png";
import AIImageGenerationBanner from "../assets/banners/AIImage-banner.png";
import AutonomousVisionIntelligenceBanner from "../assets/banners/Avision-banner.png";

const dlProjects = [
  {
  id: "intelligent-document-processing",

  title: "Intelligent Document Processing (IDP) Platform",
  banner: IntelligentDocumentProcessingBanner,

  category: "Deep Learning | Document AI | OCR | NLP",

  description:
    "An enterprise-grade Document AI platform that automates document ingestion, classification, OCR, key-value extraction, table extraction, named entity recognition, and document understanding using state-of-the-art deep learning models. The platform enables organizations to process invoices, receipts, purchase orders, contracts, forms, bank statements, and insurance documents at scale through cloud-native APIs.",

  problemStatement:
    "Manual document processing is time-consuming, error-prone, and expensive. Organizations require an intelligent system capable of automatically extracting structured information from diverse document types with high accuracy to accelerate business workflows and reduce operational costs.",

  architecture: IDP,

  workflow: [
    "Document ingestion from REST APIs, Cloud Storage, Email, and Local Uploads",
    "Document validation and metadata extraction",
    "Image enhancement (Deskewing, Denoising, Binarization, Resolution Enhancement)",
    "Document classification using Vision Transformers",
    "OCR using PaddleOCR / EasyOCR / Tesseract",
    "Layout analysis for document structure detection",
    "Table detection and extraction",
    "Key-value pair extraction",
    "Named Entity Recognition using LayoutLMv3",
    "Document understanding using Donut Transformer",
    "Post-processing and confidence score generation",
    "Human-in-the-loop validation workflow",
    "Model evaluation using Precision, Recall, F1-Score, IoU, Character Error Rate (CER), Word Error Rate (WER)",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Model serving using FastAPI",
    "Asynchronous task processing using Celery",
    "Caching using Redis",
    "Metadata storage in PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise cloud-native Document AI platform deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, Celery, Prometheus, Grafana, and GitHub Actions with scalable REST APIs and asynchronous document processing.",

  github: "https://github.com/Pooja-AI/intelligent-document-processing",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "OpenCV",
    "PaddleOCR",
    "EasyOCR",
    "Tesseract OCR",
    "LayoutLMv3",
    "Donut",
    "Vision Transformer",
    "Transformers",
    "Hugging Face",
    "FastAPI",
    "Celery",
    "Redis",
    "PostgreSQL",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "medical-imaging-diagnosis",

  title: "Medical Imaging Diagnosis Platform",
  banner: MedicalImagingBanner,

  category: "Deep Learning | Computer Vision | Healthcare AI",

  description:
    "An enterprise-grade medical imaging platform that assists healthcare professionals by automatically detecting diseases from X-ray, CT, MRI, ultrasound, and retinal images using deep learning. The platform supports multi-class and multi-label diagnosis, lesion localization, explainable AI visualizations, and scalable cloud-based inference APIs for clinical decision support.",

  problemStatement:
    "Medical image interpretation is time-intensive and requires specialized expertise. Healthcare organizations need an intelligent system capable of providing fast, accurate, and explainable diagnostic predictions to improve patient outcomes and reduce radiologist workload.",

  architecture: MedicalImaging,

  workflow: [
    "Medical image ingestion from PACS, DICOM servers, cloud storage, and REST APIs",
    "DICOM parsing and metadata extraction",
    "Image validation and preprocessing",
    "Image normalization and resizing",
    "Image augmentation (Rotation, Flip, Brightness, Contrast, Noise Injection)",
    "Dataset balancing",
    "Feature extraction using pretrained CNN backbones",
    "Transfer Learning using ResNet50, EfficientNet, DenseNet, and Vision Transformer (ViT)",
    "Hyperparameter tuning",
    "Model training",
    "Multi-class and multi-label disease classification",
    "Lesion localization using Grad-CAM visualization",
    "Model evaluation using Accuracy, Precision, Recall, F1-Score, ROC-AUC, Sensitivity, Specificity",
    "Explainable AI report generation",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Real-time inference using FastAPI",
    "Batch prediction pipeline",
    "Prediction caching using Redis",
    "Patient metadata storage using PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Cloud-native medical imaging platform deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, Prometheus, Grafana, and GitHub Actions, providing secure REST APIs for real-time and batch diagnostic inference.",

  github: "https://github.com/Pooja-AI/medical-imaging-diagnosis-platform",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "Torchvision",
    "OpenCV",
    "MONAI",
    "ResNet50",
    "EfficientNet",
    "DenseNet",
    "Vision Transformer (ViT)",
    "Grad-CAM",
    "Albumentations",
    "FastAPI",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "Grafana",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "manufacturing-visual-inspection",

  title: "Manufacturing Visual Inspection Platform",
  banner: ManufacturingVisualInspectionBanner,

  category: "Deep Learning | Computer Vision | Industrial AI",

  description:
    "An enterprise-grade visual inspection platform that automatically detects manufacturing defects, performs product quality inspection, identifies missing components, measures dimensional deviations, and classifies defects using state-of-the-art deep learning models. The platform enables real-time quality control for smart factories through scalable cloud-native APIs.",



  problemStatement:
    "Manual quality inspection is slow, inconsistent, and expensive. Manufacturing industries require an intelligent vision system capable of detecting product defects with high accuracy to improve production quality, reduce waste, and automate inspection workflows.",

  architecture: ManufacturingVisualInspection,

  workflow: [
    "Image ingestion from industrial cameras, IoT devices, and production lines",
    "Image validation and preprocessing",
    "Image enhancement and normalization",
    "Image augmentation using Albumentations",
    "Dataset annotation using Label Studio / CVAT",
    "Object detection dataset preparation",
    "Model training using YOLOv11",
    "Transfer learning using pretrained weights",
    "Defect detection and localization",
    "Instance segmentation using Mask R-CNN",
    "Semantic segmentation using Segment Anything Model (SAM)",
    "Defect classification",
    "Dimensional measurement and quality analysis",
    "Confidence score generation",
    "Model evaluation using mAP, IoU, Precision, Recall, and F1-Score",
    "Explainable AI visualization using Grad-CAM",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Real-time inference using FastAPI",
    "Batch inspection pipeline",
    "Inference caching using Redis",
    "Inspection report storage using PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise-grade visual inspection platform deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, Prometheus, Grafana, ELK Stack, and GitHub Actions, supporting scalable real-time defect detection and quality inspection.",

  github: "https://github.com/Pooja-AI/manufacturing-visual-inspection-platform",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "OpenCV",
    "YOLOv11",
    "Mask R-CNN",
    "Segment Anything Model (SAM)",
    "Albumentations",
    "Label Studio",
    "CVAT",
    "Grad-CAM",
    "FastAPI",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "smart-traffic-analytics",

  title: "Smart Traffic Analytics Platform",
  banner: SmartTrafficAnalyticsBanner,

  category: "Deep Learning | Video Analytics | Smart Cities AI",

  description:
    "An enterprise-grade intelligent traffic analytics platform that performs real-time vehicle detection, multi-object tracking, traffic flow analysis, speed estimation, automatic number plate recognition (ANPR), helmet detection, seatbelt detection, parking violation detection, and traffic congestion monitoring using deep learning and computer vision.",

  problemStatement:
    "Traditional traffic monitoring systems require extensive manual supervision and cannot efficiently analyze high-volume video streams. Smart cities require an AI-powered platform capable of real-time traffic analysis, rule violation detection, and intelligent transportation insights to improve road safety and traffic management.",

  architecture: SmartTrafficAnalytics,

  workflow: [
    "Live video ingestion from CCTV cameras, RTSP streams, drones, and IP cameras",
    "Video frame extraction",
    "Frame preprocessing and normalization",
    "Vehicle detection using YOLOv11",
    "Vehicle classification",
    "Multi-object tracking using DeepSORT / ByteTrack",
    "Vehicle counting and traffic density estimation",
    "Speed estimation",
    "Lane occupancy analysis",
    "Traffic congestion detection",
    "Helmet detection",
    "Seatbelt detection",
    "Automatic Number Plate Recognition (ANPR)",
    "Parking violation detection",
    "Traffic event detection",
    "Real-time alert generation",
    "Dashboard analytics generation",
    "Model evaluation using mAP, MOTA, MOTP, Precision, Recall, and F1-Score",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Streaming inference using FastAPI",
    "Kafka-based event streaming",
    "Caching using Redis",
    "Analytics storage using PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise-scale traffic analytics platform deployed using FastAPI, Kafka, Docker, Kubernetes, MLflow, PostgreSQL, Redis, Prometheus, Grafana, ELK Stack, and GitHub Actions for scalable real-time video analytics.",

  github: "https://github.com/Pooja-AI/smart-traffic-analytics-platform",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "OpenCV",
    "YOLOv11",
    "DeepSORT",
    "ByteTrack",
    "EasyOCR",
    "FastAPI",
    "Kafka",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "resume-intelligence",

  title: "Enterprise Resume Intelligence Platform",
  banner: EResumeIntelligenceBanner,

  category: "Deep Learning | NLP | Recruitment AI",

  description:
    "An enterprise-grade AI recruitment platform that automates resume parsing, skill extraction, job matching, semantic candidate ranking, and hiring analytics using transformer-based NLP models. The platform enables HR teams to efficiently screen thousands of resumes through scalable cloud-native APIs.",

  problemStatement:
    "Manual resume screening is time-consuming, inconsistent, and inefficient. Organizations require an intelligent system capable of extracting candidate information, matching resumes with job descriptions, ranking applicants, and providing explainable hiring recommendations.",

  architecture: ResumeIntelligencePlatform,

  workflow: [
    "Resume ingestion (PDF, DOCX, TXT)",
    "Job description ingestion",
    "Document validation",
    "Resume text extraction",
    "Text preprocessing and normalization",
    "Resume section identification",
    "Named Entity Recognition (Skills, Education, Experience, Certifications)",
    "Keyword extraction",
    "Resume embedding generation using Sentence Transformers",
    "Job description embedding generation",
    "Semantic similarity computation",
    "Candidate ranking",
    "Skill gap analysis",
    "Candidate recommendation generation",
    "Explainable AI score generation",
    "Model evaluation using Precision, Recall, F1-Score, MAP, NDCG",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Real-time inference using FastAPI",
    "Caching using Redis",
    "Candidate profile storage using PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise recruitment intelligence platform deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, Prometheus, Grafana, ELK Stack, and GitHub Actions for scalable resume screening and semantic candidate matching.",

  github: "https://github.com/Pooja-AI/enterprise-resume-intelligence",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "Transformers",
    "BERT",
    "RoBERTa",
    "Sentence Transformers",
    "spaCy",
    "Hugging Face",
    "FastAPI",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "enterprise-semantic-search",

  title: "Enterprise Semantic Search & Knowledge Discovery Platform",
  banner: ESKSBanner,

  category: "Deep Learning | NLP | Semantic Search | Enterprise AI",

  description:
    "An enterprise-grade semantic search platform that enables intelligent document retrieval, knowledge discovery, question understanding, and semantic similarity search using transformer-based embeddings and vector databases. The platform allows organizations to search across millions of documents using natural language instead of keyword matching.",

  problemStatement:
    "Traditional keyword search fails to understand user intent and document semantics, resulting in poor search relevance. Organizations require an intelligent semantic search platform capable of retrieving contextually relevant information across large enterprise knowledge bases.",

  architecture: "",

  workflow: [
    "Document ingestion from PDFs, DOCX, Web APIs, SharePoint, and Cloud Storage",
    "Document validation and metadata extraction",
    "Text extraction and preprocessing",
    "Document chunking",
    "Embedding generation using Sentence Transformers",
    "Vector indexing using FAISS",
    "Metadata indexing",
    "Natural language query preprocessing",
    "Query embedding generation",
    "Semantic similarity search",
    "Top-K document retrieval",
    "Context re-ranking using Cross Encoder",
    "Knowledge discovery and document recommendation",
    "Search analytics generation",
    "Model evaluation using Recall@K, Precision@K, MRR, nDCG",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Real-time inference using FastAPI",
    "Caching using Redis",
    "Metadata storage using PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise semantic search platform deployed using FastAPI, Docker, Kubernetes, FAISS, MLflow, PostgreSQL, Redis, Prometheus, Grafana, ELK Stack, and GitHub Actions for scalable document retrieval and knowledge discovery.",

  github: "https://github.com/Pooja-AI/enterprise-semantic-search",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "Transformers",
    "Sentence Transformers",
    "Cross Encoder",
    "FAISS",
    "Hugging Face",
    "FastAPI",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "visual-search-product-recommendation",

  title: "AI Visual Search & Product Recommendation Platform",
  banner: AIVisualSearchBanner,

  category: "Deep Learning | Multimodal AI | Computer Vision",

  description:
    "An enterprise-grade multimodal AI platform that enables users to search products using images, text, or both. The platform generates unified image-text embeddings, performs semantic similarity search, recommends visually similar products, and provides personalized recommendations using deep learning and vector search.",

  problemStatement:
    "Traditional keyword-based product search often fails when users cannot accurately describe an item. Businesses require an intelligent visual search platform capable of understanding both images and natural language to improve product discovery and customer experience.",

  architecture: "",

  workflow: [
    "Product catalog ingestion from ERP and e-commerce platforms",
    "Image validation and preprocessing",
    "Product metadata ingestion",
    "Text preprocessing and normalization",
    "Image augmentation",
    "Image embedding generation using Vision Transformer (ViT)",
    "Text embedding generation using CLIP Text Encoder",
    "Multimodal embedding generation using CLIP",
    "Vector indexing using FAISS",
    "Image similarity search",
    "Cross-modal image-to-text retrieval",
    "Text-to-image retrieval",
    "Personalized recommendation generation",
    "Recommendation ranking",
    "Search analytics generation",
    "Model evaluation using Recall@K, Precision@K, mAP, NDCG",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Real-time inference using FastAPI",
    "Caching using Redis",
    "Product catalog storage using PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise visual search platform deployed using FastAPI, Docker, Kubernetes, CLIP, FAISS, MLflow, PostgreSQL, Redis, Prometheus, Grafana, ELK Stack, and GitHub Actions for scalable multimodal product search and recommendation.",

  github: "https://github.com/Pooja-AI/visual-search-product-recommendation",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "CLIP",
    "Vision Transformer (ViT)",
    "Sentence Transformers",
    "FAISS",
    "OpenCV",
    "Albumentations",
    "FastAPI",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "video-intelligence-platform",

  title: "AI Video Intelligence Platform",
  banner: VideoIntelligenceBanner,

  category: "Deep Learning | Video Analytics | Video Understanding",

  description:
    "An enterprise-grade AI video intelligence platform that automatically analyzes surveillance videos, industrial recordings, sports footage, and security camera streams to recognize human activities, detect abnormal events, summarize videos, classify scenes, and generate actionable insights using state-of-the-art video deep learning models.",

  problemStatement:
    "Organizations generate massive volumes of video data that cannot be analyzed manually. An intelligent video understanding platform is required to automatically recognize activities, detect incidents, generate summaries, and provide real-time business insights from continuous video streams.",

  architecture: "",

  workflow: [
    "Video ingestion from CCTV, RTSP streams, cloud storage, and uploaded files",
    "Video validation and metadata extraction",
    "Frame extraction and preprocessing",
    "Frame sampling and temporal sequence generation",
    "Image normalization and augmentation",
    "Human detection and tracking",
    "Action recognition using Video Transformers",
    "Activity classification",
    "Abnormal event detection",
    "Scene classification",
    "Video summarization",
    "Temporal event localization",
    "Confidence score generation",
    "Real-time alert generation",
    "Business analytics dashboard generation",
    "Model evaluation using Top-1 Accuracy, Top-5 Accuracy, Precision, Recall, F1-Score, mAP",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Streaming inference using FastAPI",
    "Event streaming using Kafka",
    "Caching using Redis",
    "Metadata storage using PostgreSQL",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise AI video analytics platform deployed using FastAPI, Docker, Kubernetes, Kafka, MLflow, PostgreSQL, Redis, Prometheus, Grafana, ELK Stack, and GitHub Actions, providing scalable real-time video understanding APIs.",

  github: "https://github.com/Pooja-AI/video-intelligence-platform",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "OpenCV",
    "TimeSformer",
    "Video Swin Transformer",
    "SlowFast",
    "YOLOv11",
    "DeepSORT",
    "FastAPI",
    "Kafka",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Redis",
    "PostgreSQL",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "image-generation-platform",

  title: "AI Image Generation & Editing Platform",
  banner: AIImageGenerationBanner,

  category: "Deep Learning | Generative AI | Computer Vision",

  description:
    "An enterprise-grade AI creative platform that generates, edits, restores, enhances, and transforms images using state-of-the-art diffusion models, generative adversarial networks (GANs), and image foundation models. The platform supports text-to-image generation, image-to-image translation, inpainting, outpainting, background removal, super-resolution, style transfer, and AI-powered image editing through scalable cloud-native APIs.",

  problemStatement:
    "Creative professionals and enterprises require an intelligent image generation platform capable of producing high-quality visual content, editing existing images, and automating design workflows while maintaining scalability, consistency, and production reliability.",

  architecture: "",

  workflow: [
    "Image and prompt ingestion",
    "Prompt validation and preprocessing",
    "Image validation",
    "Image preprocessing and normalization",
    "Image augmentation",
    "Text embedding generation",
    "Latent representation generation",
    "Text-to-image generation using Stable Diffusion XL",
    "Image-to-image generation",
    "Image inpainting",
    "Image outpainting",
    "Background removal",
    "Image super-resolution",
    "Image restoration",
    "Style transfer",
    "Face restoration",
    "Image quality assessment",
    "Safety filtering and NSFW detection",
    "Model evaluation using FID, CLIP Score, LPIPS, SSIM",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "GPU inference optimization using ONNX/TensorRT",
    "Batch inference pipeline",
    "Real-time inference using FastAPI",
    "Asynchronous image generation using Celery",
    "Caching using Redis",
    "Metadata storage using PostgreSQL",
    "Object storage using MinIO / Amazon S3",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise AI image generation platform deployed using FastAPI, Docker, Kubernetes, MLflow, Redis, PostgreSQL, MinIO, Prometheus, Grafana, ELK Stack, and GitHub Actions with GPU-accelerated scalable inference services.",

  github: "https://github.com/Pooja-AI/image-generation-platform",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "Diffusers",
    "Stable Diffusion XL",
    "ControlNet",
    "StyleGAN2",
    "DCGAN",
    "Variational Autoencoder (VAE)",
    "CLIP",
    "OpenCV",
    "ONNX Runtime",
    "TensorRT",
    "FastAPI",
    "Celery",
    "Redis",
    "PostgreSQL",
    "MinIO",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
},
{
  id: "autonomous-vision-intelligence",

  title: "Autonomous Vision Intelligence Platform",
  banner: AutonomousVisionIntelligenceBanner,

  category: "Deep Learning | Multimodal AI | Vision AI",

  description:
    "An enterprise-grade Vision AI platform that combines image understanding, video analytics, visual question answering, scene understanding, image captioning, visual grounding, and multimodal reasoning into a unified cloud-native system. The platform enables organizations to analyze images and videos using natural language queries, automate visual inspections, generate intelligent reports, and provide conversational visual analytics through scalable APIs.",

  problemStatement:
    "Organizations generate massive volumes of visual data from cameras, drones, manufacturing systems, hospitals, retail stores, and surveillance networks. Traditional computer vision models solve isolated tasks but cannot perform holistic scene understanding or answer natural language questions about visual content. A multimodal vision intelligence platform is required to bridge computer vision and language understanding for enterprise decision-making.",

  architecture: "",

  workflow: [
    "Image and video ingestion from cameras, cloud storage, drones, APIs, and IoT devices",
    "Metadata extraction and validation",
    "Image and video preprocessing",
    "Frame extraction for video streams",
    "Image enhancement and normalization",
    "Object detection using Grounding DINO",
    "Scene understanding using Vision Transformers",
    "Image caption generation",
    "Visual Question Answering (VQA)",
    "Visual grounding",
    "Region understanding",
    "Multimodal reasoning using Vision-Language Models",
    "Zero-shot image classification",
    "Zero-shot object detection",
    "Automated report generation",
    "Confidence score generation",
    "Model evaluation using BLEU, CIDEr, METEOR, Recall@K, mAP",
    "Experiment tracking using MLflow",
    "Model registry and versioning",
    "Real-time inference using FastAPI",
    "Asynchronous processing using Celery",
    "Caching using Redis",
    "Metadata storage using PostgreSQL",
    "Object storage using MinIO",
    "Containerization using Docker",
    "Deployment using Kubernetes",
    "Monitoring using Prometheus and Grafana",
    "Centralized logging using ELK Stack",
    "CI/CD pipeline using GitHub Actions"
  ],

  deployment:
    "Enterprise Vision AI platform deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, MinIO, Prometheus, Grafana, ELK Stack, and GitHub Actions, providing scalable multimodal visual intelligence APIs for enterprise applications.",

  github: "https://github.com/Pooja-AI/autonomous-vision-intelligence",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "PyTorch",
    "Vision Transformer (ViT)",
    "CLIP",
    "BLIP-2",
    "Grounding DINO",
    "SAM 2",
    "LLaVA",
    "OpenCV",
    "FastAPI",
    "Celery",
    "Redis",
    "PostgreSQL",
    "MinIO",
    "MLflow",
    "Docker",
    "Kubernetes",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "GitHub Actions",
    "React"
  ]
}
  
];

export default dlProjects;