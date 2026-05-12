import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HomeOverview from "../components/HomeOverview";
import ProjectPreviews from "../components/ProjectPreviews";
import OpenSource from "../components/OpenSource";
import DedicationStrip from "../components/DedicationStrip";
import Founder from "../components/Founder";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-deep-950">
      <Navbar />
      <Hero />
      <HomeOverview />
      <ProjectPreviews />
      <OpenSource />
      <Founder />
      <DedicationStrip />
      <Footer />
    </div>
  );
}
