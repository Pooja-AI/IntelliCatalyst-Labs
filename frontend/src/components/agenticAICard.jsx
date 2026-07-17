import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function AgenticAICard({ project }) {
  return (
    <Link
      to={`/agentic-ai/${project.id}`}
      className="project-link-card"
      onClick={() => {
        console.log("🚀 Project Clicked");
        console.log("Title:", project.title);
        console.log("Navigate To:", `/agentic-ai/${project.id}`);
      }}
    >
      <div className="project-card">
        <div className="project-preview">
          <img
            src={project.banner || project.image || project.logo}
            alt={project.title}
            className="project-banner"
          />

          <div className="project-overlay">
            <div className="project-overlay-content">
              <h3>{project.title}</h3>

              <span className="view-project">
                View Project <FaExternalLinkAlt />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AgenticAICard;