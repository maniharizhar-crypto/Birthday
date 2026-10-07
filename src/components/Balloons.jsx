import React from 'react';
import { motion } from 'framer-motion';

export const Balloons = ({ count = 6 }) => {
  const balloonList = [
    { color: '#f5b731', highlight: '#fef08a', left: '8%', delay: 0, duration: 9 },
    { color: '#f4a5ae', highlight: '#ffe4e6', left: '22%', delay: 2, duration: 11 },
    { color: '#c4b5fd', highlight: '#ede9fe', left: '78%', delay: 1, duration: 10 },
    { color: '#fb7185', highlight: '#fecdd3', left: '88%', delay: 3, duration: 12 },
    { color: '#fcd34d', highlight: '#fef9c3', left: '48%', delay: 4, duration: 9.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-15">
      {balloonList.slice(0, count).map((b, idx) => (
        <motion.div
          key={idx}
          initial={{ y: '110vh', x: 0 }}
          animate={{
            y: '-120vh',
            x: [0, (idx % 2 === 0 ? 15 : -15), 0],
          }}
          transition={{
            y: {
              duration: b.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: b.delay,
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="absolute"
          style={{ left: b.left }}
        >
          {/* Balloon Body */}
          <div className="relative">
            <svg width="44" height="54" viewBox="0 0 44 54" fill="none">
              <ellipse
                cx="22"
                cy="22"
                rx="20"
                ry="22"
                fill={b.color}
                opacity="0.9"
              />
              {/* Highlight Shimmer */}
              <ellipse
                cx="16"
                cy="14"
                rx="6"
                ry="9"
                fill={b.highlight}
                opacity="0.6"
                transform="rotate(-20 16 14)"
              />
              {/* Knot */}
              <polygon points="19,43 25,43 22,47" fill={b.color} />
              {/* Swaying String */}
              <path
                d="M 22 47 Q 26 58 20 68 Q 24 78 22 88"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
