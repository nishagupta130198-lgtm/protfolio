export default function Experience() {
  return (
     <section id="experience">
      <h2>Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
          <span className="timeline-dot"></span>
          <div className="timeline-content">
            <h3>Senior Web Developer</h3>
            <h4>Melon Infotech Pvt. Ltd. · New Delhi</h4>
            <span className="timeline-date">Feb 2022 – Present</span>
            <ul>
              <li>Developed scalable ERP web applications.</li>
              <li>Built frontend using HTML, CSS, JavaScript, Bootstrap & React.</li>
              <li>Developed backend logic and REST APIs using PHP.</li>
              <li>Optimized databases using MySQL and PostgreSQL.</li>
              <li>Collaborated with teams to deliver reliable business solutions.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot"></span>
          <div className="timeline-content">
            <h3>Junior Web Developer</h3>
            <h4>Solutionz Consulting Pvt. Ltd. · New Delhi</h4>
            <span className="timeline-date">Jul 2021 – Feb 2022</span>
            <ul>
              <li>Converted wireframes and mockups into responsive websites.</li>
              <li>Developed UI using HTML, CSS, JavaScript, jQuery, AJAX & JSON.</li>
              <li>Assisted backend development using PHP and SQL.</li>
              <li>Maintained and enhanced existing web applications.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot"></span>
          <div className="timeline-content">
            <h3>Junior Web Developer (Intern)</h3>
            <h4>ISTS Service Pvt. Ltd. · Jaunpur</h4>
            <span className="timeline-date">Jan 2018 – May 2018</span>
            <ul>
              <li>Planned and developed websites from mockups to deployment.</li>
              <li>Built frontend components using HTML, CSS & Bootstrap.</li>
              <li>Supported website maintenance and UI improvements.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
