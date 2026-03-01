import { Suspense } from "react";

import Hero from "@/components/Hero"
import Skills from "@/components/Skills";
import Projects from "@/components/Projects"
import AboutStrip  from "@/components/AboutStrip";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main >

      <Hero />

      <section id="skills" className="py-20 border-t border-white/5">
        <Skills />
      </section>

      <section id="projects">
        <Suspense fallback={<div className="py-20 text-gray-400 px-6 max-w-6xl mx-auto">Loading projects…</div>}>
          <Projects />
        </Suspense>
      </section>

      <section id="about" className="py-20 border-t border-white/5">
           <AboutStrip />
      </section>

      <section id="contact" className="py-20 border-t border-white/5">
        <ContactCTA />
      </section>

      <Footer />
   
    </main>
  );
}