import mlopsProjects from "../data/mlopsProjects";
import MLOpsCard from "../components/MLOpsCard";

function MLOps() {
  return (
    <section className="projects">
      <h1>MLOps Projects</h1>

      <div className="projects-grid">
        {mlopsProjects.map((project) => (
          <MLOpsCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default MLOps;