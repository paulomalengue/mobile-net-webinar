import { Radio, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <a href="#top" className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-xl bg-gradient-brand glow-pink">
              <Radio className="size-5 text-primary-foreground" />
            </span>
            <span className="font-semibold text-foreground">
              Mobile<span className="text-gradient-brand">Net</span>
            </span>
          </a>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Formação profissional em comunicações de redes móveis 2G, 3G e 4G.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contactos</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-primary" />
              <a href="mailto:contato@mobilenet.ao" className="hover:text-foreground">
                contato@mobilenet.ao
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-primary" />
              <span>+244 925 857 040</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Siga-nos</h4>
          <div className="mt-4 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Rede social"
                className="grid place-items-center size-10 rounded-xl glass hover:bg-gradient-brand transition-colors"
              >
                <Icon className="size-4 text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 text-xs text-muted-foreground flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} MobileNet. Todos os direitos reservados.</span>
          <div className="flex items-center gap-2">
            <img
              src="/prag-logo.png"
              alt="PRAG Soluções Tecnológicas"
              className="h-6 w-auto object-contain"
            />

            <span>
              Desenvolvido pela{" "}
              <a
                href="https://wa.me/244926203093"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0E5A9C] hover:underline"
              >
                PRAG Soluções Tecnológicas
              </a>
              {" · "}
              <a
                href="https://wa.me/244926203093"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +244 926 203 093
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
