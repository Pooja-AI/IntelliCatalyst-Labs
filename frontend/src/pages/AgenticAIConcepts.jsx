import { Link } from "react-router-dom";

import {
  FaCube,
  FaBrain,
  FaProjectDiagram,
  FaLightbulb,
  FaSitemap,
  FaDatabase,
  FaTools,
  FaLayerGroup,
  FaUsers,
  FaComments,
  FaCogs,
  FaShieldAlt,
  FaClipboardCheck,
  FaChartLine,
  FaObjectGroup,
  FaCode,
  FaExchangeAlt,
  FaBuilding,
  FaRocket,
  FaLaptopCode
} from "react-icons/fa";

function AgenticAIProjects() {
  return (
    <section className="projects">

      <h1>Agentic AI Cookbook</h1>

      <div className="projects-grid">

        {/* Module 1 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgenticAICookbook" className="project-link-card">
          <div className="project-card">
            <FaCube className="project-icon" />
            <h3>Foundations</h3>
          </div>
        </a>

         

        {/* Module 2 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgenticAICookbook" className="project-link-card">
          <div className="project-card">
            <FaBrain className="project-icon" />
            <h3>Core Agent Concepts</h3>
          </div>
        </a>

        {/* Module 3 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/"  className="project-link-card">
          <div className="project-card">
            <FaProjectDiagram className="project-icon" />
            <h3>Agent Components</h3>
          </div>
        </a>

        {/* Module 4 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentReasoingTechniques" className="project-link-card">
          <div className="project-card">
            <FaLightbulb className="project-icon" />
            <h3>Reasoning Techniques</h3>
          </div>
        </a>

        {/* Module 5 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgenticAIPlanning" className="project-link-card">
          <div className="project-card">
            <FaSitemap className="project-icon" />
            <h3>Planning</h3>
          </div>
        </a>

        {/* Module 6 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgenticAIMemory"  className="project-link-card">
          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>Memory</h3>
          </div>
        </a>

        {/* Module 7 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentToolUsage"  className="project-link-card">
          <div className="project-card">
            <FaTools className="project-icon" />
            <h3>Tool Usage</h3>
          </div>
        </a>

        {/* Module 8 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentContextEngineering"  className="project-link-card">
          <div className="project-card">
            <FaLayerGroup className="project-icon" />
            <h3>Context Engineering</h3>
          </div>
        </a>

        {/* Module 9 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/MultiAgent" className="project-link-card">
          <div className="project-card">
            <FaUsers className="project-icon" />
            <h3>Multi-Agent Systems</h3>
          </div>
        </a>

        {/* Module 10 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentCommunication"  className="project-link-card">
          <div className="project-card">
            <FaComments className="project-icon" />
            <h3>Communication</h3>
          </div>
        </a>

        {/* Module 11 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/ExecutionPatterns" className="project-link-card">
          <div className="project-card">
            <FaCogs className="project-icon" />
            <h3>Execution Patterns</h3>
          </div>
        </a>

        {/* Module 12 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentSafety" className="project-link-card">
          <div className="project-card">
            <FaShieldAlt className="project-icon" />
            <h3>Safety</h3>
          </div>
        </a>

        {/* Module 13 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentEvaluation" className="project-link-card">
          <div className="project-card">
            <FaClipboardCheck className="project-icon" />
            <h3>Evaluation</h3>
          </div>
        </a>

        {/* Module 14 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentObservability" className="project-link-card">
          <div className="project-card">
            <FaChartLine className="project-icon" />
            <h3>Observability</h3>
          </div>
        </a>

        {/* Module 15 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentDesignPatterns" className="project-link-card">
          <div className="project-card">
            <FaObjectGroup className="project-icon" />
            <h3>Agent Design Patterns</h3>
          </div>
        </a>

        {/* Module 16 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentFrameworks" className="project-link-card">
          <div className="project-card">
            <FaCode className="project-icon" />
            <h3>Frameworks</h3>
          </div>
        </a>

        {/* Module 17 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentCommunication" className="project-link-card">
          <div className="project-card">
            <FaExchangeAlt className="project-icon" />
            <h3>Communication Protocols</h3>
          </div>
        </a>

        {/* Module 18 */}
        <a href="https://pooja-ai.github.io/AgenticAI-knowledge-tutor/#/AgentEnterprise" className="project-link-card">
          <div className="project-card">
            <FaBuilding className="project-icon" />
            <h3>Enterprise Agentic AI</h3>
          </div>
        </a>

        {/* Module 19 */}
        <a href="/agentic-ai/advanced-topics" className="project-link-card">
          <div className="project-card">
            <FaRocket className="project-icon" />
            <h3>Advanced Topics</h3>
          </div>
        </a>

        {/* Module 20 */}
        <a href="https://pooja-ai.github.io/IntelliCatalyst-Labs/#/agentic-ai" className="project-link-card">
          <div className="project-card">
            <FaLaptopCode className="project-icon" />
            <h3>Real-World Projects</h3>
          </div>
        </a>

      </div>

    </section>
  );
}

export default AgenticAIProjects;