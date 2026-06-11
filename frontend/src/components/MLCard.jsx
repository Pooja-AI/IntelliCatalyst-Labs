import { Link } from "react-router-dom";

function MLCard({ project }) {
  return (
    <Link
      to={`/machine-learning/${project.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => {
        console.log("🚀 Project Clicked");
        console.log("Title:", project.title);
        console.log("Navigate To:", `/machine-learning/${project.id}`);
      }}
    >
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default MLCard;