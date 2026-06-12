import { useState } from "react";
import { useParams } from "react-router-dom";
import rlProjects from "../data/rlProjects";

function RLProjectDetails() {
  const { id } = useParams();

  const project = rlProjects.find((p) => p.id === id);

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
      
      {/* PROBLEM STATEMENT */}
      <div className="section">
        <h2>📌 Problem Statement</h2>
        <p>
          {project.problemStatement}
        </p>
      </div>

      {/* ARCHITECTURE */}
      <div className="section">
        <h2>🏗️ Architecture Diagram</h2>

        <img
          src={project.architecture}
          alt="Architecture Diagram"
          style={{
            width: "100%",
            borderRadius: "10px"
          }}
        />
      </div>

      {/* WORKFLOW */}
      <div className="section">
        <h2>🔄 End-to-End Workflow</h2>
        <ol>
          {project.workflow.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>

    

      {/* DEPLOYMENT */}
      <div className="section">
        <h2>🚀 Deployment</h2>
        <p>{project.deployment}</p>
      </div>


      {/* TECH STACK */}
      <div className="section">
        <h2>⚙️ Tech Stack</h2>
        <ul>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
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

export default RLProjectDetails;