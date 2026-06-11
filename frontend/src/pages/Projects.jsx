import { Link } from "react-router-dom";

function Projects() {
  return (
    <section className="projects">

      <h1>Artificial Intelligence (AI)</h1>

      <p className="subtitle">
        A collection of AI systems, Generative AI applications,
        LLM-based architectures, and machine learning implementations
      </p>

      <div className="projects-grid">

        {/* MACHINE LEARNING */}
        <Link
          to="/machine-learning"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Machine Learning Models</h3>
          </div>
        </Link>

        {/* DEEP LEARNING */}
        <Link
          to="/deep-learning"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Deep Learning Models</h3>
          </div>
        </Link>

        {/* RL */}
        <div className="project-card">
          <h3>Reinforcement Learning Systems</h3>
        </div>

        {/* NLP */}
        <div className="project-card">
          <h3>Natural Language Processing (NLP)</h3>
        </div>

        {/* GENERATIVE AI */}
        <div className="project-card">
          <h3>Generative AI Systems</h3>
        </div>

        {/* RAG */}
        <div className="project-card">
          <h3>Retrieval-Augmented Generation</h3>
        </div>

        {/* AGENTIC AI */}
        <div className="project-card">
          <h3>Agentic AI Systems</h3>
        </div>

        {/* MULTI AGENT */}
        <div className="project-card">
          <h3>Multi-Agent AI Systems</h3>
        </div>

        {/* LLMOPS */}
        <div className="project-card">
          <h3>LLMOps & GenAI Lifecycle Management</h3>
        </div>

        {/* MLOPS */}
        <div className="project-card">
          <h3>MLOps Pipeline</h3>
        </div>

        {/* DATA SCIENCE */}
        <div className="project-card">
          <h3>Data Science & Analytics</h3>
        </div>

        {/* SYSTEM DESIGN */}
        <div className="project-card">
          <h3>System Design & Architecture Patterns</h3>
        </div>

      </div>
    </section>
  );
}

export default Projects;