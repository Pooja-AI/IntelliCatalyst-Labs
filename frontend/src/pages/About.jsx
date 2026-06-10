import profilePic from "../assets/profile.jpg";

function About() {
  return (
    <section className="about">

      {/* HERO SECTION */}
      <div className="about-hero">

        <img src={profilePic} alt="Pooja Sunkara" className="profile-img" />

        <div className="about-intro">
          <h1>Pooja Sunkara</h1>
          <h2>AI/ML Solution Architect</h2>

          <p>
            10+ years of experience designing enterprise AI systems,
            Generative AI platforms, Agentic AI solutions, and scalable
            MLOps architectures across Semiconductor, Energy, Pharma,
            and Telecom domains.
          </p>

          <div className="tags">
            <span>AI/ML</span>
            <span>GenAI</span>
            <span>Agentic AI</span>
            <span>LLMOps</span>
            <span>MLOps</span>
            <span>Azure AI</span>
          </div>
        </div>

      </div>

      {/* EXPERIENCE */}
      <div className="grid">

        <div className="card">
          <h3>🚀 Experience</h3>
          <p>10+ Years in AI/ML & Enterprise Solutions</p>
        </div>

        <div className="card">
          <h3>🏭 Industries</h3>
          <p>Semiconductor, Energy, Pharma, Telecom</p>
        </div>

        <div className="card">
          <h3>🧠 Expertise</h3>
          <p>GenAI, LLMs, RAG, Agentic AI, MLOps</p>
        </div>

      </div>

      {/* DETAILED SECTIONS */}
      <div className="about-details">

        <div className="glass-card">
          <h2>Professional Summary</h2>
          <p>
            Experienced AI/ML Solution Architect specializing in designing
            and deploying enterprise-grade AI systems using Generative AI,
            Machine Learning, Deep Learning, and Computer Vision.
          </p>
        </div>

        <div className="glass-card">
          <h2>Technical Expertise</h2>
          <ul>
            <li>Generative AI & LLMs (RAG, Prompt Engineering)</li>
            <li>Agentic AI Systems & Multi-Agent Design</li>
            <li>Azure ML, Databricks, MLflow</li>
            <li>MLOps & Model Deployment Pipelines</li>
            <li>Computer Vision (YOLO, OpenCV)</li>
          </ul>
        </div>

        <div className="glass-card">
          <h2>Leadership Impact</h2>
          <ul>
            <li>Led enterprise AI platform development</li>
            <li>Designed scalable GenAI solutions</li>
            <li>Delivered production-ready ML systems</li>
            <li>Mentored AI engineering teams</li>
          </ul>
        </div>

      </div>

    </section>
  );
}

export default About;