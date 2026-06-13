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

        {/* GENERATIVE AI */}
        <Link
          to="/generative-ai"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Generative AI Systems</h3>
          </div>
        </Link>

        {/* RAG */}
        <Link
          to="/retrieval-augmented-generation"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Retrieval-Augmented Generation</h3>
          </div>
        </Link>

        {/* AGENTIC AI */}
        <Link
          to="/agentic-ai"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Agentic AI Systems</h3>
          </div>
        </Link>

        {/* MULTI AGENT */}
        <Link
          to="/multi-agent-ai"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Multi-Agent AI Systems</h3>
          </div>
        </Link>

        {/* LLMOPS */}
        <Link
          to="/llmops"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>LLMOps & GenAI Lifecycle Management</h3>
          </div>
        </Link>

        {/* MLOPS */}
        <Link
          to="/mlops"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>MLOps Pipeline</h3>
          </div>
        </Link>

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
        <Link
          to="/reinforcement-learning"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Reinforcement Learning Systems</h3>
          </div>
        </Link>
       

        {/* NLP */}
        <Link
          to="/natural-language-processing"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Natural Language Processing (NLP)</h3>
          </div>
        </Link>

        {/* DATA SCIENCE */}
        <Link
          to="/data-science"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Data Science & Analytics</h3>
          </div>
        </Link>

        {/* SYSTEM DESIGN */}
        <Link
          to="/system-design"
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

export default Projects;