export default function Hero() {
  return (
    <section className="hero">

      {/* Top Section (Text + Image side by side) */}
      <div className="hero-top">
        <div className="hero-left">
          <h1>Nisha Gupta</h1>
          <h2>Senior Web Developer</h2>
          <p>
            I design and build scalable, high-performance web applications using PHP, React, JavaScript, and robust database architectures.
          </p>
        </div>
      </div>

      {/* Rest Content Below */}
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
        <a href="#" className="btn outline">Download CV</a>
      </div>

    </section>
  );
}