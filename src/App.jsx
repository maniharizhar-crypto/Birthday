import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { muskuData } from './data/musku';
import SeedIntro from './components/SeedIntro';
import FlowerGarden from './components/FlowerGarden';
import PhotoCard from './components/PhotoCard';
import StorySection from './components/StorySection';
import PersonalitySection from './components/PersonalitySection';
import Letter from './components/Letter';
import MoonGarden from './components/MoonGarden';
import MusicToggle from './components/MusicToggle';
import { FloatingPetals, Fireflies } from './components/Flowers';
import { Balloons } from './components/Balloons';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [currentStage, setCurrentStage] = useState('hero'); // 'hero' | 'photos' | 'story' | 'personality' | 'letter' | 'final'
  const mainContainerRef = useRef(null);

  // Auto-scroll to top smoothly whenever a chapter changes
  useEffect(() => {
    if (introFinished && mainContainerRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStage, introFinished]);

  const handleReplayAll = () => {
    setCurrentStage('hero');
    setIntroFinished(false);
  };

  return (
    <div className="min-h-screen bg-[#070b12] text-[#f7f4ed] overflow-x-hidden relative font-sans selection:bg-amber-400/30 selection:text-amber-200">
      {/* Background radial atmosphere */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#141b2d] via-[#090d16] to-[#04060a] z-0" />

      {/* Floating flower petals */}
      <FloatingPetals count={10} />

      {/* Floating birthday balloons */}
      <Balloons count={5} />

      {/* Fireflies floating throughout night garden */}
      <Fireflies count={12} />

      {/* Music Audio Controller (starts at 30% volume till final message) */}
      <MusicToggle currentStage={introFinished ? currentStage : 'intro'} />

      {/* SEED INTRO (Fast multi-flower bloom) */}
      {!introFinished ? (
        <SeedIntro onComplete={() => setIntroFinished(true)} />
      ) : (
        <div ref={mainContainerRef} className="relative z-10 w-full min-h-screen flex flex-col items-center">
          {/* Main Story Content Stages */}
          <AnimatePresence mode="wait">
            {currentStage === 'hero' && (
              <motion.div
                key="stage-hero"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <FlowerGarden onBegin={() => setCurrentStage('photos')} />
              </motion.div>
            )}

            {currentStage === 'photos' && (
              <motion.div
                key="stage-photos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full py-6"
              >
                <div className="text-center mb-2 px-4">
                  <span className="text-xs uppercase tracking-widest text-amber-300/80 font-medium">
                    Scrapbook Memories
                  </span>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-stone-100 mt-1">
                    Special Moments of Musku
                  </h2>
                </div>
                <PhotoCard
                  photos={muskuData.photos}
                  onFinish={() => setCurrentStage('story')}
                />
              </motion.div>
            )}

            {currentStage === 'story' && (
              <motion.div
                key="stage-story"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full py-6"
              >
                <StorySection />
                <div className="w-full max-w-xs mx-auto px-4 mt-8">
                  <button
                    onClick={() => setCurrentStage('personality')}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-medium text-sm shadow-lg shadow-amber-400/20 active:scale-95 transition-all text-center"
                  >
                    The Sunflower Vibe 🌻 →
                  </button>
                </div>
              </motion.div>
            )}

            {currentStage === 'personality' && (
              <motion.div
                key="stage-personality"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full py-6"
              >
                <PersonalitySection />
                <div className="w-full max-w-xs mx-auto px-4 mt-8">
                  <button
                    onClick={() => setCurrentStage('letter')}
                    className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-medium text-sm shadow-lg shadow-amber-400/20 active:scale-95 transition-all text-center"
                  >
                    Open Your Birthday Letter 💌 →
                  </button>
                </div>
              </motion.div>
            )}

            {currentStage === 'letter' && (
              <motion.div
                key="stage-letter"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full py-6"
              >
                <Letter onFinishLetter={() => setCurrentStage('final')} />
              </motion.div>
            )}

            {currentStage === 'final' && (
              <motion.div
                key="stage-final"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full py-6"
              >
                <MoonGarden onReplay={handleReplayAll} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom subtle progress navigation breadcrumb */}
          {introFinished && (
            <div className="py-8 z-20 flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              {['hero', 'photos', 'story', 'personality', 'letter', 'final'].map(
                (stageKey) => (
                  <button
                    key={stageKey}
                    onClick={() => setCurrentStage(stageKey)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentStage === stageKey
                        ? 'w-6 bg-amber-400'
                        : 'w-1.5 bg-stone-700 hover:bg-stone-500'
                    }`}
                    aria-label={`Jump to ${stageKey}`}
                  />
                )
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
