import React from 'react';

/**
 * Botanical SVG Flowers:
 * - Sunflower 🌻
 * - Pink Rose 🌷
 * - White Lily 🤍
 * - Lavender 💜
 * - Delicate Foliage 🌿
 */

export const SunflowerSVG = ({ className = "w-16 h-16", animated = false }) => (
  <svg
    viewBox="0 0 120 120"
    className={`${className} ${animated ? 'animate-sway' : ''} drop-shadow-md`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Petals */}
    <g fill="#f5b731">
      <ellipse cx="60" cy="22" rx="7" ry="18" />
      <ellipse cx="60" cy="98" rx="7" ry="18" />
      <ellipse cx="22" cy="60" rx="18" ry="7" />
      <ellipse cx="98" cy="60" rx="18" ry="7" />
      <ellipse cx="33" cy="33" rx="16" ry="7" transform="rotate(45 33 33)" />
      <ellipse cx="87" cy="87" rx="16" ry="7" transform="rotate(45 87 87)" />
      <ellipse cx="33" cy="87" rx="16" ry="7" transform="rotate(-45 33 87)" />
      <ellipse cx="87" cy="33" rx="16" ry="7" transform="rotate(-45 87 33)" />
    </g>
    {/* Inner Petal Layer (Golden Orange) */}
    <g fill="#fab82c" opacity="0.95">
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(22.5 60 60)" />
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(67.5 60 60)" />
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(112.5 60 60)" />
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(157.5 60 60)" />
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(202.5 60 60)" />
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(247.5 60 60)" />
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(292.5 60 60)" />
      <ellipse cx="60" cy="30" rx="5.5" ry="14" transform="rotate(337.5 60 60)" />
    </g>
    {/* Center Core with Seed Texture */}
    <circle cx="60" cy="60" r="22" fill="#3a1e08" />
    <circle cx="60" cy="60" r="17" fill="#4d280b" />
    <circle cx="60" cy="60" r="11" fill="#2d1504" />
    {/* Highlight Flecks */}
    <circle cx="56" cy="54" r="1.5" fill="#f59e0b" opacity="0.7" />
    <circle cx="64" cy="55" r="1.2" fill="#f59e0b" opacity="0.8" />
    <circle cx="58" cy="65" r="1.4" fill="#f59e0b" opacity="0.6" />
    <circle cx="65" cy="64" r="1" fill="#f59e0b" opacity="0.75" />
    <circle cx="53" cy="60" r="1" fill="#f59e0b" opacity="0.6" />
  </svg>
);

export const RoseSVG = ({ className = "w-14 h-14", animated = false }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} ${animated ? 'animate-sway' : ''} drop-shadow-md`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Calyx & tiny leaves behind */}
    <path d="M40 70 C35 80 20 85 15 80 C20 72 30 70 40 70 Z" fill="#386641" opacity="0.8" />
    <path d="M60 70 C65 80 80 85 85 80 C80 72 70 70 60 70 Z" fill="#386641" opacity="0.8" />
    {/* Outer Petals */}
    <path d="M22 45 C15 30 35 15 50 25 C65 15 85 30 78 45 C85 62 68 80 50 82 C32 80 15 62 22 45 Z" fill="#de6b7c" opacity="0.85" />
    <path d="M28 48 C22 36 38 25 50 32 C62 25 78 36 72 48 C77 62 62 74 50 75 C38 74 23 62 28 48 Z" fill="#f4a5ae" />
    {/* Inner Spiral Petals */}
    <path d="M36 45 C32 38 42 32 50 36 C58 32 68 38 64 45 C67 55 57 63 50 64 C43 63 33 55 36 45 Z" fill="#fb7185" />
    <path d="M42 45 C40 40 46 37 50 39 C54 37 60 40 58 45 C60 51 54 55 50 55 C46 55 40 51 42 45 Z" fill="#e11d48" />
    <path d="M46 46 C45 43 48 41 50 42 C52 41 55 43 54 46 C55 49 52 51 50 51 C48 51 45 49 46 46 Z" fill="#be123c" />
  </svg>
);

export const LilySVG = ({ className = "w-14 h-14", animated = false }) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} ${animated ? 'animate-sway' : ''} drop-shadow-md`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Lily Sepals/Leaves */}
    <path d="M50 50 Q30 75 20 85 Q35 75 50 50" stroke="#386641" strokeWidth="2.5" fill="#2d5234" opacity="0.6"/>
    {/* Back Petals */}
    <path d="M50 50 Q48 10 50 5 Q52 10 50 50" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M50 50 Q20 30 12 25 Q25 45 50 50" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M50 50 Q80 30 88 25 Q75 45 50 50" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
    {/* Front Petals */}
    <path d="M50 50 Q30 65 24 75 Q40 68 50 50" fill="#fdfbf7" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M50 50 Q70 65 76 75 Q60 68 50 50" fill="#fdfbf7" stroke="#e2e8f0" strokeWidth="1" />
    <path d="M50 50 Q50 78 50 86 Q50 78 50 50" fill="#fdfbf7" stroke="#e2e8f0" strokeWidth="1" />
    {/* Center Glow & Stamens */}
    <circle cx="50" cy="50" r="5" fill="#fef08a" opacity="0.8" />
    <path d="M50 50 Q46 38 44 32" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" />
    <ellipse cx="44" cy="31" rx="2" ry="1.2" fill="#ca8a04" />
    <path d="M50 50 Q54 38 56 32" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" />
    <ellipse cx="56" cy="31" rx="2" ry="1.2" fill="#ca8a04" />
    <path d="M50 50 Q50 36 50 30" stroke="#eab308" strokeWidth="1.2" strokeLinecap="round" />
    <ellipse cx="50" cy="29" rx="2" ry="1.2" fill="#ca8a04" />
  </svg>
);

