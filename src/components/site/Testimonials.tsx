import { Star } from "lucide-react";

const items = [
  {
    name: "João Malamba",
    role: "Engenheiro Informático · Unitel",
    text: "Webinar extremamente esclarecedor. Saí com uma visão muito mais clara sobre redes LTE e troubleshooting móvel.",
    image: "/testimonials/joao.png",
  },
  {
    name: "Celestino Adriano",
    role: "Engenheiro em Electrónica e Telecomunicações · Unitel",
    text: "“Num sector em constante evolução, iniciativas como esta aproximam a teoria da prática e contribuem significativamente para a capacitação de profissionais em GSM, UMTS, LTE e troubleshooting de redes móveis.”.",
    image: "/testimonials/celestino.png",
  },
  {
    name: "Vallone daniel",
    role: "Engenheiro em Electrónica e Telecomunicações ",
    text: "As expectativas para este webinar são muito altas. A Mobile Connect Pro já demonstra um elevado nível técnico e uma abordagem bastante profissional.",
    image: "/testimonials/valone.png",
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
                <img
                  src={t.image}
                  alt={t.name}
                  className="size-11 rounded-full object-cover border border-primary/20"
                />
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
