import { Link } from "react-router-dom";

function Books() {
  return (
    <section className="projects">

      <h1>AI Books</h1>

      <p className="subtitle">
        AI knowledge library
      </p>

      <div className="projects-grid">

        {/* GENERATIVE AI */}
        <Link
          to="http://localhost:3000/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Generative AI Systems</h3>
          </div>
        </Link>

        {/* RAG */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Retrieval-Augmented Generation</h3>
          </div>
        </Link>

        {/* AGENTIC AI */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Agentic AI Systems</h3>
          </div>
        </Link>

        {/* MULTI AGENT */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Multi-Agent AI Systems</h3>
          </div>
        </Link>

        {/* LLMOPS */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>LLMOps & GenAI Lifecycle Management</h3>
          </div>
        </Link>

        {/* MLOPS */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>MLOps Pipeline</h3>
          </div>
        </Link>

         {/* MACHINE LEARNING */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Machine Learning Models</h3>
          </div>
        </Link>

        {/* DEEP LEARNING */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Deep Learning Models</h3>
          </div>
        </Link>

        {/* RL */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Reinforcement Learning Systems</h3>
          </div>
        </Link>
       

        {/* NLP */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Natural Language Processing (NLP)</h3>
          </div>
        </Link>

        {/* DATA SCIENCE */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Data Science & Analytics</h3>
          </div>
        </Link>

        {/* SYSTEM DESIGN */}
        <Link
          to=""
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>System Design & Architecture Patterns</h3>
          </div>
        </Link>

      </div>
    </section>
  );
}

export default Books;