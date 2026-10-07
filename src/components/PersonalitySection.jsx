import React from 'react';
import { motion } from 'framer-motion';
import { muskuData } from '../data/musku';
import { SunflowerSVG, LavenderSVG } from './Flowers';
import { ShieldAlert, Smile, Sparkles } from 'lucide-react';

export default function PersonalitySection() {
  const p = muskuData.personality;

  return (
    <section className="relative w-full max-w-md mx-auto px-4 py-12 flex flex-col items-center select-none">
      {/* Background Floral Accents */}
      <div className="absolute -top-4 -left-4 pointer-events-none opacity-60">
        <LavenderSVG className="w-10 h-20" animated />
      </div>

      {/* Intro prompt */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-editorial text-stone-300 text-base sm:text-lg italic text-center mb-6"
      >
        {p.flowerIntro}
      </motion.p>

      {/* Radiant Central Sunflower */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-2 flex flex-col items-center"
      >
        <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-2xl transform scale-125" />
        <SunflowerSVG className="w-24 h-24 sm:w-28 sm:h-28" animated />
        <h3 className="font-editorial text-2xl sm:text-3xl text-amber-200 mt-4 text-center">
          {p.flowerChoice}
        </h3>
      </motion.div>

      {/* Warmth & Sunflower Trait Cards */}
      <div className="w-full mt-8 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="paper-card-dark rounded-2xl p-5 border border-amber-400/15"
        >
          <div className="flex items-start gap-3">
            <span className="text-xl">☀️</span>
            <p className="text-stone-200 text-sm sm:text-base leading-relaxed">
              {p.description1}
            </p>
          </div>
          <div className="flex items-start gap-3 mt-3 pt-3 border-t border-white/5">
            <span className="text-xl">💛</span>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {p.description2}
            </p>
          </div>
        </motion.div>

        {/* Playful Warning / Angry Musku card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="paper-card rounded-2xl p-5 relative overflow-hidden bg-rose-50/90 border border-rose-200"
        >
          <div className="washi-tape washi-tape-right bg-rose-200/60" />

          <div className="flex items-center gap-2 mb-2 text-rose-900 font-semibold text-xs tracking-wider uppercase">
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>Classified Field Note</span>
          </div>

          <p className="font-editorial text-stone-800 text-sm sm:text-base mb-2">
            {p.playfulShift}
          </p>

          <p className="font-handwriting text-rose-950 text-2xl font-bold mb-3">
            {p.dangerAlert}
          </p>

          <div className="pt-2 border-t border-rose-200/60 flex items-center justify-between">
            <span className="text-xs text-stone-600 font-sans italic">Official Protocol:</span>
            <span className="font-editorial text-stone-900 font-medium text-sm">
              {p.respectVerdict}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
