import profilePic from "../assets/profile.jpg";

function About() {
  return (
    <section className="about">

      {/* HERO */}
      <div className="about-hero">

        <img src={profilePic} alt="Pooja Sunkara" className="profile-img" />

        <div className="about-intro">
          <h1>Pooja Sunkara</h1>
          <h2>AI/ML Solution Architect</h2>

          <p>
            10+ years of experience designing enterprise AI systems.
          </p>

          <div className="tags">
            <span>AIML</span>
            <span>GenAI</span>
            <span>Agentic AI</span>
            <span>MLOps</span>
            <span>LLMOps</span>
          </div>
        </div>

      </div>

      {/* SOCIAL LINKS SECTION */}
      <div className="social-section">

        <h2>Connect With Me</h2>

        <div className="social-grid">

          <a href="mailto:@gmail.com" className="social-card">
            📧 Email
            <p>sunkara.pooja226@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/pooja-sunkara-873b24ba/"
            target="_blank"
            className="social-card"
          >
            🔗 LinkedIn
            <p>View Profile</p>
          </a>

          <a
            href="https://github.com/Pooja-AI"
            target="_blank"
            className="social-card"
          >
            💻 GitHub
            <p>Projects & Code</p>
          </a>

          <a
            href="https://www.youtube.com/@poojasunkara3178"
            target="_blank"
            className="social-card"
          >
            ▶ YouTube
            <p>AI Tutorials</p>
          </a>

        </div>
      </div>

      {/* DETAILS */}
      <div className="about-details">

        

      </div>

    </section>
  );
}

export default About;
