import { useI18n } from "@/lib/i18n";
import avatar from "@/assets/cyberpunkmy.jpeg";

export function About() {
  const { t } = useI18n();

  const stats = [
    { value: "1+", label: t.about.stats.years },
    { value: "7+", label: t.about.stats.projects },
    { value: "26+", label: t.about.stats.tech },
    { value: "∞", label: t.about.stats.coffee },
  ];

  return (
    <section id="about" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
            // {t.about.kicker}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.about.title}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[400px_1fr] lg:items-start">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-primary opacity-30 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-elegant">
              <img
                src={avatar}
                alt="Portrait of the junior developer"
                width={896}
                height={1152}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.about.bio}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-gradient-card p-4 text-center backdrop-blur"
                >
                  <div className="text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
