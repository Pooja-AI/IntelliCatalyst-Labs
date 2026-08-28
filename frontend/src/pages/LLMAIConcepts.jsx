import { Link } from "react-router-dom";

import {
  FaCube,
  FaBrain,
  FaProjectDiagram,
  FaFont,
  FaCogs,
  FaDatabase,
  FaLayerGroup,
  FaCode,
  FaComments,
  FaSlidersH,
  FaGraduationCap,
  FaBalanceScale,
  FaRocket,
  FaTachometerAlt,
  FaClipboardCheck,
  FaChartLine,
  FaShieldAlt,
  FaBuilding,
  FaTools,
  FaLaptopCode
} from "react-icons/fa";

function LLMConcepts() {
  return (
    <section className="projects">

      <h1>LLM Cookbook</h1>

      <div className="projects-grid">

        {/* Module 1 */}
        <Link to="/llm/foundations" className="project-link-card">
          <div className="project-card">
            <FaCube className="project-icon" />
            <h3>LLM Foundations</h3>
          </div>
        </Link>

        {/* Module 2 */}
        <Link to="/llm/architecture" className="project-link-card">
          <div className="project-card">
            <FaProjectDiagram className="project-icon" />
            <h3>LLM Architecture</h3>
          </div>
        </Link>

        {/* Module 3 */}
        <Link to="/llm/tokenization" className="project-link-card">
          <div className="project-card">
            <FaFont className="project-icon" />
            <h3>Tokenization</h3>
          </div>
        </Link>

        {/* Module 4 */}
        <Link to="/llm/transformers" className="project-link-card">
          <div className="project-card">
            <FaBrain className="project-icon" />
            <h3>Transformer Architecture</h3>
          </div>
        </Link>

        {/* Module 5 */}
        <Link to="/llm/attention" className="project-link-card">
          <div className="project-card">
            <FaLayerGroup className="project-icon" />
            <h3>Attention Mechanisms</h3>
          </div>
        </Link>

        {/* Module 6 */}
        <Link to="/llm/llm-training" className="project-link-card">
          <div className="project-card">
            <FaGraduationCap className="project-icon" />
            <h3>LLM Training</h3>
          </div>
        </Link>

        {/* Module 7 */}
        <Link to="/llm/pretraining" className="project-link-card">
          <div className="project-card">
            <FaDatabase className="project-icon" />
            <h3>Pretraining</h3>
          </div>
        </Link>

        {/* Module 8 */}
        <Link to="/llm/fine-tuning" className="project-link-card">
          <div className="project-card">
            <FaSlidersH className="project-icon" />
            <h3>Fine-Tuning</h3>
          </div>
        </Link>

        {/* Module 9 */}
        <Link to="/llm/parameter-efficient-finetuning" className="project-link-card">
          <div className="project-card">
            <FaTools className="project-icon" />
            <h3>Parameter-Efficient Fine-Tuning</h3>
          </div>
        </Link>

        {/* Module 10 */}
        <Link to="/llm/prompt-engineering" className="project-link-card">
          <div className="project-card">
            <FaComments className="project-icon" />
            <h3>Prompt Engineering</h3>
          </div>
        </Link>

        {/* Module 11 */}
        <Link to="/llm/in-context-learning" className="project-link-card">
          <div className="project-card">
            <FaCode className="project-icon" />
            <h3>In-Context Learning</h3>
          </div>
        </Link>

        {/* Module 12 */}
        <Link to="/llm/alignment" className="project-link-card">
          <div className="project-card">
            <FaBalanceScale className="project-icon" />
            <h3>LLM Alignment</h3>
          </div>
        </Link>

        {/* Module 13 */}
        <Link to="/llm/inference" className="project-link-card">
          <div className="project-card">
            <FaRocket className="project-icon" />
            <h3>LLM Inference</h3>
          </div>
        </Link>

        {/* Module 14 */}
        <Link to="/llm/optimization" className="project-link-card">
          <div className="project-card">
            <FaTachometerAlt className="project-icon" />
            <h3>LLM Optimization</h3>
          </div>
        </Link>

        {/* Module 15 */}
        <Link to="/llm/llm-evaluation" className="project-link-card">
          <div className="project-card">
            <FaClipboardCheck className="project-icon" />
            <h3>LLM Evaluation</h3>
          </div>
        </Link>

        {/* Module 16 */}
        <Link to="/llm/llmops" className="project-link-card">
          <div className="project-card">
            <FaChartLine className="project-icon" />
            <h3>LLMOps</h3>
          </div>
        </Link>

        {/* Module 17 */}
        <Link to="/llm/security" className="project-link-card">
          <div className="project-card">
            <FaShieldAlt className="project-icon" />
            <h3>LLM Security & Safety</h3>
          </div>
        </Link>

        {/* Module 18 */}
        <Link to="/llm/llm-serving" className="project-link-card">
          <div className="project-card">
            <FaCogs className="project-icon" />
            <h3>LLM Serving & Deployment</h3>
          </div>
        </Link>

        {/* Module 19 */}
        <Link to="/llm/enterprise-llm" className="project-link-card">
          <div className="project-card">
            <FaBuilding className="project-icon" />
            <h3>Enterprise LLM</h3>
          </div>
        </Link>

        {/* Module 20 */}
        <Link to="/llm/advanced-topics" className="project-link-card">
          <div className="project-card">
            <FaBrain className="project-icon" />
            <h3>Advanced LLM Topics</h3>
          </div>
        </Link>

        {/* Module 21 */}
        <Link to="/llm/real-world-projects" className="project-link-card">
          <div className="project-card">
            <FaLaptopCode className="project-icon" />
            <h3>Real-World LLM Projects</h3>
          </div>
        </Link>

      </div>

    </section>
  );
}

export default LLMConcepts;