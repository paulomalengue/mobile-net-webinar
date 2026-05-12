import { Star } from "lucide-react";

const items = [
  {
    name: "Carlos Mendes",
    role: "Engenheiro de Rede · Unitel",
    text: "Curso extremamente prático. Saí com uma visão clara de como o LTE realmente funciona em campo.",
    initials: "CM",
  },
  {
    name: "Joana Bartolomeu",
    role: "Técnica NOC · Movicel",
    text: "A melhor formação de telecomunicações que fiz. Os módulos de troubleshooting valem o curso inteiro.",
    initials: "JB",
  },
  {
    name: "Ricardo Sousa",
    role: "Estudante de Telecomunicações",
    text: "Conteúdo de altíssimo nível, suporte rápido e uma comunidade incrível. Recomendo a 100%.",
    initials: "RS",
  },
];

export function Testimonials() {
  return (
    <section id="testemunhos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-gradient-brand">TESTEMUNHOS</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gradient">
            Quem já passou por aqui
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-6 flex flex-col hover:border-primary/40 transition-colors"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed flex-1">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="grid place-items-center size-11 rounded-full bg-gradient-brand text-primary-foreground font-semibold">
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
