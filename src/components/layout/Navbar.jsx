import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Notices", path: "/notices" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <NavLink to="/" className={styles.logo}>
          <div className={styles.logoBadge}>
            RM
          </div>

          <div className={styles.logoText}>
            <span className={styles.schoolName}>
              Rosa Mystica
            </span>

            <span className={styles.schoolSubtitle}>
              School
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav
          className={styles.navLinks}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${styles.navLink} ${
                  isActive ? styles.active : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <NavLink
          to="/contact"
          className={styles.cta}
        >
          Enquire Now
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={
            isMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `${styles.mobileNavLink} ${
                  isActive ? styles.active : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={styles.mobileCta}
          >
            Enquire Now
          </NavLink>
        </nav>
      )}
    </header>
  );
}