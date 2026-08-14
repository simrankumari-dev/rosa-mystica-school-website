import {
  BookOpen,
  HeartHandshake,
  Sparkles,
  Users,
} from "lucide-react";

import ABOUT_PAGE from "../../data/about";
import styles from "./EducationalPhilosophy.module.css";

const PHILOSOPHY_POINTS = [
  {
    icon: BookOpen,
    title: "Value-Based Education",
    description:
      "Academic learning is nurtured alongside strong human and moral values from an early age.",
  },
  {
    icon: HeartHandshake,
    title: "Human Development",
    description:
      "Students are encouraged to grow with kindness, responsibility, discipline and respect for others.",
  },
  {
    icon: Sparkles,
    title: "Spiritual Growth",
    description:
      "The school encourages students to develop essential spiritual values as part of their upbringing.",
  },
  {
    icon: Users,
    title: "A Respectful Community",
    description:
      "Students enjoy the freedom to be themselves while learning to respect every religion, caste and creed.",
  },
];

function EducationalPhilosophy() {
  return (
    <section
      className={styles.section}
      aria-labelledby="philosophy-heading"
    >
      <div className={styles.container}>

        <div className={styles.intro}>
          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            {ABOUT_PAGE.philosophy.eyebrow}
          </p>

          <h2
            id="philosophy-heading"
            className={styles.title}
          >
            {ABOUT_PAGE.philosophy.title}
          </h2>

          <p className={styles.description}>
            {ABOUT_PAGE.philosophy.description}
          </p>
        </div>

        <div className={styles.cards}>
          {PHILOSOPHY_POINTS.map(
            ({ icon: Icon, title, description }) => (
              <article
                key={title}
                className={styles.card}
              >
                <div className={styles.iconWrapper}>
                  <Icon
                    size={22}
                    aria-hidden="true"
                  />
                </div>

                <h3 className={styles.cardTitle}>
                  {title}
                </h3>

                <p className={styles.cardDescription}>
                  {description}
                </p>
              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
}

export default EducationalPhilosophy;