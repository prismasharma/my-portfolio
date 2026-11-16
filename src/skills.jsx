
function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "JavaScript", "OOP", "DSA"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["SQL", "Database Management"]
    },
    {
      title: "Tools & Technologies",
      icon: "⚙️",
      skills: ["Git", "GitHub", "VS Code", "CapCut"]
    }
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">
        <p className="section-label">MY EXPERTISE</p>
        <h2>Technical <span>Skills</span></h2>
        <p className="skills-description">
          Technologies and tools I use and continue
          to explore as a developer.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;
