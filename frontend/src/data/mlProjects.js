import EmailArchitecture from "../assets/architecture/email_classification_system_architecture.png";
import EmailClassificationPDF from "../assets/docs/Email_Classification_System.pdf";
import CreditRiskAssessment from "../assets/architecture/Credit-risk-assessment-system.png";
import CreditRiskAssessmentPDF from "../assets/docs/Credit-risk-assessment-system.pdf";
import MarketBasketAnalysis from "../assets/architecture/market-basket-analysis.png";
import CstomerSegmentation from "../assets/architecture/customer-segmentation.png";
import MovieRecommendation from "../assets/architecture/movie-recommendation.png";
import RetailSalesForecasting from "../assets/architecture/retail-sales.png";
import ResumeScreening from "../assets/architecture/resume-screening.png";
import DynamicPricing from "../assets/architecture/dynamic-pricing.png";
import EmployeeAttrition from "../assets/architecture/employee-attrition.png";
import CustomerChurn from "../assets/architecture/customer-churn.png";
import InsuranceFraud from "../assets/architecture/insurance-fraud.png";
import CreditRiskBanner from "../assets/banners/creditrisk-banner.png";
import EmailClassificationBanner from "../assets/banners/emailclassification-banner.png";
import EmployeeAttritionBanner from "../assets/banners/employeeattrition-banner.png";
import CustomerChurnBanner from "../assets/banners/customerchurn-bannerG.png";  
import InsuranceFraudBanner from "../assets/banners/insurencefrud-bannerG.png";
import HospitalReadmissionBanner from "../assets/banners/hospital-banner.png";
import SmartCropBanner from "../assets/banners/SmartCrop-bannerG.png";
import dynamicPricingBanner from "../assets/banners/dynamic-banner.png";
import AirQualityBanner from "../assets/banners/airquality-banner.png";
import marketBasketAnalysisBanner from "../assets/banners/market-banner.png";
import MovieRecommendationBanner from "../assets/banners/movierecommendation-banner.png";
import customerSegmentationBanner from "../assets/banners/customersegmentation-banner.png";
import RetailSalesForecastingBanner from "../assets/banners/retail-banner.png";
import NetworkBanner from "../assets/banners/network-banner.png";
import StudentPerformanceBanner from "../assets/banners/student-banner.png";
import InventoryDemandForecastingBanner from "../assets/banners/inventory-banner.png";
import AIResumescreen from "../assets/banners/airesumescreen-banner.png";

