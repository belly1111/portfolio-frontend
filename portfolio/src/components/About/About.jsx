import "./style.css";
import useReveal from "../../hooks/useReveal";
import profileImage from "../../assets/images/P.jpeg";
import Stars from "../Stars/Stars";
import Divider from "../Divider/Divider";
function About() {
  const revealRef = useReveal();

  return (
    <div id="about">
            {/* النجوم */}
      <Stars />
      <Divider />

      
      <section className="about reveal " ref={revealRef}>
        <div className="about-container">

          {/* IMAGE */}
          <div className="about-img">
            <img src={profileImage} alt="Profile Image" />
          </div>

          {/* TEXT */}
          <div className="about-text">
            <h1>About <span>Me</span></h1>

            <p>
              I am a web development engineer and a teacher of programming languages
              used in website building. I build modern and responsive web applications,
              Frontend Development UI/UX Design Performance Optimization API Integration.
              I love turning ideas into real interactive experiences.
            </p>

            {/* SKILLS */}
            <div className="skills-section">
              <div className="skill">
                <span>HTML</span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
              </div>
              <div className="skill">
                <span>CSS</span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
              </div>
              <div className="skill">
                <span>JavaScript</span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
              </div>
              <div className="skill">
                <span>React</span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <div className="skill">
                <span>GitHub</span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </div>
              <div className="skill">
                <span>Bootstrap</span>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

    </div>
  );
}


function ServicesSection() {
  const revealRef = useReveal();

  return (
    <section className="services reveal" ref={revealRef}>
      <h2>What I Do</h2>
      <div className="cards">
        <div className="card">
          <h3>💻 Web Development</h3>
          <p>I build responsive and modern websites using clean code.</p>
        </div>
        <div className="card">
          <h3>🎨 UI Design</h3>
          <p>I create clean and user-friendly interfaces.</p>
        </div>
        <div className="card">
          <h3>⚡ Performance</h3>
          <p>I optimize websites for speed and performance.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
