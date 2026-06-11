import mlProjects from "../data/mlProjects";
import MLCard from "../components/MLCard";

function MachineLearning() {
  return (
    <section className="projects">
      <h1>Machine Learning Projects</h1>

      <div className="projects-grid">
        {mlProjects.map((project) => (
          <MLCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default MachineLearning;