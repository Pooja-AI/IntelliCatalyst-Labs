function Projects() {
  return (
    <section className="projects">

      <h1>AI/ML & Generative AI Projects</h1>

      <p className="subtitle">
        A collection of AI systems, Generative AI applications, LLM-based architectures, and machine learning implementations
      </p>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Artificial Intelligence Systems</h3>
          <p>
            Designed intelligent decision-making systems using AI algorithms
            and rule-based logic for enterprise use cases.
          </p>
        </div>

        <div className="project-card">
          <h3>Machine Learning Models</h3>
          <p>
            Developed classification and regression models using
            Scikit-Learn for real-world structured datasets.
          </p>
        </div>

        <div className="project-card">
          <h3>Deep Learning Models</h3>
          <p>
            Implemented CNN and neural network architectures for image
            classification, detection, and sequence-based learning problems.
          </p>
        </div>

        <div className="project-card">
          <h3>Reinforcement Learning Systems</h3>
          <p>
            Built agent-based systems that learn optimal policies using
            reward-driven training and environment interaction.
          </p>
        </div>

        <div className="project-card">
          <h3>Natural Language Processing (NLP)</h3>
          <p>
            Developed NLP pipelines for text classification, sentiment analysis,
            named entity recognition, and information extraction.
          </p>
        </div>

        {/* NEW GENAI BLOCKS */}

         <div className="project-card">
          <h3>Generative AI Systems</h3>
          <p>
            Built LLM-powered applications for text generation, summarization,
            chat assistants, and enterprise knowledge automation solutions.
          </p>
        </div>

        <div className="project-card">
          <h3>Retrieval-Augmented Generation (RAG) Pipelines</h3>
          <p>
            Built scalable RAG systems combining vector databases, semantic search,
            and LLMs to deliver accurate, context-aware enterprise knowledge assistants.
          </p>
        </div>

        <div className="project-card">
          <h3>Agentic AI Systems</h3>
          <p>
            Designed autonomous AI agents capable of planning, reasoning, and executing
            multi-step tasks using tool-calling and memory-augmented architectures.
          </p>
        </div>

        <div className="project-card">
          <h3>Multi-Agent AI Systems</h3>
          <p>
            Developed collaborative multi-agent frameworks where specialized agents
            (planner, researcher, executor, critic) solve complex enterprise workflows.
          </p>
        </div>

        <div className="project-card">
          <h3>LLMOps & GenAI Lifecycle Management</h3>
          <p>
            Built end-to-end LLMOps pipelines for prompt versioning, evaluation,
            monitoring, CI/CD deployment, and performance optimization of LLM applications.
          </p>
        </div>

        <div className="project-card">
          <h3>MLOps Pipeline</h3>
          <p>
            Designed end-to-end ML pipelines with automated deployment,
            model versioning, monitoring, and lifecycle management.
          </p>
        </div>

      <div className="project-card">
          <h3>System Design & Architecture Patterns</h3>
          <p>
            Designed scalable enterprise architectures using Microservices,
            Event-Driven Architecture, CQRS, Pub-Sub models, and API Gateway patterns.
            Implemented fault-tolerant, distributed AI systems with high availability,
            caching strategies, and load-balanced deployments.
          </p>
        </div>
        </div>

    </section>
  );
}

export default Projects;