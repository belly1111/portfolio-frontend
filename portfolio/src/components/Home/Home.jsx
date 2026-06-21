import { useEffect, useRef } from "react";
import "./style.css";
import Stars from "../Stars/Stars";
import useReveal from "../../hooks/useReveal";
import profileImage from "../../assets/images/P.jpeg";
import profileImage1 from "../../assets/images/Screenshot 2026-06-21 210414.png";
import profileImage2 from "../../assets/images/Screenshot 2026-06-21 210537.png";
import profileImage3 from "../../assets/images/Screenshot 2026-06-21 210707.png";
import Divider from "../Divider/Divider";



const projects = [
  { title: "Todo App",                 desc: "Finish your tasks and hand them in",            image: profileImage1, live: "#", code: "#" },
  { title: "Joory Academy",            desc: "For teaching and memorizing the Quran",         image: profileImage2, live: "#", code: "#" },
  { title: "The Fun Group Company",    desc: "Book your flight ticket now",                  image: profileImage3, live: "#", code: "#" },
];


/* ========== HOME ========== */
function Home() {
  const sunRef = useRef(null);
  const revealRef = useReveal();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const sun = sunRef.current;
      if (!sun) return;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = ((e.clientX - centerX) / centerX) * 30;
      const moveY = ((e.clientY - centerY) / centerY) * 30;
      sun.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="home">
      {/* النجوم — مرة واحدة بس للصفحة كلها */}
      <Stars />

      {/* ===== HERO SECTION ===== */}
      <section className="first-section reveal" ref={revealRef}>
        <div className="solar-system">
          <div className="sun" ref={sunRef}></div>
          <div className="orbit o1"><div className="planet p1"></div></div>
          <div className="orbit o2"><div className="planet p2"></div></div>
          <div className="orbit o3">
            <div className="planet p3">
              <div className="moon-orbit"><div className="moon"></div></div>
            </div>
          </div>
          <div className="orbit o4"><div className="planet p4"></div></div>
          <div className="orbit o5"><div className="planet p5"></div></div>
          <div className="orbit o6"><div className="planet p6"></div></div>
          <div className="orbit o7"><div className="planet p7"></div></div>
          <div className="orbit o8"><div className="planet p8"></div></div>
        </div>

        <div className="text">
          <h1>Hi, I'm <span>Nabil</span></h1>
          <p className="p">
            I am a web development engineer and a teacher of programming
            languages used in website building. I build modern and responsive
            web applications.
          </p>
          <div className="btns">
            <a href="#contact" className="btn outline">Contact Me <span>➝</span></a>
            <a href="#projects" className="btn primary">View My Work <span>➝</span></a>
          </div>
          <div className="socials">
            <a href="https://www.facebook.com/share/1D59ZYptjF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/bellyy___1/" target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/00201130607041" target="_blank" rel="noopener noreferrer" className="whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </section>
<Divider />
      {/* ===== ABOUT SECTION ===== */}
      <AboutSection />

<Divider />
      {/* ===== PROJECTS SECTION ===== */}
      <ProjectsSection />

<Divider />
      {/* ===== CONTACT SECTION ===== */}
      <ContactSection />
    </div>
  );
}

/* ========== ABOUT ========== */
function AboutSection() {
  const revealRef = useReveal();
  return (
    <>
      <section id="about" className="about reveal" ref={revealRef}>
        <div className="about-container">
          <div className="about-img">
            <img src={profileImage} alt="Profile Image" />
          </div>
          <div className="about-text">
            <h1>About <span>Me</span></h1>
            <p>
              I am a web development engineer and a teacher of programming languages
              used in website building. I build modern and responsive web applications,
              Frontend Development UI/UX Design Performance Optimization API Integration.
              I love turning ideas into real interactive experiences.
            </p>
            <div className="skills-section">
              <div className="skill"><span>HTML</span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /></div>
              <div className="skill"><span>CSS</span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /></div>
              <div className="skill"><span>JavaScript</span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" /></div>
              <div className="skill"><span>React</span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></div>
              <div className="skill"><span>GitHub</span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /></div>
              <div className="skill"><span>Bootstrap</span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES تحت About مباشرة */}
      <ServicesSection />
    </>
  );
}

/* ========== SERVICES ========== */
function ServicesSection() {
  const revealRef = useReveal();
  return (
    <section className="services reveal" ref={revealRef}>
      <h2>What I Do</h2>
      <div className="cards">
        <div className="card"><h3>💻 Web Development</h3><p>I build responsive and modern websites using clean code.</p></div>
        <div className="card"><h3>🎨 UI Design</h3><p>I create clean and user-friendly interfaces.</p></div>
        <div className="card"><h3>⚡ Performance</h3><p>I optimize websites for speed and performance.</p></div>
      </div>
    </section>
  );
}

/* ========== PROJECTS ========== */
function ProjectsSection() {
  const revealRef = useReveal();
  return (
    <section id="projects" className="projects reveal" ref={revealRef}>
      <h2>My <span>Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <div className="img-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-links">
                <a href="#">Live</a>
                <a href="#">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="project-skills">
        <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /></span>
        <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /></span>
        <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" /></span>
        <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /></span>
        <span><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /></span>
      </div>
    </section>
  );
}

/* ========== CONTACT ========== */
function ContactSection() {
  const revealRef = useReveal();
  const statusRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const container = e.target.closest(".contact-container");
    container.classList.add("sending");
    setTimeout(() => {
      container.classList.remove("sending");
      statusRef.current.textContent = "✅ Message sent successfully!";
      statusRef.current.classList.add("show");
      e.target.reset();
      setTimeout(() => statusRef.current.classList.remove("show"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section reveal" ref={revealRef}>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Send me a message from the universe 🚀</p>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" id="name" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-box">
            <input type="email" id="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <textarea id="message" required></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit">Send</button>
          <p className="status" ref={statusRef}></p>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1D59ZYptjF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/bellyy___1/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Home;
