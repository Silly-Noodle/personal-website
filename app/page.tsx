import { Portfolio } from "@/components/portfolio";
import Image from "next/image";
import { Hero } from "@/components/portfolio/hero";
import { AboutSection } from "@/components/portfolio/about-section";
import { WorkSection } from "@/components/portfolio/work-section";

export default function Home() {
  return (
    <Portfolio>
      <head>
        <link rel="icon" type="image/png" href="/images/Muad'Dib.png"></link>
      </head>
      <main id="main-content">
        <Hero />
        <AboutSection />
        <WorkSection />
      </main>
      <footer className="farewell section-wrap">
        <p>Hope you&apos;ve enjoyed your stay!</p>
      </footer>
    </Portfolio>
  );
}
