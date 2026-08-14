import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import ABOUT_PAGE from "../../data/about";
import styles from "./AboutValues.module.css";

const VALUE_ICONS = [
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
];

function AboutValues() {
  return (
    <section
      className={styles.section}
      aria-labelledby="values-heading"
    >
      <div className={styles.container}>

        {/* Heading */}
        <div className={styles.headingContent}>
          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            OUR VALUES
          </p>

          <h2
            id="values-heading"
            className={styles.title}
          >
            Values that shape every student's journey
          </h2>

          <p className={styles.intro}>
            Our educational approach goes beyond academics,
            helping students develop character, compassion,
            responsibility and respect.
          </p>
        </div>

        {/* Values */}
        <div className={styles.valuesGrid}>
          {ABOUT_PAGE.values.map((value, index) => {
            const Icon = VALUE_ICONS[index];

            return (
              <article
                key={value.number}
                className={styles.card}
              >
                <div className={styles.cardTop}>
                  <span className={styles.number}>
                    {value.number}
                  </span>

                  <div className={styles.iconWrapper}>
                    <Icon
                      size={21}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3 className={styles.cardTitle}>
                  {value.title}
                </h3>

                <p className={styles.cardDescription}>
                  {value.description}
                </p>

                <span
                  className={styles.cardLine}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default AboutValues;