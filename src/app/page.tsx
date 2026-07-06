import { Metadata } from 'next';
import { LoadingScreen } from '@/components/features/LoadingScreen';
import { CustomCursor } from '@/components/features/CustomCursor';
import { Background } from '@/components/features/Background';
import { CommandPalette } from '@/components/features/CommandPalette';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackToTop } from '@/components/layout/BackToTop';

import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Certifications } from '@/components/sections/Certifications';
import { Leadership } from '@/components/sections/Leadership';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Arin Parashar — Software Engineer & AI Engineer',
  description: 'Portfolio of Arin Parashar — Software Engineer specializing in AI, Computer Vision, Edge AI, Machine Learning, and Data Engineering.',
};

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Background />
      <CommandPalette />
      <BackToTop />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Leadership />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
