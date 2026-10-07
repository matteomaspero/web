# Downloadable CV (PDF), password-gated

## What you get
- A "Download CV" button (header + Home/Contact area).
- Clicking it asks for a password; only `CiaoTeo!` starts the download. Note: this is light protection on a public site, not real security.
- The PDF is generated in the browser, styled after your uploaded CV but cleaner: name + contact block, "Curriculum Vitae / Updated on <today>", section headings in #0050B2, two-column date | content rows, consistent spacing, page numbers "x/y".
- Phone number and birth date are left out (work address, email, LinkedIn, Bluesky, OpenAlex only).

## Content
- Sections from your PDF: Education, Work Experience (Medical Physicist since Aug 2026, Assistant Professor, earlier roles; resident role ended 2026), Teaching, Editorial, Others, Awards (Best in Physics 2026/2024, Outstanding Reviewer), Memberships, Skills, Languages, Interests, Driving licence.
- Publications: pulled automatically from the website's publication list, so the CV always matches the site. One uniform Vancouver style, grouped by year (newest first), "Maspero M" in bold, journal in italics, DOI/arXiv link at the end. Fixes inconsistencies from the old PDF (e.g. "M. Matteo, L. Guillaume", mixed bold journals, missing years).

## Technical details
- New `src/content/cv.ts` with typed CV data (TypeScript interfaces); publications parsed from `src/content/publications.md` with the existing parser logic (extracted into a shared util).
- PDF built with `jspdf` (lazy-loaded on click), Helvetica, A4, auto page breaks.
- `src/components/CvDownloadButton.tsx` uses existing shadcn Dialog + Input for the password prompt.
- Verify by generating a sample PDF and visually checking every page.
