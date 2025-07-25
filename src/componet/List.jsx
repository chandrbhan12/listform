import React, { useState } from "react";
import './list.css';
import { FaBars, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function List() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div>
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="logo" style={{ color: "#ffa500", fontWeight: "bold" }}>SrvicePro</div>
        {/* Hamburger Menu */}
        <div
          className="hamburger"
          id="hamburger"
          onClick={() => setNavOpen(!navOpen)}
          style={{ cursor: "pointer" }}
        >
          <FaBars size={28} color="#fff" />
        </div>
        <ul className={`nav-links${navOpen ? " open" : ""}`} id="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><button>Login</button></li>
        </ul>
      </nav>
      {/* ===== Main Section ===== */}
      <section className="services">
        <h1>Available Services</h1>
        <ul className="service-list">
          <li><a href="Home Care Service">Home Care Service</a></li>
          <li><a href="Plumbing Service">Plumbing Service</a></li>
          <li><a href="Carpenter Service">Carpenter Service</a></li>
          <li><a href="dewali puja sevice">dewali puja sevice</a></li>
          <li><a href="arcitacture servce">arcitacture servce</a></li>
          <li><a href="phone and computer service">phone and computer service</a></li>
          <li><a href="docter assistant service">docter assistant service</a></li>
          <li><a href="rakshabandhan service">rakshabandhan service</a></li>
          <li><a href="electrics service">electrics service</a></li>
        </ul>
      </section>
      {/* ===== Footer ===== */}
      <footer>
        <div className="footer-container">
          {/* Services Links */}
          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Home Care</a></li>
              <li><a href="#">Plumbing</a></li>
              <li><a href="#">Carpenter</a></li>
              <li><a href="#">Electrical</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="footer-col">
            <h3>Contact</h3>
            <p><i className="fa-solid fa-phone" /> +91 98765 43210</p>
            <p><i className="fa-solid fa-envelope" /> support@example.com</p>
            <p><i className="fa-solid fa-location-dot" /> Delhi, India</p>
          </div>
          {/* Social Icons */}
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><FaFacebookF size={20} /></a>
              <a href="#"><FaInstagram size={20} /></a>
              <a href="#"><FaTwitter size={20} /></a>
              <a href="#"><FaLinkedinIn size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 My Services. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default List;