import agenticAIProjects from "../data/agenticAIProjects";
import AgenticAICard from "../components/AgenticAICard";

function AgenticAI() {
  return (
    <section className="projects">
      <h1>Agentic AI Projects</h1>

      <div className="projects-grid">
        {agenticAIProjects.map((project) => (
          <AgenticAICard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default AgenticAI;