import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.03] pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight">
              <span className="text-gradient">Vijaya</span>
              <span className="text-white/50">Muchata</span>
              <span className="text-white/15 text-sm">.tech</span>
            </Link>
            <p className="text-[11px] text-white/[0.12] mt-1">
              Open-source AI research ecosystem
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Pavan-Reddy93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[11px] text-white/[0.2] hover:text-white/40 transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              GitHub
            </a>
            <Link to="/" className="text-[11px] text-white/[0.2] hover:text-white/40 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-[11px] text-white/[0.2] hover:text-white/40 transition-colors">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.02]">
          <p className="text-[10px] text-white/[0.08]">
            &copy; {new Date().getFullYear()} VijayaMuchata.tech
          </p>
          <p className="text-[10px] text-white/[0.08]">
            Local-first &middot; Open source &middot; Research driven
          </p>
        </div>
      </div>
    </footer>
  );
}
