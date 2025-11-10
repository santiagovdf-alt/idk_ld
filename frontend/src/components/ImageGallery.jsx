import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  return (
    <>
      {/* Main Image Display */}
      <div
        onClick={() => openLightbox(0)}
        className="relative h-[500px] rounded-xl overflow-hidden cursor-pointer group shadow-2xl"
      >
        <img
          src={images[0]}
          alt="Featured Interior Design"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay with hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
          <span className="text-white text-lg font-semibold mb-2">View Gallery</span>
          <span className="text-white/80 text-sm">{images.length} Images</span>
        </div>
        {/* Badge indicating it's clickable */}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#1F2B35] text-sm font-medium shadow-lg">
          Click to view gallery
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#D3D6D9] transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-[#D3D6D9] transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] px-20">
            <img
              src={images[selectedIndex]}
              alt={`Gallery ${selectedIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-[#D3D6D9] transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;