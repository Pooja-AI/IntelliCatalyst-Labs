import { Link } from "react-router-dom";

import {
  FaRobot,
  FaDatabase,
  FaBrain,
  FaUsersCog,
  FaServer,
  FaExchangeAlt,
  FaShieldAlt,
  FaLock,
  FaEye,
  FaBalanceScale,
  FaCloudUploadAlt,
  FaClipboardCheck,
  FaChartLine,
  FaNetworkWired,
  FaComments,
  FaCamera
} from "react-icons/fa";

function Books() {
  return (
    <section className="projects">

      <h1>AI Books</h1>

      <p className="subtitle">
        AI Knowledge Library • Learn • Build • Deploy
      </p>

      <div className="projects-grid">

        {/* LLM */}
        <a
          href="https://pooja-ai.github.io/LLM-Knowledge-tutor/"
          className="project-link-card"
        >
          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>LLM</h3>
            <span className="view-more">Open →</span>
          </div>
        </a>


        {/* RAG */}
        <a
          href="https://pooja-ai.github.io/rag-knowledge-tutor/"
          className="project-link-card"
        >
          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>RAG</h3>
            <span className="view-more">Open →</span>
          </div>
        </a>

        {/* Agentic AI */}
        <a
          href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/"
          className="project-link-card"
        >
          <div className="project-card">
            <FaBrain className="project-icon" />
            <h3>Agentic AI</h3>
            <span className="view-more">Open →</span>
          </div>
        </a>

        {/* Multi-Agent */}
         <a
          href="https://pooja-ai.github.io/Multi-Agent-knowledge-tutor"
          className="project-link-card"
        >
          <div className="project-card">
            <FaBrain className="project-icon" />
            <h3>Multi Agent</h3>
            <span className="view-more">Open →</span>
          </div>
        </a>

        {/* MCP */}
    
        <a href="https://pooja-ai.github.io/MCP-Knowledge-tutor/"
         className="project-link-card">
          <div className="project-card">
            <FaServer className="project-icon" />
            <h3>MCP</h3>
            <span className="view-more">Open →</span>
          </div>
          </a>
        

        {/* A2A */}
        <a href="https://pooja-ai.github.io/A2A-knowledge-tutor" 
        className="project-link-card">
          <div className="project-card">
            <FaExchangeAlt className="project-icon" />
            <h3>A2A</h3>
            <span className="view-more">Open →</span>
          </div>
        </a>

        {/* AI Safety */}
        <Link to="/ai-safety" className="project-link-card">
          <div className="project-card">
            <FaShieldAlt className="project-icon" />
            <h3>AI Safety</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* AI Security */}
        <Link to="/ai-security" className="project-link-card">
          <div className="project-card">
            <FaLock className="project-icon" />
            <h3>AI Security</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* Explainable AI */}
        <Link to="/explainable-ai" className="project-link-card">
          <div className="project-card">
            <FaEye className="project-icon" />
            <h3>Explainable AI</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* Responsible AI */}
        <Link to="/responsible-ai" className="project-link-card">
          <div className="project-card">
            <FaBalanceScale className="project-icon" />
            <h3>Responsible AI</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* AI Deployment */}
        <Link to="/ai-deployment" className="project-link-card">
          <div className="project-card">
            <FaCloudUploadAlt className="project-icon" />
            <h3>AI Deployment</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* AI Evaluation */}
        <Link to="/ai-evaluation" className="project-link-card">
          <div className="project-card">
            <FaClipboardCheck className="project-icon" />
            <h3>AI Evaluation</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* Machine Learning */}
        <Link to="/machine-learning" className="project-link-card">
          <div className="project-card">
            <FaChartLine className="project-icon" />
            <h3>Machine Learning</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* Deep Learning */}
        <Link to="/deep-learning" className="project-link-card">
          <div className="project-card">
            <FaNetworkWired className="project-icon" />
            <h3>Deep Learning</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* NLP */}
        <Link to="/nlp" className="project-link-card">
          <div className="project-card">
            <FaComments className="project-icon" />
            <h3>Natural Language Processing</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

        {/* Computer Vision */}
        <Link to="/computer-vision" className="project-link-card">
          <div className="project-card">
            <FaCamera className="project-icon" />
            <h3>Computer Vision</h3>
            <span className="view-more">Open →</span>
          </div>
        </Link>

      </div>

    </section>
  );
}

export default Books;