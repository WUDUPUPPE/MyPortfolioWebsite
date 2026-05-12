import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Code2, Server, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const skillData: { key: "frontend" | "backend" | "tools"; icon: typeof Code2; skills: Skill[] }[] = [
  {
    key: "frontend",
    icon: Code2,
    skills: [
      { name: "Flutter / Dart",     level: 73 },
      { name: "React / Next.js",    level: 53 },
      { name: "TypeScript",         level: 40 },
      { name: "HTML / CSS",         level: 71 },
      { name: "TailwindCSS",        level: 59 },
      { name: "JavaScript",         level: 43 },
      { name: "Android XML Layouts",level: 52 },
      { name: "Godot (GDScript)",   level: 25 },
    ],
  },
  {
    key: "backend",
    icon: Server,
    skills: [
      { name: "Java / Android SDK", level: 52 },
      { name: "Python",             level: 72 },
      { name: "Firebase / Firestore",level: 72 },
      { name: "SQLite / MariaDB",   level: 59 },
      { name: "REST APIs",          level: 69 },
      { name: "ACRCloud API",       level: 62 }, // Musikerkennung (SONAR)
      { name: "YouTube API",        level: 59 },
      { name: "Node.js",            level: 60 },
    ],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub",       level: 74 },
      { name: "Docker / Portainer", level: 66 },
      { name: "Linux (Debian)",     level: 46 },
      { name: "Android Studio",     level: 68 },
      { name: "VS Code",            level: 76 },
      { name: "Self-Hosting (Nextcloud, Bitwarden, Ad Guard-Home, Website, E-Mail)", level: 64 },
      { name: "KI-Tools (Prompting / Integration)", level: 69 },
      { name: "Figma / UI Design",  level: 58 },
    ],
  },
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-gradient-primary transition-[width] duration-[1500ms] ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="relative scroll-mt-24 py-24" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
            // {t.skills.kicker}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.skills.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillData.map(({ key, icon: Icon, skills }) => (
            <div
              key={key}
              className="rounded-2xl border border-border bg-gradient-card p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">{t.skills.categories[key]}</h3>
              </div>
              <div className="space-y-4">
                {skills.map((s) => (
                  <SkillBar key={s.name} {...s} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
