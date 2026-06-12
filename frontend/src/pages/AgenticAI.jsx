import agenticAIProjects from "../data/agenticAIProjects";
import agenticAICard from "../components/agenticAICard";

function AgenticAI() {
  return (
    <section className="projects">
      <h1>Agentic AI Projects</h1>

      <div className="projects-grid">
        {agenticAIProjects.map((project) => (
          <agenticAICard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default AgenticAI;