import { useRef } from "react";
import "./style.css";
import useReveal from "../../hooks/useReveal";
import Stars from "../Stars/Stars";

function Contact() {
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
          statusRef.current.textContent =
            data.error || "Failed to send ❌";
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
    <div id="contact">
      <Stars />

      <section className="contact-section reveal" ref={revealRef}>
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
    </div>
  );
}

export default Contact;