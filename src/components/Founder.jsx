import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <span className="text-[10px] tracking-[0.2em] uppercase text-violet-400/35">
              The Story Behind
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-white/85">
              Built with Gratitude
            </h2>
          </div>

          <div className="glass-card p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-violet-500/20 to-rose-500/20 flex items-center justify-center border border-white/5">
                  <span className="text-4xl sm:text-5xl font-bold text-gradient">P</span>
                </div>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white/85 mb-0.5">
                  Pavanreddy Kasara
                </h3>
                <p className="text-violet-400/50 text-xs mb-3">
                  AI Engineer / AI Software Engineer Intern
                </p>
                <p className="text-white/40 text-sm leading-relaxed">
                  Passionate about AI systems, document intelligence, model
                  orchestration, open-source tooling, and affordable AI
                  accessibility.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-rose-500/5 rounded-full blur-[60px]" />
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-violet-500/5 rounded-full blur-[60px]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
