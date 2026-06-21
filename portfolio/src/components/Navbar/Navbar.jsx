import'./navbar.css'
import { useState } from "react";

import { NavLink } from "react-router-dom";
function Navbar() {
const [isOpen, setIsOpen] = useState(false);
  return (


<nav className="navbar">
  <div className="logo">
    <svg className="logo" width={120} height={60} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradCode" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {/* Left Bracket */}
      <path d="M90 30 L60 50 L90 70" stroke="white" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      {/* Slash */}
      <line x1={130} y1={25} x2={110} y2={75} stroke="url(#gradCode)" strokeWidth={6} strokeLinecap="round" />
      {/* Right Bracket */}
      <path d="M150 30 L180 50 L150 70" stroke="url(#gradCode)" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
      {/* Name */}
      <text x={120} y={95} textAnchor="middle" fill="white" fontSize={20} fontFamily="Poppins, sans-serif">
        Nabil
      </text>
    </svg>
  </div>
  <ul className={`nav-links ${isOpen ? "active" : ""}`}>
    <li><NavLink className="nav-link" to="/" end   onClick={() => setIsOpen(false)}>Home</NavLink></li>
    <li><NavLink className="nav-link" to="/About"   onClick={() => setIsOpen(false)}>About</NavLink></li>
    <li><NavLink className="nav-link" to="/Projects"   onClick={() => setIsOpen(false)}>Projects</NavLink></li>
    <li><NavLink className="nav-link" to="/Contact"   onClick={() => setIsOpen(false)}>Contact</NavLink></li>
  </ul>
  <div className="search">
    <input type="text" placeholder="Search..." />
    <button className="search-icon">
      <i className="fa-solid fa-magnifying-glass" />
    </button>
  </div>
<div
  className="menu-toggle"
  onClick={() => setIsOpen(!isOpen)}
>
  <span />
  <span />
  <span />
</div>
</nav>



  );
}
export default Navbar ;


