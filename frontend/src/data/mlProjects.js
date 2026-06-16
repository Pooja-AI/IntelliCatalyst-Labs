import EmailArchitecture from "../assets/architecture/email_classification_system_architecture.png";
import EmailClassificationPDF from "../assets/docs/Email_Classification_System.pdf";
import CreditRiskAssessment from "../assets/architecture/Credit-risk-assessment-system.png";
import CreditRiskAssessmentPDF from "../assets/docs/Credit-risk-assessment-system.pdf";
const mlProjects = [
  {
  id: "credit-risk",
  title: "Credit Risk Assessment System",
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