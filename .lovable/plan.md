## Refresh research focus + projects highlights

### 1. Research focus copy — deduplicate

`src/content/research.md` and `public/src/content/research.md` currently repeat "deep learning" and mention treatment planning both under a focus card and under "Current Projects". Rewrite so each of the four cards has a distinct angle, then trim the "Current Projects" block to avoid saying the same thing twice.

Proposed cards (concise, non-overlapping):

- **Adaptive Radiotherapy** — Online/offline MR-guided adaptation workflows enabling daily plan re-optimisation.
- **Image Synthesis** — Synthetic CT from MRI and CBCT for MRI-only and CBCT-guided treatment planning (SynthRAD initiative).
- **AI for Segmentation & Registration** — Robust auto-contouring and deformable registration across anatomies and vendors.
- **AI-based Treatment Planning** — Dose prediction and plan automation, from research prototypes to clinical translation.

"Current Projects" block collapses to a single short paragraph about ongoing head-and-neck / paediatric planning work, no bullet list (bullets duplicate the cards).

### 2. Projects page — reorder + drop highlight chips

In `src/pages/Projects.tsx`:

- Move **SynthRAD2025** to the top of the `projects` array (currently 5th) so it leads the page. COBRA2026 follows, then the other active initiatives, then completed work.
- Remove the `highlights` chip row from the card render (keep the `highlights` field in the data for now, just stop rendering it) — the chips repeat what the description already says and add visual noise. Status + year badges stay.

### 3. High-impact recent work — surface on Projects page

Add short "Featured outputs" links inline in the two flagship entries, drawn from confirmed publications already in `publications.md`:

- **SynthRAD2025**: add link to the 2026 challenge report (arXiv:2605.13555) and the 2025 dataset paper (Med Phys, doi 10.1002/mp.17981) alongside the existing challenge site.
- **TrackRAD2025**: add link to the 2026 Med Image Anal report (doi 10.1016/j.media.2026.104134) alongside the existing site + preprint.

No new project entries; only link additions using the existing `links` array shape.

### Files affected

- `src/content/research.md`, `public/src/content/research.md`
- `src/components/ResearchSection.tsx` (card titles/descriptions currently hardcoded — update to match)
- `src/pages/Projects.tsx`

### Out of scope

- Publications list itself (already refreshed last turn).
- Adding new projects beyond the reorder/link additions.
- Visual redesign of cards.

### Please confirm before I implement

1. OK with the four rewritten focus cards above, or do you want different groupings (e.g. keep "AI in Medical Imaging" as a card)?
2. OK to fully hide the highlight chips on Projects, or would you rather keep them only on the top 2 (SynthRAD2025, COBRA2026)?
3. Any other 2025–2026 paper you'd like featured on a specific project card that isn't listed above?
