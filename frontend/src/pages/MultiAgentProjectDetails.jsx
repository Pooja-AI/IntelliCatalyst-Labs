import { useState } from "react";
import { useParams } from "react-router-dom";
import multiAgentProjects from "../data/multiAgentProjects";

function MultiAgentProjectDetails() {
  const { id } = useParams();

  const project = multiAgentProjects.find((p) => p.id === id);

  console.log("📌 Project Page Opened:", id);

  // 📊 Activity logs state
  const [logs, setLogs] = useState([]);

  if (!project) {
    console.log("❌ Project Not Found");
    return <h2>Project Not Found</h2>;
  }

  // 🔗 Click logger
  const logClick = (type, url) => {
    const message = `${type} clicked → ${url}`;

    // console log
    console.log("🔗", message);

    // UI log update
    setLogs((prev) => [message, ...prev]);
  };

  return (
    <div className="project-container">

      {/* TITLE */}
      <h1 className="title">{project.title}</h1>
      <p className="subtitle">{project.description}</p>

      {/* TECH STACK */}
      <div className="section">
        <h2>⚙️ Tech Stack</h2>
        <ul>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      {/* PROBLEM STATEMENT */}
      <div className="section">
        <h2>📌 Problem Statement</h2>
        <p>
          Customer churn is a critical problem in telecom industries.
          This system predicts whether a customer will leave based on
          behavioral, billing, and usage data.
        </p>
      </div>

      {/* ARCHITECTURE */}
      <div className="section">
        <h2>🏗️ Architecture Diagram</h2>

        <img
          src="/architecture/churn-architecture.png"
          alt="Architecture Diagram"
          style={{
            width: "100%",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* WORKFLOW */}
      <div className="section">
        <h2>🔄 End-to-End ML Workflow</h2>

        <ol>
          <li>Data Collection (CRM + Billing Systems)</li>
          <li>Data Cleaning & Preprocessing</li>
          <li>Feature Engineering</li>
          <li>Model Training (Random Forest / XGBoost)</li>
          <li>Model Evaluation (Accuracy, Precision, Recall, F1)</li>
          <li>Model Deployment using FastAPI</li>
          <li>Frontend Integration using React</li>
        </ol>
      </div>

      {/* DEPLOYMENT */}
      <div className="section">
        <h2>🚀 Deployment</h2>

        <p>
          The ML model is deployed using FastAPI backend with REST APIs.
          The frontend is built using React and integrated for real-time predictions.
          Docker is used for containerization.
        </p>
      </div>

      {/* RESOURCES */}
      <div className="section">
        <h2>🔗 Resources</h2>

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            logClick("GitHub Repository", project.github)
          }
        >
          GitHub Repository
        </a>

        <br />

        {/* Demo */}
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            logClick("Live Demo", project.demo)
          }
        >
          Live Demo
        </a>

        <br />

        {/* Documentation */}
        <a
          href={project.documentation}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            logClick("Documentation", project.documentation)
          }
        >
          Documentation
        </a>
      </div>

      {/* ACTIVITY LOGS */}
      <div className="section">
        <h2>📊 Activity Logs</h2>

        {logs.length === 0 ? (
          <p>No interactions yet</p>
        ) : (
          <ul>
            {logs.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default MultiAgentProjectDetails;