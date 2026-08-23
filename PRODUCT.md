# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is hiring managers and recruiters actively evaluating Avia Eyal for a product design role. The site functions as a hiring case, not a general marketing brochure — every page should hold up to the scrutiny of someone deciding whether to bring this person in for an interview.

## Product Purpose

A personal portfolio for Avia Eyal, a senior product designer (10+ years B2B SaaS, currently at HoneyBook). It exists to get hiring managers to a "let's talk" decision by showing real, verifiable shipped work rather than polished-but-generic case study prose.

## Positioning

Two differentiators the site is meant to carry, held in balance rather than one subordinate to the other:

1. **QA-engineer-turned-designer, research-driven.** A background in QA engineering/automation and neuroscience means Avia understands how software is built and where it breaks, and designs around complexity with process rigor (named competitor benchmarks, quantified user research, discovery-to-ship ownership) rather than aesthetic-only polish.
2. **Illustration/craft.** Avia also illustrates, including stewarding a product illustration language after its original team moved on. This is an equally weighted identity, not a footnote — open decision for future work: the current site (as of this record) only mentions it in passing (one line in the homepage "ALSO" section, one paragraph in About) with no illustration work actually shown. Surfacing this properly is unresolved and belongs to a future surface-design pass, not this record.

## Operating Context

- Case studies document real, shipped HoneyBook features: Selective Communication (2024), Custom Fields (2023), Library Folders (2026), Client Portal (2025).
- Each case study follows a CONTEXT → PROCESS → OUTCOME structure with embedded interactive mockups (`dc-import` components) recreating the shipped UI, real competitor benchmarks, and quantified research findings (vote counts, participant counts, usability success rates).
- CV available as a downloadable asset (`uploads/avia-eyal-cv-v10.pdf`).

## Capabilities and Constraints

- Static, no backend — pages are standalone `.dc.html` files with an `index.html` redirect to the home page.
- Case study mockups are simplified recreations of shipped product UI, not literal screenshots (confirmed during a prior typeset pass) — they illustrate the interaction model, not a pixel-exact archive.
- Confirmed: all case-study content — feature names, vote counts, percentages, named competitors (Zoho, Spotler CRM, Bigin, Bloom, Copilot, Kartra, Dubsado) — is cleared to publish as-is; no redaction or vagueness required.
- A prior critique pass flagged stale pagination and inconsistent research-number phrasing; a clarify pass re-checked both directly against the source and found the pagination (01/04–04/04, correct 4-case-study loop) and the cited numbers (43% figure, Custom Fields field types) already consistent — that critique note was inaccurate and is retracted here.
- Known open issue (unresolved, not yet actioned): case-study mockup embeds use a static `transform:scale()` sized for desktop and crop via `overflow:hidden` rather than rescaling on narrow mobile widths.

## Brand Commitments

- Name: Avia Eyal. Location: Tel Aviv, Israel.
- Illustration handle: instagram.com/aviaeyal — referenced as the home for personal illustration work.
- Contact: aviaeyal@gmail.com, linkedin.com/in/aviaeyal-417225107.
- Voice: direct, specific, first-person, evidence-first — avoids marketing-speak in favor of naming real numbers, real tools, and real constraints.

## Evidence on Hand

- Four real shipped case studies with quantified research (see Operating Context).
- `uploads/avia-eyal-cv-v10.pdf` — downloadable CV.
- `assets/library-before.png` and images under `uploads/` — real before/after and product screenshots backing the case studies.
- No illustration work is currently included as a visible artifact anywhere in the site, despite being called out as an equally weighted differentiator — future work must not fabricate illustration samples; real artwork must be sourced from the user before it can be shown.

## Product Principles

1. Every claim on the site must be independently verifiable against the shipped feature or the embedded mockup — do not let polish outrun substance.
2. QA/research rigor and illustration craft are both true, load-bearing parts of Avia's identity; neither should be designed as the "real" story with the other as color commentary.
3. The site is a hiring case first — clarity and credibility for a recruiter skimming on a phone outrank visual flourish.
4. Prefer real, cleared specifics (named tools, real percentages, real competitors) over generic portfolio language.

## Accessibility & Inclusion

No product-specific requirement established beyond ordinary web accessibility baseline (not yet audited).
