import { useI18n } from "@/lib/i18n";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowDown } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
        {/* Left: Hero content */}
        <div className="animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-6xl">
            Tejani <span className="text-gradient">Awudu Mohammed</span>
          </h1>
          <p className="mt-3 font-mono text-lg text-muted-foreground sm:text-xl">
            {"<"}
            <span className="text-accent">{t.hero.role}</span>
            {" />"}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              {t.hero.cta.projects}
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#skills"
              className="inline-flex items-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-primary/60"
            >
              {t.hero.cta.skills}
            </a>
            <a
              href="#experience"
              className="inline-flex items-center rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-primary/60"
            >
              {t.hero.cta.experience}
            </a>
          </div>
        </div>

        {/* Right: Contact card */}
        <aside className="animate-fade-in-up rounded-2xl border border-border bg-gradient-card p-6 shadow-elegant backdrop-blur lg:w-80 lg:self-center">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.hero.contactCard}
          </h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://github.com/wudupuppe"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                  <Github className="h-4 w-4" />
                </span>
                <span>github.com/wudupuppe</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/tejani-awudu-mohammed/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                  <Linkedin className="h-4 w-4" />
                </span>
                <span>linkedin.com/tejani</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:kontakt@tejani-awudu.de"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                  <Mail className="h-4 w-4" />
                </span>
                <span>kontakt@tejani-awudu.de</span>
              </a>
            </li>
            <li>
              <a
                href="tel:+4917661604732"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                  <Phone className="h-4 w-4" />
                </span>
                <span>+49176 61604732</span>
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                <MapPin className="h-4 w-4" />
              </span>
              <span>Gelsenkirchen, Deutschland</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
