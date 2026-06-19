import { Link } from "react-router-dom";

function Books() {
  return (
    <section className="projects">

      <h1>AI Books</h1>

      <p className="subtitle">
        AI knowledge library
      </p>

      <div className="projects-grid">

        {/* RAG COOKBOOK */}
        <Link
          to="/rag-cookbook"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>RAG</h3>
          </div>
        </Link>

        {/* AgenticAI COOKBOOK */}
        <Link
          to="/agentic-cookbook"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>Agentic AI</h3>
          </div>
        </Link>

        {/* Multi-Agent AI COOKBOOK */}
        <Link
          to="/multi-agent-cookbook"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="project-card">
            <h3>MultiAgent-Frameworks</h3>
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



      </div>
    </section>
  );
}

export default Books;