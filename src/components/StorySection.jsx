import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { muskuData } from '../data/musku';
import { Heart, Sparkles, Gift } from 'lucide-react';
import { RoseSVG, SunflowerSVG, GreenSprigSVG } from './Flowers';

export default function StorySection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const data = muskuData.ourStory;

  return (
    <section className="relative w-full max-w-md mx-auto px-4 py-8 flex flex-col items-center select-none">
      {/* Background floral accents */}
      <div className="absolute top-10 -right-4 pointer-events-none opacity-60">
        <RoseSVG className="w-16 h-16" animated />
      </div>
      <div className="absolute bottom-12 -left-4 pointer-events-none opacity-60">
        <GreenSprigSVG className="w-16 h-16" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-6"
      >
        <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 inline-block mb-2">
          {data.title}
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-amber-100 font-medium leading-snug">
          {data.lead}
        </h3>
        <p className="text-stone-300 text-sm sm:text-base mt-2 font-sans max-w-xs mx-auto leading-relaxed">
          {data.blessing}
        </p>
      </motion.div>

      {/* Story Timeline Cards */}
      <div className="w-full space-y-3.5">
        {data.points.map((pt, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="paper-card-dark rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 border border-white/5 hover:border-amber-400/20 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/30">
              {idx === 0 && <span className="text-sm">⏳</span>}
              {idx === 1 && <span className="text-sm">🩺</span>}
              {idx === 2 && <span className="text-sm">💬</span>}
            </div>
            <div>
              <span className="text-xs font-semibold text-amber-300 block mb-0.5">
                {pt.title}
              </span>
              <p className="text-stone-200 text-sm leading-relaxed font-sans">
                {pt.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "What can I do to make your day special?" Interactive Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-6"
      >
        <div className="paper-card rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-xl">
          {/* Tape */}
          <div className="washi-tape washi-tape-top" />

          <p className="font-editorial text-stone-900 text-lg font-medium text-center mb-3">
            {data.specialDayBox.headline}
          </p>

          {!isRevealed ? (
            <button
              onClick={() => setIsRevealed(true)}
              className="w-full mt-2 py-4 px-4 rounded-xl bg-amber-100 hover:bg-amber-200/90 text-stone-800 border-2 border-dashed border-amber-400 flex flex-col items-center justify-center gap-2 group transition-all"
            >
              <Gift className="w-6 h-6 text-amber-700 group-hover:scale-110 transition-transform" />
              <span className="font-handwriting text-xl text-stone-900 font-bold">
                {data.specialDayBox.buttonText}
              </span>
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-3 pt-2"
              >
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-300/80 shadow-inner text-center">
                  <p className="font-sans text-stone-800 text-sm sm:text-base leading-relaxed">
                    {data.specialDayBox.secretNote}
                  </p>
                </div>

                <div className="text-center pt-1">
                  <p className="font-handwriting text-amber-950 text-xl font-bold">
                    {data.specialDayBox.playfulRemark}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </section>
  );
}
