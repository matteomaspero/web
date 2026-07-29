## 1. OpenAlex official icon

OpenAlex brand page only ships PNG assets — the tricon mark at `https://openalex.org/brand-assets/openalex-mark.png` (dark on light) and `openalex-mark-white.png` (white on dark). Their guidance is: don't recolor or restyle.

- Download both into `src/assets/openalex-mark.png` and `src/assets/openalex-mark-white.png` and import as ES6 assets.
- **Hero** (`src/components/Hero.tsx` line 95-103): replace the generic `<ExternalLink />` icon with `<img src={openAlexMark} alt="OpenAlex" className="h-4 w-4 object-contain" />`, matching the ORCID chip style already there.
- **Footer** (`src/components/Footer.tsx` line 36-41): replace the fabricated inline SVG with `<img src={openAlexMarkWhite} alt="OpenAlex" className="h-6 w-6 object-contain" />` (white variant works on the navy background — same pattern as ORCID's `brightness-200` image next to it, but we use the proper white asset instead of inverting).

## 2. Audit fixes (correctness / consistency / completeness)

Confirmed issues from the codebase scan:

**LinkedIn URL mismatch**
- `src/components/Hero.tsx:60` → `https://www.linkedin.com/in/matteo-maspero`
- `src/components/Footer.tsx:14` → `https://www.linkedin.com/in/matteo-maspero-9a8629b0/`
- Fix: use the canonical vanity URL `https://www.linkedin.com/in/matteo-maspero-9a8629b0/` in both places (it's the working, ID-stable one).

**Hero profile chips use a generic `ExternalLink` icon for every service** (only ORCID has its real logo). Inconsistent with the Footer, which has real brand marks for LinkedIn / Bluesky / Google Scholar. Fix in Hero: use the same inline SVGs already present in Footer for LinkedIn, Bluesky, Google Scholar; use official ORCID and (new) OpenAlex marks. ResearchGate keeps the generic icon (no free brand mark bundled).

**Cross-page nav broken from non-Index routes** (`Header.tsx` and `Footer.tsx`):
- Header brand: `<a href="#hero">` → `<Link to="/">`.
- Header items Research / Supervision / Teaching / Awards / Editorial / Contact use `href="#..."`. From `/publications`, `/talks`, `/projects` these do nothing. Fix: convert to `<Link to="/#research">` etc. (react-router `BrowserRouter` + a small `useEffect` on Index that scrolls to `location.hash` on mount handles the anchor after route change).
- Footer Quick Links: same fix; also add missing entries **Supervision**, **Awards**, **Editorial**, and **Projects** (`/projects`) so the column mirrors the header.

**Content mirror drift**
- `src/content/talks.md` vs `public/src/content/talks.md` differ on one line — "Università" (accented) vs "Universita". Sync to the accented form.

**index.html metadata polish**
- Title is fine. `meta name="description"` is generic ("Academic Portfolio for Matteo Maspero, Assistant Professor at UMC Utrecht"). Tighten to include key topics ("AI for adaptive radiotherapy, image synthesis, treatment planning") for SEO, mirrored into `og:description` and add `twitter:card=summary_large_image`, `twitter:title`, `twitter:description`.

**Non-issues verified**
- All Header hash anchors have matching `id` sections on Index — no dangling anchors.
- Projects page ordering already matches: SynthRAD2025 → COBRA2026 → AIinRT 2027 → AI-based TP → EduPlan-RT → RT Complexity Lens → DLinRT.eu → SynthRAD2023 → TrackRAD2025.
- No stale "in-training" references remain about Matteo (`Projects.tsx:99` "students and trainees" refers to the EduPlan-RT audience, correct as-is).

## 3. Explicitly deferred

- Full page-per-tab restructure (a prior plan you didn't approve to build). Kept the anchor-based approach and only fixed cross-route breakage.
- ResearchGate brand mark (not freely distributed — keeping generic icon).

## Files touched

- `src/assets/openalex-mark.png`, `src/assets/openalex-mark-white.png` — new
- `src/components/Hero.tsx` — icon swaps, LinkedIn URL
- `src/components/Footer.tsx` — OpenAlex icon, Quick Links expansion + `<Link>` conversion
- `src/components/Header.tsx` — brand link + `<Link>` conversion for anchor tabs
- `src/pages/Index.tsx` — small `useEffect` to honor `location.hash` on mount
- `public/src/content/talks.md` — sync "Università"
- `index.html` — tightened description + Twitter tags

A running `acp_subagent--explore` audit will finish shortly; if it surfaces anything beyond the above, I'll add those items when we're in build mode.
