import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { SunflowerSVG, RoseSVG, LilySVG, LavenderSVG } from './Flowers';

export default function PhotoCard({ photos, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imgError, setImgError] = useState({});

  const currentPhoto = photos[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === photos.length - 1;

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    } else if (onFinish) {
      onFinish();
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleImageError = (id) => {
    setImgError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative w-full max-w-md mx-auto px-4 py-4 flex flex-col items-center select-none">
      {/* Decorative Botanical accents flanking the card */}
      <div className="absolute -top-4 -left-3 z-20 pointer-events-none opacity-85">
        <SunflowerSVG className="w-14 h-14" animated />
      </div>
      <div className="absolute top-1/2 -right-3 z-20 pointer-events-none opacity-80">
        <RoseSVG className="w-12 h-12" animated />
      </div>
      <div className="absolute -bottom-6 -left-2 z-20 pointer-events-none opacity-85">
        <LavenderSVG className="w-8 h-16" animated />
      </div>

      {/* Progress Dots / Scrapbook counter */}
      <div className="flex items-center gap-2 mb-4">
        {photos.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-7 h-2 bg-amber-400 shadow-[0_0_8px_rgba(245,183,49,0.7)]'
                : 'w-2 h-2 bg-stone-700 hover:bg-stone-500'
            }`}
            aria-label={`Go to photo ${idx + 1}`}
          />
        ))}
        <span className="ml-2 font-handwriting text-stone-300 text-sm">
          Photo {currentIndex + 1} of {photos.length}
        </span>
      </div>

      {/* Clean Scrapbook Photo Card Container */}
      <div className="relative w-full min-h-[460px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPhoto.id}
            initial={{ opacity: 0, x: 25, rotate: currentPhoto.rotation - 3 }}
            animate={{ opacity: 1, x: 0, rotate: currentPhoto.rotation }}
            exit={{ opacity: 0, x: -25, rotate: currentPhoto.rotation + 3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-sm paper-card rounded-2xl p-4 sm:p-5 flex flex-col shadow-2xl"
            style={{
              transform: `rotate(${currentPhoto.rotation}deg)`,
            }}
          >
            {/* Washi Tape Header */}
            <div className={`washi-tape ${currentPhoto.tapeClass}`} />

            {/* Inner Photo Frame */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-stone-900 border border-stone-200/40 shadow-inner flex items-center justify-center">
              {imgError[currentPhoto.id] ? (
                <div
                  className={`w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br ${currentPhoto.accent}`}
                >
                  <span className="text-3xl mb-2">🌻</span>
                  <span className="font-editorial text-stone-800 font-medium text-lg">
                    {currentPhoto.tag}
                  </span>
                </div>
              ) : (
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  onError={() => handleImageError(currentPhoto.id)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              )}

              {/* Tag in bottom-right corner of photo */}
              <div className="absolute bottom-2 right-2 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] tracking-wider text-amber-200 font-sans border border-white/10">
                {currentPhoto.tag}
              </div>
            </div>

            {/* Clean Handwritten Scrapbook Captions (No white box at bottom) */}
            <div className="mt-4 pt-1 pb-1 flex flex-col items-center text-center space-y-1.5">
              <p className="font-editorial text-stone-900 text-base sm:text-lg font-medium leading-snug">
                {currentPhoto.lead}
              </p>
              <p className="font-handwriting text-amber-900 text-xl sm:text-2xl font-bold tracking-wide">
                {currentPhoto.punch}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="w-full max-w-sm mt-5 flex items-center justify-between gap-4 z-20">
        <button
          onClick={handlePrev}
          disabled={isFirst}
          className={`flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 text-sm font-medium transition-all ${
            isFirst
              ? 'opacity-30 cursor-not-allowed bg-stone-800/40 text-stone-500 border border-stone-800'
              : 'bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-white/10 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 py-3 px-4 rounded-xl flex items-center justify-center gap-1.5 text-sm font-medium bg-amber-400 hover:bg-amber-300 text-stone-950 shadow-md shadow-amber-400/20 active:scale-95 transition-all"
        >
          <span>{isLast ? 'Continue Story →' : 'Next Photo'}</span>
          {!isLast && <ChevronRight className="w-4 h-4" />}
        </button>
      </div>
    </section>
  );
}
