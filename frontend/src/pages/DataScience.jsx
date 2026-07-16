import dataScienceProjects from "../data/dataScienceProjects";
import DSCard from "../components/DSCard";

function DataScience() {
  return (
    <section className="projects">
      <h1>Data Science Projects</h1>
      <p className="subtitle">
        Data Science Projects
      </p>

      <div className="projects-grid">
        {dataScienceProjects.map((project) => (
          <DSCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default DataScience;