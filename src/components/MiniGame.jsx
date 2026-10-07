import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { muskuData } from '../data/musku';
import { Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MiniGame({ onCompleteAll }) {
  const games = muskuData.miniGames;
  const [activeGameIdx, setActiveGameIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [revealedResponses, setRevealedResponses] = useState({});

  const currentGame = games[activeGameIdx];
  const isSelected = selectedAnswers[currentGame.id] !== undefined;
  const isFinished = activeGameIdx === games.length - 1 && isSelected;

  const handleSelect = (optId) => {
    if (selectedAnswers[currentGame.id] !== undefined) return;

    setSelectedAnswers((prev) => ({ ...prev, [currentGame.id]: optId }));

    // Celebratory gentle confetti for watch or impact reflection
    if (currentGame.id === 'the-watch' && optId === 'metal') {
      try {
        confetti({
          particleCount: 25,
          spread: 45,
          origin: { y: 0.7 },
          colors: ['#f5b731', '#c4b5fd', '#f4a5ae'],
        });
      } catch (e) {}
    }

    if (currentGame.id === 'meaningful-impact') {
      try {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#f4a5ae', '#de6b7c', '#f5b731'],
        });
      } catch (e) {}
    }

    setRevealedResponses((prev) => ({ ...prev, [currentGame.id]: true }));
  };

  const handleNextGame = () => {
    if (activeGameIdx < games.length - 1) {
      setActiveGameIdx((prev) => prev + 1);
    } else if (onCompleteAll) {
      onCompleteAll();
    }
  };

  return (
    <section className="relative w-full max-w-md mx-auto px-4 py-8 flex flex-col items-center select-none">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-6"
      >
        <span className="text-xs uppercase tracking-widest text-amber-300/80 font-medium">
          Chapter II • Observing The Details
        </span>
        <h3 className="font-editorial text-2xl sm:text-3xl text-stone-100 mt-1 font-normal">
          Thoughts & Observations 🌻
        </h3>
      </motion.div>

      {/* Game Step Indicator */}
      <div className="flex items-center gap-2 mb-6">
        {games.map((g, idx) => (
          <button
            key={g.id}
            onClick={() => {
              if (idx <= activeGameIdx || selectedAnswers[games[idx - 1]?.id]) {
                setActiveGameIdx(idx);
              }
            }}
            className={`transition-all duration-300 rounded-full h-2 ${
              idx === activeGameIdx
                ? 'w-8 bg-amber-400 shadow-[0_0_8px_rgba(245,183,49,0.7)]'
                : selectedAnswers[g.id] !== undefined
                ? 'w-4 bg-emerald-500/80'
                : 'w-2 bg-stone-700'
            }`}
            aria-label={`Jump to reflection ${idx + 1}`}
          />
        ))}
        <span className="ml-2 text-xs font-handwriting text-stone-300">
          Reflection {activeGameIdx + 1} of {games.length}
        </span>
      </div>

      {/* Main Card */}
      <div className="w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGame.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="paper-card rounded-2xl p-5 sm:p-6 shadow-xl"
          >
            {/* Washi Tape */}
            <div className="washi-tape washi-tape-top" />

            <div className="text-center mb-5">
              <span className="text-[11px] uppercase tracking-wider text-amber-900 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300/60 inline-block mb-2">
                {currentGame.title}
              </span>

              {currentGame.lead && (
                <p className="font-editorial text-stone-600 text-sm italic mb-1">
                  {currentGame.lead}
                </p>
              )}

              <h4 className="font-editorial text-stone-900 text-lg sm:text-xl font-normal leading-snug">
                {currentGame.question}
              </h4>
            </div>

            {/* Interactive Options */}
            <div className="space-y-2.5">
              {currentGame.options.map((opt) => {
                const isThisSelected = selectedAnswers[currentGame.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(opt.id)}
                    disabled={isSelected}
                    className={`w-full py-3.5 px-4 rounded-xl border text-left flex items-center justify-between transition-all duration-200 min-h-[48px] ${
                      isThisSelected
                        ? 'bg-amber-100 border-amber-500 text-stone-900 shadow-sm font-medium'
                        : isSelected
                        ? 'opacity-50 bg-stone-100/50 border-stone-200 text-stone-500 cursor-not-allowed'
                        : 'bg-white/90 hover:bg-amber-50 border-stone-200 text-stone-800 active:scale-[0.99]'
                    }`}
                  >
                    <span className="text-sm sm:text-base font-sans">{opt.label}</span>
                    {isThisSelected && (
                      <span className="text-amber-800 font-bold text-xs uppercase tracking-wider">
                        Selected
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Response Reveal */}
            <AnimatePresence>
              {revealedResponses[currentGame.id] && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-center space-y-1 overflow-hidden"
                >
                  {currentGame.customResponses ? (
                    <>
                      <p className="font-editorial text-stone-800 text-sm">
                        {
                          currentGame.customResponses[selectedAnswers[currentGame.id]]
                            ?.line1
                        }
                      </p>
                      <p className="font-handwriting text-amber-950 text-xl font-bold">
                        {
                          currentGame.customResponses[selectedAnswers[currentGame.id]]
                            ?.line2
                        }
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-editorial text-stone-800 text-sm">
                        {currentGame.response.line1}
                      </p>
                      <p className="font-handwriting text-amber-950 text-xl font-bold">
                        {currentGame.response.line2}
                      </p>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next Navigation */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full mt-6"
        >
          <button
            onClick={handleNextGame}
            className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-98 transition-all"
          >
            <span>
              {activeGameIdx === games.length - 1
                ? 'Proceed to Your Birthday Letter 💌'
                : 'Next Reflection →'}
            </span>
          </button>
        </motion.div>
      )}
    </section>
  );
}
