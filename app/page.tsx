import { Portfolio } from "@/components/portfolio";
import Image from "next/image";
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
      <footer className="farewell section-wrap">
        <p>Hope you&apos;ve enjoyed your stay!</p>
        <Image
          src="/images/Muad'Dib.png"
          alt="Muad'Dib"
          width={160}
          height={160}
          className="farewell-image"
        />
      </footer>
    </Portfolio>
  );
}
