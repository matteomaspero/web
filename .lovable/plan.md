

## Review & Enhance Publications Page

### 1. Sync content file (critical)

`src/pages/Publications.tsx` fetches `/src/content/publications.md`, which in production is served from `public/src/content/publications.md`. That mirror is currently stale (still the old list). I'll overwrite it with the new 54-entry list so the live site shows the updated publications including the new 2025 papers (SIOP-RTSG reply + main paper, SynthRAD2025, TrackRAD2025, MRgRT rectum delineation, robust DIR, OAR harmonization with LLMs, PET motion correction, paediatric upper-abdominal contouring, prostate MRI uncertainty corrections).

### 2. Correctness & readability fixes in `src/content/publications.md`

Small editorial cleanups while preserving Vancouver style:

- Entry 25 — "Koerkamp ML Groot" → reorder to **"Groot Koerkamp ML"** (correct surname ordering).
- Entry 5 — drop the redundant "(August 2025 issue)" text; keep `2025;3:287-310`.
- Entry 8/9/17/19/24/22 — confirm volume/issue/page formatting is consistent (`vol(issue):pages`).
- Entry 53 (Caccia M, Ebolese A, Maspero M…) — has no journal/year, looks like an orphan record; mark/remove or add the missing venue (likely a CAEN technical note). I'll flag it in a comment but keep visible until confirmed.
- Bold author marker is `**Maspero M**` everywhere — already consistent ✓.
- DOIs all start with `https://doi.org/10....` — already consistent ✓.

### 3. Maximize findability on `/publications` page

Current Publications page has tabs (All / Journal / Conference / Book) but no search and no year filter. I'll add:

- **Search box** — filter by title, author, journal, year (case-insensitive substring match across all fields).
- **Year filter chip row** — quick-select chips (2025, 2024, 2023, …) to scope the list.
- **Result count** — "Showing N of 54" updates live as filters change.
- **Sort toggle** — Newest first (default) / Oldest first.
- The tabs (Journal/Conference/Book) stay as a coarser filter and combine with search + year.

Findability for SEO/structured data:

- Add `<title>` and `<meta name="description">` updates via a small head update in `Publications.tsx` (using a simple `useEffect` on document.title — no helmet dep needed, matches existing pattern).
- Inject a JSON-LD `ScholarlyArticle` list block so search engines index each publication.

### 4. Add BibTeX export + descriptive table view

Two new affordances on the Publications page header:

**a. "Download .bib" button**
- Generates a BibTeX string client-side from the parsed publications array.
- Each entry: `@article{maspero2025synthrad, author = {…}, title = {…}, journal = {…}, year = {…}, doi = {…}}` — type `@inproceedings` for conference, `@incollection` for book.
- Citation key built from: first author lastname + year + first significant title word (lowercased, ASCII).
- Triggers a browser download of `maspero-publications.bib`.

**b. View toggle: Cards ↔ Table**
- Add a small icon toggle (Cards / Table) in the page header.
- Table view (using existing `src/components/ui/table.tsx`) with columns: **#, Year, Authors, Title, Journal, Type, DOI**. Title cell uses normal weight, authors render with bold Maspero M, DOI column is a link icon. Sortable by Year by clicking the header.
- Table is more scannable for a long list and supports Ctrl+F well (boosts findability further).

### Files affected

- `public/src/content/publications.md` — overwrite with updated 54-entry list (mirror of `src/content/publications.md`).
- `src/content/publications.md` — small editorial fixes (Groot Koerkamp ordering, drop "(August 2025 issue)").
- `src/pages/Publications.tsx` — add search/year/sort filters, view toggle (cards/table), BibTeX download, document.title + JSON-LD, parse `type` more reliably (recognize "Med Phys" abstracts and "Proc Intl Soc Mag Reson Med" as conference; "In:" / "IOP Publishing" as book).
- No new dependencies.

### Out of scope

- Updating the 6 highlighted publications shown on the homepage (`PublicationsSection.tsx`) — current selection is still representative; ask separately if you want this refreshed with a 2025 paper.

