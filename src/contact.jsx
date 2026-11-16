
function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="section-heading">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Let's Work <span>Together</span></h2>
        <p className="contact-description">
          Have a project idea or an opportunity?
          I'd love to hear from you. Let's connect!
        </p>
      </div>

      <div className="contact-card">

        <div className="contact-info">
          <h3>Let's start a conversation.</h3>

          <p>
            I'm open to opportunities, collaborations,
            and connecting with people who share an
            interest in technology and creativity.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">✉</span>
            <div>
              <span>Email</span>
              <a href="mailto:sharmaprisma75@gmail.com">
                sharmaprisma75@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">⌘</span>
            <div>
              <span>GitHub</span>
              <a
                href="https://github.com/prismasharma"
                target="_blank"
                rel="noreferrer"
              >
                github.com/prismasharma
              </a>
            </div>
          </div>

        </div>

        <div className="contact-action">
          <div className="contact-decoration">✦</div>

          <h3>Have something in mind?</h3>

          <p>
            Let's discuss your ideas and explore
            possibilities together.
          </p>

          <a
            href="mailto:sharmaprisma75@gmail.com"
            className="primary-button"
          >
            Send Me an Email ↗
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;
