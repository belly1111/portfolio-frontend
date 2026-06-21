import "./style.css";
import useReveal from "../../hooks/useReveal";
import Stars from "../Stars/Stars";
import profileImage1 from "../../assets/images/Screenshot 2026-06-21 210414.png";
import profileImage2 from "../../assets/images/Screenshot 2026-06-21 210537.png";
import profileImage3 from "../../assets/images/Screenshot 2026-06-21 210707.png";
import Divider from "../Divider/Divider";
function Projects() {
  const revealRef = useReveal();

  return (
    <div id="projects">
      <Stars/>
      <Divider />

      <section className="projects reveal" ref={revealRef}>

        <h2>My <span>Projects</span></h2>

        <div className="projects-container">

          <div className="project-card">
            <div className="img-wrapper">
              <img src={profileImage1} alt="project" />
            </div>
            <div className="project-content">
              <h3>Todo App</h3>
              <p>Modern responsive portfolio</p>
              <div className="project-links">
                <a href="#">Live</a>
                <a href="#">Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={profileImage2} alt="project" />
            </div>
            <div className="project-content">
              <h3>Joory Academy</h3>
              <p>Modern responsive portfolio</p>
              <div className="project-links">
                <a href="#">Live</a>
                <a href="#">Code</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="img-wrapper">
              <img src={profileImage3} alt="project" />
            </div>
            <div className="project-content">
              <h3>The Fun Group Company</h3>
              <p>Modern responsive portfolio</p>
              <div className="project-links">
                <a href="#">Live</a>
                <a href="#">Code</a>
              </div>
            </div>
          </div>

        </div>

        <div className="project-skills">
          <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /></span>
          <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /></span>
          <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" /></span>
          <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></span>
          <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /></span>
        </div>

      </section>
    </div>
  );
}

export default Projects;
