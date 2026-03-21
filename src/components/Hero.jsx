export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* Left Content */}
        <div className="hero-text">
          <h1>Nisha Gupta</h1>
          <h2>Senior Web Developer</h2>
          <p>
            I design and build scalable, high-performance web applications using PHP, React, JavaScript, and robust database architectures.
          </p>

          <div className="tech-stack">
            <span>React JS</span>
            <span>Next JS</span>
            <span>Node JS</span>
            <span>PHP</span>
            <span>Codeigniter</span>
            <span>MySQL</span>
            <span>MongoDB</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="/Nisha_Gupta_Resume.pdf" className="btn outline">Download CV</a>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <img src="/profile.jpg" alt="Nisha Gupta" />
        </div>

      </div>
    </section>
  );
}