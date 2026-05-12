import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import HeroVisual from "./visuals/HeroVisual";

function AmbientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 -left-48 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 -right-48 w-[400px] h-[400px] bg-neon-violet/5 rounded-full blur-[130px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/4 rounded-full blur-[180px]" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleBackground count={50} />
      <AmbientOrbs />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
                <span className="text-[10px] text-white/35 tracking-[0.25em] uppercase">
                  Open-Source AI Research Ecosystem
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-gradient">Vijaya</span>
              <span className="text-white/75">Muchata</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl mt-3 text-white/15 font-light tracking-wider">
                .tech
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base sm:text-lg text-white/30 max-w-xl leading-relaxed mb-8"
            >
              Open-source AI research ecosystem focused on accessible
              innovation, document intelligence, and meaningful technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
            >
              <Link
                to="/projects"
                className="group relative px-6 py-3 rounded-full bg-neon-blue/70 hover:bg-neon-blue text-white text-sm font-medium transition-all duration-300"
              >
                <span className="relative z-10">Explore Projects</span>
                <div className="absolute inset-0 rounded-full bg-neon-blue blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
              </Link>
              <a
                href="https://github.com/Pavan-Reddy93"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/8 hover:border-white/20 text-white/45 hover:text-white text-sm font-medium transition-all duration-300"
              >
                View GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-5 justify-center lg:justify-start text-xs text-white/20"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-emerald-400/50" />
                Local-First
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-neon-blue/50" />
                Open Source
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-amber-400/50" />
                Research Ecosystem
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <HeroVisual />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-3 py-1.5 rounded-full">
                <span className="text-[10px] text-white/30 tracking-wider">
                  vijayamuchata.tech
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="w-4 h-6 rounded-full border border-white/6 flex items-start justify-center p-1">
          <div className="w-0.5 h-1.5 rounded-full bg-white/15 animate-[bounce_2.5s_infinite]" />
        </div>
      </motion.div>
    </section>
  );
}
