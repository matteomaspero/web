## Goal

Update the Invited Talks page and the Student Supervision section with newly-provided information.

## Changes

### 1. Add 5 new 2026 talks to `src/content/talks.md` and `public/src/content/talks.md`

Insert at the top (chronological, newest first). Titles, exact dates and URLs will be filled in from a live web search (already dispatched). Placeholder entries:

- **ESTRO 2026 (Copenhagen, May 2026)** – ORE (Optimisation, Reconstruction, Evaluation) pre-meeting course. Type: `Educational`.
- **ESTRO 2026 (Copenhagen, May 2026)** – Best in Physics proffered papers, "SynthRAD2025 challenge report". Type: `Best Proffered Papers`.
- **MIART workshop @ MICCAI 2026 (Oct 1, 2026)** – Keynote. Type: `Seminar` (or new `Keynote` type — see question below).
- **Time to Adapt 2026, Olbia, Italy (Sep 9, 2026)** – Talk on AI. Type: `Seminar`.
- **SSRMP annual meeting, Switzerland (March 2026)** – Overview of AI in Radiotherapy. Type: `Educational`.

Format matches existing entries:

```
### <Title>
<Event> - <Month Year> - <City, Country> - <Type>
<URL>
```

### 2. Move Bar Melinarskiy from Current MSc → MSc Alumni in `src/components/TeamSection.tsx`

- Change `status: "current"` → `"alumni"`, update `period: "2025-2026"` → `"2026"` (or keep).
- Search for a public thesis link (TU Delft / UU repository) — dispatched. If found, add to `links`; if not, keep topic line and note "Thesis available upon request".

### 3. Optional: introduce a `Keynote` type

If desired, add a new badge color + icon (e.g. `Star`) in `TalksSection.tsx` and `Talks.tsx` for keynote presentations. Otherwise MIART keynote uses the existing `Seminar` type.

## Open question

Should the MIAT keynote get its own **Keynote** talk type (new color/icon), or reuse `Seminar`?

Introduce a keynote

## Files touched

- `src/content/talks.md`
- `public/src/content/talks.md`
- `src/components/TeamSection.tsx`
- (optional) `src/components/TalksSection.tsx`, `src/pages/Talks.tsx` for new Keynote type