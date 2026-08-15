import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react";

import styles from "./AlbumViewer.module.css";

function AlbumViewer({
  album,
  lightboxIndex,
  onClose,
  onOpenPhoto,
  onCloseLightbox,
  onPreviousPhoto,
  onNextPhoto,
}) {
  useEffect(() => {
    if (!album) {
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        if (lightboxIndex !== null) {
          onCloseLightbox();
        } else {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleEscape);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflow;
    };
  }, [
    album,
    lightboxIndex,
    onClose,
    onCloseLightbox,
  ]);

  if (!album) {
    return null;
  }

  const photos = album.photos ?? [];

  const activePhoto =
    lightboxIndex !== null
      ? photos[lightboxIndex]
      : null;

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* =========================
          ALBUM VIEWER
      ========================= */}

      <div
        className={styles.overlay}
        role="dialog"
        aria-modal="true"
        aria-label={`${album.title} album`}
        onClick={handleOverlayClick}
      >
        <div className={styles.albumModal}>

          {/* Header */}
          <div className={styles.modalHeader}>
            <div>
              <p className={styles.date}>
                {album.date}
              </p>

              <h2 className={styles.modalTitle}>
                {album.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close album"
            >
              <X
                size={20}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Photos */}
          <div className={styles.photoGrid}>
            {photos.map((photo, index) => (
              <button
                key={`${photo.src}-${index}`}
                type="button"
                onClick={() => onOpenPhoto(index)}
                className={styles.photoButton}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className={styles.photo}
                />
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* =========================
          LIGHTBOX
      ========================= */}

      {activePhoto && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
        >
          <button
            type="button"
            onClick={onCloseLightbox}
            className={styles.lightboxClose}
            aria-label="Close photo"
          >
            <X
              size={20}
              aria-hidden="true"
            />
          </button>

          {photos.length > 1 && (
            <button
              type="button"
              onClick={onPreviousPhoto}
              className={`${styles.lightboxNav} ${styles.previousButton}`}
              aria-label="Previous photo"
            >
              <ArrowLeft size={22} />
            </button>
          )}

          <figure className={styles.lightboxFigure}>
            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              className={styles.lightboxImage}
            />

            <figcaption className={styles.caption}>
              {activePhoto.alt}
            </figcaption>
          </figure>

          {photos.length > 1 && (
            <button
              type="button"
              onClick={onNextPhoto}
              className={`${styles.lightboxNav} ${styles.nextButton}`}
              aria-label="Next photo"
            >
              <ArrowRight size={22} />
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default AlbumViewer;