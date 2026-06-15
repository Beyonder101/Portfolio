import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollColourShift from '@/components/ScrollColourShift';

export default function Home() {
  return (
    <>
      <ScrollColourShift />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
