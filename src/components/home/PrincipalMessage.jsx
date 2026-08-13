import { Quote } from "lucide-react";
import principalImage from "../../assets/images/principal.webp";
import styles from "./PrincipalMessage.module.css";
import { PRINCIPAL_MESSAGE } from "../../data/principalMessage";

function PrincipalMessage() {
  return (
    <section aria-labelledby="principal-heading" className={styles.section}>
      <div className={styles.container}>

        <div className={styles.imageWrapper}>
          <img
            src={principalImage}
            alt={`Portrait of ${PRINCIPAL_MESSAGE.principalName}, Principal`}
            width="1008"
            height="1200"
            loading="lazy"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.goldRule} aria-hidden="true" />
            Message from the Principal
          </p>

          <Quote className={styles.quoteIcon} aria-hidden="true" />

          <blockquote id="principal-heading" className={styles.quote}>
            “{PRINCIPAL_MESSAGE.quote}”
          </blockquote>

          <p className={styles.description}>
            {PRINCIPAL_MESSAGE.description}
          </p>

          <footer className={styles.footer}>
            <p className={styles.principalName}>{PRINCIPAL_MESSAGE.principalName}</p>
            <p className={styles.principalRole}>{PRINCIPAL_MESSAGE.designation}</p>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;