import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Curriculum } from "@/components/site/Curriculum";
import { Info } from "@/components/site/Info";
import { Countdown } from "@/components/site/Countdown";
import { Testimonials } from "@/components/site/Testimonials";
import { Register } from "@/components/site/Register";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Info />
        <Countdown />
        <Testimonials />
        <Register />
      </main>
      <Footer />
    </div>
  );
}
