import multiAgentProjects from "../data/multiAgentProjects";
import MULTIAGENTCard from "../components/MULTIAGENTCard";

function MultiAgentAI() {
  return (
    <section className="projects">
      <h1>Multi-Agent Projects</h1>

      <div className="projects-grid">
        {multiAgentProjects.map((project) => (
          <MULTIAGENTCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default MultiAgent;