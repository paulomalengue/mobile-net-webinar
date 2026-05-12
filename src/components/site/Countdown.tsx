import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function Countdown() {
  // Próximo 2 de Junho
  const target = (() => {
    const now = new Date();
    const year = now.getMonth() > 5 || (now.getMonth() === 5 && now.getDate() > 2)
      ? now.getFullYear() + 1
      : now.getFullYear();
    return new Date(year, 5, 2, 9, 0, 0);
  })();

  const [time, setTime] = useState(getTimeLeft(target));

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  const cells = [
    { label: "Dias", value: time.d },
    { label: "Horas", value: time.h },
    { label: "Minutos", value: time.m },
    { label: "Segundos", value: time.s },
  ];

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <span className="text-sm font-semibold text-gradient-brand">CONTAGEM REGRESSIVA</span>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gradient">
          O curso começa em
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-5">
          {cells.map((c) => (
            <div
              key={c.label}
              className="glass-card rounded-2xl p-4 sm:p-6 relative overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="text-3xl sm:text-5xl font-bold text-gradient-brand tabular-nums">
                {String(c.value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-xs sm:text-sm uppercase tracking-wider text-muted-foreground">
                {c.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
