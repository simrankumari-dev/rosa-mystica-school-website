import { ArrowRight } from "lucide-react";
import ACADEMICS from "../../data/academics";
import styles from "./Academics.module.css";

export function Academics() {
  return (
    <section
      id="academics"
      aria-labelledby="academics-heading"
      className={styles.section}
    >
      <div className={styles.container}>

        {/* Heading + Button */}
        <div className={styles.header}>
          <div className={styles.headingContent}>
            <p className={styles.eyebrow}>
              <span className={styles.goldRule}></span>
              Academics
            </p>

            <h2 id="academics-heading" className={styles.heading}>
              A learning journey designed stage by stage
            </h2>
          </div>

          <a href="#admissions" className={styles.exploreButton}>
            Explore Academics

            <ArrowRight
              className={styles.arrow}
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Academic Cards */}
        <ol className={styles.cards}>
          {ACADEMICS.map(({ icon: Icon, stage, body }, index) => (
            <li key={stage}>
              <article className={styles.card}>

                <span className={styles.number}>
                  0{index + 1}
                </span>

                <Icon
                  className={styles.icon}
                  aria-hidden="true"
                />

                <h3 className={styles.cardTitle}>
                  {stage}
                </h3>

                <p className={styles.cardBody}>
                  {body}
                </p>

                <span
                  className={styles.bottomLine}
                  aria-hidden="true"
                />

              </article>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}