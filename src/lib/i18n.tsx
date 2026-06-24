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
      role: "Fachinformatiker Anwendungsentwicklung",
      tagline:
        "Mit Leidenschaft entwickle ich Web- und Mobile-Anwendungen. Zusätzlich vertiefe ich mich in Android, Dart/Flutter sowie Game-Dev und bringe praktische Erfahrung mit durch eigener Server-Administration und Hosting.",
      cta: {
        projects: "Projekte",
        skills: "Skills",
        experience: "Lebenslauf",
      },
      contactCard: "Kontakt",
    },
    about: {
      title: "Über mich",
      kicker: "Wer ich bin",
      bio: "Meine vielseitigen Berufserfahrungen machen mich anpassungsfähig, strukturiert und lernbereit. Analytisches Denken, IT-Kenntnisse und Sorgfalt helfen mir dabei, Aufgaben präzise und zielorientiert lösen. Neben der Anwendungsentwicklung betreibe ich einen eigenen Heimserver und sammle aktiv Erfahrungen in den Bereichen Docker, Nginx, Cloudflare DNS und SSL, da ich verstehen möchte, wie Software nicht nur entsteht, sondern auch verwaltet wird und in die Welt kommt. Als teamorientierter Entwickler suche ich aktiv nach Herausforderungen, die mich fachlich und persönlich weiterbringen.",
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
      viewRepo: "Zeige Projekt",
      liveDemo: "Live Demo",
      watchDemo: "Demo Video",
      learnMore: "Mehr Erfahren",
      close: "Schließen",
      items: [
        {
          name: "SONAR",
          description:
            "Du kennst das: Ein Song läuft, du weißt den Namen nicht. SONAR löst genau das – per Knopfdruck hört die App zu, analysiert das Audiosignal über die ACRCloud-API und zeigt dir Titel, Artist und Album in Sekunden. Erkannte Songs landen automatisch in deiner persönlichen Bibliothek, gespeichert in Firebase Firestore. Gebaut mit Flutter & Dart, mit sauber getrennter Feature-Architektur und Dark/Light-Mode.",
          tech: ["Flutter", "Dart", "Firebase", "ACRCloud", "Firestore", "Android"],
          repo: "https://github.com/WUDUPUPPE/musik_app"
        },
        {
          name: "STEMgraph Scripte Teilprojekt",
          description: "Im Praktikum habe ich mehrere Bash-Skripte gebaut, um STEMgraph-Challenges automatisiert aus GitHub zu holen, Abhängigkeiten rekursiv aufzulösen und Teilpfade zwischen Challenges zu bestimmen. Zusätzlich benutze ich für meine Dokumentation: LaTeX, Makefile und GitHub Releases um die Versionen sauber nachvollziehbar und automatisch als PDF bauen zulassen.",
          tech: ["Bash", "Git", "JSON",  "LaTeX", "Makefile", "GitHub Actions/Workflows"],
          repo: "https://github.com/WUDUPUPPE/STEMgraph-Scripts",
        },
        {
          name: "HomeServer",
          description:
            "Ein alter Gaming-PC, neu gedacht: Vollständig selbst aufgebauter Home Server auf Debian 13 mit Docker-Infrastruktur, eigenem Reverse Proxy, VPN-Zugriff via Tailscale, Nextcloud, Jellyfin mit NVIDIA GPU-Transcoding, Vaultwarden und netzwerkweitem DNS-Werbeblocker.",
          tech: ["Debian", "Docker", "Nginx", "Cloudflare", "Tailscale", "Nextcloud", "Jellyfin", "Linux"],
        },
        {
          name: "Pflege-EXAM Lernwebsite",
          description:
            "Meine Freundin brauchte eine gezieltes Lernwerkzeug für ihre Examinierte Abschlussprüfung, also habe ich mit ihren Unterlagen eine gebaut. 800+ Prüfungsfragen aus denn verschiedensten Themenbereichen, intelligentes Stichwort-Matching statt exaktem Textvergleich, Fehlertraining und ein Statistik-Dashboard. Bewusst ohne Framework - läuft vollständig offline als eine einzige HTML-Datei.",
          tech: ["HTML5", "CSS3", "JavaScript", "localStorage"],
          repo: "https://github.com/WUDUPUPPE/Pflegefachkraft_Lernwebsite"
        },
        {
          name: "App-Launcher",
          description:
            "Ein Android Streaming-Launcher der YouTube, Spotify und Crunchyroll in einer App bündelt. Mit Login-System, BCrypt-Passwort-Hashing, SQLite-Datenbank und drei API-Anbindungen. Entwickelt in Java mit sauberem Manager-Pattern und OOP-Prinzipien – als Schulprojekt für die Ausbildung zum Fachinformatiker.",
          tech: ["Java", "Android", "SQLite", "YouTube API", "Spotify API", "XML"],
          repo: "https://github.com/WUDUPUPPE/App-Launcher"
        },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "Was ich beherrsche",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools / Workflows / DevOps",
        design: "Design / UI",
        softskills: "Soft Skills",
        languages: "Sprachen",
      },
    },
    experience: {
      title: "Lebenslauf",
      kicker: "Mein Werdegang",
      work: "Erfahrung",
      education: "Weiterbildungen",
      items: {
        work: [
          {
            period: "01.2025 – heute",
            role: "Fachinformatiker für Anwendungsentwicklung",
            company: "GFN Essen",
            description:
              "Theoretische und praktische IHK-Umschulung in der vollständige Softwareentwicklung: Konzeption, Programmierung, Testing und Dokumentation. Inhalte umfassten objektorientierte Entwicklung mit Python und Java, Datenbankdesign mit SQL, Webentwicklung mit HTML/CSS und JavaScript, Netzwerk- und Clientsysteme, Benutzerschnittstellen-Entwicklung, IT-Sicherheitsschulung sowie Projektmanagement nach agilen Methoden wie Scrum.",
          },
          {
            period: "06.2024 -  11.2024",
            role: "Berufliche Neuorientierung mit Bewilligung des Bildungsgutschein",
            company: "Eigeniniziative",
            description: "Zielgerichtete Vorbereitung auf die Umschulung. Aufbau erster Programmierkenntnise.",
          },
          {
            period: "04.2023 -  05.2024",
            role: "Bauwerksmechaniker für Abbruch und Betontrenntechnik",
            company: "Hermann Bergfort GmbH, Essen",
            description: "Demotage und Abbrucharbeiten an Gebäuden, Nutzung digitaler Dokumentationssysteme zur Erfassung von Arbeitsprozessen.",
          },
          {
            period: "04.2022 -  02.2023",
            role: "Fachmann für Systemgastronomie",
            company: "PURINO, Mönchengladbach",
            description: "Koordination von Logistik, Bestellwesen und Service – zuverlässige Teamarbeit unter hohem Zeitdruck.",
          },
          {
            period: "02.2020 - 12.2020",
            role: "Fachmann für Garten- und Landschaftsbau",
            company: "Loddemann GmbH, Versmold",
            description: "Umsetzung von Garten- und Landschaftsbauprojekten im Team.",
          },
          {
            period: "03.2019 - 09.2019",
            role: "Verkäufer und Fachlagerist",
            company: "Netto GmbH, Versmold",
            description: "Kommissionierung, Warenannahme sowie Kundenbetreuung (Zeitbefristeter Arbeitgeber neben der Hochschule).",
          },
          {
            period: "07.2018 - 02.2019",
            role: "Facharbeiter für Straßen und Tiefbauarbeiten",
            company: "Wagemann GmbH, Versmold",
            description: "Einsatz digitaler Vermessungssysteme und GPS-gestützter Technologien zur präzisen Vermessung von Bauprojekten.",
          },
        ],
        education: [
          {
            period: "05.2024 – heute",
            role: "Selbststudium",
            company: "Programmierung & Softwareentwicklung (E-Learning)",
            description:
              "Parallel zur Umschulung habe ich durch eigenständige Einarbeitung in Flutter/Dart, React/Next.js, TypeScript und Firebase durch den Bau vollständiger Anwendungen. Aufbau und Administration einer eigenen Heimserver-Infrastruktur (Linux/Debian, Docker, Self-Hosted-Dienste). Aktiver Einsatz von KI-Tools als Entwicklungswerkzeug und zur Optimierung von Workflows sowie Prompt Engineering.",
          },
          {
            period: "05.2026",
            role: "KI-Führerschein",
            company: "GFN Essen",
            description:
              "Praxisorientiertes Wissen zur verantwortungsvollen KI-Nutzung: Risikomanagement, Grundlagen des Promptings und ethische Leitlinien im Umgang mit KI-Systemen.",
          },
          {
            period: "04.2026",
            role: "IT-Sicherheitsschulung",
            company: "GFN Essen",
            description:
              "Schulung zu Informationssicherheit, Erkennung und Vermeidung von Bedrohungsszenarien sowie Umsetzung konkreter Schutzmaßnahmen.",
          },
          {
            period: "02.2026",
            role: "Scrum",
            company: "GFN Essen",
            description:
              "Grundlagen agiler Projektarbeit nach dem Scrum-Framework: Rollen, Events und Artefakte in der Praxis.",
          },
          {
            period: "08.2025",
            role: "PCEP Certified Entry-Level Python Programmer",
            company: "Python Institute",
            description:
              "Offizielle Zertifizierung der Python-Grundlagen: Programmierlogik, Datentypen, Kontrollstrukturen und Funktionen.",
          },
          {
            period: "03.2024",
            role: "Ersthelfer & Elektronisch unterwiesene Person (EUP)",
            company: "Hermann Bergfort, Essen",
            description:
              "Zertifizierte Erste-Hilfe-Ausbildung sowie Einweisung als elektronisch unterwiesene Person im gewerblichen Umfeld.",
          },
          {
            period: "08.2019 - 02.2020",
            role: "Hoschschulreife",
            company: "Westfalen-Kolleg, Bielefeld",
            description: "Erwerb der allgemeinen Hochschulreife auf dem zweiten Bildungsweg – Abbruch aufgrund finanzieller Engpässe.",
          },
          {
            period: "08.2015 - 05.2018",
            role: "Ausbildung zum Fleischer",
            company: "Heinrich Nölke GmbH & Co.KG, Versmold",
            description: "Abgeschlossene Berufsausbildung mit Einblick in Produktionsprozesse, Qualitätskontrolle und Lebensmittelhygiene.",
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
      built: "Mit Leidenschaft gebaut",
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
      role: "IT Specialist for Application Development",
      tagline:
        "I am passionate about developing web and mobile applications. I am also delving deeper into Android, Dart/Flutter, and game development, and I bring practical experience in server administration and hosting.",
      cta: {
        projects: "Projects",
        skills: "Skills",
        experience: "Experience",
      },
      contactCard: "Get in touch",
    },
    about: {
      title: "About me",
      kicker: "Who I am",
      bio: "My diverse professional experience has made me adaptable, organized, and eager to learn. Analytical thinking, IT skills, and attention to detail help me tackle tasks with precision and focus. In addition to application development, I run my own home server and actively gain experience in Docker, Nginx, Cloudflare DNS, and SSL, as I want to understand not only how software is created, but also how it is managed and deployed. As a team-oriented developer, I actively seek out challenges that help me grow both professionally and personally.",
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
      viewRepo: "Show Project",
      liveDemo: "Live Demo",
      watchDemo: "Demo Video",
      learnMore: "Learn More",
      close: "Close",
      items: [
        {
          name: "SONAR",
          description:
            "You know how it goes: A song is playing, but you don't know the title. SONAR solves exactly that—with the tap of a button, the app listens, analyzes the audio signal via the ACRCloud API, and shows you the title, artist, and album in seconds. Recognized songs are automatically added to your personal library, stored in Firebase Firestore. Built with Flutter & Dart, featuring a cleanly separated feature architecture and dark/light mode.",
          tech: ["Flutter", "Dart", "Firebase", "ACRCloud", "Firestore", "Android"],
          repo: "https://github.com/WUDUPUPPE/musik_app"
        },
        {
          name: "HomeServer",
          description:
            "An old gaming PC, reimagined: A fully self-built home server on Debian 13 with Docker infrastructure, reverse proxy, VPN access via Tailscale, Nextcloud, Jellyfin with NVIDIA GPU transcoding, Vaultwarden, and a network-wide DNS ad blocker.",
          tech: ["Debian", "Docker", "Nginx", "Cloudflare", "Tailscale", "Nextcloud", "Jellyfin", "Linux"],
        },
        {
          name: "PFlege-EXAM Learnwebsite",
          description:
            "My girlfriend needed a targeted study tool for her final exams, so I built one using her materials. It includes over 800 exam questions covering a wide range of topics, intelligent keyword matching instead of exact text comparison, error analysis, and a statistics dashboard. I deliberately built it without a framework—it runs entirely offline as a single HTML file.",
          tech: ["HTML5", "CSS3", "JavaScript", "localStorage"],
          repo: "https://github.com/WUDUPUPPE/Pflegefachkraft_Lernwebsite"
        },
        {
          name: "App-Launcher",
          description:
            "An Android streaming launcher that combines YouTube, Spotify, and Crunchyroll in a single app. Features a login system with BCrypt password hashing, SQLite database, and three API integrations. Built in Java following the Manager pattern and OOP principles — developed as a vocational school project.",
          tech: ["Java", "Android", "SQLite", "YouTube API", "Spotify API", "XML"],
        },
        {
          name: "Costumer-Management System",
          description:
            "Zur Verwaltung von Nutzerdaten",
          tech: ["Java", "SQLite", "XML"],
          repo: "https://github.com/WUDUPUPPE/CostumerManagement"
        }
      ],
    },
    skills: {
      title: "Skills",
      kicker: "What I work with",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools & DevOps",
        softskills: "Soft Skills",
        languages: "Languages",
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
      built: "Built with passion",
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
