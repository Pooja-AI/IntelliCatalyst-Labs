import ragProjects from "../data/ragProjects";
import RAGCard from "../components/RAGCard";

function RAG() {
  return (
    <section className="projects">
      <h1>Retrieval-Augmented Generation Projects</h1>
      <p className="subtitle">
        Retrieval-Augmented Generation Projects
      </p>

      <div className="projects-grid">
        {ragProjects.map((project) => (
          <RAGCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default RAG;