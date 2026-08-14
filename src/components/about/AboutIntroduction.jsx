import { ArrowRight } from "lucide-react";

import ABOUT_PAGE from "../../data/about";
import styles from "./AboutIntroduction.module.css";

function AboutIntroduction() {
  return (
    <section
      className={styles.section}
      aria-labelledby="about-introduction-heading"
    >
      <div className={styles.container}>
        {/* Left: Heading */}
        <div className={styles.headingContent}>
          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            {ABOUT_PAGE.introduction.eyebrow}
          </p>

          <h2
            id="about-introduction-heading"
            className={styles.title}
          >
            {ABOUT_PAGE.introduction.title}
          </h2>
        </div>

        {/* Right: Content */}
        <div className={styles.content}>
          {ABOUT_PAGE.introduction.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={styles.paragraph}
            >
              {paragraph}
            </p>
          ))}

          <a
            href="/contact"
            className={styles.button}
          >
            Get in Touch

            <ArrowRight
              size={17}
              aria-hidden="true"
              className={styles.arrow}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutIntroduction;