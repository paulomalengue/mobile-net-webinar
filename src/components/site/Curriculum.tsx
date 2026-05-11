import { motion } from "framer-motion";
import { BookOpen, Layers, Antenna, Signal, Server, ShieldCheck, Gauge } from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Fundamentos de Redes Móveis", desc: "Conceitos, evolução e padrões 3GPP." },
  { icon: Layers, title: "Arquitetura GSM", desc: "BSS, NSS, sinalização SS7 e roaming." },
  { icon: Signal, title: "Tecnologias UMTS", desc: "WCDMA, RNC, NodeB e serviços de dados." },
  { icon: Antenna, title: "LTE — Conceitos & Funcionamento", desc: "OFDMA, EPC, eUTRAN e QoS bearers." },
  { icon: Server, title: "BTS / NodeB / eNodeB", desc: "Hardware, configuração e integração." },
  { icon: ShieldCheck, title: "Troubleshooting", desc: "Logs, KPIs e análise de falhas em campo." },
  { icon: Gauge, title: "QoS & Otimização", desc: "Indicadores de desempenho e tuning de rede." },
];

export function Curriculum() {
  return (
    <section id="programa" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-gradient-brand">CONTEÚDO PROGRAMÁTICO</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gradient">
            Um currículo construído por engenheiros
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            7 módulos densos, exercícios práticos e estudos de caso reais.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden glass-card rounded-2xl p-6 hover:border-secondary/50 transition-all duration-300"
            >
              <div className="absolute -top-12 -right-12 size-32 rounded-full bg-secondary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-4">
                <span className="shrink-0 grid place-items-center size-12 rounded-xl glass border border-primary/30">
                  <m.icon className="size-6 text-primary" />
                </span>
                <div>
                  <div className="text-xs font-mono text-muted-foreground">
                    Módulo {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 font-semibold text-foreground">{m.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{m.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
