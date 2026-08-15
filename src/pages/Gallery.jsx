import { useCallback, useState } from "react";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryAlbums from "../components/gallery/GalleryAlbums";
import AlbumViewer from "../components/gallery/AlbumViewer";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenAlbum = useCallback((album) => {
    setSelectedAlbum(album);
    setLightboxIndex(null);
  }, []);

  const handleCloseAlbum = useCallback(() => {
    setSelectedAlbum(null);
    setLightboxIndex(null);
  }, []);

  const handleOpenPhoto = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePreviousPhoto = useCallback(() => {
    setLightboxIndex((current) => {
      if (
        !selectedAlbum ||
        current === null
      ) {
        return current;
      }

      const total = selectedAlbum.photos.length;

      return (
        (current - 1 + total) % total
      );
    });
  }, [selectedAlbum]);

  const handleNextPhoto = useCallback(() => {
    setLightboxIndex((current) => {
      if (
        !selectedAlbum ||
        current === null
      ) {
        return current;
      }

      const total = selectedAlbum.photos.length;

      return (current + 1) % total;
    });
  }, [selectedAlbum]);

  return (
    <>
      <GalleryHero />

      <GalleryAlbums
        onOpenAlbum={handleOpenAlbum}
      />

      <AlbumViewer
        album={selectedAlbum}
        lightboxIndex={lightboxIndex}
        onClose={handleCloseAlbum}
        onOpenPhoto={handleOpenPhoto}
        onCloseLightbox={handleCloseLightbox}
        onPreviousPhoto={handlePreviousPhoto}
        onNextPhoto={handleNextPhoto}
      />
    </>
  );
}

export default Gallery;