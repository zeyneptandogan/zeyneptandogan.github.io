import Image from "next/image";
import styles from "./page.module.css"
import Typewriter from "@/components/Typewriter";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import About from "@/components/About";
import Publications from "@/components/Publications";
import Intro from "@/components/intro";
import FullPagePager from "@/components/FullPagePager";
import BlobConductor from "@/components/BlobConductor";

export default function Home() {
  return (
    <>
      <main id="snap-root" className="snap-container" style={{backgroundColor: "#000"}} tabIndex={0}>
        <div className="blob-layer overflow-hidden" aria-hidden="true">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
          <div className="blob b4"></div>
          <div className="blob b5"></div>
          <div className="blob b6"></div>
        </div>

        {/* Scroll kontrolü + sahne kontrolü */}
        <FullPagePager />
        <BlobConductor />

        <section className="snap-section" id="intro">
          <div className="section-body"><Intro/></div>
        </section>

        <section className="snap-section" id="about">
          <div className="section-body"><About /></div>
        </section>

        <section className="snap-section" id="education">
          <div className="section-body"><Education /></div>
        </section>

        <section className="snap-section" id="experience">
          <div className="section-body"><Experience /></div>
        </section>

        <section className="snap-section" id="projects">
          <div className="section-body"><Project /></div>
        </section>

        <section className="snap-section" id="publications">
          <div className="section-body"><Publications /></div>
        </section>
      </main>
    </>
  );
}
