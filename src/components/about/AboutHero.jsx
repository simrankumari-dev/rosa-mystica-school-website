import aboutImage from "../../assets/images/about/about-classroom.webp";
import ABOUT_PAGE from "../../data/about";

import styles from "./AboutHero.module.css";

function AboutHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="about-page-heading"
    >
      {/* Background Image */}
      <img
        src={aboutImage}
        alt=""
        className={styles.backgroundImage}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div
        className={styles.overlay}
        aria-hidden="true"
      />

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>

          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            {ABOUT_PAGE.hero.eyebrow}
          </p>

          <h1
            id="about-page-heading"
            className={styles.title}
          >
            {ABOUT_PAGE.hero.title}
          </h1>

          <p className={styles.description}>
            {ABOUT_PAGE.hero.description}
          </p>

        </div>
      </div>
    </section>
  );
}

export default AboutHero;