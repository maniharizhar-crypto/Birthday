import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { muskuData } from '../data/musku';
import { Fireflies, SunflowerSVG, LavenderSVG, LilySVG, RoseSVG } from './Flowers';
import { Balloons } from './Balloons';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SeedIntro({ onComplete }) {
  // Faster, dynamic blooming sequence:
  // Phase 0: Ground & Seeds appear (0 - 1.2s)
  // Phase 1: Sprouts shoot upward rapidly (1.2s - 2.8s)
  // Phase 2: Stems branch and buds form (2.8s - 4.2s)
  // Phase 3: Sunflower, Lavender, Lily & Rose bloom in full harmony! (4.2s - 6s)
  // Phase 4: Balloons float, "HAPPY BIRTHDAY MUSKU 🎈", Ready to enter (6s+)

  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2600);
    const t3 = setTimeout(() => {
      setPhase(3);
      try {
        confetti({
          particleCount: 35,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#f5b731', '#c4b5fd', '#f4a5ae', '#fef08a'],
        });
      } catch (e) {}
    }, 4200);
    const t4 = setTimeout(() => setPhase(4), 5800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  const handleSkip = () => {
    setPhase(4);
  };

  const handleEnter = () => {
    try {
      localStorage.setItem('introSeen', 'true');
    } catch (e) {}
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#070b12] text-[#f7f4ed] overflow-hidden select-none px-4 py-6">
      {/* Background atmosphere */}
      <div className="absolute inset-0 opacity-50 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a233a] via-[#090d16] to-[#04060a]" />

      {/* Floating Birthday Balloons */}
      <Balloons count={phase >= 2 ? 5 : 2} />

      {/* Fireflies */}
      <Fireflies count={phase >= 3 ? 16 : 6} />

      {/* Skip button */}
      <div className="w-full max-w-md flex justify-end z-20">
        <button
          onClick={handleSkip}
          className="text-xs tracking-wider uppercase text-stone-400 hover:text-amber-200 transition-colors py-1.5 px-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        >
          Skip to Birthday →
        </button>
      </div>

      {/* Dynamic Birthday Text Progression */}
      <div className="z-20 text-center max-w-sm mt-2 min-h-[95px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {phase < 3 ? (
            <motion.div
              key="blooming-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <p className="font-editorial text-lg md:text-xl text-amber-200/90 italic">
                Watch the garden bloom for your special day...
              </p>
              <p className="text-xs text-stone-400 font-sans tracking-wide">
                Sunflower • Lavender • Lilies • Roses
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="birthday-burst"
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-1.5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-widest uppercase">
                <span>🎈 08 October 2005 🎂</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 font-bold tracking-wide drop-shadow-md">
                HAPPY BIRTHDAY MUSKU! 🎈
              </h2>
              <p className="font-handwriting text-2xl text-amber-200 font-bold">
                A whole garden in bloom, just for you 🌻💜🤍
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SVG Canvas with Multiple Blooming Flowers */}
      <div className="relative w-full max-w-sm h-[380px] flex items-center justify-center z-10">
        <svg
          viewBox="0 0 340 380"
          className="w-full h-full overflow-visible drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Ground Mound / Soil */}
          <path
            d="M 20 360 Q 170 335 320 360 Q 340 365 345 375 L 0 375 Q 5 365 20 360 Z"
            fill="#121824"
            stroke="#1f293d"
            strokeWidth="1.5"
          />

          {/* Stems */}
          {phase >= 1 && (
            <g>
              {/* Center Sunflower Stem */}
              <motion.path
                d="M 170 350 Q 168 250 170 120"
                stroke="#386641"
                strokeWidth="5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />

              {/* Left Lavender Stem */}
              <motion.path
                d="M 140 350 Q 110 260 85 160"
                stroke="#4a7c59"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
              />

              {/* Right Lily Stem */}
              <motion.path
                d="M 200 350 Q 230 260 255 165"
                stroke="#4a7c59"
                strokeWidth="3.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
              />

              {/* Front Rose Stem */}
              <motion.path
                d="M 175 350 Q 195 290 205 230"
                stroke="#2d5234"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
              />
            </g>
          )}

          {/* Green Leaves on Stems */}
          {phase >= 2 && (
            <g>
              {/* Center leaves */}
              <motion.path
                d="M 169 260 C 145 248 115 255 110 270 C 125 285 155 275 169 262 Z"
                fill="#4a7c59"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: '169px 260px' }}
              />
              <motion.path
                d="M 171 200 C 190 188 220 195 228 210 C 215 225 185 215 171 202 Z"
                fill="#52796f"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ transformOrigin: '171px 200px' }}
              />
            </g>
          )}

          {/* Phase 3 & 4: THE MULTI-FLOWER BLOOM (Sunflower, Lavender, Lily, Rose) */}
          {phase >= 3 && (
            <g>
              {/* 1. LEFT: Blooming Lavender 💜 */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: '85px 160px' }}
              >
                {/* Lavender florets stack */}
                <g fill="#c4b5fd">
                  <circle cx="85" cy="115" r="4.5" fill="#a78bfa" />
                  <circle cx="85" cy="125" r="5" fill="#a78bfa" />
                  <ellipse cx="79" cy="135" rx="5.5" ry="4" fill="#8b5cf6" />
                  <ellipse cx="91" cy="135" rx="5.5" ry="4" fill="#8b5cf6" />
                  <ellipse cx="78" cy="146" rx="6" ry="4.5" fill="#a78bfa" />
                  <ellipse cx="92" cy="146" rx="6" ry="4.5" fill="#c4b5fd" />
                  <ellipse cx="77" cy="158" rx="6" ry="4.5" fill="#7c3aed" />
                  <ellipse cx="93" cy="158" rx="6" ry="4.5" fill="#8b5cf6" />
                  <ellipse cx="79" cy="170" rx="5.5" ry="4" fill="#a78bfa" />
                  <ellipse cx="91" cy="170" rx="5.5" ry="4" fill="#a78bfa" />
                </g>
                <text x="85" y="195" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontFamily="'Caveat', cursive">
                  Lavender
                </text>
              </motion.g>

              {/* 2. RIGHT: Blooming White Lily 🤍 */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: '255px 165px' }}
              >
                {/* Lily Petals */}
                <g>
                  <path d="M 255 165 Q 230 110 235 90 Q 255 130 255 165" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M 255 165 Q 280 110 275 90 Q 255 130 255 165" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M 255 165 Q 215 155 200 150 Q 235 170 255 165" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M 255 165 Q 295 155 310 150 Q 275 170 255 165" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M 255 165 Q 235 195 220 205 Q 248 185 255 165" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                  <path d="M 255 165 Q 275 195 290 205 Q 262 185 255 165" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
                  {/* Lily golden stamens */}
                  <circle cx="255" cy="165" r="4.5" fill="#fef08a" />
                  <path d="M 255 165 Q 248 140 245 130" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" />
                  <ellipse cx="245" cy="129" rx="2" ry="1.2" fill="#ca8a04" />
                  <path d="M 255 165 Q 262 140 265 130" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" />
                  <ellipse cx="265" cy="129" rx="2" ry="1.2" fill="#ca8a04" />
                </g>
                <text x="255" y="225" textAnchor="middle" fill="#fdfbf7" fontSize="11" fontFamily="'Caveat', cursive">
                  Lily
                </text>
              </motion.g>

              {/* 3. LOWER-CENTER: Pink Rose 🌷 */}
              <motion.g
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: '205px 230px' }}
              >
                <path d="M 185 230 C 180 215 195 205 205 212 C 215 205 230 215 225 230 C 230 242 218 252 205 253 C 192 252 180 242 185 230 Z" fill="#f4a5ae" />
                <path d="M 192 230 C 188 222 198 215 205 220 C 212 215 222 222 218 230 C 220 238 212 244 205 245 C 198 244 190 238 192 230 Z" fill="#fb7185" />
                <circle cx="205" cy="230" r="5" fill="#e11d48" />
                <text x="205" y="270" textAnchor="middle" fill="#f4a5ae" fontSize="11" fontFamily="'Caveat', cursive">
                  Rose
                </text>
              </motion.g>

              {/* 4. CENTER: RADIANT SUNFLOWER 🌻 */}
              <motion.g
                initial={{ scale: 0, rotate: -20, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: '170px 115px' }}
                className="drop-shadow-[0_0_30px_rgba(245,183,49,0.5)]"
              >
                {/* Golden Glow Halo */}
                <circle cx="170" cy="115" r="52" fill="#f5b731" opacity="0.25" />

                {/* Outer Petals Ring */}
                <g fill="#f5b731">
                  <ellipse cx="170" cy="72" rx="9" ry="24" />
                  <ellipse cx="170" cy="158" rx="9" ry="24" />
                  <ellipse cx="127" cy="115" rx="24" ry="9" />
                  <ellipse cx="213" cy="115" rx="24" ry="9" />
                  <ellipse cx="140" cy="85" rx="21" ry="9" transform="rotate(45 140 85)" />
                  <ellipse cx="200" cy="145" rx="21" ry="9" transform="rotate(45 200 145)" />
                  <ellipse cx="140" cy="145" rx="21" ry="9" transform="rotate(-45 140 145)" />
                  <ellipse cx="200" cy="85" rx="21" ry="9" transform="rotate(-45 200 85)" />
                </g>

                {/* Inner Petals Ring */}
                <g fill="#fab82c" opacity="0.95">
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(22.5 170 115)" />
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(67.5 170 115)" />
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(112.5 170 115)" />
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(157.5 170 115)" />
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(202.5 170 115)" />
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(247.5 170 115)" />
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(292.5 170 115)" />
                  <ellipse cx="170" cy="80" rx="7.5" ry="19" transform="rotate(337.5 170 115)" />
                </g>

                {/* Core */}
                <circle cx="170" cy="115" r="24" fill="#381e09" />
                <circle cx="170" cy="115" r="18" fill="#4d280b" />
                <circle cx="170" cy="115" r="12" fill="#291303" />

                {/* Seeds flecks */}
                <circle cx="165" cy="110" r="1.5" fill="#f59e0b" opacity="0.8" />
                <circle cx="175" cy="111" r="1.3" fill="#f59e0b" opacity="0.8" />
                <circle cx="168" cy="120" r="1.5" fill="#f59e0b" opacity="0.75" />
                <circle cx="176" cy="119" r="1.3" fill="#f59e0b" opacity="0.85" />

                <text x="170" y="40" textAnchor="middle" fill="#f5b731" fontSize="12" fontWeight="bold" fontFamily="'Playfair Display', serif">
                  Sunflower
                </text>
              </motion.g>
            </g>
          )}
        </svg>
      </div>

      {/* Enter Button */}
      <div className="z-20 w-full max-w-xs flex flex-col items-center mb-4">
        <AnimatePresence>
          {phase >= 3 && (
            <motion.button
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              onClick={handleEnter}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-stone-900 font-medium text-base shadow-[0_10px_25px_-5px_rgba(245,183,49,0.5)] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 border border-amber-200/50"
            >
              <span className="font-editorial text-lg tracking-wide">
                Open Birthday Celebration 🎈
              </span>
              <span className="text-xl">✨</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
