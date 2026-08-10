import { ArrowRight } from "lucide-react";

import Reveal from "../common/Reveal";
import ArchMotif from "../common/ArchMotif";

import styles from "./About.module.css";

const points = [
  {
    title: "Faith & Values",
    text: "Rooted in Gospel values, compassion and service.",
  },
  {
    title: "Academic Excellence",
    text: "A strong foundation for confident, curious learners.",
  },
  {
    title: "Holistic Growth",
    text: "Sports, arts and leadership alongside academics.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className={styles.aboutSection}
    >
      <div className={styles.aboutContainer}>
        <Reveal className={styles.aboutContent}>
          <div className={styles.aboutLabel}>
            <span className={styles.aboutLabelLine} />
            WHO WE ARE
          </div>

          <h2 className={styles.aboutTitle}>
            A School With a
            <br />
            <span>Purpose.</span>
          </h2>

          <p className={styles.aboutDescription}>
            Rosa Mystica School is a Catholic,
            co-educational institution established in
            2000 under the Diocese of Asansol. We
            believe education is more than knowledge —
            it is about forming character, discovering
            purpose and serving others.
          </p>

          <a
            href="/about"
            className={styles.aboutLink}
          >
            More About Our School
            <ArrowRight size={16} />
          </a>
        </Reveal>

        <div className={styles.aboutPoints}>
          {points.map((point, index) => (
            <Reveal
              key={point.title}
              delay={index * 80}
            >
              <div className={styles.aboutPoint}>
                <div className={styles.aboutPointIcon}>
                  <ArchMotif
                    size={38}
                    tone="maroon"
                  />
                </div>

                <div>
                  <h3 className={styles.aboutPointTitle}>
                    {point.title}
                  </h3>

                  <p className={styles.aboutPointText}>
                    {point.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}