
function Experience() {
  return (
    <section className="experience-section" id="experience">

      <div className="section-heading">
        <p className="section-label">MY JOURNEY</p>
        <h2>Experience & <span>Education</span></h2>
        <p className="experience-description">
          My academic background and professional experiences
          that have shaped my journey.
        </p>
      </div>

      <div className="timeline">

        {/* Education */}

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span className="timeline-category">EDUCATION</span>

            <h3>Bachelor's in Computer Engineering</h3>

            <h4>Everest Engineering College</h4>

            <p>
              Completed a Bachelor's degree in Computer
              Engineering, developing foundational knowledge
              in programming, databases, software development,
              data structures and computer systems.
            </p>

            <span className="timeline-date">
              Completed
            </span>
          </div>
        </div>

        {/* Creative Experience */}

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-card">
            <span className="timeline-category">
              CREATIVE EXPERIENCE
            </span>

            <h3>Video Editor & Promotional Content Creator</h3>

            <h4>Café / Hospitality Business</h4>

            <p>
              Created and edited promotional videos and
              short-form visual content to support business
              promotion and social media engagement.
            </p>

            <div className="experience-tags">
              <span>Video Editing</span>
              <span>CapCut</span>
              <span>Content Creation</span>
            </div>

            <span className="timeline-date">
              2026 · 2 Months
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Experience;
