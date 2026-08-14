import { ArrowRight, Landmark } from "lucide-react";

import ABOUT_PAGE from "../../data/about";
import styles from "./AboutLegacy.module.css";

function AboutLegacy() {
  return (
    <section
      className={styles.section}
      aria-labelledby="legacy-heading"
    >
      <div className={styles.container}>
        <div className={styles.card}>

          {/* Year */}
          <div className={styles.yearBlock}>
            <span className={styles.yearLabel}>
              ESTABLISHED
            </span>

            <span className={styles.year}>
              {ABOUT_PAGE.legacy.year}
            </span>

            <span className={styles.yearText}>
              A journey rooted in purpose
            </span>
          </div>

          {/* Content */}
          <div className={styles.content}>

            <div className={styles.iconWrapper}>
              <Landmark
                size={23}
                aria-hidden="true"
              />
            </div>

            <p className={styles.eyebrow}>
              <span
                className={styles.goldRule}
                aria-hidden="true"
              />
              SINCE 2000
            </p>

            <h2
              id="legacy-heading"
              className={styles.title}
            >
              {ABOUT_PAGE.legacy.title}
            </h2>

            <p className={styles.description}>
              {ABOUT_PAGE.legacy.description}
            </p>

            <a
              href="/contact"
              className={styles.button}
            >
              Connect With Us

              <ArrowRight
                size={17}
                aria-hidden="true"
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutLegacy;