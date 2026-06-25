import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Code2, LanguagesIcon, Paintbrush, Server, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const skillData: { key: "frontend" | "backend" | "tools" | "design" | "softskills" | "languages"; icon: typeof Code2; skills: Skill[] }[] = [
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
    ],
  },
  {
    key: "backend",
    icon: Server,
    skills: [
      { name: "Python",             level: 72 },
      { name: "Firebase / Firestore",level: 72 },
      { name: "SQLite / MariaDB",   level: 59 },
      { name: "REST APIs / ACRCloud API / YouTube API",          level: 69 },
      { name: "Node.js",            level: 60 },
      { name: "BASH",               level: 52 },
    ],
  },
  {
    key: "tools",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub",       level: 76 },
      { name: "GitHub Actions",     level: 65},
      { name: "Docker / Portainer", level: 66 },
      { name: "Makefile / LaTeX",   level: 69 },
      { name: "Linux (Debian)",     level: 46 },
      { name: "Visual Studio Code / Android Studio", level: 75 },
      { name: "Self-Hosting (Nextcloud, Bitwarden, Ad Guard-Home, Website, E-Mail)", level: 64 },
      { name: "KI-Tools (Prompting / Integration)", level: 69},
    ],
  },
  {
    key: "design",
    icon: Paintbrush,
    skills: [
      { name: "Figma / UI Design",  level: 61 },
      { name: "UI / UX Design",     level: 68 },
    ],
  },
  {
    key: "softskills",
    icon: Wrench,
    skills: [
      { name: "Technisches Verständnis",            level: 87},
      { name: "Strukturierte Problemlösefähigkeit", level: 78},
      { name: "Kundenorientierte Programmierung",   level: 68},
      { name: "Analytisches Denken",                level: 72},
      { name: "Selbstständiges Arbeiten",              level: 80},
    ]
  },
  {
    key: "languages",
    icon: LanguagesIcon,
    skills: [
      { name: "Deutsch",             level: 100},
      { name: "Englisch",            level: 78},
      { name: "Kreole",              level: 35},
      { name: "Spanisch",            level: 18},
      { name: "Twie",                level: 29},
    ]
  }
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
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
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
