import nlpProjects from "../data/nlpProjects";
import NlpCard from "../components/NlpCard";

function NaturalLanguageProcessing() {
  return (
    <section className="projects">
      <h1>Natural Language Processing Projects</h1>

      <div className="projects-grid">
        {nlpProjects.map((project) => (
          <NlpCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default NaturalLanguageProcessing;