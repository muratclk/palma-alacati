"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  alt: string;
  galleryTitle: string;
}

function LightboxOverlay({
  images,
  alt,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  alt: string;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return createPortal(
    <div
      className="fixed inset-0 bg-black flex items-center justify-center"
      style={{ zIndex: 99999 }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-3 text-white/70 hover:text-white transition-colors"
        aria-label="Kapat"
      >
        <X size={32} />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-white/60 text-sm tracking-wider">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-3 sm:left-8 z-10 p-3 text-white/50 hover:text-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft size={40} />
      </button>

      {/* Image */}
      <div
        className="flex items-center justify-center px-16 py-16"
        style={{ width: "100vw", height: "100vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain select-none"
          draggable={false}
        />
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-3 sm:right-8 z-10 p-3 text-white/50 hover:text-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight size={40} />
      </button>
    </div>,
    document.body
  );
}

export default function Lightbox({ images, alt, galleryTitle }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const open = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const prev = useCallback(() => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, prev, next]);

  return (
    <>
      {/* Gallery Grid */}
      <h3 className="font-heading text-2xl text-charcoal mb-6">
        {galleryTitle}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-xl cursor-pointer ${
              i === 0 ? "col-span-2 sm:col-span-2 aspect-[3/4]" : "aspect-[3/4]"
            }`}
            onClick={() => open(i)}
          >
            <img
              src={img}
              alt={`${alt} - ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Lightbox - rendered via portal to document.body */}
      {isOpen && (
        <LightboxOverlay
          images={images}
          alt={alt}
          currentIndex={currentIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
