import { useI18n, type Lang } from "@/lib/i18n";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();

  const languages: Lang[] = ["de", "en", "es"];
  const currentIndex = languages.indexOf(lang);
  const next = languages[(currentIndex + 1) % languages.length];

  return (
    <button
      onClick={() => setLang(next)}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur transition-colors hover:border-primary/60 hover:text-primary"
      aria-label={`Switch language to ${next.toUpperCase()}`}
    >
      <Globe className="h-4 w-4" />
      <span>{lang.toUpperCase()}</span>
      <span className="text-muted-foreground">→ {next.toUpperCase()}</span>
    </button>
  );
}
