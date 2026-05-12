import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Signal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Torres de telecomunicações com sinais luminosos"
          width={1920}
          height={1080}
          className="size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full bg-secondary/30 blur-[120px] animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Webinar Profissional · Edição 2026
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient">COMUNICAÇÕES DE</span>
            <br />
            <span className="text-gradient">REDES</span>{" "}
            <span className="text-gradient-brand">MÓVEIS</span>
          </h1>

          <div className="mt-8 flex flex-wrap gap-3">
            {["2G", "3G", "4G"].map((g, i) => (
              <motion.span
                key={g}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl glass-card px-5 py-2 text-lg font-bold text-gradient-brand"
              >
                {g}
              </motion.span>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Domine as tecnologias que conectam o mundo. Aprenda GSM, UMTS e LTE
            com uma abordagem prática usada por engenheiros de telecomunicações.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#inscricao"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:scale-[1.02] transition-all"
            >
              INSCREVER-SE AGORA
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programa"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-medium text-foreground hover:bg-white/5 transition"
            >
              <Signal className="size-5" />
              Ver programa
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">2 sem.</div>
              <div>Duração</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div>Online</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">
                Certificado
              </div>
              <div>Incluído</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
