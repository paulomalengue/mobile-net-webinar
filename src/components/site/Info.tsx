import { Calendar, Clock, Globe, BadgeDollarSign } from "lucide-react";

const info = [
  { icon: Calendar, label: "Data de início", value: "2 de Junho" },
  { icon: Clock, label: "Duração", value: "2 semanas" },
  { icon: Globe, label: "Modalidade", value: "100% Online" },
  { icon: BadgeDollarSign, label: "Investimento", value: "Gratuito" },
];

export function Info() {
  return (
    <section id="info" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((i) => (
            <div
              key={i.label}
              className="glass-card rounded-2xl p-5 hover:border-primary/40 transition-colors"
            >
              <span className="grid place-items-center size-10 rounded-lg bg-gradient-brand glow-pink">
                <i.icon className="size-5 text-primary-foreground" />
              </span>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                {i.label}
              </div>
              <div className="mt-1 text-xl font-bold text-foreground">{i.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
