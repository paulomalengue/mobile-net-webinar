import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Curriculum } from "@/components/site/Curriculum";
import { Info } from "@/components/site/Info";
import { Countdown } from "@/components/site/Countdown";
import { Testimonials } from "@/components/site/Testimonials";
import { Register } from "@/components/site/Register";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comunicações de Redes Móveis 2G/3G/4G — Curso Profissional" },
      {
        name: "description",
        content:
          "Curso profissional online de Comunicações de Redes Móveis. Aprenda GSM (2G), UMTS (3G) e LTE (4G) na prática. Inscrições abertas.",
      },
      { property: "og:title", content: "Curso Profissional — Comunicações de Redes Móveis" },
      {
        property: "og:description",
        content: "Domine as tecnologias que conectam o mundo. 2 semanas, 100% online.",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
