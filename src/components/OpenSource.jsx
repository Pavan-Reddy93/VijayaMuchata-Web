import { motion } from "framer-motion";

const ethos = [
  {
    title: "Fully Open Source",
    desc: "Every repository is publicly available. Clone, fork, and build upon any project without restriction.",
  },
  {
    title: "Local Execution",
    desc: "No cloud dependency. Every tool runs on your own machine — ideal for experimentation and research.",
  },
  {
    title: "No Subscriptions",
    desc: "Built to remove financial barriers. No paywalls, no API keys required, no forced SaaS tiers.",
  },
  {
    title: "Research Friendly",
    desc: "Designed for students, researchers, and developers who need freedom to explore and iterate.",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <span className="text-[10px] tracking-[0.2em] uppercase text-neon-blue/35">
              Community
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 mb-3 text-white/85">
              Open Source & Local-First
            </h2>
            <p className="text-sm text-white/25 max-w-2xl mx-auto leading-relaxed">
              Built on transparency, accessibility, and community-driven
              innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto mb-10">
            {/* Ethos */}
            <div className="space-y-5">
              {ethos.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400/40 mt-2" />
                  <div>
                    <h3 className="text-white/65 text-sm font-medium mb-0.5">
                      {e.title}
                    </h3>
                    <p className="text-white/25 text-xs leading-relaxed">
                      {e.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden border border-white/5">
                <img
                  src="/images/community/community-open-source-ai.png"
                  alt="Open source AI community illustration"
                  className="w-full h-auto object-cover rounded-xl opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/5" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center"
          >
            <a
              href="https://github.com/Pavan-Reddy93"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-neon-blue/25 text-white/40 hover:text-white text-xs transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span className="font-medium">
                Explore GitHub Repositories
              </span>
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
