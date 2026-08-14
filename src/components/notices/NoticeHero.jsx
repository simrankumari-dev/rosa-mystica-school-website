import styles from "./NoticeHero.module.css";

function NoticesHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="notices-heading"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span
              className={styles.goldRule}
              aria-hidden="true"
            />
            School Notices
          </p>

          <h1
            id="notices-heading"
            className={styles.title}
          >
            Latest announcements and important updates
          </h1>

          <p className={styles.description}>
            Stay informed about school announcements, academic
            updates, admissions and upcoming activities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NoticesHero;