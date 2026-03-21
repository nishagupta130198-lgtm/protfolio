export default function About() {
  return (
    <section id="about">
      <div className="about-grid">

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Senior Web Developer with 4+ years of experience in building ERP solutions, 
            and scalable web applications. I primarily
            work with PHP and React, supported by strong database knowledge in
            MySQL and PostgreSQL.
          </p>

          <p>
            I focus on writing clean, maintainable, and performance-driven code.
            I enjoy solving real-world business problems and building systems
            that are reliable, scalable, and easy to maintain.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>4+ Years</h3>
            <p>Professional Experience</p>
          </div>

          <div className="highlight-card">
            <h3>10+</h3>
            <p>Projects Delivered</p>
          </div>

          <div className="highlight-card">
            <h3>ERP</h3>
            <p>Enterprise Systems</p>
          </div>

          <div className="highlight-card">
            <h3>Clean Code</h3>
            <p>Performance Focus</p>
          </div>
        </div>

      </div>
    </section>
  );
}
