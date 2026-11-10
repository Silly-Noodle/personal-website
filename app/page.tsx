import { Portfolio } from "@/components/portfolio";
import { Hero } from "@/components/portfolio/hero";
import { AboutSection } from "@/components/portfolio/about-section";
import { WorkSection } from "@/components/portfolio/work-section";

export default function Home() {
  return (
    <Portfolio>
      <main id="main-content">
        <Hero />
        <AboutSection />
        <WorkSection />
      </main>
    </Portfolio>
  );
}
