# Update publications, talks and upcoming events

Content-only changes. Every content file is edited in `src/content/` and mirrored in `public/src/content/`. No restyling.

## 1. Publications (top of 2026 list, newest first)

Add two papers that are not on the site yet and update one existing entry.

1. **Prostate MR-guided RT registration** (new)
   Zachiu C, Bol GH, Kotte ANTJ, Willigenburg T, **Maspero M**, Savenije MHF, de Boer JCJ, van der Voort van Zyp JRN, van den Berg CAT, Raaymakers BW. Deep learning-enhanced image registration for accelerating daily adaptive magnetic resonance imaging-guided prostate radiotherapy. Phys Imaging Radiat Oncol. 2026;40:101052. DOI 10.1016/j.phro.2026.101052
2. **COBRA2026 dataset paper** (new)
   Thummerer A, Rit S, Kamp F, **Maspero M**, Intven MPW, Boné TG, Kurz C, Landry G, Baudier T, Kadhim M, Arnold J, Rauter M, Knäusl B, Zimmermann L. COBRA2026: a large-scale multicenter pelvic cone-beam computed tomography projection dataset. arXiv preprint. 2026. arXiv:2607.20037 (dataset on Zenodo)
3. **van Lune et al.** (update existing entry 7)
   Replace the arXiv preprint line with the journal version: Med Image Anal. 2026:104295, DOI 10.1016/j.media.2026.104295.

The existing numbered list is renumbered. The Publications page search, filters, BibTeX export and JSON-LD read the markdown, so they pick the new items up automatically.

## 2. Invited talks (`talks.md`)

- **MICCAI 2026 MIART keynote**: date "1 October 2026", location Strasbourg, France, link to https://miart-workshop.github.io/ (already linked; confirm date format).
- **Time to Adapt, Olbia**: date "10–12 September 2026", link changed from the programme PDF to the official event page https://materolbia.com/news/congresso-fisica-medica/ (the PDF stays reachable from that page).
- **New talk**: "AI in de radiotherapie: status en perspectief", FMIR 2026, 2 June 2026, Turin, Educational, linked to the FMIR session page.

Both events are already in the file, so this is a correction, not a duplicate.

## 3. Events in the pipeline (`Projects.tsx`)

- **AIinRT 2027** (1–2 April 2027, Utrecht, Co-Organizer): refresh the highlights with current dates: abstract deadline 1 Dec 2026, registration open since 1 Oct 2026 and closing 1 Mar 2027; venue UMC Utrecht and Princess Máxima Center; double-blind review, about 200 participants. Link stays https://aiinrt.org.
- **COBRA2026**: add "Final event at MIDL 2027" and a link to the dataset paper and Zenodo record.
- No other upcoming events found beyond these two.

## Technical details

- Files: `src/content/publications.md`, `src/content/talks.md` (+ `public/src/content/` mirrors), `src/pages/Projects.tsx`.
- Talks parser splits on " - ", so the en dash in "10–12 September 2026" is safe; year grouping uses the 4-digit year.
- Sources: arXiv 2607.20037 / Zenodo 21322350, UMC Utrecht research info (Zachiu et al.), MedIA DOI cited in the author's GitHub repo, EFOMP/Mater Olbia event pages, MIART LinkedIn, FMIR 2026 session page, aiinrt.org announcements.
