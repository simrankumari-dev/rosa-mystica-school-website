import { ArrowUpRight, Mail, Phone } from "lucide-react";
import styles from "./TopBar.module.css";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.container}>

        {/* Left: Contact Information */}
        <div className={styles.contactInfo}>
          <a href="tel:+918906498370" className={styles.contactItem}>
            <Phone size={15} strokeWidth={1.8} />
            <span>+91 8906498370</span>
          </a>

          <a
            href="mailto:school.rosamystica@gmail.com"
            className={styles.contactItem}
          >
            <Mail size={15} strokeWidth={1.8} />
            <span>school.rosamystica@gmail.com</span>
          </a>
        </div>

        {/* Right: Quick Links */}
        <div className={styles.quickLinks}>

          <a
            href="/admissions"
            className={`${styles.quickLink} ${styles.registration}`}
          >
            <span>Online Registration</span>
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>

          <a
            href="#"
            className={`${styles.quickLink} ${styles.portal}`}
          >
            <span>Aestree Web Portal</span>
            <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>

        </div>

      </div>
    </div>
  );
}