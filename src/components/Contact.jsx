export default function Contact() {
  return (
    <section id="contact" className="contact-clean">
      <div className="contact-head">
        <h2>Contact Me</h2>
        <p>
          I’m open to full-time roles, freelance work and long-term
          collaborations. Let’s connect.
        </p>
      </div>

      <div className="contact-container">
        {/* Left */}
        <div className="contact-details">
          <h3>Reach Out</h3>

          <p><strong>Email:</strong> nishagupta130198@gmail.com</p>
          <p><strong>Phone:</strong> +91 6386762615</p>
          <p><strong>Location:</strong> India</p>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/nisha-gupta-6a2053265/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/nishagupta130198-lgtm" target="_blank"  rel="noreferrer">GitHub</a>
          </div>
        </div>

        {/* Right */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
