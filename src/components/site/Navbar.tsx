import { useEffect, useState } from "react";
import { Radio, Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programa", label: "Programa" },
  { href: "#info", label: "Informações" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#inscricao", label: "Inscrição" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all ${
          scrolled ? "glass rounded-2xl mt-2" : ""
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <a href="#top" className="flex items-center gap-2 group">
            <span className="grid place-items-center size-9 rounded-xl bg-gradient-brand glow-pink">
              <Radio className="size-5 text-primary-foreground" />
            </span>
            <span className="font-semibold tracking-tight text-foreground">
              Mobile<span className="text-gradient-brand">Net</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#inscricao"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-lg shadow-primary/30"
          >
            Inscrever-se
          </a>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#inscricao"
              onClick={() => setOpen(false)}
              className="mt-2 text-center rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-primary-foreground"
            >
              Inscrever-se
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