export const LavenderSVG = ({ className = "w-10 h-20", animated = false }) => (
  <svg
    viewBox="0 0 60 120"
    className={`${className} ${animated ? 'animate-sway' : ''} drop-shadow-md`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Central Stem */}
    <path d="M30 115 Q30 70 30 20" stroke="#386641" strokeWidth="2" strokeLinecap="round" />
    {/* Flower Buds Stack */}
    <g fill="#c4b5fd">
      {/* Top Tip */}
      <circle cx="30" cy="18" r="3.5" fill="#a78bfa" />
      <circle cx="30" cy="25" r="4" fill="#a78bfa" />
      {/* Pairs */}
      <ellipse cx="26" cy="33" rx="4" ry="3" fill="#8b5cf6" />
      <ellipse cx="34" cy="33" rx="4" ry="3" fill="#8b5cf6" />
      <ellipse cx="25" cy="42" rx="4.5" ry="3.5" fill="#a78bfa" />
      <ellipse cx="35" cy="42" rx="4.5" ry="3.5" fill="#c4b5fd" />
      <ellipse cx="24" cy="52" rx="4.5" ry="3.5" fill="#8b5cf6" />
      <ellipse cx="36" cy="52" rx="4.5" ry="3.5" fill="#7c3aed" />
      <ellipse cx="25" cy="62" rx="4.5" ry="3.5" fill="#a78bfa" />
      <ellipse cx="35" cy="62" rx="4.5" ry="3.5" fill="#a78bfa" />
      <ellipse cx="26" cy="72" rx="4" ry="3" fill="#c4b5fd" />
      <ellipse cx="34" cy="72" rx="4" ry="3" fill="#8b5cf6" />
      <ellipse cx="27" cy="82" rx="3.5" ry="2.5" fill="#a78bfa" />
      <ellipse cx="33" cy="82" rx="3.5" ry="2.5" fill="#a78bfa" />
    </g>
    {/* Slender Leaves */}
    <path d="M30 85 Q20 80 16 88" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 92 Q40 87 44 95" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M30 102 Q18 97 14 104" stroke="#4a7c59" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const GreenSprigSVG = ({ className = "w-12 h-12" }) => (
  <svg
    viewBox="0 0 80 80"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 70 Q40 45 70 15" stroke="#386641" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="32" cy="48" rx="8" ry="4" transform="rotate(-30 32 48)" fill="#4a7c59" />
    <ellipse cx="44" cy="40" rx="8" ry="4" transform="rotate(35 44 40)" fill="#52796f" />
    <ellipse cx="56" cy="28" rx="7" ry="3.5" transform="rotate(-25 56 28)" fill="#4a7c59" />
    <ellipse cx="64" cy="22" rx="6" ry="3" transform="rotate(40 64 22)" fill="#52796f" />
  </svg>
);

export const FloatingPetals = ({ count = 12 }) => {
  const petals = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 19) % 96 + 2}%`,
      delay: `${(i * 1.7) % 11}s`,
      duration: `${14 + ((i * 3.1) % 9)}s`,
      size: 10 + (i % 4) * 3,
      type: i % 3, // 0: sunflower, 1: rose, 2: lavender
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: p.left,
            top: '-30px',
            animation: `petalFall ${p.duration} linear infinite`,
            animationDelay: p.delay,
            width: `${p.size}px`,
            height: `${p.size * 1.5}px`,
          }}
        >
          {p.type === 0 ? (
            <div
              className="w-full h-full rounded-full opacity-70 transform rotate-12"
              style={{
                backgroundColor: '#f5b731',
                boxShadow: '0 0 6px rgba(245, 183, 49, 0.4)',
              }}
            />
          ) : p.type === 1 ? (
            <div
              className="w-full h-full rounded-full opacity-70 transform -rotate-12"
              style={{
                backgroundColor: '#f4a5ae',
                boxShadow: '0 0 6px rgba(244, 165, 174, 0.4)',
              }}
            />
          ) : (
            <div
              className="w-full h-full rounded-full opacity-65 transform rotate-45"
              style={{
                backgroundColor: '#c4b5fd',
                boxShadow: '0 0 6px rgba(196, 181, 253, 0.3)',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export const Fireflies = ({ count = 16 }) => {
  const flies = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${(i * 17) % 92 + 4}%`,
      top: `${(i * 23) % 85 + 5}%`,
      delay: `${(i * 0.9) % 5}s`,
      duration: `${4.5 + (i % 4)}s`,
      size: 3 + (i % 3),
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {flies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full animate-firefly"
          style={{
            left: f.left,
            top: f.top,
            width: `${f.size}px`,
            height: `${f.size}px`,
            backgroundColor: '#fef08a',
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px rgba(254, 240, 138, 0.75)`,
            animationDelay: f.delay,
            animationDuration: f.duration,
          }}
        />
      ))}
    </div>
  );
};
