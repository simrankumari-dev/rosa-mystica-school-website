import { useState } from "react";

import GalleryHero from "../components/gallery/GalleryHero";
import GalleryAlbums from "../components/gallery/GalleryAlbums";
import AlbumViewer from "../components/gallery/AlbumViewer";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenAlbum = (album) => {
    setSelectedAlbum(album);
    setLightboxIndex(null);
  };

  const handleCloseAlbum = () => {
    setSelectedAlbum(null);
    setLightboxIndex(null);
  };

  const handleOpenPhoto = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePreviousPhoto = () => {
    if (!selectedAlbum || lightboxIndex === null) {
      return;
    }

    const totalPhotos = selectedAlbum.photos.length;

    setLightboxIndex(
      (lightboxIndex - 1 + totalPhotos) % totalPhotos
    );
  };

  const handleNextPhoto = () => {
    if (!selectedAlbum || lightboxIndex === null) {
      return;
    }

    const totalPhotos = selectedAlbum.photos.length;

    setLightboxIndex(
      (lightboxIndex + 1) % totalPhotos
    );
  };

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