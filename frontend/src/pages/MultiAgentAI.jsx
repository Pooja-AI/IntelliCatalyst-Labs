import multiAgentProjects from "../data/multiAgentProjects";
import MAgentCard from "../components/MAgentCard";

function MultiAgentAI() {
  return (
    <section className="projects">
      <h1>Multi-Agent Projects</h1>

      <div className="projects-grid">
        {multiAgentProjects.map((project) => (
          <MAgentCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default MultiAgentAI;