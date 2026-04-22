

## Update Profile, Add COBRA2026 Challenge & New Initiatives

### 1. Profile update — drop "in-training"

Matteo became a fully certified Clinical Medical Physicist in August 2026. Update wording everywhere:

- `src/content/hero.md` — already says "Assistant Professor and Medical Physicist". Verify and align with mirror.
- `public/src/content/hero.md` — currently "Assistant Professor and Clinical Medical Physicist-in-Training at UMC Utrecht". Replace with: **"Assistant Professor and Clinical Medical Physicist at UMC Utrecht"** (keep rest of paragraph).
- Search the codebase for any other "in-training" / "in training" mentions (e.g. About blurbs, meta tags, footer, contact.md) and update them consistently.

### 2. New project: COBRA2026

Add to `src/pages/Projects.tsx` projects array as a new **active** entry:

- **Title**: COBRA2026
- **Description**: "Grand challenge on CBCT reconstruction from sinograms using deep learning"
- **Long description**: International grand challenge on CBCT reconstruction from raw sinogram data using deep learning, on multi-vendor datasets. Aims to benchmark DL-based reconstruction approaches for cone-beam CT in image-guided and adaptive radiotherapy.
- **Role**: Lead Organizer (confirm with user if different — assumed based on SynthRAD/TrackRAD pattern)
- **Status**: active · **Year**: 2026
- **Highlights**: "Multi-vendor CBCT data", "Sinogram-to-image DL reconstruction", "Radiotherapy applications"
- **Links**: placeholder challenge site `https://cobra2026.grand-challenge.org/` (flagged — confirm URL)

### 3. New initiatives section (educational tools + apps)

The current Projects page only shows research challenges and DLinRT.eu. Add two new entries for the Lovable-built tools:

**EduPlan-RT**
- Description: "Educational treatment planning system for radiotherapy teaching"
- Role: Creator · Status: ongoing · Year: 2025-Present
- Link: https://eduplan-rt.lovable.app/
- Highlights: "Web-based TPS", "Teaching tool", "Open access"

**RT Complexity Lens**
- Description: "App and Python package for radiotherapy plan complexity analysis"
- Role: Creator · Status: ongoing · Year: 2025-Present
- Links: https://rt-complexity-lens.lovable.app/ (and Python package link if available — will ask)
- Highlights: "Plan complexity metrics", "Interactive web app", "Python package"

### 4. New focus project: AI-based treatment planning

Add as a research focus / active project entry:

- **Title**: AI-based Treatment Planning
- **Description**: "Deep learning approaches for automated radiotherapy treatment planning"
- **Status**: active · **Year**: 2024-Present
- **Role**: Principal Investigator
- **Highlights**: "Dose prediction", "Plan automation", "Clinical translation"
- No external links (internal research focus) — or link to a relevant publication if user provides one.

Also reflect this in `src/content/research.md` and its `public/` mirror by adding a fourth research-focus block "AI-based Treatment Planning" so the homepage Research section surfaces it. Note: `ResearchSection.tsx` hardcodes 3 cards — extend the array to include the new focus area (4-card responsive grid: `md:grid-cols-2 lg:grid-cols-4`).

### Files affected

- `src/content/hero.md` + `public/src/content/hero.md` — remove "in-training"
- `src/content/research.md` + `public/src/content/research.md` — add AI-based Treatment Planning block
- `src/components/ResearchSection.tsx` — add 4th research card, adjust grid to 4 columns on lg
- `src/pages/Projects.tsx` — add COBRA2026, EduPlan-RT, RT Complexity Lens, AI-based Treatment Planning entries
- Codebase scan for any other "in-training" copy → update in place

### Open questions (will ask before implementing)

1. COBRA2026 — your role (Lead Organizer?) and the official challenge URL, if it exists yet.
2. RT Complexity Lens — is there a separate Python package URL (PyPI / GitHub) to link alongside the web app?

