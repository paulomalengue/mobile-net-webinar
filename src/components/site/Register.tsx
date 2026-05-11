import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import emailjs from "@emailjs/browser";

type Field = "name" | "email" | "phone" | "profession" | "company";
type Errors = Partial<Record<Field, string>>;

export function Register() {
  const [form, setForm] = useState<Record<Field, string>>({
    name: "",
    email: "",
    phone: "",
    profession: "",
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k: Field) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Nome obrigatório";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = "Email inválido";
    if (!form.phone.trim() || form.phone.trim().length < 6) e.phone = "Telefone inválido";
    if (!form.profession.trim()) e.profession = "Profissão obrigatória";
    return e;
  };

  // reiniciar o form
  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      profession: "",
      company: "",
    });

    setErrors({});
    setSuccess(false);
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const e = validate();
    setErrors(e);

    if (Object.keys(e).length) return;

    setLoading(true);

    const { error } = await supabase.from("inscricoes").insert([
      {
        nome: form.name,
        email: form.email,
        telefone: form.phone,
        profissao: form.profession,
        empresa: form.company,
      },
    ]);

    setLoading(false);

    if (error) {
      console.log(error);
      alert("Erro ao enviar inscrição");
      return;
    }

   try {
     await emailjs.send(
       "service_krsgmwu",
       "template_mthqqqo",
       {
         name: form.name,
         email: form.email,
       },
       "LW-M_1DNqMbN-r6T3",
     );

     setSuccess(true);
   } catch (err) {
     console.log(err);
     alert("Erro ao enviar email");
   }
  
  };

  return (
    <section id="inscricao" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/20 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold text-gradient-brand">INSCRIÇÃO</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gradient">Garanta a sua vaga</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Vagas limitadas. Preencha o formulário e a nossa equipa entra em contacto.
          </p>
        </div>

        <div className="mt-12 glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

          {success ? (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto size-16 text-primary" />

              <h3 className="mt-5 text-2xl font-bold text-foreground">Inscrição recebida!</h3>

              <p className="mt-2 text-muted-foreground">
                Obrigado, {form.name.split(" ")[0]}. Enviámos a confirmação para {form.email}.
              </p>

              <button
                onClick={resetForm}
                className="mt-8 inline-flex items-center justify-center rounded-full border border-primary/30 px-6 py-3 text-sm font-medium text-foreground hover:bg-primary/10 transition"
              >
                Fazer nova inscrição
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
              <Field
                label="Nome completo *"
                value={form.name}
                onChange={update("name")}
                error={errors.name}
                placeholder="O seu nome"
              />
              <Field
                label="Email *"
                type="email"
                value={form.email}
                onChange={update("email")}
                error={errors.email}
                placeholder="voce@exemplo.com"
              />
              <Field
                label="Telefone *"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                error={errors.phone}
                placeholder="+244 ..."
              />
              <Field
                label="Profissão *"
                value={form.profession}
                onChange={update("profession")}
                error={errors.profession}
                placeholder="Engenheiro, técnico, estudante..."
              />
              <div className="sm:col-span-2">
                <Field
                  label="Empresa (opcional)"
                  value={form.company}
                  onChange={update("company")}
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/40 hover:shadow-primary/60 hover:scale-[1.01] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading && <Loader2 className="size-5 animate-spin" />}
                  {loading ? "A enviar..." : "GARANTIR MINHA VAGA"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground/90">{label}</span>
      <input
        {...props}
        className={`mt-2 w-full rounded-xl bg-input/60 border px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
