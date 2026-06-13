import EmailArchitecture from "../assets/architecture/email_classification_system_architecture.png";
import EmailClassificationPDF from "../assets/docs/Email_Classification_System.pdf";
const mlProjects = [
  {
    id: "credit-risk",
    title: "Credit Risk Assessment Model",
    category: "Classification",
    description: "Assess credit risk of loan applicants using ML models.",
    problemStatement: "Evaluate loan applicant risk to reduce financial defaults.",
    architecture: "/architecture/credit-risk.png",
    workflow: [
      "Data ingestion",
      "Data cleaning",
      "Feature selection",
      "Model training",
      "Risk scoring",
      "Deployment"
    ],
    deployment: "API-based scoring system for credit risk evaluation.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Scikit-Learn"]
  },

  {
    id: "loan-default",
    title: "Loan Default Prediction Engine",
    category: "Classification",
    description: "Predict probability of loan default using financial data.",
    problemStatement: "Identify high-risk loan applicants before approval.",
    architecture: "/architecture/loan-default.png",
    workflow: [
      "Data preprocessing",
      "Feature engineering",
      "Model training",
      "Evaluation",
      "Deployment"
    ],
    deployment: "Deployed as REST API for banking systems.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "XGBoost", "Pandas"]
  },

  {
    id: "insurance-premium",
    title: "Insurance Premium Prediction System",
    category: "Regression",
    description: "Predict insurance premium based on risk factors.",
    problemStatement: "Estimate insurance cost based on customer profile.",
    architecture: "/architecture/insurance.png",
    workflow: [
      "Data cleaning",
      "Feature engineering",
      "Regression modeling",
      "Evaluation",
      "Deployment"
    ],
    deployment: "FastAPI-based prediction service.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Linear Regression"]
  },

  {
    id: "fraud-detection",
    title: "Fraud Detection using Anomaly Detection",
    category: "Anomaly Detection",
    description: "Detect fraudulent transactions using Isolation Forest.",
    problemStatement: "Identify abnormal financial transactions in real-time.",
    architecture: "/architecture/fraud.png",
    workflow: [
      "Data preprocessing",
      "Anomaly detection",
      "Model training",
      "Alert generation"
    ],
    deployment: "Real-time fraud detection API.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Isolation Forest"]
  },

  {
    id: "sales-forecasting",
    title: "Sales Forecasting using Time Series ML",
    category: "Time Series",
    description: "Forecast sales using ARIMA and Prophet.",
    problemStatement: "Predict future sales trends for business planning.",
    architecture: "/architecture/sales-forecast.png",
    workflow: [
      "Time series preprocessing",
      "Trend analysis",
      "Model training",
      "Forecasting"
    ],
    deployment: "Dashboard-based forecasting system.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Prophet", "ARIMA"]
  },

  {
    id: "customer-segmentation",
    title: "Customer Segmentation using Clustering",
    category: "Unsupervised Learning",
    description: "Segment customers using K-Means clustering.",
    problemStatement: "Group customers based on behavior for marketing strategies.",
    architecture: "/architecture/clustering.png",
    workflow: [
      "Data preprocessing",
      "Feature scaling",
      "K-Means clustering",
      "Cluster analysis"
    ],
    deployment: "Used in marketing analytics dashboard.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "K-Means"]
  },
  {
id: "email-classification",
title: "Enterprise Email Classification System",
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
}
];
export default mlProjects;