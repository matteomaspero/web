## Add AIinRT2027 symposium to Projects

Add a new entry near the top of `projects` in `src/pages/Projects.tsx`:

- **id**: `aiinrt2027`
- **title**: `AIinRT 2027`
- **description**: "Scientific symposium on Artificial Intelligence in Radiotherapy"
- **longDescription**: "International symposium in Utrecht bringing together the AI-in-radiotherapy community. Organised by UMC Utrecht (Computational Imaging Group) in collaboration with the Princess Máxima Center and DLinRT.eu. Programme built from peer-reviewed abstract submissions; attendee registration handled separately."
- **role**: `Co-Organizer` (signals organizer status; matches existing role vocabulary and renders as a visible badge on the card)
- **status**: `active` (renders as "Active" badge — closest existing status for an upcoming event; no new status introduced)
- **year**: `2027`
- **links**:
  - `{ label: "Symposium Site", url: "https://aiinrt.org", icon: "site" }`
  - `{ label: "Previous edition (2026)", url: "https://aiinrt.org/2026/index.html", icon: "site" }`
- **highlights**: `["1–2 April 2027, Utrecht", "Call for Abstracts opens Sep 1, 2026", "UMC Utrecht × Princess Máxima × DLinRT.eu"]`

Placement: insert immediately after `synthrad2025` and `cobra2026`, before `ai-treatment-planning`, so the two flagship active challenges lead and the upcoming symposium follows.

## Link verification

`https://aiinrt.org` was fetched successfully (returned the AIinRT2027 landing page). Using the URL exactly as `https://aiinrt.org` (no `www`, `https` scheme) per the request.

## Out of scope

- No new "Upcoming Events" section or new status type — the existing `active` badge plus the "1–2 April 2027" highlight and the Co-Organizer role communicate both the upcoming date and the organizer role. If you'd rather have a dedicated Upcoming Events section on the Talks page, say so and I'll switch approaches.
- No changes to Talks page or content markdown.
