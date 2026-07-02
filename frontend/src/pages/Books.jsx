import { Link } from "react-router-dom";

function Books() {
  return (
    <section className="projects">

      <h1>AI Books</h1>

      <p className="subtitle">
        AI knowledge library
      </p>

      <div className="projects-grid">

        {/* LLM COOKBOOK */}
        <Link
          to="/LLM"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>LLM</h3>
          </div>
        </Link>

        
        {/* RAG COOKBOOK */}
        <a
            href="https://pooja-ai.github.io/rag-knowledge-tutor/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="project-card">
              <h3>RAG</h3>
            </div>
          </a>

        {/* AgenticAI COOKBOOK */}
        
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/"
          
          style={{ textDecoration: "none", color: "inherit" }}
        >
             <div className="project-card">
              <h3>Agentic AI</h3>
            </div>
          </a>

        {/* Multi-Agent Systems COOKBOOK */}
        <Link
          to="/multi-agent-cookbook"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Multi-Agent Systems</h3>
          </div>
        </Link>

        

        {/* MCP COOKBOOK */}
        <Link
          to="/mcp"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>MCP</h3>
          </div>
        </Link>

        {/* A2A COOKBOOK */}
        <Link
          to="/a2a"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>A2A</h3>
          </div>
        </Link>

        

         {/*AI Safety COOKBOOK */}
        <Link
          to="/ai-safety"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>AI Safety</h3>
          </div>
        </Link>

         {/*AI Security COOKBOOK */}
        <Link
          to="/ai-security"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>AI Security</h3>
          </div>
        </Link>

         {/*Explainable AI COOKBOOK */}
        <Link
          to="/explainable-ai"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Explainable AI </h3>
          </div>
        </Link>

         {/*Responsible AI  COOKBOOK */}
        <Link
          to="/responsible-ai"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Responsible AI </h3>
          </div>
        </Link>

        {/* AI Deployment COOKBOOK */}
        <Link
          to="/ai-deployment"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3> AI Deployment</h3>
          </div>
        </Link>

        {/*AI Evaluation COOKBOOK */}
        <Link
          to="/ai-evaluation"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>AI Evaluation</h3>
          </div>
        </Link>

      

        {/* Machine Learning COOKBOOK */}
        <Link
          to="/machine-learning"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Machine Learning</h3>
          </div>
        </Link>

        {/* Deep Learning COOKBOOK */}
        <Link
          to="/deep-learning"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Deep Learning</h3>
          </div>
        </Link>

        {/* NLP COOKBOOK */}
        <Link
          to="/nlp"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>NLP</h3>
          </div>
        </Link>

        {/* Computer vision COOKBOOK */}
        <Link
          to="/computer-vision"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Computer Vision</h3>
          </div>
        </Link>






      </div>
    </section>
  );
}

export default Books;