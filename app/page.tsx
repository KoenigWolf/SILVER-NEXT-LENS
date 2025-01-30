import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import History from '@/components/sections/History';
import Movies from '@/components/sections/Movies';
import Clients from '@/components/sections/Clients';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <History />
      <Movies />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
