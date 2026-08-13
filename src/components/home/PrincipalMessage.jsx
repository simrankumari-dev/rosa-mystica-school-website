import { Quote } from "lucide-react";
import principalImage from "../../assets/images/principal.webp";

import PRINCIPAL_MESSAGE from "../../data/principalMessage";
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
          <div
            className={styles.imageBorder}
            aria-hidden="true"
          />

          <img
            src={principalImage}
            alt="Portrait of the Principal of Rosa Mystica School seated in her office"
            width={1008}
            height={1200}
            loading="lazy"
            className={styles.image}
          />
        </div>

        {/* Principal Message */}
        <div className={styles.content}>

          {/* Section Heading */}
          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            Message from the Principal
          </p>

          <Quote
            className={styles.quoteIcon}
            aria-hidden="true"
          />

          {/* Message */}
          <div
            id="principal-heading"
            className={styles.message}
          >
            <p>{PRINCIPAL_MESSAGE.greeting}</p>

            <p>{PRINCIPAL_MESSAGE.opening}</p>

            <p>{PRINCIPAL_MESSAGE.message}</p>

            <p>{PRINCIPAL_MESSAGE.reminder}</p>

            <p>{PRINCIPAL_MESSAGE.tagline}</p>

            <p>
              {PRINCIPAL_MESSAGE.regards}
              <br />
              {PRINCIPAL_MESSAGE.designation}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;