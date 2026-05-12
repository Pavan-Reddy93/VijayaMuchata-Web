import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import ParticleBackground from "../components/ParticleBackground";
import DedicationStrip from "../components/DedicationStrip";
import Footer from "../components/Footer";

/* ───────── Section Header ───────── */
function ProjectHeader() {
  return (
    <section className="relative pt-24 pb-8 overflow-hidden">
      <ParticleBackground count={25} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] bg-neon-blue/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-48 w-[350px] h-[350px] bg-neon-violet/3 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[11px] text-white/[0.12] hover:text-white/25 transition-colors mb-4"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back
          </Link>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white/85 mb-2">
            Projects & Research
          </h1>
          <p className="text-xs sm:text-sm text-white/20 max-w-lg mx-auto leading-relaxed">
            Open-source AI tools focused on accessibility, document
            intelligence, and local-first AI workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── Live Project: VijayaMuchata Showcase ───────── */
const featurePills1 = ["Local AI", "OCR", "Semantic Search", "Open Source"];
const featureBullets2 = [
  "OCR Extraction",
  "Multi-Model Pipelines",
  "Contextual Understanding",
  "Retrieval Workflows",
];
const techTags = ["Gemma", "Ollama", "FastAPI", "RAG", "Embeddings", "Python"];
const workflowPills = ["Upload", "Extract", "Analyze", "Retrieve", "Generate"];

function ShowcaseBlock({ image, caption, label, heading, paragraph, pills, bullets, reverse, effect, tags }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center"
    >
      {/* Image side */}
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className="relative group rounded-2xl overflow-hidden border border-white/[0.04] hover:border-neon-blue/15 transition-all duration-500 shadow-[0_0_60px_rgba(74,158,255,0.03)]">
          <div className="aspect-video overflow-hidden">
            <img
              src={image}
              alt={caption}
              className="w-full h-full object-cover opacity-65 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-700"
              loading="lazy"
            />
          </div>

          {/* Caption badge */}
          <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/[0.04]">
            <span className="text-[10px] text-white/45">{caption}</span>
          </div>

          {/* Block-specific effects */}
          {effect === "live" && (
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/[0.04]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
              <span className="text-[9px] uppercase tracking-wider text-emerald-400/60">Live</span>
            </div>
          )}

          {effect === "scan" && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent -translate-x-full animate-[scan_3s_ease-in-out_infinite]" />
            </div>
          )}

          {effect === "particles" && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-neon-blue/20"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.1, 0.4, 0.1],
                  }}
                  transition={{
                    duration: 2.5 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content side */}
      <div className={reverse ? "lg:order-1" : ""}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-neon-blue/35">
          {label}
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2 mb-3 text-white/85">
          {heading}
        </h2>
        <p className="text-sm text-white/25 leading-relaxed mb-4">
          {paragraph}
        </p>

        {pills && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {pills.map((p) => (
              <span
                key={p}
                className="px-2.5 py-1 text-[10px] rounded-full bg-neon-blue/[0.05] text-neon-blue/35 border border-neon-blue/[0.05]"
              >
                {p}
              </span>
            ))}
          </div>
        )}

        {bullets && (
          <ul className="space-y-1.5 mb-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-xs text-white/25">
                <span className="w-1 h-1 rounded-full bg-neon-blue/35 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        {tags && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[10px] rounded-full bg-neon-blue/[0.04] text-neon-blue/30 border border-neon-blue/[0.04]"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

function LiveProjectSection() {
  return (
    <section className="relative pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-1.5 mb-3">
            <span className="w-1 h-1 rounded-full bg-emerald-400/50" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-400/30">
              Live Project
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white/85 mb-2">
            VijayaMuchata
          </h2>
          <p className="text-xs sm:text-sm text-white/20 max-w-2xl leading-relaxed">
            AI-powered document intelligence and forensic analysis ecosystem
            focused on OCR, semantic analysis, retrieval workflows, contextual
            AI understanding, and open-source experimentation.
          </p>
        </motion.div>

        {/* Block 1 — Homepage Overview (image left) */}
        <div className="mb-10">
          <ShowcaseBlock
            image="/images/demos/demo-main-dashboard.png"
            caption="Homepage"
            label="Homepage Experience"
            heading="AI-Powered Document Intelligence"
            paragraph="VijayaMuchata provides a local-first AI workspace focused on OCR extraction, semantic analysis, and contextual document understanding for students, developers, and researchers."
            pills={featurePills1}
            effect="live"
            reverse={false}
          />
        </div>

        {/* Divider */}
        <div className="w-px h-8 mx-auto bg-white/[0.02] mb-10" />

        {/* Block 2 — Features Dashboard (content left, image right) */}
        <div className="mb-10">
          <ShowcaseBlock
            image="/images/demos/demo-features-overview.png"
            caption="Features Dashboard"
            label="Capabilities"
            heading="Advanced AI Feature Ecosystem"
            paragraph="The platform combines multiple intelligent workflows including document extraction, semantic retrieval, contextual reasoning, and AI-assisted analysis pipelines."
            bullets={featureBullets2}
            effect="glow"
            reverse={true}
          />
        </div>

        {/* Divider */}
        <div className="w-px h-8 mx-auto bg-white/[0.02] mb-10" />

        {/* Block 3 — Models Overview (image left) */}
        <div className="mb-10">
          <ShowcaseBlock
            image="/images/demos/demo-model-workflows.png"
            caption="Models Overview"
            label="Architecture"
            heading="Models & AI Stack"
            paragraph="VijayaMuchata integrates local AI inference systems, OCR engines, retrieval pipelines, embeddings, and modular AI workflows through a flexible research-focused architecture."
            tags={techTags}
            effect="particles"
            reverse={false}
          />
        </div>

        {/* Divider */}
        <div className="w-px h-8 mx-auto bg-white/[0.02] mb-10" />

        {/* Block 4 — AI Workspace (content left, image right) */}
        <div className="mb-6">
          <ShowcaseBlock
            image="/images/demos/demo-document-workspace.png"
            caption="AI Workspace"
            label="Workflow"
            heading="How The Workflow Operates"
            paragraph="Users can upload files, process documents locally, extract contextual insights, and generate structured AI outputs through modular pipelines designed for experimentation and accessibility."
            pills={workflowPills}
            effect="scan"
            reverse={true}
          />
        </div>

        {/* Bottom: GitHub + meta */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.03]"
        >
          <a
            href="https://github.com/Pavan-Reddy93/VijayaMuchata"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-white/[0.04] hover:bg-neon-blue/60 border border-white/[0.06] hover:border-neon-blue/30 text-white/50 hover:text-white text-xs font-medium transition-all duration-300"
          >
            View on GitHub
          </a>
          <span className="flex items-center gap-1 text-[10px] text-white/[0.12]">
            <svg className="w-2.5 h-2.5" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Runs Locally
          </span>
          <span className="flex items-center gap-1 text-[10px] text-white/[0.12]">
            <span className="w-0.5 h-0.5 rounded-full bg-emerald-400/40" />
            Open Source
          </span>
          <span className="flex items-center gap-1 text-[10px] text-white/[0.12]">
            <span className="w-0.5 h-0.5 rounded-full bg-amber-400/40" />
            MIT
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── Upcoming Section ───────── */
function UpcomingSection() {
  const tools = [
    {
      title: "AI Research Assistant",
      desc: "Research-focused contextual AI assistant for students and developers exploring academic papers and workflows.",
      gradient: "from-violet-500/5 to-rose-500/5",
    },
    {
      title: "ATS Resume Analyzer",
      desc: "AI-powered resume optimization and ATS compatibility scoring platform for job seekers.",
      gradient: "from-amber-500/5 to-orange-500/5",
    },
    {
      title: "AI Plagiarism Checker",
      desc: "Local-first semantic similarity analysis and plagiarism detection tool for academic and research use.",
      gradient: "from-emerald-500/5 to-teal-500/5",
    },
  ];

  return (
    <section className="relative pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35 }}
          className="text-center mb-8"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase text-amber-400/30">
            Roadmap
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white/70 mt-2 mb-2">
            Upcoming Research Tools
          </h2>
          <p className="text-xs text-white/15 max-w-md mx-auto">
            Expanding the ecosystem with purpose-built AI utilities currently in
            research and development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="glass-card p-4 group relative overflow-hidden"
            >
              <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${tool.gradient} mb-3 overflow-hidden border border-white/[0.03] flex items-center justify-center`}>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/[0.05]">
                  Preview
                </span>
              </div>

              <div className="absolute top-2.5 right-2.5">
                <span className="px-2 py-0.5 text-[9px] uppercase tracking-widest rounded-full bg-amber-500/[0.06] text-amber-400/30 border border-amber-500/[0.06]">
                  In R&amp;D
                </span>
              </div>

              <h3 className="text-white/55 text-sm font-medium mb-1">{tool.title}</h3>
              <p className="text-xs text-white/18 leading-relaxed mb-3">{tool.desc}</p>

              <div className="pt-2.5 border-t border-white/[0.03]">
                <span className="text-[10px] text-amber-400/20">Coming Soon</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Page ───────── */
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-deep-950">
      <Navbar />
      <ProjectHeader />
      <LiveProjectSection />
      <UpcomingSection />
      <DedicationStrip />
      <Footer />
    </div>
  );
}
