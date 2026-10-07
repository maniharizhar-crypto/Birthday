import React from 'react';
import { motion } from 'framer-motion';
import { muskuData } from '../data/musku';
import { SunflowerSVG, RoseSVG, LilySVG, LavenderSVG, GreenSprigSVG, Fireflies } from './Flowers';
import { Balloons } from './Balloons';
import { RotateCcw, Heart, Sparkles, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MoonGarden({ onReplay }) {
  const data = muskuData.finalMoonlight;

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.5 },
        colors: ['#f5b731', '#c4b5fd', '#f4a5ae', '#fdfbf7'],
      });
    } catch (e) {}
  };

  return (
    <section className="relative w-full min-h-[90vh] max-w-md mx-auto px-4 py-16 flex flex-col items-center justify-between select-none overflow-hidden text-center">
      {/* Floating Birthday Balloons in moonlit sky */}
      <Balloons count={4} />

      {/* Moon in Sky */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-[#fafafa] via-[#e2e8f0] to-[#cbd5e1] shadow-[0_0_80px_20px_rgba(255,255,255,0.2)] flex items-center justify-center border border-white/60">
          {/* Subtle Moon surface craters */}
          <div className="absolute w-5 h-5 rounded-full bg-slate-300/40 top-5 left-6 blur-[1px]" />
          <div className="absolute w-7 h-7 rounded-full bg-slate-300/30 bottom-6 right-6 blur-[1px]" />
          <div className="absolute w-3 h-3 rounded-full bg-slate-300/35 top-12 right-7 blur-[0.5px]" />
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-200/80 font-editorial tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Happy 20th Birthday 🎈</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </div>
      </motion.div>

      {/* Poetic Reflections Pacing */}
      <div className="relative z-10 my-8 space-y-5 max-w-xs">
        {data.reflections.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 0.6 + idx * 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`text-base sm:text-lg leading-relaxed ${
              idx === data.reflections.length - 1
                ? 'font-editorial text-amber-100 font-medium text-lg sm:text-xl'
                : 'font-editorial text-stone-300 italic'
            }`}
          >
            “{line}”
          </motion.p>
        ))}
      </div>

      {/* Birthday Climax Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1.6,
          delay: 4.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        onAnimationComplete={triggerCelebration}
        className="relative z-10 space-y-3 mb-10"
      >
        <h2 className="font-editorial text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 font-bold tracking-wide drop-shadow-lg">
          {data.mainWish}
        </h2>
        <p className="font-handwriting text-xl sm:text-2xl text-stone-300">
          {data.subtext}
        </p>

        {/* Replay Button */}
        <div className="pt-6">
          <button
            onClick={onReplay}
            className="py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-stone-200 hover:text-amber-200 border border-white/15 text-sm font-medium tracking-wide flex items-center justify-center gap-2 mx-auto active:scale-95 transition-all shadow-lg shadow-black/40"
          >
            <RotateCcw className="w-4 h-4 text-amber-300" />
            <span>{data.replayButton}</span>
          </button>
        </div>
      </motion.div>

      {/* Moonlit Botanical Floor (Sunflower, Roses, Lilies, Lavender) */}
      <div className="relative w-full h-28 pointer-events-none mt-auto flex items-end justify-between px-2 overflow-visible">
        {/* Lavender clusters along bottom */}
        <div className="flex items-end -space-x-3 opacity-90">
          <LavenderSVG className="w-9 h-20" animated />
          <LavenderSVG className="w-10 h-24" animated />
        </div>

        {/* Rose & Lily center-left */}
        <div className="flex items-end -space-x-2 opacity-85">
          <RoseSVG className="w-14 h-14" animated />
          <LilySVG className="w-14 h-14" animated />
        </div>

        {/* Giant Sunflower in the background */}
        <div className="opacity-95">
          <SunflowerSVG className="w-20 h-20" animated />
        </div>

        {/* Right side lavender & foliage */}
        <div className="flex items-end -space-x-3 opacity-90">
          <LavenderSVG className="w-9 h-22" animated />
          <GreenSprigSVG className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
}
