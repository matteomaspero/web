## Revise team, credentials, and publications

### 1. Add three new current MSc students

In `src/components/TeamSection.tsx`, append to `students` (status `current`, role `msc`) with placeholder topics/tags to be filled in later:

- **Imane El Idrissi** — period `Jun 2026 - Mar 2027` — topic: `TBD (thesis in progress)`
- **Vasileios Rotsas** — period `Aug 2026 - Jun 2027` — topic: `TBD (thesis in progress)`
- **Sofia Ruggeri** — period `Oct 2026 - Mar 2027` — topic: `TBD (thesis in progress)`

The "Current Students" grid already renders any `status: current` entries, so it will show the two existing (Ding, Melinarskiy) plus these three in a responsive 3-column grid — no layout code changes required.

### 2. Reflect NVKF certification (staff at UMC Utrecht since 15 Aug 2026)

Small copy update so this is discoverable:

- `src/content/hero.md` and `public/src/content/hero.md` — tighten the intro to: `Assistant Professor and Clinical Medical Physicist (NVKF-certified, Aug 2026) at UMC Utrecht.` Keep the rest of the paragraph.
- Verify no stray "in-training" copy remains anywhere (`rg -i "in.?training"`).
- No new section added unless you want one — keeping it in the hero preserves the minimalist layout.

### 3. Publications sweep — add missing recent papers

Findability step (research, then edit):

1. Search Google Scholar + arXiv for `Maspero M` publications dated 2025–2026 that are NOT already in `src/content/publications.md`.
2. For each new item, add a Vancouver-style entry consistent with existing formatting: authors with **Maspero M** bolded, title, venue, year, DOI/arXiv link, and `type` (journal / preprint / conference).
3. Preserve chronological ordering (newest first) and re-generate the BibTeX export used by the Publications page so the `.bib` download stays in sync.
4. Mirror updates in `public/src/content/publications.md`.

If any candidate paper is ambiguous (co-author order, in-press status, preprint vs accepted version), I'll list them at the end of the change with a one-line question rather than guessing.

### Files affected

- `src/components/TeamSection.tsx`
- `src/content/hero.md`, `public/src/content/hero.md`
- `src/content/publications.md`, `public/src/content/publications.md`
- Any codebase reference to "in-training" (scan)

### Out of scope

Topic descriptions, tags, and thesis links for the three new students (placeholders now, fill in when known).
