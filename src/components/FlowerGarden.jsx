import React from 'react';
import { motion } from 'framer-motion';
import { muskuData } from '../data/musku';
import { SunflowerSVG, RoseSVG, LilySVG, LavenderSVG, GreenSprigSVG, Fireflies } from './Flowers';
import { Balloons } from './Balloons';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FlowerGarden({ onBegin }) {
  const data = muskuData.gardenHero;

  return (
    <section className="relative w-full min-h-[92vh] max-w-md mx-auto px-4 py-8 flex flex-col items-center justify-between select-none text-center">
      {/* Floating Birthday Balloons in background */}
      <Balloons count={4} />

      {/* Subtle Moon in the upper sky */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-16 h-16 rounded-full bg-slate-100/90 shadow-[0_0_50px_12px_rgba(255,255,255,0.22)] border border-white/50 relative mt-2"
      >
        <div className="absolute w-3 h-3 rounded-full bg-slate-300/30 top-3 left-3" />
        <div className="absolute w-4 h-4 rounded-full bg-slate-300/25 bottom-3 right-3" />
      </motion.div>

      {/* Main Salutation & Festive Invitation */}
      <div className="relative z-10 my-auto space-y-4 px-2">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 inline-block mb-3 shadow-sm">
            {data.badge}
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl text-amber-100 font-normal tracking-wide">
            {data.greeting}
          </h1>
          <p className="font-handwriting text-amber-200/90 text-xl sm:text-2xl mt-1">
            {data.subGreeting}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-editorial text-2xl sm:text-3xl text-amber-300 font-medium leading-snug drop-shadow-md"
        >
          {data.headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xs mx-auto font-sans"
        >
          {data.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pt-6"
        >
          <button
            onClick={onBegin}
            className="w-full max-w-xs py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-medium text-base shadow-[0_12px_30px_rgba(245,183,49,0.35)] active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto border border-amber-200/60"
          >
            <span className="font-editorial text-lg tracking-wide">{data.cta}</span>
            <ArrowRight className="w-5 h-5 text-stone-900" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Botanical Bottom Layer */}
      <div className="relative w-full h-24 flex items-end justify-between px-2 pointer-events-none mt-auto">
        <div className="opacity-90">
          <LavenderSVG className="w-8 h-20" animated />
        </div>
        <div className="opacity-80">
          <RoseSVG className="w-12 h-12" animated />
        </div>
        <div className="opacity-95">
          <SunflowerSVG className="w-16 h-16" animated />
        </div>
        <div className="opacity-85">
          <LilySVG className="w-12 h-12" animated />
        </div>
        <div className="opacity-90">
          <LavenderSVG className="w-8 h-20" animated />
        </div>
      </div>
    </section>
  );
}
