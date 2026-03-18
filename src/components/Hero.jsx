import React from "react";

function Hero() {
  return (
    <section className="hero">

      <h1>Nisha Gupta</h1>

      <h2>Senior Web Developer</h2>

      <p>
        Experienced Web Developer with 3+ years of experience
        in building scalable web applications using
        React, JavaScript, PHP and MySQL.
      </p>

      <div className="hero-btns">
        <a href="#projects">
          <button>View Projects</button>
        </a>

        <a href="/resume.pdf">
          <button className="outline">Download Resume</button>
        </a>
      </div>

    </section>
  );
}

export default Hero;