import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { CurrentStatus } from "@/components/portfolio/CurrentStatus";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tejani Awudu Mohammed — Fachinformatiker für Anwendungsentwicklung" },
      {
        name: "description",
        content:
          "Portfolio von Tejani Awudu Mohammed — Junior Entwickler. Projekte, Skills, Erfahrung und Kontakt.",
      },
      { property: "og:title", content: "Tejani Awudu Mohammed — Junior Entwickler Portfolio" },
      {
        property: "og:description",
        content:
          "Fachinformatiker für Anwendungsentwicklung aus Gelsenkirchen. Projekte mit Android, Dart/Flutter, GoDot4, Server-Hosting, React, TypeScript, Node.js und mehr.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="dark relative min-h-screen bg-background text-foreground">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-[160px]" />
        <Navbar />
        <main>
          <Hero />
          <About />
          <CurrentStatus />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </I18nProvider>
  );
}
