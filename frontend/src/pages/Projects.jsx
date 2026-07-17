import { Link } from "react-router-dom";

import {
  FaRobot,
  FaDatabase,
  FaBrain,
  FaUsersCog,
  FaChartLine,
  FaNetworkWired,
  FaCloud,
  FaCogs
} from "react-icons/fa";

function Projects() {
  return (
    <section className="projects">

      <h1>Artificial Intelligence (AI)</h1>

      <p className="subtitle">
        A collection of AI systems, Generative AI applications,
        LLM-based architectures, and machine learning implementations.
      </p>

      <div className="projects-grid">

        {/* Generative AI */}
        <Link to="/generative-ai" className="project-link-card">
          <div className="project-card">
            <FaRobot className="project-icon" />
            <h3>Generative AI Systems</h3>
            <p>
              Build enterprise-grade AI assistants, copilots,
              chatbots, content generation, and multimodal
              GenAI applications.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

        {/* RAG */}
        <Link to="/retrieval-augmented-generation" className="project-link-card">
          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>Retrieval-Augmented Generation</h3>
            <p>
              Design scalable RAG pipelines using vector
              databases, embeddings, semantic search,
              and enterprise knowledge retrieval.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

        {/* Agentic AI */}
        <Link to="/agentic-ai" className="project-link-card">
          <div className="project-card">
            <FaBrain className="project-icon" />
            <h3>Agentic AI Systems</h3>
            <p>
              Autonomous AI agents capable of reasoning,
              planning, memory management, and tool usage.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

        {/* Multi-Agent */}
        <Link to="/multi-agent-ai" className="project-link-card">
          <div className="project-card">
            <FaUsersCog className="project-icon" />
            <h3>Multi-Agent AI Systems</h3>
            <p>
              Collaborative AI agents working together
              to solve complex enterprise workflows.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

        {/* Machine Learning */}
        <Link to="/machine-learning" className="project-link-card">
          <div className="project-card">
            <FaChartLine className="project-icon" />
            <h3>Machine Learning</h3>
            <p>
              Predictive analytics, feature engineering,
              supervised learning, and production ML models.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

        {/* Deep Learning */}
        <Link to="/deep-learning" className="project-link-card">
          <div className="project-card">
            <FaNetworkWired className="project-icon" />
            <h3>Deep Learning</h3>
            <p>
              Neural networks, CNNs, Transformers,
              computer vision, NLP, and multimodal AI.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

        {/* MLOps */}
        <Link to="/mlops" className="project-link-card">
          <div className="project-card">
            <FaCloud className="project-icon" />
            <h3>MLOps</h3>
            <p>
              End-to-end ML lifecycle management,
              CI/CD pipelines, monitoring,
              deployment, and governance.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

        {/* LLMOps */}
        <Link to="/llmops" className="project-link-card">
          <div className="project-card">
            <FaCogs className="project-icon" />
            <h3>LLMOps</h3>
            <p>
              Production LLM deployment, prompt
              management, evaluation, observability,
              and AI governance.
            </p>
            <span className="view-more">
              Explore →
            </span>
          </div>
        </Link>

      </div>

    </section>
  );
}

export default Projects;