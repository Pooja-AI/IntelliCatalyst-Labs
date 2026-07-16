import dlProjects from "../data/dlProjects";
import DLCard from "../components/DLCard";

function Deeplearning() {
  return (
    <section className="projects">
      <h1>Deep Learning Projects</h1>
      <p className="subtitle">
        Deep Learning Projects
      </p>

      <div className="projects-grid">
        {dlProjects.map((project) => (
          <DLCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Deeplearning;