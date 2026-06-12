const mlopsProjects = [
  {
    id: "end-to-end-ml-pipeline",
    title: "End-to-End Machine Learning Pipeline for Production Deployment",
    category: "MLOps Pipeline",
    description:
      "Complete machine learning pipeline from data ingestion to production deployment.",

    problemStatement:
      "Machine learning models often fail in production due to lack of standardized pipelines and automation.",

    architecture: "/architecture/ml-pipeline.png",

    workflow: [
      "Data ingestion",
      "Data preprocessing",
      "Model training",
      "Model evaluation",
      "Model deployment",
      "Monitoring and retraining"
    ],

    deployment:
      "Deployed using Dockerized ML pipeline with CI/CD automation.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "MLOps", "CI/CD", "Docker"]
  },

  {
    id: "automated-retraining-pipeline",
    title: "Automated Model Training and Retraining Pipeline",
    category: "Automation",
    description:
      "Pipeline that automatically retrains models based on new data or drift detection.",

    problemStatement:
      "Static ML models degrade over time without retraining on new data.",

    architecture: "/architecture/retraining.png",

    workflow: [
      "Data monitoring",
      "Drift detection",
      "Trigger retraining",
      "Model training",
      "Validation",
      "Deployment"
    ],

    deployment:
      "Deployed using Airflow-based orchestration pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Airflow", "MLflow"]
  },

  {
    id: "ml-ci-cd-pipeline",
    title: "CI/CD Pipeline for Machine Learning Models",
    category: "CI/CD",
    description:
      "Automated CI/CD pipeline for ML model testing, validation, and deployment.",

    problemStatement:
      "Manual deployment of ML models leads to inconsistencies and errors in production.",

    architecture: "/architecture/ml-cicd.png",

    workflow: [
      "Code commit",
      "Automated testing",
      "Model validation",
      "Docker build",
      "Deployment",
      "Monitoring"
    ],

    deployment:
      "Deployed using GitHub Actions + Docker CI/CD pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["GitHub Actions", "Docker", "MLflow"]
  },

  {
    id: "model-versioning-system",
    title: "Model Versioning and Experiment Tracking System",
    category: "Model Management",
    description:
      "System for tracking ML experiments and managing model versions.",

    problemStatement:
      "Lack of experiment tracking leads to poor reproducibility in ML projects.",

    architecture: "/architecture/model-versioning.png",

    workflow: [
      "Experiment tracking",
      "Metric logging",
      "Model versioning",
      "Model comparison",
      "Registry storage"
    ],

    deployment:
      "Deployed using MLflow and DVC for experiment tracking.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["MLflow", "DVC", "Python"]
  },

  {
    id: "data-ingestion-pipeline",
    title: "Scalable Data Ingestion and Preprocessing Pipeline",
    category: "Data Engineering",
    description:
      "Pipeline for scalable ingestion and preprocessing of large datasets.",

    problemStatement:
      "Raw data from multiple sources is inconsistent and difficult to process.",

    architecture: "/architecture/data-ingestion.png",

    workflow: [
      "Data extraction",
      "Data validation",
      "Cleaning and transformation",
      "Feature engineering",
      "Storage in data lake"
    ],

    deployment:
      "Deployed using Spark-based distributed data processing pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Spark", "Python", "ETL"]
  },

  {
    id: "real-time-inference-api",
    title: "Real-Time Model Inference API",
    category: "Deployment",
    description:
      "API system for serving ML models in real-time.",

    problemStatement:
      "Batch prediction systems are not suitable for real-time applications.",

    architecture: "/architecture/inference-api.png",

    workflow: [
      "Input request",
      "Data preprocessing",
      "Model inference",
      "Response generation",
      "API output"
    ],

    deployment:
      "Deployed using FastAPI + Docker for real-time inference.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["FastAPI", "Docker", "Python"]
  },

  {
    id: "model-monitoring-system",
    title: "Model Monitoring System (Drift + Performance Tracking)",
    category: "Monitoring",
    description:
      "System to monitor ML model drift, latency, and performance.",

    problemStatement:
      "Models in production degrade without proper monitoring systems.",

    architecture: "/architecture/model-monitoring.png",

    workflow: [
      "Data logging",
      "Performance tracking",
      "Drift detection",
      "Alert generation",
      "Dashboard visualization"
    ],

    deployment:
      "Deployed using Prometheus + Grafana monitoring stack.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Prometheus", "Grafana", "MLflow"]
  },

  {
    id: "automated-feature-engineering",
    title: "Automated Feature Engineering Pipeline",
    category: "Feature Engineering",
    description:
      "System that automatically generates and selects features for ML models.",

    problemStatement:
      "Manual feature engineering is time-consuming and error-prone.",

    architecture: "/architecture/feature-engineering.png",

    workflow: [
      "Raw data input",
      "Feature generation",
      "Feature selection",
      "Feature validation",
      "Model input preparation"
    ],

    deployment:
      "Deployed using Featuretools-based automated pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Featuretools", "Python"]
  },

  {
    id: "multi-env-deployment",
    title: "Multi-Environment ML Deployment Pipeline",
    category: "Deployment",
    description:
      "Pipeline to deploy ML models across dev, staging, and production environments.",

    problemStatement:
      "Single-environment deployment leads to instability in production ML systems.",

    architecture: "/architecture/multi-env.png",

    workflow: [
      "Model training",
      "Dev deployment",
      "Staging validation",
      "Production rollout",
      "Monitoring"
    ],

    deployment:
      "Deployed using Docker + Kubernetes multi-environment setup.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Docker", "Kubernetes", "CI/CD"]
  },

  {
    id: "model-registry-workflow",
    title: "Model Registry and Approval Workflow System",
    category: "Governance",
    description:
      "System for model approval, versioning, and deployment governance.",

    problemStatement:
      "ML models require approval workflows before production deployment.",

    architecture: "/architecture/model-registry.png",

    workflow: [
      "Model training",
      "Validation",
      "Approval workflow",
      "Version tagging",
      "Production release"
    ],

    deployment:
      "Deployed using MLflow model registry system.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["MLflow", "CI/CD"]
  },

  {
    id: "batch-prediction-pipeline",
    title: "Batch Prediction Pipeline for Large-Scale Data",
    category: "Batch Processing",
    description:
      "System for running ML predictions on large datasets in batch mode.",

    problemStatement:
      "Real-time inference is not efficient for large-scale offline data processing.",

    architecture: "/architecture/batch-pipeline.png",

    workflow: [
      "Data ingestion",
      "Batch preprocessing",
      "Model inference",
      "Result storage",
      "Reporting"
    ],

    deployment:
      "Deployed using Spark-based batch processing system.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Spark", "Python"]
  },

  {
    id: "streaming-ml-pipeline",
    title: "Real-Time Streaming ML Pipeline",
    category: "Streaming",
    description:
      "Pipeline for real-time ML predictions using streaming data.",

    problemStatement:
      "Batch pipelines cannot handle real-time event-driven data.",

    architecture: "/architecture/streaming.png",

    workflow: [
      "Data streaming ingestion",
      "Kafka processing",
      "Real-time feature extraction",
      "Model inference",
      "Output streaming"
    ],

    deployment:
      "Deployed using Kafka + Spark Streaming pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Kafka", "Spark Streaming", "Python"]
  },

  {
    id: "data-validation-pipeline",
    title: "Data Validation and Quality Check Pipeline",
    category: "Data Quality",
    description:
      "System to validate data quality before ML model training.",

    problemStatement:
      "Poor data quality leads to unreliable ML model performance.",

    architecture: "/architecture/data-validation.png",

    workflow: [
      "Data ingestion",
      "Schema validation",
      "Missing value detection",
      "Anomaly detection",
      "Quality reporting"
    ],

    deployment:
      "Deployed using Great Expectations validation framework.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Great Expectations", "Python"]
  }
];

export default mlopsProjects;