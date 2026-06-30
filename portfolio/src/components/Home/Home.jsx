import { useRef } from "react";
import "./style.css";
import Stars from "../Stars/Stars";
import useReveal from "../../hooks/useReveal";
import profileImage from "../../assets/images/P.jpeg";
import profileImage4 from "../../assets/images/ChatGPT Image Jun 26, 2026, 06_13_02 AM.png";
import profileImage1 from "../../assets/images/Screenshot 2026-06-21 210414.png";
import profileImage2 from "../../assets/images/Screenshot 2026-06-21 210537.png";
import profileImage3 from "../../assets/images/Screenshot 2026-06-21 210707.png";
import Divider from "../Divider/Divider";

const projects = [
  { title: "Todo App",              desc: "Finish your tasks and hand them in",      image: profileImage1, live: "#", code: "#" },
  { title: "Joory Academy",         desc: "For teaching and memorizing the Quran",   image: profileImage2, live: "#", code: "#" },
  { title: "The Fun Group Company", desc: "Book your flight ticket now",             image: profileImage3, live: "#", code: "#" },
];


/* ========== HOME ========== */
function Home() {
  const revealRef = useReveal();

  return (
    <div id="home">
      <Stars />

      <section className="first-section reveal" ref={revealRef}>

        {/* ===== صورة البروفايل ===== */}
        <div className="profile-wrapper">
          <div className="profile-ring-outer ring-1"></div>
          <div className="profile-ring-outer ring-2"></div>
          <div className="profile-glow"></div>
          <div className="profile-ring">
            <img src={profileImage} alt="Nabil" className="profile-img" />
          </div>
        </div>

        {/* ===== النص ===== */}
        <div className="text">
          <p className="hi-text">HI, I'M</p>
          <h1>Nabil <span>Haggag</span></h1>
          <h2 className="role-title">Web Developer</h2>
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

      <AboutSection />

      <ProjectsSection />

      <Divider />
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
            <img src={profileImage4} alt="Profile Image" />
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
                <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                <a href={project.code} target="_blank" rel="noopener noreferrer">Code</a>
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (statusRef.current) {
      statusRef.current.textContent = "Sending... 🚀";
    }

    try {
      const res = await fetch("https://formspree.io/f/xojonpwg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      let data = {};

      try {
        data = await res.json();
      } catch {
        data = {};
      }

      if (res.ok) {
        if (statusRef.current) {
          statusRef.current.textContent = "Message sent successfully ✅";
        }
        form.reset();
      } else {
        console.log("Formspree error:", data);

        if (statusRef.current) {
          statusRef.current.textContent = data.error || "Failed to send ❌";
        }
      }
    } catch (err) {
      console.log(err);

      if (statusRef.current) {
        statusRef.current.textContent = "Server error ❌";
      }
    }

    setTimeout(() => {
      if (statusRef.current) {
        statusRef.current.textContent = "";
      }
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section reveal" ref={revealRef}>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Send me a message from the universe 🚀</p>

        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input type="text" name="name" required />
            <label>Name</label>
          </div>

          <div className="input-box">
            <input type="email" name="email" required />
            <label>Email</label>
          </div>

          <div className="input-box">
            <textarea name="message" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit">Send</button>

          <p className="status" ref={statusRef}></p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/share/1D59ZYptjF/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/bellyy___1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Home;
