import { Quote } from "lucide-react";
import principalImage from "../../assets/images/principal.webp";
import styles from "./PrincipalMessage.module.css";

  function PrincipalMessage() {
  return (
    <section
      aria-labelledby="principal-heading"
      className={styles.section}
    >
      <div className={styles.container}>

        {/* Principal Image */}
        <div className={styles.imageWrapper}>
          <img
            src={principalImage}
            alt="Portrait of the Principal of Rosa Mystica School"
            width="1008"
            height="1200"
            loading="lazy"
            className={styles.image}
          />
        </div>

        {/* Content */}
        <div className={styles.content}>

          {/* Eyebrow */}
          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />

            Message from the Principal
          </p>

          {/* Quote Icon */}
          <Quote
            className={styles.quoteIcon}
            aria-hidden="true"
          />

          {/* Main Quote */}
          <blockquote
            id="principal-heading"
            className={styles.quote}
          >
            “A school should feel like a second home — a place where
            children are safe enough to be curious and challenged enough
            to grow. That belief guides everything we do at Rosa Mystica.”
          </blockquote>

          {/* Description */}
          <p className={styles.description}>
            Our teachers work closely with families because a child's
            progress is a shared responsibility. We welcome you to visit
            our campus, meet our faculty, and see the care behind our
            classrooms for yourself.
          </p>

          {/* Principal Details */}
          <footer className={styles.footer}>
            <p className={styles.principalName}>
              [Principal Name]
            </p>

            <p className={styles.principalRole}>
              Principal, Rosa Mystica School
            </p>
          </footer>

        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage