import { useI18n } from "@/lib/i18n";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  const { t } = useI18n();

  const columns = [
    { title: t.experience.work, icon: Briefcase, items: t.experience.items.work },
    { title: t.experience.education, icon: GraduationCap, items: t.experience.items.education },
  ];

  return (
    <section id="experience" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
            // {t.experience.kicker}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.experience.title}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {columns.map(({ title, icon: Icon, items }) => (
            <div key={title}>
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-bold">{title}</h3>
              </div>

              <ol className="relative space-y-8 border-l border-border pl-8">
                {items.map((it, i) => (
                  <li key={i} className="relative">
                    <span className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                      <span className="h-2 w-2 rounded-full bg-background" />
                    </span>
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      {it.period}
                    </p>
                    <h4 className="mt-1 text-lg font-bold">{it.role}</h4>
                    <p className="text-sm font-medium text-accent">{it.company}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {it.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
