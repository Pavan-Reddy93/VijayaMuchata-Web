import { motion } from "framer-motion";

const ringVariants = {
  animate: {
    rotate: 360,
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
};
const ringVariantsReverse = {
  animate: {
    rotate: -360,
    transition: { duration: 25, repeat: Infinity, ease: "linear" },
  },
};

function GlowingNode({ x, y, delay = 0 }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={3}
      fill="#a78bfa"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 0.9, 0.3],
        scale: [1, 1.4, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function ConnectionLine({ x1, y1, x2, y2, delay = 0 }) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="url(#lineGrad)"
      strokeWidth={0.5}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.08, 0.25, 0.08] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

export default function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/5 via-transparent to-rose-600/5 blur-[80px]" />

      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[400px] drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 0 40px rgba(139,92,246,0.08))" }}
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.15} />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity={0} />
          </radialGradient>
          <radialGradient id="coreGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity={0.1} />
            <stop offset="100%" stopColor="#f472b6" stopOpacity={0} />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.3} />
            <stop offset="50%" stopColor="#f472b6" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="docGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity={0.12} />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity={0.06} />
          </linearGradient>
        </defs>

        {/* Core glow circles */}
        <circle cx="200" cy="200" r="160" fill="url(#coreGlow)" />
        <circle cx="200" cy="200" r="120" fill="url(#coreGlow2)" />

        {/* Orbiting ring 1 */}
        <motion.g variants={ringVariants} animate="animate" style={{ originX: 200, originY: 200 }}>
          <ellipse cx="200" cy="200" rx="140" ry="40" fill="none" stroke="#a78bfa" strokeWidth={0.5} opacity={0.15} transform="rotate(30 200 200)" />
          <GlowingNode x={200 + 140 * Math.cos(0)} y={200 + 40 * Math.sin(0)} />
        </motion.g>

        {/* Orbiting ring 2 */}
        <motion.g variants={ringVariantsReverse} animate="animate" style={{ originX: 200, originY: 200 }}>
          <ellipse cx="200" cy="200" rx="110" ry="35" fill="none" stroke="#f472b6" strokeWidth={0.5} opacity={0.12} transform="rotate(-20 200 200)" />
          <GlowingNode x={200 + 110 * Math.cos(Math.PI / 3)} y={200 + 35 * Math.sin(Math.PI / 3)} delay={0.5} />
          <GlowingNode x={200 + 110 * Math.cos(Math.PI)} y={200 + 35 * Math.sin(Math.PI)} delay={1} />
        </motion.g>

        {/* Orbiting ring 3 */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ originX: 200, originY: 200 }}
        >
          <ellipse cx="200" cy="200" rx="80" ry="25" fill="none" stroke="#c084fc" strokeWidth={0.4} opacity={0.1} transform="rotate(60 200 200)" />
          <GlowingNode x={200 + 80 * Math.cos(Math.PI / 4)} y={200 + 25 * Math.sin(Math.PI / 4)} delay={1.5} />
          <GlowingNode x={200 + 80 * Math.cos(Math.PI / 2)} y={200 + 25 * Math.sin(Math.PI / 2)} delay={2} />
        </motion.g>

        {/* Neural network connections */}
        <ConnectionLine x1={180} y1={160} x2={140} y2={220} delay={0} />
        <ConnectionLine x1={220} y1={160} x2={260} y2={220} delay={0.5} />
        <ConnectionLine x1={180} y1={240} x2={200} y2={280} delay={1} />
        <ConnectionLine x1={220} y1={240} x2={200} y2={280} delay={1.5} />
        <ConnectionLine x1={140} y1={220} x2={100} y2={250} delay={2} />
        <ConnectionLine x1={260} y1={220} x2={300} y2={250} delay={2.5} />

        {/* Central intelligence hub */}
        <motion.circle
          cx="200" cy="200" r="28"
          fill="url(#docGrad)"
          stroke="#a78bfa"
          strokeWidth={0.5}
          animate={{ strokeOpacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200" cy="200" r="28"
          fill="none"
          stroke="#a78bfa"
          strokeWidth={0.5}
          animate={{ r: [28, 32, 28], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Document intelligence icons */}
        <g transform="translate(190, 175)">
          <motion.rect
            x="0" y="0" width="12" height="16" rx="1.5"
            fill="none" stroke="#a78bfa" strokeWidth={0.6}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, delay: 0, repeat: Infinity }}
          />
          <line x1="2.5" y1="4" x2="9.5" y2="4" stroke="#a78bfa" strokeWidth={0.4} opacity={0.3} />
          <line x1="2.5" y1="7" x2="9.5" y2="7" stroke="#a78bfa" strokeWidth={0.4} opacity={0.2} />
          <line x1="2.5" y1="10" x2="7" y2="10" stroke="#a78bfa" strokeWidth={0.4} opacity={0.2} />
        </g>

        {/* OCR glow text lines */}
        <motion.g
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="155" y="242" width="90" height="1" rx="0.5" fill="#c084fc" opacity={0.2} />
          <rect x="160" y="246" width="80" height="1" rx="0.5" fill="#c084fc" opacity={0.15} />
          <rect x="158" y="250" width="84" height="1" rx="0.5" fill="#c084fc" opacity={0.1} />
        </motion.g>

        {/* Floating data nodes */}
        <motion.g
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="100" cy="130" r="4" fill="none" stroke="#a78bfa" strokeWidth={0.5} opacity={0.2} />
          <circle cx="300" cy="150" r="3" fill="none" stroke="#f472b6" strokeWidth={0.5} opacity={0.2} />
          <circle cx="320" cy="260" r="3.5" fill="none" stroke="#c084fc" strokeWidth={0.5} opacity={0.15} />
        </motion.g>

        {/* Semantic search nodes */}
        <motion.circle
          cx="130" cy="280" r="3"
          fill="#a78bfa"
          opacity={0.15}
          animate={{ opacity: [0.1, 0.3, 0.1], r: [3, 4, 3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="270" cy="280" r="3"
          fill="#f472b6"
          opacity={0.15}
          animate={{ opacity: [0.1, 0.3, 0.1], r: [3, 4, 3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <ConnectionLine x1={130} y1={280} x2={200} y2={228} delay={0.5} />
        <ConnectionLine x1={270} y1={280} x2={200} y2={228} delay={1} />

        {/* Light beam through center */}
        <motion.line
          x1="200" y1="60" x2="200" y2="340"
          stroke="url(#lineGrad)"
          strokeWidth={0.5}
          animate={{ opacity: [0.02, 0.08, 0.02] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Small particle dots */}
        {[70, 90, 110, 290, 310, 330].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={[80, 120, 320, 90, 310, 280][i]}
            r={1.5}
            fill="#a78bfa"
            opacity={0.08}
            animate={{ opacity: [0.04, 0.15, 0.04] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>

      {/* Decorative glow rings behind */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 rounded-full border border-violet-500/5 animate-[spin_30s_linear_infinite]" />
        <div className="absolute w-56 h-56 rounded-full border border-rose-500/5 animate-[spin_25s_linear_infinite_reverse]" />
      </div>
    </div>
  );
}
