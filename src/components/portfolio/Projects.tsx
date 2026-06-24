import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Github, ExternalLink, Play, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

import p1a from "@/assets/project-1-a.jpg";
import p1b from "@/assets/project-1-b.jpg";
import p2a from "@/assets/project-2-a.jpg";
import p2b from "@/assets/project-2-b.jpg";
import p3a from "@/assets/ExamWebsite.png";
import p3b from "@/assets/AlleKrankheitsbilder.png";
import p3c from "@/assets/Fragen.png";
import p4a from "@/assets/project-1-a.jpg";
import p4b from "@/assets/project-1-b.jpg";
import p5a from "@/assets/project-1-a.jpg";
import p5b from "@/assets/project-1-a.jpg";
import p6a from "@/assets/All.png";
import p6b from "@/assets/Rekursiv.png";
import p6c from "@/assets/Subgraph.png";

interface ProjectMeta {
  images: string[];
  repo: string;
  demo?: string;
  video?: string;
}

const projectsMeta: ProjectMeta[] = [
  {
    images: [p1a, p1b],
    repo: "https://github.com/WUDUPUPPE/musik_app",
    demo: "",
    video: "",
  },
  {
    images: [p2a, p2b],
    repo: "",
  },
  {
    images: [p3a, p3b, p3c],
    repo: "https://github.com/WUDUPUPPE/Pflegefachkraft_Lernwebsite",
    video: "",
  },
  {
    images: [p4a, p4b],
    repo: "https://github.com/WUDUPUPPE/App-Launcher"
  },
  {
    images: [p5a, p5b],
    repo: "https://github.com/WUDUPUPPE/CostumerManagement"
  },
  {
    images: [p6a, p6b, p6c],
    repo: "https://github.com/WUDUPUPPE/STEMgraph-Scripts/tree/main"
  }
];

export function Projects() {
  const { t } = useI18n();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = t.projects.items.map((it, i) => ({ ...it, ...projectsMeta[i] }));

  return (
    <section id="projects" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">
            // {t.projects.kicker}
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.projects.title}
          </h2>
        </div>

        <div className="projects-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
          {items.map((p, i) => (
            <article
              key={p.name}
              className="snap-start shrink-0 w-[90%] sm:w-[45%] lg:w-[calc(33.333%-1rem)] group relative overflow-hidden rounded-2xl border border-border bg-gradient-card backdrop-blur transition-all hover:border-primary/50 hover:shadow-glow"
            >
              <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 4000 + i * 500, stopOnInteraction: false })]}
              >
                <CarouselContent>
                  {p.images.map((src, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={src}
                          alt={`${p.name} screenshot ${idx + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 h-8 w-8" />
                <CarouselNext className="right-2 h-8 w-8" />
              </Carousel>

              <div className="p-6">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-4">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIdx(i)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Play className="h-4 w-4" />
                  {p.video ? t.projects.watchDemo : p.repo ? t.projects.viewRepo : t.projects.learnMore}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog
        open={openIdx !== null}
        onOpenChange={(o) => !o && setOpenIdx(null)}
      >
        <DialogContent className="max-w-3xl border-border bg-card p-0">
          {openIdx !== null && (
            <div className="flex flex-col">
              {items[openIdx].video ? (
                <video
                  src={items[openIdx].video}
                  controls
                  autoPlay
                  className="aspect-video w-full bg-black"
                />
              ) : (
                <img
                  src={items[openIdx].images[0]}
                  alt={items[openIdx].name}
                  className="aspect-video w-full object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold">{items[openIdx].name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {items[openIdx].description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {items[openIdx].repo && (
                    <a
                      href={items[openIdx].repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-4 py-2 text-sm font-semibold transition-colors hover:border-primary/60"
                    >
                      <Github className="h-4 w-4" />
                      {t.projects.viewRepo}
                    </a>
                  )}
                  {items[openIdx].demo && (
                    <a
                      href={items[openIdx].demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t.projects.liveDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
