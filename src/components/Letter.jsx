import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { muskuData } from '../data/musku';
import { RoseSVG, LavenderSVG, LilySVG, GreenSprigSVG } from './Flowers';
import { Mail, Sparkles, Heart, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Letter({ onFinishLetter }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = muskuData.letter;

  const handleOpen = () => {
    setIsOpen(true);
    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f4a5ae', '#f5b731', '#c4b5fd', '#ffffff'],
      });
    } catch (e) {}
  };

  return (
    <section className="relative w-full max-w-md mx-auto px-4 py-16 flex flex-col items-center select-none">
      {/* Botanical Garden framing around the envelope */}
      <div className="absolute -top-4 left-2 pointer-events-none opacity-85 z-20">
        <RoseSVG className="w-16 h-16" animated />
      </div>
      <div className="absolute -top-6 right-2 pointer-events-none opacity-80 z-20">
        <LilySVG className="w-14 h-14" animated />
      </div>
      <div className="absolute bottom-6 left-0 pointer-events-none opacity-80 z-20">
        <LavenderSVG className="w-10 h-20" animated />
      </div>
      <div className="absolute bottom-4 right-2 pointer-events-none opacity-80 z-20">
        <GreenSprigSVG className="w-14 h-14" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-8 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-rose-300 font-medium">
          Chapter III • The Centerpiece
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-stone-100 mt-1 font-normal">
          A Letter For Your 8th of October 💌
        </h3>
      </motion.div>

      {/* Physical-Style Envelope */}
      {!isOpen ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-sm aspect-[4/3] bg-gradient-to-b from-[#f5ede0] to-[#e8dcc8] rounded-2xl p-6 shadow-2xl border border-amber-200/40 flex flex-col items-center justify-between z-10 overflow-hidden"
        >
          {/* Envelope Flap Lines */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-amber-100/70 clip-path-triangle border-b border-amber-300/40" />

          {/* Decorative stamp top right */}
          <div className="self-end px-2.5 py-2 rounded border border-dashed border-rose-400 bg-rose-50 text-[10px] text-rose-700 font-sans tracking-widest flex items-center gap-1 shadow-sm">
            <span>08·OCT</span>
            <span>🌻</span>
          </div>

          {/* Center Address text */}
          <div className="text-center my-auto z-10 space-y-1">
            <span className="text-xs uppercase tracking-widest text-amber-900/60 font-semibold block">
              Special Delivery
            </span>
            <p className="font-handwriting text-3xl sm:text-4xl text-stone-900 font-bold">
              To Musku 🌻
            </p>
          </div>

          {/* Wax Seal & Open Trigger */}
          <button
            onClick={handleOpen}
            className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-500 to-amber-600 hover:from-rose-600 hover:to-amber-700 text-white font-medium text-sm shadow-lg shadow-rose-950/20 active:scale-95 transition-all flex items-center justify-center gap-2 z-10"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span className="font-editorial tracking-wide text-base">
              {data.envelopePrompt}
            </span>
            <Sparkles className="w-4 h-4 text-amber-200" />
          </button>
        </motion.div>
      ) : (
        /* The Unfolded Handwritten Letter */
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full paper-card rounded-2xl p-6 sm:p-8 z-30 relative shadow-2xl border border-amber-200/50"
          >
            {/* Washi Tape Header */}
            <div className="washi-tape washi-tape-top" />

            {/* Letter Salutation */}
            <div className="mb-6 pt-2">
              <h4 className="font-handwriting text-3xl sm:text-4xl text-stone-900 font-bold">
                {data.greeting}
              </h4>
            </div>

            {/* Letter Paragraphs */}
            <div className="space-y-4 font-sans text-stone-800 text-sm sm:text-base leading-relaxed">
              {data.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className={`${
                    idx === 0
                      ? 'font-handwriting text-2xl sm:text-3xl text-rose-700 font-bold'
                      : idx === data.paragraphs.length - 2
                      ? 'font-editorial font-medium text-stone-900 text-base sm:text-lg pt-2'
                      : ''
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Handwritten Signature Sign-off */}
            <div className="mt-8 pt-6 border-t border-amber-300/40 text-right">
              <p className="font-handwriting text-2xl sm:text-3xl text-amber-900 font-bold leading-snug">
                {data.closing}
              </p>
            </div>

            {/* Button to Proceed to Final Moonlight Garden */}
            <div className="mt-8 pt-4">
              <button
                onClick={onFinishLetter}
                className="w-full py-4 px-6 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-200 font-medium text-sm flex items-center justify-center gap-2 shadow-xl border border-amber-300/30 active:scale-98 transition-all"
              >
                <span>Into the Moonlit Garden 🌙</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}
