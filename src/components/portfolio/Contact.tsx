import { useState, FormEvent } from "react";
import { useI18n } from "@/lib/i18n";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(t.contact.error);
      return;
    }
    toast.success(t.contact.success);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
            // {t.contact.kicker}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-gradient-card p-6 backdrop-blur sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                {t.contact.name}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                {t.contact.email}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
              {t.contact.message}
            </label>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <Send className="h-4 w-4" />
            {t.contact.send}
          </button>
        </form>

        <div className="mt-10 flex items-center justify-center gap-4">
          {[
            { icon: Github, href: "https://github.com/wudupuppe" },
            { icon: Linkedin, href: "https://linkedin.com/in/tejani-awudu-mohammed/" },
            { icon: Mail, href: "mailto:kontakt@tejani-awudu.de" },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Tejani Awudu Mohammed. {t.footer.rights}</p>
        <p className="font-mono">{t.footer.built} · React + TanStack</p>
      </div>
    </footer>
  );
}
