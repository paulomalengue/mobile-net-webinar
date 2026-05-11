import { motion } from "framer-motion";
import { Radio, Network, Cpu, Wifi, Wrench, Activity } from "lucide-react";

const items = [
  { icon: Radio, title: "GSM (2G)", desc: "Fundamentos da telefonia digital celular." },
  { icon: Network, title: "UMTS (3G)", desc: "Arquitetura, serviços e dados em alta velocidade." },
  { icon: Wifi, title: "LTE (4G)", desc: "Tecnologia all-IP e a base do mobile broadband." },
  { icon: Cpu, title: "Engenharia de Redes", desc: "Planeamento, otimização e dimensionamento." },
  { icon: Activity, title: "NOC & Monitoria", desc: "Operação contínua e visão de rede em tempo real." },
  { icon: Wrench, title: "Suporte Técnico", desc: "Boas práticas de troubleshooting de campo." },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-gradient-brand">SOBRE O CURSO</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-gradient">
            Aprenda na prática como funcionam as redes móveis
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Um percurso completo da geração 2G à 4G — pensado para profissionais,
            estudantes e curiosos que querem entender a fundo a infraestrutura
            que conecta milhares de milhões de dispositivos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative glass-card rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <span className="inline-grid place-items-center size-12 rounded-xl bg-gradient-brand glow-pink">
                  <it.icon className="size-6 text-primary-foreground" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
