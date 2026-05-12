import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Document Intelligence",
    desc: "OCR, RAG pipelines, and semantic retrieval for deep document understanding.",
  },
  {
    title: "Local-First Architecture",
    desc: "Every tool runs on your machine. Privacy, speed, and full control over your data.",
  },
  {
    title: "Open Research",
    desc: "Public repositories, community contributions, and transparent development.",
  },
  {
    title: "Student Built",
    desc: "Created by a student for students and researchers exploring AI without barriers.",
  },
];

export default function HomeOverview() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-neon-blue/35">
            Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-3 text-white/85">
            AI Platform Overview
          </h2>
          <p className="text-sm text-white/25 max-w-2xl mx-auto leading-relaxed">
            A growing collection of open-source AI tools designed for
            accessibility, research, and real-world impact.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-neon-blue/40 mt-2" />
                <div>
                  <h3 className="text-white/70 text-sm font-medium mb-0.5">
                    {h.title}
                  </h3>
                  <p className="text-white/25 text-xs leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="text-center"
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
