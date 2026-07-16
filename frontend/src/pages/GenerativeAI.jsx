import genAIProjects from "../data/genAIProjects";
import GenAICard from "../components/GenAICard";

function GenerativeAI() {
  return (
    <section className="projects">
      <h1>Generative AI Projects</h1>
      <p className="subtitle">
        Generative AI Projects
      </p>

      <div className="projects-grid">
        {genAIProjects.map((project) => (
          <GenAICard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default GenerativeAI;