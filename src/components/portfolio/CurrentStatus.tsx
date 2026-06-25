import { useI18n } from "@/lib/i18n";

export function CurrentStatus() {
  const { t } = useI18n();

  const items = [
    {
      title: t.currentStatus.items.currentWork.title,
      text: t.currentStatus.items.currentWork.text,
    },
    {
      title: t.currentStatus.items.learning.title,
      text: t.currentStatus.items.learning.text,
    },
    {
      title: t.currentStatus.items.nextGoal.title,
      text: t.currentStatus.items.nextGoal.text,
    },
  ];

  return (
    <section id="current-status" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {t.currentStatus.kicker}
          </p>
          <h2 className="text-3xl font-bold">{t.currentStatus.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
            {t.currentStatus.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm leading-7 text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}