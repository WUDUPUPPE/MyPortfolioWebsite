import { useI18n } from "@/lib/i18n";
import { Activity, BookOpen, Target } from "lucide-react";

export function CurrentStatus() {
  const { t } = useI18n();

  const items = [
    {
      icon: Activity,
      title: t.currentStatus.items.currentWork.title,
      text: t.currentStatus.items.currentWork.text,
    },
    {
      icon: BookOpen,
      title: t.currentStatus.items.learning.title,
      text: t.currentStatus.items.learning.text,
    },
    {
      icon: Target,
      title: t.currentStatus.items.nextGoal.title,
      text: t.currentStatus.items.nextGoal.text,
    },
  ];

  return (
    <section id="current-status" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
            // {t.currentStatus.kicker}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.currentStatus.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mb-3 text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}