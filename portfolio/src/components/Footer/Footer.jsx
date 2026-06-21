import "./style.css"



 function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-top">

        <div className="footer-brand">
          <span className="footer-logo">&lt;/&gt;</span>
          <p>Building modern web experiences<br />one line of code at a time.</p>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h4>Tech Stack</h4>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">CSS3</a>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a>
        </div>

        <div className="footer-social">
          <h4>Find Me</h4>
          <div className="footer-icons">
            <a href="https://www.facebook.com/share/1D59ZYptjF/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="fi facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/bellyy___1/" target="_blank" rel="noopener noreferrer" className="fi instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="fi github">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://wa.me/00201130607041" target="_blank" rel="noopener noreferrer" className="fi whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider">
        <svg viewBox="0 0 680 20" width="100%" xmlns="http://www.w3.org/2000/svg">
          {[60,140,210,300,380,460,540,620].map((cx, i) => {
            const cy = [10,6,13,8,11,6,13,9][i];
            const color = i % 2 === 0 ? "#8b5cf6" : "#3b82f6";
            const next = i < 7 ? { cx: [140,210,300,380,460,540,620][i], cy: [6,13,8,11,6,13,9][i] } : null;
            return (
              <g key={i}>
                {next && <line x1={cx} y1={cy} x2={next.cx} y2={next.cy} stroke="#1e293b" strokeWidth="0.8" />}
                <circle cx={cx} cy={cy} r={i === 3 ? 3 : 2} fill={color} opacity="0.8" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {currentYear} <span>Nabil</span>. All rights reserved.</p>
        <p className="footer-made">Made with <span className="heart">♥</span> using React & Vite</p>
      </div>

    </footer>
  );
}

export default Footer;