const mlProjects = [
  {
  id: "credit-risk",
  title: "Credit Risk Assessment System",
  banner: CreditRiskBanner,
  category: "Machine Learning | Classification | MLOps",
  description:
    "An end-to-end cloud-native ML system that assesses credit risk of loan applicants using machine learning models and real-time scoring APIs.",

  problemStatement:
    "Evaluate loan applicant risk to reduce financial defaults and automate credit approval decisions using machine learning.",

  architecture: CreditRiskAssessment,

  workflow: [
    "Data ingestion from banking and credit sources",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (DTI ratio, credit utilization, etc.)",
    "Feature selection and transformation",
    "Model training (Logistic Regression, Random Forest, XGBoost)",
    "Model evaluation using ROC-AUC",
    "Risk scoring (Low / Medium / High)",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native API-based scoring system deployed using FastAPI, Docker, and Kubernetes with CI/CD pipeline integration.",

  github: "https://github.com/Pooja-AI/credit-risk-assessment-system",

  demo: "",

  documentation: CreditRiskAssessmentPDF,

  tech: [
    "Python",
    "Scikit-Learn",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
  },
  {
id: "email-classification",
title: "Enterprise Email Classification System",
banner: EmailClassificationBanner,
category: "Natural Language Processing",
description: "Automated email classification system using traditional NLP techniques and Machine Learning algorithms to categorize incoming emails into predefined classes.",
problemStatement: "Organizations receive thousands of emails daily. Manually categorizing emails is time-consuming and error-prone. This system automatically classifies emails into predefined categories using NLP and Machine Learning.",
architecture: EmailArchitecture,
workflow: [
"Email data collection",
"Text preprocessing and cleaning",
"Tokenization and stopword removal",
"Feature extraction using CountVectorizer",
"Feature extraction using TF-IDF",
"Model training (Naive Bayes, SVM, Random Forest, Decision Tree, XGBoost, KNN, Logistic Regression)",
"Model evaluation and comparison",
"Model serialization using Pickle",
"REST API development using Flask",
"Web UI deployment using HTML, CSS, and JavaScript"
],
deployment: "Deployed as a Flask-based web application with REST APIs, integrated with a responsive frontend built using HTML, CSS, and JavaScript for real-time email classification.",
github: "https://github.com/Pooja-AI/Email-Classification",
demo: "",
documentation: EmailClassificationPDF,
tech: [
"Python",
"Scikit-Learn",
"NLP",
"CountVectorizer",
"TF-IDF",
"Naive Bayes",
"SVM",
"Random Forest",
"Decision Tree",
"XGBoost",
"KNN",
"Logistic Regression",
"Flask",
"REST API",
"HTML",
"CSS",
"JavaScript"
]
},
{
  id: "employee-attrition",
  title: "Employee Attrition Prediction System",
  banner: EmployeeAttritionBanner,
  category: "Machine Learning | Classification | MLOps",
  description:
    "An end-to-end machine learning system that predicts employee attrition using HR analytics and real-time prediction APIs to help organizations improve workforce retention.",
  problemStatement:
    "Identify employees at high risk of leaving the organization to support proactive retention strategies and reduce hiring costs.",
  architecture: EmployeeAttrition,
  workflow: [
    "Employee HR data ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Tenure, Overtime, Job Satisfaction, Promotion History)",
    "Feature encoding and scaling",
    "Feature selection",
    "Model training (Logistic Regression, Random Forest, XGBoost)",
    "Model evaluation using Accuracy, F1-Score, ROC-AUC",
    "Employee attrition prediction",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],
  deployment:
    "Cloud-native employee attrition prediction API deployed using FastAPI, Docker, Kubernetes, and integrated with a CI/CD pipeline.",
  github: "https://github.com/Pooja-AI/employee-attrition-prediction",
  demo: "",
  documentation: "",
  tech: [
    "Python",
    "Scikit-Learn",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},
{
  id: "customer-churn",
  title: "Customer Churn Prediction Platform",
  banner: CustomerChurnBanner,
  category: "Machine Learning | Classification | Customer Analytics",
  description:
    "An end-to-end machine learning platform that predicts customer churn using behavioral and transactional data, enabling businesses to improve customer retention through real-time prediction APIs.",

  problemStatement:
    "Identify customers who are likely to discontinue a service so businesses can take proactive retention measures and reduce revenue loss.",

  architecture: CustomerChurn,

  workflow: [
    "Customer data ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Tenure, Monthly Charges, Contract Type, Usage Patterns)",
    "Feature encoding and scaling",
    "Handling class imbalance using SMOTE",
    "Model training (Logistic Regression, Random Forest, CatBoost, XGBoost)",
    "Model evaluation using Accuracy, Precision, Recall, F1-Score, ROC-AUC",
    "Customer churn prediction",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native customer churn prediction service deployed using FastAPI, Docker, Kubernetes, MLflow, and CI/CD for scalable real-time inference.",

  github: "https://github.com/Pooja-AI/customer-churn-prediction",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "CatBoost",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},

{
  id: "insurance-fraud",
  title: "Insurance Fraud Detection System",
  banner: InsuranceFraudBanner,
  category: "Machine Learning | Classification | Fraud Analytics",
  description:
    "An end-to-end machine learning platform that detects fraudulent insurance claims using predictive analytics and anomaly detection models, enabling insurers to identify high-risk claims in real time.",

  problemStatement:
    "Detect potentially fraudulent insurance claims before approval to reduce financial losses, accelerate claim processing, and improve fraud investigation efficiency.",

  architecture: InsuranceFraud,

  workflow: [
    "Insurance claims data ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Claim Amount, Policy Age, Claim Frequency, Customer History)",
    "Handling class imbalance using SMOTE",
    "Feature selection and transformation",
    "Model training (Random Forest, XGBoost, Isolation Forest)",
    "Model evaluation using Accuracy, Precision, Recall, F1-Score, ROC-AUC",
    "Fraud risk scoring (Low / Medium / High)",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native fraud detection API deployed using FastAPI, Docker, Kubernetes, MLflow, and CI/CD for scalable real-time fraud prediction.",

  github: "https://github.com/Pooja-AI/insurance-fraud-detection",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "Random Forest",
    "XGBoost",
    "Isolation Forest",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},
{
  id: "hospital-readmission",
  title: "Hospital Readmission Prediction System",
  banner: HospitalReadmissionBanner,
  category: "Machine Learning | Classification | Healthcare AI",
  description:
    "An end-to-end machine learning platform that predicts the likelihood of patient readmission using electronic health records and clinical data to support proactive healthcare decisions.",

  problemStatement:
    "Predict whether a patient is likely to be readmitted within 30 days after discharge, helping hospitals improve patient care, reduce readmission rates, and optimize healthcare resources.",

  architecture: "",

  workflow: [
    "Electronic Health Record (EHR) data ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Age, Diagnosis, Previous Admissions, Length of Stay, Lab Results)",
    "Feature encoding and scaling",
    "Feature selection",
    "Model training (Logistic Regression, Random Forest, XGBoost)",
    "Model evaluation using Accuracy, Precision, Recall, F1-Score, ROC-AUC",
    "Patient readmission risk prediction",
    "Risk categorization (Low / Medium / High)",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native healthcare prediction API deployed using FastAPI, Docker, Kubernetes, MLflow, and CI/CD for scalable real-time inference.",

  github: "https://github.com/Pooja-AI/hospital-readmission-prediction",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},
{
  id: "crop-recommendation",
  title: "Smart Crop Recommendation System",
  banner: SmartCropBanner,
  category: "Machine Learning | Classification | Agriculture AI",
  description:
    "An end-to-end machine learning platform that recommends the most suitable crops based on soil nutrients, weather conditions, and environmental factors to improve agricultural productivity.",

  problemStatement:
    "Recommend the optimal crop for cultivation using soil properties and climatic conditions, enabling farmers to maximize yield and make data-driven agricultural decisions.",

  architecture: "",

  workflow: [
    "Agricultural dataset ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Nitrogen, Phosphorus, Potassium, Temperature, Humidity, pH, Rainfall)",
    "Feature scaling and transformation",
    "Feature selection",
    "Model training (Decision Tree, Random Forest, XGBoost)",
    "Model evaluation using Accuracy, Precision, Recall, F1-Score",
    "Crop recommendation generation",
    "Recommendation confidence scoring",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native crop recommendation API deployed using FastAPI, Docker, Kubernetes, MLflow, and CI/CD for scalable agricultural decision support.",

  github: "https://github.com/Pooja-AI/crop-recommendation-system",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "Random Forest",
    "Decision Tree",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},
{
  id: "inventory-demand",
  title: "Inventory Demand Forecasting System",
  banner: InventoryDemandForecastingBanner,
  category: "Machine Learning | Regression | Supply Chain Analytics",
  description:
    "An end-to-end machine learning platform that forecasts product demand using historical sales, seasonal trends, promotions, and inventory data to optimize supply chain operations.",

  problemStatement:
    "Predict future product demand to reduce stock shortages, minimize overstocking, improve inventory planning, and support data-driven supply chain decisions.",

  architecture: "",

  workflow: [
    "Historical sales and inventory data ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Sales Trends, Seasonality, Promotions, Holidays, Inventory Levels)",
    "Time-based feature extraction",
    "Feature selection and transformation",
    "Model training (Linear Regression, Random Forest Regressor, XGBoost Regressor)",
    "Model evaluation using RMSE, MAE, and R² Score",
    "Demand forecasting",
    "Inventory optimization recommendations",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native demand forecasting API deployed using FastAPI, Docker, Kubernetes, MLflow, and CI/CD for real-time inventory planning.",

  github: "https://github.com/Pooja-AI/inventory-demand-forecasting",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "Random Forest Regressor",
    "Linear Regression",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},
{
  id: "student-performance",
  title: "Student Performance Prediction System",
  banner: StudentPerformanceBanner,
  category: "Machine Learning | Classification | Education AI",
  description:
    "An end-to-end cloud-native machine learning platform that predicts student academic performance using educational and behavioral data with scalable real-time prediction APIs.",

  problemStatement:
    "Predict student performance early to identify at-risk students and enable personalized academic interventions.",

  architecture: "",

  workflow: [
    "Student data ingestion from SIS and LMS",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Attendance, Study Hours, Assignments, Previous Grades)",
    "Feature encoding and scaling",
    "Feature selection",
    "Model training (Decision Tree, Random Forest, XGBoost)",
    "Model evaluation using Accuracy, Precision, Recall, F1-Score",
    "Student performance prediction",
    "Academic risk scoring",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native student performance prediction API deployed using FastAPI, Docker, Kubernetes, MLflow, and CI/CD.",

  github: "https://github.com/Pooja-AI/student-performance-prediction",

  demo: "",

  documentation: "",

  tech: [
    "Python","Scikit-Learn","Random Forest","XGBoost","FastAPI",
    "Docker","Kubernetes","MLflow","PostgreSQL","Redis","React"
  ]
},

{
  id: "air-quality",
  title: "Air Quality Prediction System",
  banner: AirQualityBanner,
  category: "Machine Learning | Regression | Environmental AI",
  description:
    "An enterprise forecasting platform that predicts Air Quality Index (AQI) using weather and pollution sensor data.",

  problemStatement:
    "Forecast AQI levels to support environmental monitoring and public health decision-making.",

  architecture: "",

  workflow: [
    "IoT sensor data ingestion",
    "Weather API integration",
    "Data preprocessing",
    "EDA",
    "Feature engineering",
    "Model training (Gradient Boosting, Random Forest, XGBoost)",
    "AQI forecasting",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native AQI prediction API deployed using FastAPI, Docker, Kubernetes, MLflow, and Grafana monitoring.",

  github: "https://github.com/Pooja-AI/air-quality-prediction",

  demo: "",

  documentation: "",

  tech: [
    "Python","Scikit-Learn","Gradient Boosting","XGBoost",
    "FastAPI","Docker","Kubernetes","MLflow",
    "Prometheus","Grafana","React"
  ]
},

{
  id: "dynamic-pricing",
  title: "Dynamic Pricing Optimization System",
  banner: dynamicPricingBanner,
  category: "Machine Learning | Regression | Retail AI",
  description:
    "An enterprise pricing intelligence platform that recommends optimal product prices using demand forecasting, competitor analysis, and inventory analytics.",

  problemStatement:
    "Optimize product pricing dynamically to maximize revenue while maintaining market competitiveness and customer demand.",

  architecture: DynamicPricing,

  workflow: [
    "Sales data ingestion",
    "Competitor pricing ingestion",
    "Inventory data ingestion",
    "Demand forecasting",
    "Data preprocessing",
    "EDA",
    "Feature engineering (Demand, Inventory, Seasonality, Promotions, Competitor Price)",
    "Model training (Random Forest Regressor, Gradient Boosting, XGBoost)",
    "Model evaluation using RMSE and MAE",
    "Optimal price prediction",
    "Pricing recommendation engine",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Production-ready pricing optimization API deployed using FastAPI, Docker, Kubernetes, MLflow, Redis, PostgreSQL, and CI/CD.",

  github: "https://github.com/Pooja-AI/dynamic-pricing-system",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "Gradient Boosting",
    "Random Forest",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},
{
  id: "resume-screening",
  title: "AI Resume Screening System",
  banner: AIResumescreen,
  category: "Machine Learning | NLP | Recruitment AI",
  description:
    "An enterprise NLP platform that automatically classifies, ranks, and matches resumes against job descriptions using traditional NLP and machine learning techniques.",

  problemStatement:
    "Automate resume screening to reduce recruiter workload, improve hiring efficiency, and rank candidates based on job relevance.",

  architecture: ResumeScreening,

  workflow: [
    "Resume ingestion (PDF/DOCX)",
    "Job description ingestion",
    "Text extraction",
    "Text preprocessing",
    "Tokenization and Lemmatization",
    "TF-IDF feature extraction",
    "Resume-job similarity computation",
    "Model training (Naive Bayes, SVM, Logistic Regression)",
    "Resume ranking",
    "Candidate recommendation",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Enterprise resume screening API deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, and CI/CD.",

  github: "https://github.com/Pooja-AI/resume-screening-system",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "TF-IDF",
    "CountVectorizer",
    "Naive Bayes",
    "SVM",
    "Logistic Regression",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "React"
  ]
},
{
  id: "network-intrusion",
  title: "Network Intrusion Detection System",
  banner: NetworkBanner,
  category: "Machine Learning | Cybersecurity | Classification",
  description:
    "An enterprise cybersecurity platform that detects malicious network traffic and cyberattacks using machine learning models and anomaly detection techniques.",

  problemStatement:
    "Detect network intrusions in real time to enhance cybersecurity, minimize threats, and improve incident response.",

  architecture: "",

  workflow: [
    "Network packet ingestion",
    "Log aggregation",
    "Data preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Protocol, Packet Size, Flow Duration, Connection Count)",
    "Feature scaling",
    "Model training (Random Forest, XGBoost, Isolation Forest)",
    "Threat classification",
    "Risk scoring",
    "Security alert generation",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native intrusion detection API deployed using FastAPI, Docker, Kubernetes, Kafka, Redis, MLflow, Prometheus, and Grafana.",

  github: "https://github.com/Pooja-AI/network-intrusion-detection",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "Random Forest",
    "Isolation Forest",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Redis",
    "MLflow",
    "Prometheus",
    "Grafana",
    "React"
  ]
},
{
  id: "retail-sales",
  title: "Retail Sales Forecasting System",
  banner: RetailSalesForecastingBanner,
  category: "Machine Learning | Regression | Supply Chain Analytics",
  description:
    "An enterprise forecasting platform that predicts future retail sales using historical sales, promotions, holidays, inventory, and seasonal trends for intelligent business planning.",

  problemStatement:
    "Forecast future sales accurately to optimize inventory management, supply chain planning, and business decision-making.",

  architecture: RetailSalesForecasting,

  workflow: [
    "Retail sales data ingestion",
    "Inventory data ingestion",
    "Promotional campaign ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Seasonality, Holidays, Promotions, Store Performance)",
    "Time-based feature extraction",
    "Model training (Linear Regression, Random Forest Regressor, XGBoost Regressor)",
    "Model evaluation using RMSE, MAE, and R² Score",
    "Sales forecasting",
    "Inventory recommendation engine",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Enterprise sales forecasting API deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, Prometheus, Grafana, and CI/CD.",

  github: "https://github.com/Pooja-AI/retail-sales-forecasting",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "Linear Regression",
    "Random Forest",
    "XGBoost",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "Prometheus",
    "Grafana",
    "React"
  ]
},
{
  id: "customer-segmentation",
  title: "Customer Segmentation System",
  banner: customerSegmentationBanner,
  category: "Machine Learning | Unsupervised Learning | Customer Analytics",

  description:
    "An end-to-end machine learning platform that segments customers based on purchasing behavior using clustering algorithms to enable personalized marketing and business intelligence.",

  problemStatement:
    "Group customers into meaningful segments based on purchasing patterns, demographics, and spending behavior to improve targeted marketing and customer engagement.",

  architecture: CstomerSegmentation,

  workflow: [
    "Customer transaction data ingestion",
    "Data cleaning and preprocessing",
    "Exploratory Data Analysis (EDA)",
    "Feature engineering (Recency, Frequency, Monetary Value)",
    "Feature scaling",
    "Dimensionality Reduction using PCA",
    "Customer segmentation using K-Means Clustering",
    "Cluster evaluation using Silhouette Score",
    "Customer profile generation",
    "Model registration using MLflow",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Enterprise customer segmentation API deployed using FastAPI, Docker, Kubernetes, MLflow, PostgreSQL, Redis, and CI/CD.",

  github: "https://github.com/Pooja-AI/customer-segmentation",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "K-Means",
    "PCA",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "MLflow",
    "PostgreSQL",
    "Redis",
    "React"
  ]
},
{
  id: "movie-recommendation",
  title: "Movie Recommendation System",
  banner: MovieRecommendationBanner,
  category: "Machine Learning | Recommendation Systems | NLP",

  description:
    "An intelligent recommendation platform that suggests personalized movies using content-based filtering, TF-IDF vectorization, and cosine similarity.",

  problemStatement:
    "Recommend relevant movies to users based on genres, cast, storyline, and viewing preferences to improve user engagement.",

  architecture: MovieRecommendation,

  workflow: [
    "Movie metadata ingestion",
    "User preference ingestion",
    "Data preprocessing",
    "Text preprocessing",
    "TF-IDF feature extraction",
    "Cosine similarity computation",
    "Content-based recommendation generation",
    "Recommendation ranking",
    "Recommendation API",
    "Deployment using FastAPI + Docker + Kubernetes"
  ],

  deployment:
    "Cloud-native recommendation engine deployed using FastAPI, Docker, Kubernetes, Redis, PostgreSQL, and MLflow.",

  github: "https://github.com/Pooja-AI/movie-recommendation-system",

  demo: "",

  documentation: "",

  tech: [
    "Python",
    "Scikit-Learn",
    "TF-IDF",
    "Cosine Similarity",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "Redis",
    "MLflow",
      "React"
  ]
},
{
  id: "market-basket-analysis",
  title: "Market Basket Analysis System",
  banner: marketBasketAnalysisBanner,
  category: "Machine Learning | Association Rule Mining | Retail Analytics",

  description:
    "A production-ready analytics platform that discovers product purchasing patterns using association rule mining to improve cross-selling and recommendation strategies.",

  problemStatement:
    "Identify products that are frequently purchased together to optimize store layout, promotions, and recommendation systems.",

  architecture: MarketBasketAnalysis,

  workflow: [
    "Retail transaction ingestion",
    "Data cleaning and preprocessing",
    "Transaction encoding",
    "Frequent itemset generation",
    "Apriori algorithm",
    "Association rule generation",
    "Support, Confidence, Lift analysis",
    "Recommendation generation",
    "API deployment",
    "Monitoring and logging"
  ],

  deployment:
    "Cloud-native retail analytics API deployed using FastAPI, Docker, Kubernetes, PostgreSQL, Redis, and MLflow.",

  github: "https://github.com/Pooja-AI/market-basket-analysis",

  demo: "",

  documentation: "https://github.com/Pooja-AI/market-basket-analysis/blob/main/README.md",

  tech: [
    "Python",
    "Apriori",
    "FP-Growth",
    "MLxtend",
    "FastAPI",
    "Docker",
    "Kubernetes",
    "PostgreSQL",
    "Redis",
    "MLflow",
    "React"
  ]
}

];
export default mlProjects;