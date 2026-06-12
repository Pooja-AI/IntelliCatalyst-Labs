import systemDesignProjects from "../data/systemDesignProjects";
import SystemDesignCard from "../components/SystemDesignCard";

function SystemDesign() {
  return (
    <section className="projects">
      <h1>System Design Projects</h1>

      <div className="projects-grid">
        {systemDesignProjects.map((project) => (
          <SystemDesignCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SystemDesign;