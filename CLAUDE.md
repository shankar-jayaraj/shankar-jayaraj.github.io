# CLAUDE.md — session handoff

## Standing rules
- Do NOT edit existing site content (HTML pages, assets) without explicit approval from Shankar.
- Ask before creating or distributing any new deliverable file.
- Site is a GitHub Pages personal brand site for Shankar J (PhD scholar, EEG/BCI, NIT Calicut; speaker/FDP trainer). Branch: main. Deploys directly from main.

## Project layout
- Static site, no build step. Root HTML pages: index, about, research, speaking, resources, contact.
- `assets/css/revamp.css` + `assets/js/revamp-main.js` power the current design (Poppins/Montserrat, cards, tags, btn-blue/btn-ghost/btn-lime).
- Sub-folders act as mini-apps/pages: `bundle/` (research tools), `text_format/` (LinkedIn Post Cleaner), `landing/`, `ieeewieils2025/`.
- `resources.html` has a card "LinkedIn checklist for researchers" whose CTA is a WhatsApp deep link (+91 9344775577) — the checklist file itself did not exist yet.

## Current state (2026-07-20)
- DONE: "The LinkedIn Credibility Checklist" (2026 Edition) — 16-page A4 PDF, verified page by page. Final file: `E:\Github\linkedin-checklist\LinkedIn-Credibility-Checklist-2026-Shankar-J.pdf` (1.2 MB, metadata set). Source HTML + local woff2 fonts in `E:\Github\linkedin-checklist\source\` — kept OUTSIDE the repo on purpose so GitHub Pages doesn't host the PDF (Substack is the conversion gate).
- Distribution decision (Shankar): deliver via Substack at https://drshankarj.substack.com to convert site visitors to subscribers. Shankar still needs to upload the PDF to a Substack post.
- DONE: resources.html edited (approved): checklist card now titled "The LinkedIn Credibility Checklist", tag widened to students/researchers/professionals, CTA → "Get it free on Substack" (was WhatsApp deep link); meta + og descriptions updated. Changes are UNCOMMITTED — Shankar to review/commit.
- Rebuild recipe: edit `source/checklist.html` (16 fixed 210×297mm .page divs), render with: `chrome --headless --user-data-dir=<writable tmp> --no-pdf-header-footer --print-to-pdf=out.pdf file:///...checklist.html` (Chrome must write to a plain dir, e.g. C:\Users\Admin\AppData\Local\Temp\pdfwork — scratchpad write was denied), then re-add metadata via pypdf.
- Content grounded in: van der Blom Algorithm Insights Report (1.8M posts); LinkedIn official stats (photo 21×/36×, skills 17×, All-Star 40×); Edelman–LinkedIn 2025 (73%/75%/86%); Nature Careers 2024–25; SSI benchmarks; frameworks from Arruda, Dorie Clark, Justin Welsh, Lara Acosta, Jasmin Alić, Lorraine K. Lee.
- DONE (2026-07-20, later session): Substack post copy + LinkedIn launch post + pinned comment (growth-vs-leads) delivered in chat. NEW: link-in-bio hub built at `links/index.html` → https://shankar-jayaraj.github.io/links/ — dark ink brand style matching PDF cover, primary lime card = Substack checklist (utm_source=linkhub), then Post Cleaner/bundle/notebooks/AI-workflow, "Work with me" group (speaking, Topmate, media kit), socials row. Verified at true 375px via iframe harness (headless Chrome clamps windows to ~500px — screenshot artifact, not a bug) + desktop. UNCOMMITTED. No existing pages touched; nav/footer wiring NOT done (needs approval).
- LinkedIn profile plan (can't fetch profile — HTTP 999 login wall): point every slot at /links/ — intro custom link, Premium CTA button, Featured cards, About last line. Slot-by-slot spec delivered in chat 2026-07-20.
- NEXT (if asked): commit/push resources.html edit + links/ hub; wire /links/ into site nav/footer (needs approval); Featured-card cover images for LinkedIn; consider web/print version of the checklist later.
