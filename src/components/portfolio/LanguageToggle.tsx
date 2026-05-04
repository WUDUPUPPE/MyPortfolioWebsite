import { useI18n, type Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const next: Lang = lang === "de" ? "en" : "de";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
      aria-label={`Switch language to ${next.toUpperCase()}`}
    >
      <Globe className="h-3.5 w-3.5" />
      <span className="font-mono uppercase tracking-wider">{lang}</span>
      <span className="text-muted-foreground">/</span>
      <span className="font-mono uppercase tracking-wider text-muted-foreground">
        {next}
      </span>
    </button>
  );
}
