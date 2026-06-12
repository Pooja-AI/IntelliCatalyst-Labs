import { Link } from "react-router-dom";

function MULTIAGENTCard({ project }) {
  return (
    <Link
      to={`/multi-agent/${project.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => {
        console.log("🚀 Project Clicked");
        console.log("Title:", project.title);
        console.log("Navigate To:", `/multi-agent/${project.id}`);
      }}
    >
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default MULTIAGENTCard;