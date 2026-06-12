import { Link } from "react-router-dom";

function RLCard({ project }) {
  return (
    <Link
      to={`/reinforcement-learning/${project.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => {
        console.log("🚀 Project Clicked");
        console.log("Title:", project.title);
        console.log("Navigate To:", `/reinforcement-learning/${project.id}`);
      }}
    >
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Link>
  );
}

export default RLCard;