const dataScienceProjects = [
  {
    id: "customer-behavior-analytics",
    title: "Customer Behavior Analytics Dashboard",
    category: "Customer Analytics",
    description:
      "Advanced analytics dashboard to analyze customer behavior patterns and generate actionable business insights.",

    problemStatement:
      "Businesses struggle to understand customer behavior patterns across multiple channels. This system provides data-driven insights for better decision making.",

    architecture: "/architecture/customer-behavior.png",

    workflow: [
      "Data collection from CRM systems",
      "Data cleaning and preprocessing",
      "Exploratory data analysis",
      "Behavior segmentation",
      "Insight visualization"
    ],

    deployment:
      "Deployed using Power BI dashboards integrated with Python analytics backend.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Pandas", "Matplotlib", "Power BI"]
  },

  {
    id: "sales-performance-analytics",
    title: "Sales Performance Analytics System",
    category: "Sales Analytics",
    description:
      "System to analyze sales performance across regions, products, and time periods.",

    problemStatement:
      "Organizations lack visibility into sales performance trends across regions and products.",

    architecture: "/architecture/sales-analytics.png",

    workflow: [
      "Sales data ingestion",
      "Data cleaning",
      "KPI computation",
      "Trend analysis",
      "Dashboard visualization"
    ],

    deployment:
      "Deployed using Power BI and SQL-based data warehouse.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "SQL", "Power BI"]
  },

  {
    id: "kpi-monitoring-platform",
    title: "Business KPI Monitoring Platform",
    category: "Business Intelligence",
    description:
      "Real-time KPI monitoring system for business performance tracking.",

    problemStatement:
      "Businesses need real-time visibility into critical KPIs for faster decision-making.",

    architecture: "/architecture/kpi-dashboard.png",

    workflow: [
      "Data ingestion pipelines",
      "KPI calculation engine",
      "Real-time processing",
      "Dashboard updates",
      "Alert generation"
    ],

    deployment:
      "Deployed using Power BI with SQL backend for real-time analytics.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Power BI", "Python", "SQL"]
  },

  {
    id: "marketing-campaign-analysis",
    title: "Marketing Campaign Effectiveness Analysis",
    category: "Marketing Analytics",
    description:
      "Analytics system to evaluate marketing campaign performance and ROI.",

    problemStatement:
      "Marketing teams struggle to measure campaign effectiveness across channels.",

    architecture: "/architecture/marketing-analytics.png",

    workflow: [
      "Campaign data collection",
      "Engagement analysis",
      "Conversion tracking",
      "ROI computation",
      "Performance reporting"
    ],

    deployment:
      "Deployed using Python analytics pipeline with Power BI dashboards.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Excel", "Power BI"]
  },

  {
    id: "customer-segmentation-analytics",
    title: "Customer Segmentation using Data Analytics",
    category: "Segmentation",
    description:
      "ML-powered system to segment customers based on behavior and demographics.",

    problemStatement:
      "Businesses need better segmentation strategies for targeted marketing.",

    architecture: "/architecture/segmentation.png",

    workflow: [
      "Data preprocessing",
      "Feature engineering",
      "K-Means clustering",
      "Segment analysis",
      "Visualization"
    ],

    deployment:
      "Deployed as batch analytics pipeline using Python and visualization tools.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "K-Means", "Pandas"]
  },

  {
    id: "product-performance-analysis",
    title: "Product Performance Analysis System",
    category: "Product Analytics",
    description:
      "System to analyze product performance and market trends.",

    problemStatement:
      "Companies lack visibility into product-level performance and trends.",

    architecture: "/architecture/product-analytics.png",

    workflow: [
      "Product data ingestion",
      "Sales analysis",
      "Trend detection",
      "Performance ranking",
      "Insight reporting"
    ],

    deployment:
      "Deployed using Power BI dashboards with SQL backend.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Power BI", "SQL"]
  },

  {
    id: "revenue-forecasting-analytics",
    title: "Revenue Forecasting System",
    category: "Forecasting",
    description:
      "Time series forecasting system for revenue prediction.",

    problemStatement:
      "Businesses need accurate revenue forecasting for planning and budgeting.",

    architecture: "/architecture/revenue-forecast.png",

    workflow: [
      "Historical data collection",
      "Time series preprocessing",
      "Model training (ARIMA/Prophet)",
      "Forecast generation",
      "Visualization"
    ],

    deployment:
      "Deployed using Python-based forecasting pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Time Series", "Prophet"]
  },

  {
    id: "retail-inventory-analytics",
    title: "Retail Inventory Optimization System",
    category: "Retail Analytics",
    description:
      "Analytics system to optimize inventory levels in retail stores.",

    problemStatement:
      "Retailers face challenges in maintaining optimal inventory levels.",

    architecture: "/architecture/inventory.png",

    workflow: [
      "Inventory data ingestion",
      "Demand analysis",
      "Stock prediction",
      "Optimization logic",
      "Dashboard reporting"
    ],

    deployment:
      "Deployed using SQL + Power BI analytics pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "SQL", "Power BI"]
  },

  {
    id: "ecommerce-user-journey",
    title: "E-commerce User Journey Analysis",
    category: "User Analytics",
    description:
      "System to analyze user journey and conversion funnel behavior.",

    problemStatement:
      "E-commerce platforms need better understanding of user drop-off points.",

    architecture: "/architecture/user-journey.png",

    workflow: [
      "Clickstream data collection",
      "Session tracking",
      "Funnel analysis",
      "Conversion tracking",
      "Insight visualization"
    ],

    deployment:
      "Deployed using Python analytics and Google Analytics integration.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Google Analytics", "SQL"]
  },

  {
    id: "churn-analytics-dashboard",
    title: "Customer Churn Analytics Dashboard",
    category: "Customer Retention",
    description:
      "Analytics system to detect and analyze customer churn patterns.",

    problemStatement:
      "Businesses need to identify customers at risk of churn early.",

    architecture: "/architecture/churn.png",

    workflow: [
      "Data preprocessing",
      "Feature engineering",
      "Churn prediction model",
      "Risk scoring",
      "Dashboard visualization"
    ],

    deployment:
      "Deployed using ML pipeline with Power BI dashboard.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Power BI", "ML"]
  },

  {
    id: "financial-data-insights",
    title: "Financial Data Insights System",
    category: "Finance Analytics",
    description:
      "System to analyze financial data and detect risk patterns.",

    problemStatement:
      "Financial institutions need automated risk analysis from large datasets.",

    architecture: "/architecture/finance.png",

    workflow: [
      "Financial data ingestion",
      "Risk modeling",
      "Anomaly detection",
      "Insight generation",
      "Reporting"
    ],

    deployment:
      "Deployed using Python analytics and SQL-based storage.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "SQL", "Risk Modeling"]
  },

  {
    id: "hr-analytics-dashboard",
    title: "HR Analytics Dashboard",
    category: "HR Analytics",
    description:
      "System to analyze employee performance and HR metrics.",

    problemStatement:
      "HR teams need insights into employee performance and retention.",

    architecture: "/architecture/hr.png",

    workflow: [
      "HR data collection",
      "Performance metrics calculation",
      "Trend analysis",
      "Attrition analysis",
      "Visualization"
    ],

    deployment:
      "Deployed using Power BI and Python analytics pipeline.",

    github: "",
    demo: "",
    documentation: "",
    tech: ["Python", "Power BI", "Excel"]
  }
];

export default dataScienceProjects;