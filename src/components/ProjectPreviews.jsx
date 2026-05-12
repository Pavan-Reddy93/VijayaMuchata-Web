import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectPreviews() {
  return (
    <section id="projects" className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-neon-blue/35">
            Featured
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-3 text-white/85">
            Live Project
          </h2>
          <p className="text-sm text-white/25 max-w-2xl mx-auto leading-relaxed">
            The flagship AI platform in active development and production use.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35 }}
            className="glass-card-image overflow-hidden group"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src="/images/demos/demo-main-dashboard.png"
                alt="VijayaMuchata Platform Dashboard"
                className="w-full h-full object-cover opacity-55 group-hover:opacity-80 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-950/80 via-transparent to-transparent" />
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest rounded-full bg-emerald-500/10 text-emerald-400/50 border border-emerald-500/10">
                  Live
                </span>
              </div>
              <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm">
                <span className="text-[9px] text-white/40">Homepage Preview</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                <span className="text-[9px] text-white/25 uppercase tracking-wider">AI Document Intelligence</span>
              </div>
              <h3 className="text-lg font-bold text-white/85 mb-1">
                VijayaMuchata
              </h3>
              <p className="text-xs text-white/25 leading-relaxed mb-4">
                AI-powered document intelligence and forensic analysis platform
                with OCR, RAG pipelines, and semantic retrieval.
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://github.com/Pavan-Reddy93/VijayaMuchata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-neon-blue/60 border border-white/[0.06] hover:border-neon-blue/30 text-white/50 hover:text-white text-[11px] font-medium transition-all duration-300"
                >
                  View Repository
                </a>
                <span className="flex items-center gap-1 text-[10px] text-white/[0.15]">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Runs Locally
                </span>
                <span className="flex items-center gap-1 text-[10px] text-white/[0.15]">
                  <span className="w-0.5 h-0.5 rounded-full bg-emerald-400/40" />
                  Open Source
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="text-center mt-8"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-neon-blue/25 text-white/40 hover:text-white text-xs transition-all duration-300"
          >
            View All Projects
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
