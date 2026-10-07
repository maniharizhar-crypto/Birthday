import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { muskuData } from '../data/musku';
import { Sparkles } from 'lucide-react';

export default function EyesSection() {
  const [photoError, setPhotoError] = useState(false);
  const data = muskuData.eyesSection;

  return (
    <section className="relative w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center select-none overflow-hidden">
      {/* Cinematic Dark Vignette Background */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#060910]/80 to-[#04060a] pointer-events-none" />

      {/* Intimate Pacing Narrative Text */}
      <div className="relative z-10 w-full text-center space-y-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-editorial text-stone-300 text-base sm:text-lg italic"
        >
          {data.intro}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-editorial text-3xl sm:text-4xl text-amber-200 tracking-wide font-normal"
        >
          {data.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xs mx-auto"
        >
          {data.description}
        </motion.p>
      </div>

      {/* Subtle, Tasteful Photo Vignette with Golden Light Ray */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-xs aspect-[4/5] rounded-3xl overflow-hidden border border-amber-300/20 shadow-[0_15px_40px_rgba(0,0,0,0.8)] z-10"
      >
        {photoError ? (
          <div className="w-full h-full bg-gradient-to-b from-[#17141d] to-[#090b12] flex flex-col items-center justify-center p-6 text-center">
            {/* Artistic stylized eye illustration */}
            <div className="relative w-28 h-28 flex items-center justify-center mb-3">
              <div className="absolute inset-0 rounded-full bg-amber-500/10 animate-ping" />
              <div className="relative w-20 h-20 rounded-full border border-amber-400/40 bg-gradient-to-tr from-amber-950 via-stone-900 to-amber-900/60 flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 rounded-full bg-amber-400/30 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-stone-950 shadow-inner" />
                  <div className="absolute w-2 h-2 rounded-full bg-amber-100 top-7 right-7 opacity-90" />
                </div>
              </div>
            </div>
            <p className="font-handwriting text-amber-200 text-xl font-bold">
              That warm golden brown light...
            </p>
          </div>
        ) : (
          <img
            src={data.photoSrc}
            alt="Musku"
            onError={() => setPhotoError(true)}
            className="w-full h-full object-cover filter brightness-90 contrast-105"
          />
        )}

        {/* Ambient Darkened Perimeter to keep focus gentle */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_38%,_transparent_40%,_rgba(5,7,12,0.85)_100%)]" />

        {/* Golden Light Shimmer across eye area */}
        <motion.div
          animate={{
            opacity: [0.35, 0.75, 0.35],
            scale: [0.98, 1.05, 0.98],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[32%] left-[25%] right-[25%] h-12 rounded-full bg-radial-gradient from-amber-400/30 via-yellow-500/15 to-transparent pointer-events-none blur-sm"
        />

        {/* Subtle sparkle pinpoints */}
        <div className="absolute top-[34%] left-[42%] text-amber-200 pointer-events-none animate-pulse">
          <Sparkles className="w-4 h-4 opacity-80" />
        </div>
      </motion.div>

      {/* Climax Line */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.4, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-6 text-center"
      >
        <p className="font-handwriting text-2xl sm:text-3xl text-amber-300 font-bold tracking-wide drop-shadow-[0_0_12px_rgba(245,183,49,0.5)]">
          {data.glowText}
        </p>
      </motion.div>
    </section>
  );
}
