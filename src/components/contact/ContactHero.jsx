import { ArrowDown } from "lucide-react";

import CONTACT_DATA from "../../data/contact";
import styles from "./ContactHero.module.css";

function ContactHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="contact-heading"
    >
      <div className={styles.backgroundShape} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.goldRule} />
            {CONTACT_DATA.hero.eyebrow}
          </p>

          <h1
            id="contact-heading"
            className={styles.title}
          >
            {CONTACT_DATA.hero.title}
          </h1>

          <p className={styles.description}>
            {CONTACT_DATA.hero.description}
          </p>

          <a
            href="#contact-details"
            className={styles.scrollButton}
          >
            Explore contact details
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>

        <div className={styles.decorativeCard} aria-hidden="true">
          <span className={styles.decorativeLine} />
          <span className={styles.decorativeText}>
            Rosa Mystica
          </span>
          <span className={styles.decorativeYear}>
            Since 2000
          </span>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;