

## Audit Report: Links, DOIs, and Thesis Files

### Issues Found

#### 1. BROKEN DOI - Publication #40 (Critical)
**File:** `src/content/publications.md`, line 81
- **Current:** `[DOI](https://doi.org/j.clon.2018.08.009)` -- missing the `10.1016/` prefix
- **Fix:** `[DOI](https://doi.org/10.1016/j.clon.2018.08.009)`

#### 2. WRONG DOI - Publication #39 (Critical)
**File:** `src/content/publications.md`, line 79
- Publication title: "Feasibility of magnetic resonance imaging-only rectum radiotherapy..."
- Journal listed: `Phys Imaging Radiat Oncol. 2018;7:54-68`
- **Current DOI:** `https://doi.org/10.1016/j.clon.2018.08.009` -- this points to Clinical Oncology (pub #40's journal), not PHIRO
- **Fix:** `https://doi.org/10.1016/j.phro.2018.09.002` (verified working, resolves to the correct PHIRO article)

#### 3. ALL MSc Thesis PDF Links Are Broken (Critical)
**File:** `src/components/TeamSection.tsx`
The `public/theses/` directory contains only a `README.md` -- no actual PDF files. All 10 thesis links return 404:

| Student | Broken Link |
|---------|------------|
| Adine van Wier | `/theses/2023-van-wier-adine.pdf` |
| Xabier Arregui Garcia | `/theses/2023-arregui-garcia-xabier.pdf` |
| Konstantinos Drymas Vrakidis | `/theses/2022-drymas-vrakidis-konstantinos.pdf` |
| Vish Sundar | `/theses/2022-sundar-vish.pdf` |
| Lotte Nijskens | `/theses/2022-nijskens-lotte.pdf` |
| Luuk Jacobs | `/theses/2022-jacobs-luuk.pdf` |
| Aishwarya M Gurusamy | `/theses/2021-gurusamy-aishwarya.pdf` |
| Alexandru Moraru | `/theses/2021-moraru-alexandru.pdf` |
| Maria Leousi | `/theses/2021-leousi-maria.pdf` |
| Laura G Bentvelzen | `/theses/2020-bentvelzen-laura.pdf` |

**Options:** Either upload the PDF files to `public/theses/`, or remove the thesis links until files are available (to avoid broken links).

#### 4. LinkedIn URL Mismatch (Minor)
**File:** `src/components/Hero.tsx`, line 60
- **Current:** `https://www.linkedin.com/in/matteo-maspero-9a8629b0/`
- **UMC Utrecht profile links to:** `https://www.linkedin.com/in/matteo-maspero`
- These may both work (redirect), but worth confirming which is canonical.

#### 5. Publications Missing DOIs (Informational)
Publications #46, #47, #48, #50, #51, #52, #53 have no DOI links. These appear to be conference abstracts (ISMRM, ESTRO proceedings, AAPM), which often don't have DOIs -- so this is likely intentional. No action needed unless DOIs exist.

---

### Verified Working Links

| Link | Status |
|------|--------|
| Iris Kolenbrander PhD Thesis (pure.tue.nl) | OK |
| Iris Kolenbrander Publications (research.tue.nl) | OK |
| Maarten Terpstra Profile (research.umcutrecht.nl) | OK |
| UMC Utrecht profile (research.umcutrecht.nl/researchers/maspero/) | OK |
| All DOIs spot-checked (except #39 and #40) | OK |
| All talk event URLs | OK |
| All project challenge site URLs | OK |
| ORCID, Google Scholar, ResearchGate links | OK |
| Bluesky profile link | OK |

---

### Proposed Fixes

1. **Fix DOI #40** in `src/content/publications.md` -- add missing `10.1016/` prefix
2. **Fix DOI #39** in `src/content/publications.md` -- change to correct PHIRO DOI
3. **Sync** `public/src/content/publications.md` with the corrected version
4. **Remove or hide thesis links** for MSc alumni until PDFs are uploaded (to avoid broken 404 links), or mark them as "Thesis (coming soon)"
5. **Normalize LinkedIn URL** to `https://www.linkedin.com/in/matteo-maspero`

