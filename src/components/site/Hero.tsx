import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Signal } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Torres de telecomunicações"
          className="h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Glow effects */}
      <div className="pointer-events-none absolute top-0 left-0 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {/* badge */}
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-[11px] sm:text-xs font-medium text-foreground">
            <Sparkles className="size-3.5 text-primary" />
            Webinar Técnico Profissional · Edição 2026
          </span>

          {/* title */}
          <h1 className="mt-6 font-bold tracking-tight leading-[1.02]">
            <span className="block text-gradient text-4xl sm:text-6xl lg:text-7xl">
              COMUNICAÇÕES
            </span>

            <span className="block mt-1 text-4xl sm:text-6xl lg:text-7xl">
              <span className="text-gradient">DE REDES</span>{" "}
              <span className="text-gradient-brand relative inline-block">
                MÓVEIS
                <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-primary/70" />
              </span>
            </span>
          </h1>

          {/* chips */}
          <div className="mt-8 flex flex-wrap gap-3">
            {["2G", "3G", "4G"].map((g, i) => (
              <motion.span
                key={g}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl glass-card px-5 py-2 text-base sm:text-lg font-bold text-gradient-brand"
              >
                {g}
              </motion.span>
            ))}
          </div>

          {/* description */}
          <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Domine as tecnologias que conectam o mundo. Aprenda GSM, UMTS e LTE com uma abordagem
            prática usada por engenheiros de telecomunicações.
          </p>

          {/* buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#inscricao"
              className="
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-full
    bg-gradient-brand
    px-7
    py-4
    text-sm
    sm:text-base
    font-semibold
    text-primary-foreground
    shadow-lg
    shadow-primary/40
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-primary/60
    animate-pulse
  "
            >
              {/* brilho animado */}
              <span
                className="
      absolute
      inset-0
      -translate-x-full
      bg-white/20
      skew-x-12
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
              />

              <span className="relative z-10">INSCREVER-SE AGORA</span>

              <ArrowRight
                className="
      relative
      z-10
      size-5
      transition-transform
      duration-300
      group-hover:translate-x-1
    "
              />
            </a>
            <a
              href="#programa"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-7 py-4 text-sm sm:text-base font-medium text-foreground hover:bg-white/5 transition"
            >
              <Signal className="size-5" />
              Ver programa
            </a>
          </div>

          {/* stats */}
          <div className="mt-14 flex flex-wrap gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-foreground">2 sem.</div>
              <div>Duração</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-bold text-foreground">100%</div>
              <div>Online</div>
            </div>

            <div>
              <div className="text-xl sm:text-2xl font-bold text-foreground">Certificado</div>
              <div>Incluído</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}