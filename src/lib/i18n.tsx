import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "de" | "en";

export const translations = {
  de: {
    nav: {
      home: "Start",
      about: "Über mich",
      projects: "Projekte",
      skills: "Skills",
      experience: "Erfahrung",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      role: "Fachinformatiker für Anwendungsentwicklung",
      tagline:
        "Mit Leidenschaft entwickle ich Web- und Mobile-Anwendungen. Zusätzlich vertiefe ich mich in Android, Dart/Flutter sowie Game-Dev und bringe praktische Erfahrung mit durch eigener Server-Administration und Hosting.",
      cta: {
        projects: "Projekte",
        skills: "Skills",
        experience: "Berufserfahrung",
        cv: "Lebenslauf",
      },
      contactCard: "Kontakt",
    },
    about: {
      title: "Über mich",
      kicker: "Wer ich bin",
      bio: "Meine vielseitigen Berufserfahrungen machen mich anpassungsfähig, strukturiert und lernbereit. Analytisches Denken, IT-Kenntnisse und Sorgfalt helfen mir dabei, Aufgaben präzise und zielorientiert lösen. Neben der Anwendungsentwicklung betreibe ich einen eigenen Heimserver und sammle aktiv Erfahrungen in den Bereichen Docker, Nginx, Cloudflare DNS und SSL, da ich verstehen möchte, wie Software nicht nur entsteht, sondern auch Verwaltet wird und in die Welt kommt. Als teamorientierter Entwickler suche ich aktiv nach Herausforderungen, die mich fachlich und persönlich weiterbringen.",
      stats: {
        years: "Jahre Erfahrung",
        projects: "Abgeschlossene Projekte",
        tech: "Technologien",
        coffee: "Tassen Kaffee",
      },
    },
    projects: {
      title: "Projekte",
      kicker: "Eine Auswahl meiner Arbeiten",
      viewRepo: "View Repo",
      liveDemo: "Live Demo",
      watchDemo: "Demo Video",
      close: "Schließen",
      items: [
        {
          name: "SONAR",
          description:
            "Du kennst das: Ein Song läuft, du weißt den Namen nicht. SONAR löst genau das – per Knopfdruck hört die App zu, analysiert das Audiosignal über die ACRCloud-API und zeigt dir Titel, Artist und Album in Sekunden. Erkannte Songs landen automatisch in deiner persönlichen Bibliothek, gespeichert in Firebase Firestore. Gebaut mit Flutter & Dart, mit sauber getrennter Feature-Architektur und Dark/Light-Mode.",
          tech: ["Flutter", "Dart", "Firebase", "ACRCloud", "Firestore", "Android"],
        },
        {
          name: "HomeServer",
          description:
            "Ein alter Gaming-PC, neu gedacht: Vollständig selbst aufgebauter Home Server auf Debian 13 mit Docker-Infrastruktur, eigenem Reverse Proxy, VPN-Zugriff via Tailscale, Nextcloud, Jellyfin mit NVIDIA GPU-Transcoding, Vaultwarden und netzwerkweitem DNS-Werbeblocker – öffentlich erreichbar über wudupuppe.info.",
          tech: ["Debian", "Docker", "Nginx", "Cloudflare", "Tailscale", "Nextcloud", "Jellyfin", "Linux"],
        },
        {
          name: "E-Commerce Platform",
          description:
            "Vollständiger Online-Shop mit Stripe-Integration, Lagerverwaltung und Admin-Dashboard.",
          tech: ["Next.js", "Stripe", "Prisma", "TailwindCSS"],
        },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "Was ich beherrsche",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools & DevOps",
      },
    },
    experience: {
      title: "Erfahrung & Lebenslauf",
      kicker: "Mein Werdegang",
      work: "Berufserfahrung",
      education: "Ausbildung",
      items: {
        work: [
          {
            period: "2025 – heute",
            role: "Full-Stack Developer",
            company: "Digital Agency",
            description:
              "Entwicklung von individuellen Kundenprojekten – von Landing Pages bis komplexen Web-Apps.",
          },
          {
            period: "2024 – heute",
            role: "Junior Web Developer",
            company: "WebStudio",
            description:
              "Erste Berufserfahrung mit Fokus auf moderne JavaScript-Frameworks und CMS-Systeme.",
          },
        ],
        education: [
          {
            period: "2016 – 2019",
            role: "B.Sc. Informatik",
            company: "Technische Universität",
            description:
              "Schwerpunkt Software Engineering, Datenbanken und Webtechnologien.",
          },
          {
            period: "2014 – 2016",
            role: "Fachabitur Technik",
            company: "Berufskolleg",
            description: "Schwerpunkt Informationstechnik mit Programmier-Grundlagen.",
          },
        ],
      },
    },
    contact: {
      title: "Kontakt",
      kicker: "Lass uns reden",
      description:
        "Hast du ein Projekt im Kopf oder einfach Lust auf einen Austausch? Schreib mir gerne!",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      send: "Nachricht senden",
      success: "Nachricht gesendet! Ich melde mich bald.",
      error: "Bitte alle Felder ausfüllen.",
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      built: "Mit Liebe gebaut",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      role: "Developer & Engineer",
      tagline:
        "I build modern, performant web applications with clean code and a love for the details.",
      cta: {
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
        cv: "Resume",
      },
      contactCard: "Get in touch",
    },
    about: {
      title: "About me",
      kicker: "Who I am",
      bio: "I'm a passionate developer focused on frontend, backend and full-stack web development. I love turning ideas into elegant, performant products. From concept and design to deployment — I love the whole process and never stop learning.",
      stats: {
        years: "Years of experience",
        projects: "Completed projects",
        tech: "Technologies",
        coffee: "Cups of coffee",
      },
    },
    projects: {
      title: "Projects",
      kicker: "A selection of my work",
      viewRepo: "GitHub Repo",
      liveDemo: "Live Demo",
      watchDemo: "Demo Video",
      close: "Close",
      items: [
        {
          name: "Analytics Dashboard",
          description:
            "A modern real-time analytics platform with customizable widgets, live charts and team collaboration.",
          tech: ["React", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"],
        },
        {
          name: "E-Commerce Platform",
          description:
            "Full online shop with Stripe integration, inventory management and admin dashboard.",
          tech: ["Next.js", "Stripe", "Prisma", "TailwindCSS"],
        },
        {
          name: "AI Chat Assistant",
          description:
            "AI-powered chat with streaming responses, conversation history and code highlighting.",
          tech: ["React", "OpenAI", "Edge Functions", "Vite"],
        },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "What I work with",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools & DevOps",
      },
    },
    experience: {
      title: "Experience & Resume",
      kicker: "My journey",
      work: "Work experience",
      education: "Education",
      items: {
        work: [
          {
            period: "2023 – present",
            role: "Senior Frontend Developer",
            company: "Tech Startup Inc.",
            description:
              "Responsible for architecture and development of the web platform with React and TypeScript.",
          },
          {
            period: "2021 – 2023",
            role: "Full-Stack Developer",
            company: "Digital Agency",
            description:
              "Built custom client projects — from landing pages to complex web applications.",
          },
          {
            period: "2019 – 2021",
            role: "Junior Web Developer",
            company: "WebStudio",
            description:
              "Started my career focusing on modern JavaScript frameworks and CMS systems.",
          },
        ],
        education: [
          {
            period: "2016 – 2019",
            role: "B.Sc. Computer Science",
            company: "Technical University",
            description:
              "Focus on software engineering, databases and web technologies.",
          },
          {
            period: "2014 – 2016",
            role: "Technical High School",
            company: "Vocational College",
            description: "Focus on information technology with programming fundamentals.",
          },
        ],
      },
    },
    contact: {
      title: "Contact",
      kicker: "Let's talk",
      description:
        "Have a project in mind or just want to chat? Drop me a message!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      success: "Message sent! I'll get back to you soon.",
      error: "Please fill in all fields.",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with love",
    },
  },
};

export type TranslationShape = typeof translations.de;

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TranslationShape;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (stored === "de" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
