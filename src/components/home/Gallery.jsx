import { ArrowRight } from "lucide-react";

import GALLERY_IMAGES from "../../data/gallery";
import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className={styles.section}
    >
      <div className={styles.container}>

        {/* Heading + CTA */}
        <div className={styles.header}>
          <div className={styles.headingContent}>
            <p className={styles.eyebrow}>
              <span
                className={styles.goldRule}
                aria-hidden="true"
              />
              Gallery
            </p>

            <h2
              id="gallery-heading"
              className={styles.heading}
            >
              Moments from life at Rosa Mystica
            </h2>
          </div>

          <a
            href="#gallery"
            className={styles.viewButton}
          >
            View Gallery

            <ArrowRight
              className={styles.arrow}
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Gallery */}
        <div className={styles.galleryGrid}>
          {GALLERY_IMAGES.map((image) => (
            <figure
              key={image.alt}
              className={`${styles.figure} ${
                styles[image.layout]
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={styles.image}
              />

              <figcaption className={styles.caption}>
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;




