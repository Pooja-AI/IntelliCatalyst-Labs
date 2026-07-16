import llmopsProjects from "../data/llmopsProjects";
import LLMCard from "../components/LLMCard";

function LLMOps() {
  return (
    <section className="projects">
      <h1>LLM Ops Projects</h1>
      <p className="subtitle">
        LLM Ops Projects
      </p>

      <div className="projects-grid">
        {llmopsProjects.map((project) => (
          <LLMCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default LLMOps;