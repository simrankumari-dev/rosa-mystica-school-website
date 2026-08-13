import styles from "./WhyChooseUs.module.css";
import { WHY_CHOOSE_US } from "../../data/whyChooseUs";

  function WhyChooseUs() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.container}>

        <div className={styles.headingWrapper}>
          <p className={styles.eyebrow}>
            <span className={styles.goldLine}></span>
            Why Choose Us
          </p>

          <h2 id="why-heading" className={styles.heading}>
            Four commitments that shape everyday school life
          </h2>
        </div>

        <ul className={styles.features}>
          {WHY_CHOOSE_US.map(({ id, icon: Icon, title, body }) => (
            <li key={id} className={styles.featureItem}>
              <article className={styles.card}>

                <div className={styles.iconBox}>
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className={styles.cardTitle}>
                  {title}
                </h3>

                <p className={styles.cardBody}>
                  {body}
                </p>

              </article>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default WhyChooseUs;