import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "de" | "en" | "es";

export const translations = {
  de: {
    nav: {
      home: "Start",
      about: "Über mich",
      currentStatus: "Aktueller Fokus",
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
    currentStatus: {
      title: "Aktueller Fokus",
      kicker: "Woran ich gerade arbeite",
      items: {
        currentWork: {
          title: "Aktuell arbeite ich an",
          text: "Ich arbeite an meinem Abschlussprojekt für die IHK wo ich ein Frontend für eine Lernwebsite baue und die Logik von dem Backend verstehe und mit Teilprojekt \"Automatisierte Abhängigkeitsauflösung mit Bash und Git\" umgesetzt habe.",
        },
        learning: {
          title: "Aktuell vertiefe ich",
          text: "Zurzeit beschäftige ich mich besonders mit Bash, Git/GitHub-Workflows, React, TypeScript und dem sauberen Aufbau technischer Projekte. Dazu baue ich aktuell gerade noch an einem eigenen Projekt, um die erlernten Skills zu vertiefen und zu festigen.",
        },
        nextGoal: {
          title: "Nächstes Ziel",
          text: "Ich möchte mein technisches Fundament weiter ausbauen und Projekte so umsetzen, dass sie nicht nur funktionieren, sondern auch nachvollziehbar und professionell präsentiert werden. Zusätzlich möchte ich meine Kenntnisse in der Softwareentwicklung vertiefen und mich auf die Bereiche Full-Stack-Entwicklung und Game-Development spezialisieren.",
        },
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
          tech: ["Bash", "Git", "JSON", "LaTeX", "Makefile", "GitHub Actions/Workflows"],
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
      about: "About Me",
      currentStatus: "Current Focus",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      role: "IT Specialist in Application Development",
      tagline:
        "I am passionate about developing web and mobile applications. In addition, I am deepening my knowledge in Android, Dart/Flutter, and game development, while also bringing practical experience in my own server administration and hosting.",
      cta: {
        projects: "Projects",
        skills: "Skills",
        experience: "Resume",
      },
      contactCard: "Contact",
    },
    about: {
      title: "About Me",
      kicker: "Who I Am",
      bio: "My diverse professional experience has made me adaptable, structured, and eager to learn. Analytical thinking, IT knowledge, and attention to detail help me solve tasks precisely and with a clear goal in mind. In addition to application development, I run my own home server and actively gain experience with Docker, Nginx, Cloudflare DNS, and SSL, because I want to understand not only how software is created, but also how it is managed and brought into the world. As a team-oriented developer, I actively look for challenges that help me grow both professionally and personally.",
      stats: {
        years: "Years of Experience",
        projects: "Completed Projects",
        tech: "Technologies",
        coffee: "Cups of Coffee",
      },
    },
    currentStatus: {
      title: "Current Focus",
      kicker: "What I'm Currently Working On",
      items: {
        currentWork: {
          title: "Currently Working On",
          text: "I am working on my final IHK project, where I am building a frontend for a learning website, understanding the logic behind the backend, and implementing the subproject \"Automated Dependency Resolution with Bash and Git.\"",
        },
        learning: {
          title: "Currently Deepening",
          text: "At the moment, I am focusing especially on Bash, Git/GitHub workflows, React, TypeScript, and the clean structure of technical projects. I am also currently building my own project to deepen and strengthen the skills I have learned.",
        },
        nextGoal: {
          title: "Next Goal",
          text: "I want to continue strengthening my technical foundation and implement projects in a way that they not only work, but are also understandable and presented professionally. In addition, I want to deepen my knowledge in software development and specialize in full-stack development and game development.",
        },
      },
    },
    projects: {
      title: "Projects",
      kicker: "A Selection of My Work",
      viewRepo: "View Project",
      liveDemo: "Live Demo",
      watchDemo: "Demo Video",
      learnMore: "Learn More",
      close: "Close",
      items: [
        {
          name: "SONAR",
          description:
            "You know the situation: a song is playing, but you don't know its name. SONAR solves exactly that — at the press of a button, the app listens, analyzes the audio signal via the ACRCloud API, and shows you the title, artist, and album within seconds. Recognized songs are automatically saved to your personal library in Firebase Firestore. Built with Flutter & Dart, using a cleanly separated feature architecture and dark/light mode.",
          tech: ["Flutter", "Dart", "Firebase", "ACRCloud", "Firestore", "Android"],
          repo: "https://github.com/WUDUPUPPE/musik_app"
        },
        {
          name: "STEMgraph Scripts Subproject",
          description:
            "During my internship, I built several Bash scripts to automatically fetch STEMgraph challenges from GitHub, resolve dependencies recursively, and determine partial paths between challenges. For my documentation, I also use LaTeX, Makefile, and GitHub Releases to keep versions traceable and enable automatic PDF builds.",
          tech: ["Bash", "Git", "JSON", "LaTeX", "Makefile", "GitHub Actions/Workflows"],
          repo: "https://github.com/WUDUPUPPE/STEMgraph-Scripts",
        },
        {
          name: "HomeServer",
          description:
            "An old gaming PC, reimagined: a fully self-built home server running Debian 13 with Docker infrastructure, its own reverse proxy, VPN access via Tailscale, Nextcloud, Jellyfin with NVIDIA GPU transcoding, Vaultwarden, and a network-wide DNS ad blocker.",
          tech: ["Debian", "Docker", "Nginx", "Cloudflare", "Tailscale", "Nextcloud", "Jellyfin", "Linux"],
        },
        {
          name: "Pflege-EXAM Learning Website",
          description:
            "My girlfriend needed a focused learning tool for her final nursing exam, so I built one using her study materials. It includes 800+ exam questions from a wide range of topics, intelligent keyword matching instead of exact text comparison, error-based training, and a statistics dashboard. Deliberately built without a framework — it runs fully offline as a single HTML file.",
          tech: ["HTML5", "CSS3", "JavaScript", "localStorage"],
          repo: "https://github.com/WUDUPUPPE/Pflegefachkraft_Lernwebsite"
        },
        {
          name: "App-Launcher",
          description:
            "An Android streaming launcher that combines YouTube, Spotify, and Crunchyroll in one app. It includes a login system, BCrypt password hashing, an SQLite database, and three API integrations. Developed in Java using a clean manager pattern and OOP principles as a school project during my training as an IT specialist.",
          tech: ["Java", "Android", "SQLite", "YouTube API", "Spotify API", "XML"],
          repo: "https://github.com/WUDUPUPPE/App-Launcher"
        },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "What I Can Do",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Tools / Workflows / DevOps",
        design: "Design / UI",
        softskills: "Soft Skills",
        languages: "Languages",
      },
    },
    experience: {
      title: "Resume",
      kicker: "My Journey",
      work: "Experience",
      education: "Further Education",
      items: {
        work: [
          {
            period: "01.2025 – present",
            role: "IT Specialist in Application Development",
            company: "GFN Essen",
            description:
              "Theoretical and practical IHK retraining in full software development: planning, programming, testing, and documentation. Topics included object-oriented development with Python and Java, database design with SQL, web development with HTML/CSS and JavaScript, network and client systems, user interface development, IT security training, and project management using agile methods such as Scrum.",
          },
          {
            period: "06.2024 - 11.2024",
            role: "Professional Reorientation with Approved Education Voucher",
            company: "Own Initiative",
            description:
              "Goal-oriented preparation for retraining. Built my first programming knowledge.",
          },
          {
            period: "04.2023 - 05.2024",
            role: "Structural Mechanic for Demolition and Concrete Cutting",
            company: "Hermann Bergfort GmbH, Essen",
            description:
              "Demolition and dismantling work on buildings, using digital documentation systems to record work processes.",
          },
          {
            period: "04.2022 - 02.2023",
            role: "System Catering Specialist",
            company: "PURINO, Mönchengladbach",
            description:
              "Coordination of logistics, ordering processes, and service — reliable teamwork under high time pressure.",
          },
          {
            period: "02.2020 - 12.2020",
            role: "Gardening and Landscaping Specialist",
            company: "Loddemann GmbH, Versmold",
            description:
              "Implemented gardening and landscaping projects as part of a team.",
          },
          {
            period: "03.2019 - 09.2019",
            role: "Sales Assistant and Warehouse Clerk",
            company: "Netto GmbH, Versmold",
            description:
              "Order picking, goods receipt, and customer support (temporary employment alongside university studies).",
          },
          {
            period: "07.2018 - 02.2019",
            role: "Construction Worker for Road and Civil Engineering",
            company: "Wagemann GmbH, Versmold",
            description:
              "Used digital surveying systems and GPS-supported technologies for precise measurement of construction projects.",
          },
        ],
        education: [
          {
            period: "05.2024 – present",
            role: "Self-Study",
            company: "Programming & Software Development (E-Learning)",
            description:
              "Alongside my retraining, I independently deepened my knowledge in Flutter/Dart, React/Next.js, TypeScript, and Firebase by building complete applications. I also built and administered my own home server infrastructure (Linux/Debian, Docker, self-hosted services). In addition, I actively use AI tools as development tools for workflow optimization and prompt engineering.",
          },
          {
            period: "05.2026",
            role: "AI Driver's License",
            company: "GFN Essen",
            description:
              "Practice-oriented knowledge for responsible AI usage: risk management, prompt engineering basics, and ethical guidelines for working with AI systems.",
          },
          {
            period: "04.2026",
            role: "IT Security Training",
            company: "GFN Essen",
            description:
              "Training in information security, identifying and avoiding threat scenarios, and implementing concrete protective measures.",
          },
          {
            period: "02.2026",
            role: "Scrum",
            company: "GFN Essen",
            description:
              "Fundamentals of agile project work using the Scrum framework: roles, events, and artifacts in practice.",
          },
          {
            period: "08.2025",
            role: "PCEP Certified Entry-Level Python Programmer",
            company: "Python Institute",
            description:
              "Official certification in Python fundamentals: programming logic, data types, control structures, and functions.",
          },
          {
            period: "03.2024",
            role: "First Aider & Electrically Instructed Person (EUP)",
            company: "Hermann Bergfort, Essen",
            description:
              "Certified first aid training and instruction as an electrically instructed person in a commercial environment.",
          },
          {
            period: "08.2019 - 02.2020",
            role: "Higher Education Entrance Qualification",
            company: "Westfalen-Kolleg, Bielefeld",
            description:
              "Obtained the general higher education entrance qualification through second-chance education — discontinued due to financial constraints.",
          },
          {
            period: "08.2015 - 05.2018",
            role: "Butcher Apprenticeship",
            company: "Heinrich Nölke GmbH & Co. KG, Versmold",
            description:
              "Completed vocational training with insights into production processes, quality control, and food hygiene.",
          },
        ],
      },
    },
    contact: {
      title: "Contact",
      kicker: "Let's Talk",
      description:
        "Do you have a project in mind or simply want to connect? Feel free to send me a message!",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      success: "Message sent! I'll get back to you soon.",
      error: "Please fill in all fields.",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with passion",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      currentStatus: "Enfoque actual",
      projects: "Proyectos",
      skills: "Skills",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      role: "Especialista en TI en Desarrollo de Aplicaciones",
      tagline:
        "Desarrollo aplicaciones web y móviles con pasión. Además, sigo profundizando en Android, Dart/Flutter y desarrollo de videojuegos, y también aporto experiencia práctica en administración y hosting de mis propios servidores.",
      cta: {
        projects: "Proyectos",
        skills: "Skills",
        experience: "Currículum",
      },
      contactCard: "Contacto",
    },
    about: {
      title: "Sobre mí",
      kicker: "Quién soy",
      bio: "Mis diversas experiencias profesionales me han hecho adaptable, estructurado y con muchas ganas de aprender. El pensamiento analítico, los conocimientos de TI y la atención al detalle me ayudan a resolver tareas con precisión y orientación a objetivos. Además del desarrollo de aplicaciones, gestiono mi propio servidor doméstico y adquiero experiencia activamente en Docker, Nginx, Cloudflare DNS y SSL, porque quiero entender no solo cómo se crea el software, sino también cómo se administra y cómo llega al mundo. Como desarrollador orientado al trabajo en equipo, busco activamente retos que me hagan avanzar tanto profesional como personalmente.",
      stats: {
        years: "Años de experiencia",
        projects: "Proyectos completados",
        tech: "Tecnologías",
        coffee: "Tazas de café",
      },
    },
    currentStatus: {
      title: "Enfoque actual",
      kicker: "En qué estoy trabajando ahora",
      items: {
        currentWork: {
          title: "Actualmente trabajo en",
          text: "Estoy trabajando en mi proyecto final de la IHK, en el que desarrollo un frontend para una página web de aprendizaje, comprendo la lógica detrás del backend y he implementado el subproyecto \"Resolución automatizada de dependencias con Bash y Git\".",
        },
        learning: {
          title: "Actualmente profundizo en",
          text: "En este momento me concentro especialmente en Bash, workflows de Git/GitHub, React, TypeScript y la estructura limpia de proyectos técnicos. Además, actualmente estoy desarrollando mi propio proyecto para profundizar y consolidar las habilidades que he aprendido.",
        },
        nextGoal: {
          title: "Próximo objetivo",
          text: "Quiero seguir fortaleciendo mi base técnica y desarrollar proyectos de forma que no solo funcionen, sino que también sean comprensibles y se presenten de manera profesional. Además, quiero profundizar mis conocimientos en desarrollo de software y especializarme en desarrollo full-stack y desarrollo de videojuegos.",
        },
      },
    },
    projects: {
      title: "Proyectos",
      kicker: "Una selección de mi trabajo",
      viewRepo: "Ver proyecto",
      liveDemo: "Demo en vivo",
      watchDemo: "Video demo",
      learnMore: "Más información",
      close: "Cerrar",
      items: [
        {
          name: "SONAR",
          description:
            "Conoces la situación: suena una canción, pero no sabes su nombre. SONAR resuelve exactamente eso: con solo pulsar un botón, la app escucha, analiza la señal de audio mediante la API de ACRCloud y te muestra en segundos el título, el artista y el álbum. Las canciones reconocidas se guardan automáticamente en tu biblioteca personal en Firebase Firestore. Desarrollada con Flutter y Dart, con una arquitectura de funcionalidades claramente separada y modo oscuro/claro.",
          tech: ["Flutter", "Dart", "Firebase", "ACRCloud", "Firestore", "Android"],
          repo: "https://github.com/WUDUPUPPE/musik_app"
        },
        {
          name: "Subproyecto de Scripts STEMgraph",
          description:
            "Durante mis prácticas desarrollé varios scripts de Bash para obtener automáticamente desafíos STEMgraph desde GitHub, resolver dependencias de forma recursiva y determinar rutas parciales entre desafíos. Además, utilizo LaTeX, Makefile y GitHub Releases para mi documentación, de modo que las versiones sean trazables y los PDF puedan generarse automáticamente.",
          tech: ["Bash", "Git", "JSON", "LaTeX", "Makefile", "GitHub Actions/Workflows"],
          repo: "https://github.com/WUDUPUPPE/STEMgraph-Scripts",
        },
        {
          name: "HomeServer",
          description:
            "Un antiguo PC gaming, replanteado: un servidor doméstico completamente montado por mí sobre Debian 13 con infraestructura Docker, reverse proxy propio, acceso VPN mediante Tailscale, Nextcloud, Jellyfin con transcodificación por GPU NVIDIA, Vaultwarden y bloqueador DNS de publicidad para toda la red.",
          tech: ["Debian", "Docker", "Nginx", "Cloudflare", "Tailscale", "Nextcloud", "Jellyfin", "Linux"],
        },
        {
          name: "Sitio web de aprendizaje Pflege-EXAM",
          description:
            "Mi novia necesitaba una herramienta de estudio específica para su examen final de enfermería, así que le construí una con sus materiales. Incluye más de 800 preguntas de examen de distintas áreas temáticas, coincidencia inteligente por palabras clave en lugar de comparación exacta de texto, entrenamiento de errores y un panel de estadísticas. Deliberadamente desarrollado sin framework: funciona completamente offline como un único archivo HTML.",
          tech: ["HTML5", "CSS3", "JavaScript", "localStorage"],
          repo: "https://github.com/WUDUPUPPE/Pflegefachkraft_Lernwebsite"
        },
        {
          name: "App-Launcher",
          description:
            "Un launcher de streaming para Android que reúne YouTube, Spotify y Crunchyroll en una sola aplicación. Incluye sistema de inicio de sesión, hash de contraseñas con BCrypt, base de datos SQLite y tres integraciones de API. Desarrollado en Java con un patrón manager limpio y principios de POO, como proyecto escolar durante mi formación como especialista en TI.",
          tech: ["Java", "Android", "SQLite", "YouTube API", "Spotify API", "XML"],
          repo: "https://github.com/WUDUPUPPE/App-Launcher"
        },
      ],
    },
    skills: {
      title: "Skills",
      kicker: "Lo que domino",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        tools: "Herramientas / Workflows / DevOps",
        design: "Diseño / UI",
        softskills: "Habilidades blandas",
        languages: "Idiomas",
      },
    },
    experience: {
      title: "Currículum",
      kicker: "Mi trayectoria",
      work: "Experiencia",
      education: "Formación complementaria",
      items: {
        work: [
          {
            period: "01.2025 – actualidad",
            role: "Especialista en TI en Desarrollo de Aplicaciones",
            company: "GFN Essen",
            description:
              "Reconversión profesional teórica y práctica de la IHK en desarrollo completo de software: planificación, programación, pruebas y documentación. Los contenidos incluyeron desarrollo orientado a objetos con Python y Java, diseño de bases de datos con SQL, desarrollo web con HTML/CSS y JavaScript, redes y sistemas cliente, desarrollo de interfaces de usuario, formación en seguridad informática y gestión de proyectos con métodos ágiles como Scrum.",
          },
          {
            period: "06.2024 - 11.2024",
            role: "Reorientación profesional con bono de formación aprobado",
            company: "Iniciativa propia",
            description:
              "Preparación orientada a objetivos para la reconversión profesional. Adquisición de los primeros conocimientos de programación.",
          },
          {
            period: "04.2023 - 05.2024",
            role: "Mecánico estructural para demolición y corte de hormigón",
            company: "Hermann Bergfort GmbH, Essen",
            description:
              "Trabajos de desmontaje y demolición en edificios, utilizando sistemas digitales de documentación para registrar procesos de trabajo.",
          },
          {
            period: "04.2022 - 02.2023",
            role: "Especialista en restauración de sistema",
            company: "PURINO, Mönchengladbach",
            description:
              "Coordinación de logística, pedidos y servicio: trabajo en equipo fiable bajo alta presión de tiempo.",
          },
          {
            period: "02.2020 - 12.2020",
            role: "Especialista en jardinería y paisajismo",
            company: "Loddemann GmbH, Versmold",
            description:
              "Ejecución de proyectos de jardinería y paisajismo en equipo.",
          },
          {
            period: "03.2019 - 09.2019",
            role: "Vendedor y auxiliar de almacén",
            company: "Netto GmbH, Versmold",
            description:
              "Preparación de pedidos, recepción de mercancías y atención al cliente (empleo temporal junto con los estudios universitarios).",
          },
          {
            period: "07.2018 - 02.2019",
            role: "Trabajador especializado en obras viales y subterráneas",
            company: "Wagemann GmbH, Versmold",
            description:
              "Uso de sistemas digitales de medición y tecnologías asistidas por GPS para la medición precisa de proyectos de construcción.",
          },
        ],
        education: [
          {
            period: "05.2024 – actualidad",
            role: "Autoaprendizaje",
            company: "Programación y desarrollo de software (e-learning)",
            description:
              "Paralelamente a mi reconversión profesional, profundicé de manera autodidacta en Flutter/Dart, React/Next.js, TypeScript y Firebase mediante el desarrollo de aplicaciones completas. También construí y administré mi propia infraestructura de servidor doméstico (Linux/Debian, Docker, servicios self-hosted). Además, utilizo activamente herramientas de IA como apoyo al desarrollo, optimización de workflows y prompt engineering.",
          },
          {
            period: "05.2026",
            role: "Carné de IA",
            company: "GFN Essen",
            description:
              "Conocimientos prácticos para un uso responsable de la IA: gestión de riesgos, fundamentos del prompting y directrices éticas en el trabajo con sistemas de IA.",
          },
          {
            period: "04.2026",
            role: "Formación en seguridad informática",
            company: "GFN Essen",
            description:
              "Formación sobre seguridad de la información, identificación y prevención de escenarios de amenaza, así como implementación de medidas concretas de protección.",
          },
          {
            period: "02.2026",
            role: "Scrum",
            company: "GFN Essen",
            description:
              "Fundamentos del trabajo ágil en proyectos con el marco Scrum: roles, eventos y artefactos en la práctica.",
          },
          {
            period: "08.2025",
            role: "PCEP Certified Entry-Level Python Programmer",
            company: "Python Institute",
            description:
              "Certificación oficial de fundamentos de Python: lógica de programación, tipos de datos, estructuras de control y funciones.",
          },
          {
            period: "03.2024",
            role: "Primeros auxilios y persona instruida en electricidad (EUP)",
            company: "Hermann Bergfort, Essen",
            description:
              "Formación certificada en primeros auxilios e instrucción como persona instruida en electricidad en un entorno profesional.",
          },
          {
            period: "08.2019 - 02.2020",
            role: "Acceso general a la educación superior",
            company: "Westfalen-Kolleg, Bielefeld",
            description:
              "Obtención del acceso general a estudios superiores por la vía de educación para adultos; interrumpido por dificultades económicas.",
          },
          {
            period: "08.2015 - 05.2018",
            role: "Formación profesional como carnicero",
            company: "Heinrich Nölke GmbH & Co.KG, Versmold",
            description:
              "Formación profesional completada con conocimientos sobre procesos de producción, control de calidad e higiene alimentaria.",
          },
        ],
      },
    },
    contact: {
      title: "Contacto",
      kicker: "Hablemos",
      description:
        "¿Tienes un proyecto en mente o simplemente te gustaría intercambiar ideas? ¡Escríbeme!",
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "Por favor, completa todos los campos.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      built: "Construido con pasión",
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
    if (stored === "de" || stored === "en" || stored === "es") setLangState(stored);
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
