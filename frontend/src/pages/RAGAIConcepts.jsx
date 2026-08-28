import { Link } from "react-router-dom";

import {
  FaCube,
  FaProjectDiagram,
  FaDatabase,
  FaFileAlt,
  FaCogs,
  FaCut,
  FaBrain,
  FaServer,
  FaSearch,
  FaSortAmountDown,
  FaExchangeAlt,
  FaLayerGroup,
  FaComments,
  FaMagic,
  FaRocket,
  FaClipboardCheck,
  FaChartLine,
  FaShieldAlt,
  FaBuilding,
  FaLaptopCode
} from "react-icons/fa";

function RAGAIConcepts() {
  return (
    <section className="projects">

      <h1>RAG Cookbook</h1>

      <div className="projects-grid">

        {/* Module 1 */}
        <Link to="/rag/foundations" className="project-link-card">
          <div className="project-card">
            <FaCube className="project-icon" />
            <h3>RAG Foundations</h3>
          </div>
        </Link>

        {/* Module 2 */}
        <Link to="/rag/architecture" className="project-link-card">
          <div className="project-card">
            <FaProjectDiagram className="project-icon" />
            <h3>RAG Architecture</h3>
          </div>
        </Link>

        {/* Module 3 */}
        <Link to="/rag/data-sources" className="project-link-card">
          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>Documents & Data Sources</h3>
          </div>
        </Link>

        {/* Module 4 */}
        <Link to="/rag/ingestion" className="project-link-card">
          <div className="project-card">
            <FaFileAlt className="project-icon" />
            <h3>Document Ingestion</h3>
          </div>
        </Link>

        {/* Module 5 */}
        <Link to="/rag/document-processing" className="project-link-card">
          <div className="project-card">
            <FaCogs className="project-icon" />
            <h3>Document Processing & Parsing</h3>
          </div>
        </Link>

        {/* Module 6 */}
        <Link to="/rag/chunking" className="project-link-card">
          <div className="project-card">
            <FaCut className="project-icon" />
            <h3>Chunking Strategies</h3>
          </div>
        </Link>

        {/* Module 7 */}
        <Link to="/rag/embeddings" className="project-link-card">
          <div className="project-card">
            <FaBrain className="project-icon" />
            <h3>Embeddings</h3>
          </div>
        </Link>

        {/* Module 8 */}
        <Link to="/rag/vector-databases" className="project-link-card">
          <div className="project-card">
            <FaServer className="project-icon" />
            <h3>Vector Databases</h3>
          </div>
        </Link>

        {/* Module 9 */}
        <Link to="/rag/indexing-retrieval" className="project-link-card">
          <div className="project-card">
            <FaSearch className="project-icon" />
            <h3>Indexing & Retrieval</h3>
          </div>
        </Link>

        {/* Module 10 */}
        <Link to="/rag/retrieval-strategies" className="project-link-card">
          <div className="project-card">
            <FaSortAmountDown className="project-icon" />
            <h3>Retrieval Strategies</h3>
          </div>
        </Link>

        {/* Module 11 */}
        <Link to="/rag/reranking" className="project-link-card">
          <div className="project-card">
            <FaExchangeAlt className="project-icon" />
            <h3>Reranking</h3>
          </div>
        </Link>

        {/* Module 12 */}
        <Link to="/rag/query-transformation" className="project-link-card">
          <div className="project-card">
            <FaMagic className="project-icon" />
            <h3>Query Transformation</h3>
          </div>
        </Link>

        {/* Module 13 */}
        <Link to="/rag/context-engineering" className="project-link-card">
          <div className="project-card">
            <FaLayerGroup className="project-icon" />
            <h3>Context Engineering</h3>
          </div>
        </Link>

        {/* Module 14 */}
        <Link to="/rag/generation-grounding" className="project-link-card">
          <div className="project-card">
            <FaComments className="project-icon" />
            <h3>Generation & Grounding</h3>
          </div>
        </Link>

        {/* Module 15 */}
        <Link to="/rag/advanced-patterns" className="project-link-card">
          <div className="project-card">
            <FaRocket className="project-icon" />
            <h3>Advanced RAG Patterns</h3>
          </div>
        </Link>

        {/* Module 16 */}
        <Link to="/rag/evaluation" className="project-link-card">
          <div className="project-card">
            <FaClipboardCheck className="project-icon" />
            <h3>RAG Evaluation</h3>
          </div>
        </Link>

        {/* Module 17 */}
        <Link to="/rag/observability" className="project-link-card">
          <div className="project-card">
            <FaChartLine className="project-icon" />
            <h3>RAG Observability & LLMOps</h3>
          </div>
        </Link>

        {/* Module 18 */}
        <Link to="/rag/security-governance" className="project-link-card">
          <div className="project-card">
            <FaShieldAlt className="project-icon" />
            <h3>Security & Governance</h3>
          </div>
        </Link>

        {/* Module 19 */}
        <Link to="/rag/enterprise-rag" className="project-link-card">
          <div className="project-card">
            <FaBuilding className="project-icon" />
            <h3>Enterprise RAG</h3>
          </div>
        </Link>

        {/* Module 20 */}
        <a href="https://pooja-ai.github.io/IntelliCatalyst-Labs/#/retrieval-augmented-generation" className="project-link-card">
          <div className="project-card">
            <FaLaptopCode className="project-icon" />
            <h3>Real-World RAG Projects</h3>
          </div>
        </a>

      </div>

    </section>
  );
}

export default RAGAIConcepts;