import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/components/Navbar.module.css";

export default function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandIcon}>📝</span>
          {props.title}
        </Link>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <Link 
              to="/" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {props.aboutText}
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className={styles.themeToggle}>
          <button
            onClick={props.toggleMode}
            className={`${styles.toggleButton} ${props.mode === 'dark' ? styles.active : ''}`}
            aria-label="Toggle theme"
          >
            <span className={styles.toggleSlider}>
              {props.mode === 'light' ? '☀️' : '🌙'}
            </span>
          </button>
          <span className={styles.toggleLabel}>
            {props.mode === 'light' ? 'Light' : 'Dark'}
          </span>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Title Here",
  aboutText: "About",
};
