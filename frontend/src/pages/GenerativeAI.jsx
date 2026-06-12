import genAIProjects from "../data/genAIProjects";
import genAICard from "../components/genAICard";

function GenerativeAI() {
  return (
    <section className="projects">
      <h1>Generative AI Projects</h1>

      <div className="projects-grid">
        {genAIProjects.map((project) => (
          <genAICard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default GenerativeAI;