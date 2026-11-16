
import './App.css';
import About from './About';
import Skills from './skills';
import Projects from './projects';
import Experience from './experience';
import Contact from './contact';
function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <a href="#home" className="logo">
          PS<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="mailto:sharmaprisma75@gmail.com" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="intro">
            HELLO, I'M PRISMA SHARMA
          </p>

          <h1>
            Building digital
            <br />
            experiences with
            <br />
            <span>creativity.</span>
          </h1>

          <p className="hero-description">
            I'm a Computer Engineering graduate interested in
            frontend development and software engineering.
            I enjoy turning ideas into functional and beautiful
            digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work ↗
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/prismasharma"
               target="_blank"
               rel="noreferrer">
              GitHub ↗
            </a>

            <span>•</span>

            <a href="mailto:sharmaprisma75@gmail.com">
              Email ↗
            </a>
          </div>

        </div>

        {/* Profile Photo Placeholder */}
        <div className="hero-image">
          <div className="photo-placeholder">
            <span>PS</span>
          </div>
          <div className="image-glow"></div>
        </div>

      </section>
       <About />
<Skills />
<Projects />
<Experience />
<Contact />

    </div>
  );
}

export default App;
