import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicToggle({ currentStage }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio and set volume to exactly 0.30 (30%)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3; // 30% volume as requested

    // Attempt to start background music on any user touch/click on screen
    const attemptStart = () => {
      if (audio.paused && currentStage !== 'final') {
        audio.volume = 0.3;
        audio
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {});
      }
    };

    // Try auto-play immediately if permitted
    audio.play().then(() => setIsPlaying(true)).catch(() => {});

    // Listen on window for user gestures to unlock audio
    window.addEventListener('click', attemptStart);
    window.addEventListener('touchstart', attemptStart);
    window.addEventListener('pointerdown', attemptStart);

    return () => {
      window.removeEventListener('click', attemptStart);
      window.removeEventListener('touchstart', attemptStart);
      window.removeEventListener('pointerdown', attemptStart);
    };
  }, []);

  // Handle stage transitions
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentStage === 'final') {
      // User reached the last message of the website -> gently fade out
      let currentVol = audio.volume;
      const fadeInterval = setInterval(() => {
        if (currentVol > 0.05) {
          currentVol -= 0.05;
          audio.volume = Math.max(0, currentVol);
        } else {
          audio.pause();
          setIsPlaying(false);
          clearInterval(fadeInterval);
        }
      }, 250);

      return () => clearInterval(fadeInterval);
    } else {
      // Playing during all prior stages at 30% volume
      audio.volume = 0.3;
      if (audio.paused && isPlaying) {
        audio.play().catch(() => {});
      }
    }
  }, [currentStage, isPlaying]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.3; // Ensure 30%
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Playback error:', err);
        });
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <audio
        ref={audioRef}
        src="/audio/lovestory.mp3"
        loop
        preload="auto"
      />
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border backdrop-blur-md text-xs font-medium tracking-wide transition-all duration-300 shadow-lg ${
          isPlaying
            ? 'bg-amber-400/20 text-amber-200 border-amber-300/40 shadow-amber-900/30 ring-2 ring-amber-400/20'
            : 'bg-stone-900/80 text-stone-300 border-white/10 hover:border-amber-300/30'
        }`}
      >
        {isPlaying ? (
          <>
            <Music className="w-4 h-4 text-amber-300 animate-pulse" />
            <span className="font-sans">Music On (30%)</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-stone-400" />
            <span>Turn on music (30%)</span>
          </>
        )}
      </button>
    </div>
  );
}
