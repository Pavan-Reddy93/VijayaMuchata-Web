import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));

function Loading() {
  return (
    <div className="min-h-screen bg-deep-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-6 h-6 rounded-full border-2 border-neon-blue/30 border-t-neon-blue animate-spin" />
        <span className="text-xs text-white/20">Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
