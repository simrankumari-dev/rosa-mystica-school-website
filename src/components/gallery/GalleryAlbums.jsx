import { ArrowLeft, ArrowRight, Images } from "lucide-react";
import { useMemo, useState } from "react";

import {
  ALBUMS,
  CATEGORIES,
} from "../../data/galleryAlbums";

import styles from "./GalleryAlbums.module.css";

function GalleryAlbums({ onOpenAlbum }) {
  const [category, setCategory] = useState("All");

  const albums = useMemo(() => {
    if (category === "All") {
      return ALBUMS;
    }

    return ALBUMS.filter(
      (album) => album.category === category
    );
  }, [category]);

  return (
    <section
      className={styles.section}
      aria-labelledby="albums-heading"
    >
      <div className={styles.container}>

        <h2
          id="albums-heading"
          className={styles.srOnly}
        >
          Photo albums
        </h2>

        {/* =========================
            CATEGORY FILTERS
        ========================= */}

        <div className={styles.filterWrapper}>
          {CATEGORIES.map((categoryName) => {
            const isActive = category === categoryName;

            return (
              <button
                key={categoryName}
                type="button"
                aria-pressed={isActive}
                onClick={() => setCategory(categoryName)}
                className={`${styles.filterButton} ${
                  isActive ? styles.activeFilter : ""
                }`}
              >
                {categoryName}
              </button>
            );
          })}
        </div>

        {/* =========================
            ALBUM GRID
        ========================= */}

        <div className={styles.albumGrid}>
          {albums.map((album) => (
            <article
              key={album.id}
              className={styles.albumCard}
            >

              {/* Cover */}
              <div className={styles.coverWrapper}>
                <img
                  src={album.cover}
                  alt={`Cover photo of the ${album.title} album`}
                  loading="lazy"
                  className={styles.coverImage}
                />

                <div
                  className={styles.imageOverlay}
                  aria-hidden="true"
                />

                {/* Category */}
                <span className={styles.categoryBadge}>
                  {album.category}
                </span>

                {/* Photo Count */}
                <span className={styles.photoCount}>
                  <Images
                    size={14}
                    aria-hidden="true"
                  />

                  {album.photos.length}{" "}
                  {album.photos.length === 1
                    ? "photo"
                    : "photos"}
                </span>
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <p className={styles.date}>
                  {album.date}
                </p>

                <h3 className={styles.albumTitle}>
                  {album.title}
                </h3>

                <button
                  type="button"
                  onClick={() => onOpenAlbum?.(album)}
                  className={styles.viewAlbum}
                >
                  View Album

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className={styles.viewAlbumIcon}
                  />
                </button>
              </div>

            </article>
          ))}
        </div>

        {/* =========================
            BACK TO HOME
        ========================= */}

        <div className={styles.backWrapper}>
          <a
            href="/"
            className={styles.backButton}
          >
            <ArrowLeft
              size={16}
              aria-hidden="true"
            />

            Back to Home
          </a>
        </div>

      </div>
    </section>
  );
}

export default GalleryAlbums;