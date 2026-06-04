# Modernes Developer Portfolio

Ein dunkles, bold gestaltetes Single-Scroll-Portfolio mit klaren Sektionen, smoothen Animationen und Sprachumschalter (DE/EN).

## Visueller Stil

- **Theme:** Dark Mode (tiefes Schwarz/Anthrazit with a bit purple Gradient Hintergrund), kräftige Akzentfarbe (z. B. elektrisches Lime/Cyan), große Typografie
- **Look:** Moderner Tech-Vibe – monospace Akzente, subtile Grid-/Noise-Hintergründe, glühende Hover-Effekte
- **Animationen:** Sanfte Fade-/Slide-Ins beim Scrollen, animierte Progress Bars, Hover-Glow auf Cards

## Sektionen

### 1. Hero

- Großer Name + Rolle ("Developer / Engineer")
- Kurzer Tagline-Satz
- CTA-Buttons: "Projekte",  "Skills", "Berufserfahrung" und "Lebenslauf"
- Social Links (GitHub, LinkedIn, Email, Adresse,Kontakt) hätte ich kerne in einem Kasten untereinander umrandet im header rechts
- Sprachumschalter DE/EN oben rechts

### 2. About / Vorstellung

- Foto/Avatar links, Bio-Text links
- Kurze persönliche Vorstellung
- Highlight-Stats (z. B. Jahre Erfahrung, Projekte, Tech-Stacks)

### 3. Projekte (Showcase)

Jedes Projekt als Card mit:

- **Diashow** der Projektbilder (Carousel mit Auto-Play + Pfeilen/Dots)
- Projektname, Beschreibung, verwendete Technologien (Tags)
- Optional **Live-Demo-Video** (anklickbar, öffnet im Modal/Lightbox oder als kleines Pop-Up)
- Button **"GitHub Repo"** mit Link nach öffnen des Modal/Lightbox/Pop-Up
- Optional Button **"Live Demo"** (externer Link)

### 4. Skills mit Prozenten

- Kategorien (Frontend, Backend, Tools, etc.)
- Pro Skill: Name + animierte Progress Bar mit Prozentwert (z. B. React 90%, TypeScript 85%)
- Bars animieren beim Scrollen ins Viewport
- Tech-Icons neben den Namen links oder darüber

### 5. Erfahrung / Timeline

- Vertikale Timeline mit Berufserfahrungen und Lebenslauf nebeneinander vielleicht auch untereinander
- Jeder Eintrag: Zeitraum, Position, Firma/Schule, Beschreibung

### 6. Kontakt / Footer

- Kontaktformular (Name, Email, Nachricht) mit Toast-Bestätigung
- Social Links nochmal
- Copyright

## Sprache

- DE/EN-Switch oben rechts (Globe-Icon mit Toggle)
- Alle Texte in beiden Sprachen, gespeichert in einem `translations.ts` Objekt
- Auswahl wird in localStorage gespeichert

## Technische Umsetzung

- TanStack Router mit einer Route (`/`) – langes Scroll-Layout mit Hash-Anchors für die Sektionen
- Komponenten unter `src/components/portfolio/` (Hero, About, Projects, Skills, Experience, Contact, Navbar, LanguageToggle)
- I18n: einfacher React Context + `useLanguage()` Hook
- Carousel via vorhandenem `src/components/ui/carousel.tsx`
- Video-Modal via `src/components/ui/dialog.tsx`
- Progress Bars via `src/components/ui/progress.tsx` + Intersection Observer
- Dark Theme als Default in `src/styles.css` (root bekommt `.dark` Klasse)
- Akzentfarbe wird im Design-System als `--primary` Token gesetzt
