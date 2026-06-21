import { useRef } from "react";
import "./style.css";
import useReveal from "../../hooks/useReveal";
import Stars from "../Stars/Stars";
import Divider from "../Divider/Divider";

function Contact() {
  const revealRef = useReveal();
  const statusRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const status = statusRef.current;
    const form = e.target;

    // أضيف class sending على الـ container
    const container = form.closest(".contact-container");
    container.classList.add("sending");

    setTimeout(() => {
      container.classList.remove("sending");
      status.textContent = "✅ Message sent successfully!";
      status.classList.add("show");
      form.reset();

      setTimeout(() => {
        status.classList.remove("show");
      }, 3000);
    }, 1500);
  };

  return (
    <div id="contact">
      <Stars/>
<Divider />


      <section className="contact-section reveal" ref={revealRef}>
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
              <a href="https://www.facebook.com/share/1D59ZYptjF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/bellyy___1/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
