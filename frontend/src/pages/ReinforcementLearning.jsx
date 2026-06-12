import rlProjects from "../data/rlProjects";
import RLCard from "../components/RLCard";

function ReinforcementLearning() {
  return (
    <section className="projects">
      <h1>Reinforcement Learning Projects</h1>

      <div className="projects-grid">
        {rlProjects.map((project) => (
          <RLCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ReinforcementLearning;