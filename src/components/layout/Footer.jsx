import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import styles from "./Footer.module.css";

const QUICK_LINKS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Notices",
    href: "/notices",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>

      <div className={styles.container}>

        {/* School Information */}
        <div className={styles.schoolInfo}>
          <div className={styles.brand}>
            <div className={styles.logoPlaceholder}>
              RM
            </div>

            <span className={styles.brandName}>
              Rosa Mystica
            </span>
          </div>

          <p className={styles.description}>
            The school is a co-education institution by its nature,
            along with a broad based curriculum and conducts varieties
            of co-curricular activities.
          </p>
        </div>

        {/* Quick Links */}
        <nav
          className={styles.quickLinks}
          aria-label="Footer navigation"
        >
          <h2 className={styles.heading}>
            Quick Links
          </h2>

          <ul className={styles.linkList}>
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.link}
                >
                  <ChevronRight size={16} />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div className={styles.contact}>
          <h2 className={styles.heading}>
            Contact Us
          </h2>

          <ul className={styles.contactList}>

            <li className={styles.contactItem}>
              <MapPin
                size={20}
                className={styles.icon}
                aria-hidden="true"
              />

              <span>
                Rosa Mystica School Bottola By Pass Road
                Jamuria, West Bengal
              </span>
            </li>

            <li className={styles.contactItem}>
              <Phone
                size={20}
                className={styles.icon}
                aria-hidden="true"
              />

              <a href="tel:+918906498370">
                +91 8906498370
              </a>
            </li>

            <li className={styles.contactItem}>
              <Mail
                size={20}
                className={styles.icon}
                aria-hidden="true"
              />

              <a href="mailto:school.rosamystica@gmail.com">
                school.rosamystica@gmail.com
              </a>
            </li>

          </ul>
        </div>

        {/* Mobile App */}
        <div className={styles.mobileApp}>
          <h2 className={styles.heading}>
            Mobile App
          </h2>

          <p className={styles.appDescription}>
            Download our mobile app for easy access to school
            updates, notices, and more.
          </p>

          <div className={styles.storeLinks}>

            <a
              href="#"
              className={styles.storeButton}
              aria-label="Download on Google Play"
            >
              <span className={styles.storeIcon}>
                ▶
              </span>

              <span className={styles.storeText}>
                <small>GET IT ON</small>
                Google Play
              </span>
            </a>

            <a
              href="#"
              className={styles.storeButton}
              aria-label="Download on App Store"
            >
              <span className={styles.storeIcon}>
                
              </span>

              <span className={styles.storeText}>
                <small>GET IT ON</small>
                App Store
              </span>
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className={styles.bottomBar}>
        <p>
          © {new Date().getFullYear()} Rosa Mystica School.
          All rights reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;