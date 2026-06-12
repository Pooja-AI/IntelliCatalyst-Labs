const mlProjects = [
  {
    id: "customer-churn",
    title: "Customer Churn Prediction System",
    category: "Classification",
    description: "Predict customer churn using ML models like Random Forest and XGBoost.",
    problemStatement: "Predict whether customers will leave a service based on usage, billing, and behavior data.",
    architecture: "/architecture/customer-churn.png",
    workflow: [
      "Data collection",
      "Data preprocessing",
      "Feature engineering",
      "Model training (Random Forest, XGBoost)",
      "Model evaluation",
      "Deployment using FastAPI"
    ],
    deployment: "Deployed using FastAPI with REST API and React dashboard.",
    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Scikit-Learn", "XGBoost", "Pandas"]
  },

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
  }
];

export default mlProjects;