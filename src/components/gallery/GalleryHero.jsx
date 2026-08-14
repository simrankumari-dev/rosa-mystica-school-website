import styles from "./GalleryHero.module.css";

function GalleryHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="gallery-heading"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>
          Rosa Mystica School
        </p>

        <h1
          id="gallery-heading"
          className={styles.title}
        >
          School Gallery
        </h1>

        <span
          className={styles.goldRule}
          aria-hidden="true"
        />

        <p className={styles.description}>
          A glimpse of celebrations, competitions and everyday
          learning moments from our campus.
        </p>
      </div>
    </section>
  );
}

export default GalleryHero;