
function About() {
  return (
    <section className="about-section" id="about">

      <div className="section-heading">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <h3>Turning ideas into digital experiences.</h3>

          <p>
            I'm Prisma Sharma, a Computer Engineering graduate
            passionate about technology, creativity, and
            building meaningful digital experiences.
          </p>

          <p>
            I have experience working with HTML, CSS,
            JavaScript, Python, and SQL. I'm currently
            expanding my skills in React and modern
            frontend development.
          </p>

          <p>
            I enjoy learning new technologies, solving
            problems, and bringing ideas to life through
            creative and functional solutions.
          </p>
        </div>

        <div className="about-card">
          <div className="about-detail">
            <span>Education</span>
            <h4>Bachelor's in Computer Engineering</h4>
          </div>

          <div className="about-detail">
            <span>College</span>
            <h4>Everest Engineering College</h4>
          </div>

          <div className="about-detail">
            <span>Focus</span>
            <h4>Frontend & Software Development</h4>
          </div>

          <div className="about-detail">
            <span>Currently Learning</span>
            <h4>React & Modern Web Development</h4>
          </div>
        </div>

      </div>

    </section>
  );
}

export default About;
