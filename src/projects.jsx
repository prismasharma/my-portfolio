
function Projects() {
  const projects = [
    {
      number: "01",
      title: "Job Application Tracker",
      category: "Frontend Development",
      description:
        "A web application designed to help users organize and track their job applications. Includes application management, editing, deletion, status tracking and dashboard statistics.",
      technologies: ["HTML", "CSS", "JavaScript"],
      status: "In Progress",
      github: "https://github.com/prismasharma/job-application-tracker"
    },
    {
      number: "02",
      title: "Chronic Kidney Disease Prediction",
      category: "Machine Learning",
      description:
        "An academic machine learning project that predicts the likelihood of chronic kidney disease using laboratory examination values. Compared four algorithms and selected Random Forest as the final model.",
      technologies: [
        "Python",
        "Machine Learning",
        "Random Forest",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      status: "Academic Project",
      github: null
    }
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="section-heading">
        <p className="section-label">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <p className="projects-description">
          A collection of projects where I apply my
          technical knowledge and turn ideas into reality.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div className="project-card" key={project.number}>

            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-status">
                {project.status}
              </span>
            </div>

            <p className="project-category">
              {project.category}
            </p>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-footer">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub ↗
                </a>
              ) : (
                <span>Academic Project</span>
              )}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
