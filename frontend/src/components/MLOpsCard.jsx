import { Link } from "react-router-dom";

function MLOpsCard({ project }) {
  return (
    <Link
      to={`/mlops/${project.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => {
        console.log("🚀 Project Clicked");
        console.log("Title:", project.title);
        console.log("Navigate To:", `/mlops/${project.id}`);
      }}
    >
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default MLOpsCard;