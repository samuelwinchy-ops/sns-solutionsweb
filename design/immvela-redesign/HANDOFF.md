# immvela.com redesign: handoff (2026-10-04)

Start here in a new session. The approved design spec, the truth rules and the assets are in this folder.

## Where things are
- **Repo:** `sns-solutionsweb`. This one Next.js 14 deployment serves sns-austria.com and immvela.com, routed by host in `middleware.ts`.
- **Branch:** `immvela-redesign`. All work is committed here and NOTHING is pushed. `main` deploys both domains on push.
- **Merges:** `origin/main` is already merged in (blog, legal pages, Immvela privacy page).
- **Spec and rules:**
  - `SITE-SPEC.md`: the layout rules.
  - `TRUTH.md`: what may be claimed. It is binding.
  - `Immvela.dc.html`, `Trust.dc.html`, `Shape.dc.html`: the canvas source of the approved design. It is superseded by the code wherever the two differ.
- **Code:**
  - `components/immvela/` holds the page sections.
  - `app/immvela-redesign.css` holds the scoped styles.
  - `i18n/immvela.ts` holds the EN and DE copy.
  - `lib/immvela-photos.ts` holds the photo slots.
  - `lib/helix-contour.ts` and `components/immvela/HelixCanvas.tsx` draw the live helix, ported from the app.
  - `lib/immvela-submit.ts` sends the forms through EmailJS, with a mailto fallback.
- **Routes:**
  - `/immvela`, `/immvela/trust` and `/immvela/partner`, plus the `/de/...` versions.
  - On immvela.com they serve at `/`, `/trust`, `/partner` and `/de/...`.
- **Screenshots:** `build-shots/` (gitignored).
- **Local servers when this was written:** 3211 runs the current build from a detached worktree at `/private/tmp/claude-501/-Users-danielwinch-immvela/e001ca1b-d809-4ab3-ba77-5dc6188a4a1a/scratchpad/build-3211`. 3210 runs an old build. Kill both and run `git worktree remove --force <that path>` when done.

## Decisions (Samuel)
**Brand and look**
- The logo is the helix plus "Immvela." with a green full stop. The house lockup is retired.
- Light mode is the default, with the app's glass ground: beige, light from above, pools, grain. Glass is used only where something floats.
- Type: Bricolage Grotesque for display (the wordmark, H1, H2 and big numbers), and Geist for everything else, including all app UI.
- Text colours: green throughout. Headlines `#14473a`, body `#3f574f`, small text `#4e635b`, actions `#1f7a5a`. Never use a single green word inside a headline.
- **The helix only rotates.** No breathing or pulsing: breathing is reserved for a future voice conversation, which is product vision.

**Motion and layout**
- Only the hero and "Documents in" autoplay. The trace plays once on scroll. Everything else moves only when the visitor acts.
- Laptop first: every section must fit 1366×768 and 1440×900, then check 1920 and phones at 390 and 320.

**Page order and what each section shows**
1. **Hero:** the mark arrives, a centred "Immvela.".
2. **Documents in:** four drafts fan out.
3. **Trace:** ~~78~~→76 m², the floor plan line, "Confirmed by you". A slow sequence with no question box, using the second flat (Praterstraße 31).
4. **Office:** "Your agents already use AI. Give them one that follows your standard."
5. **Say "get it ready":** the phone on a forest stage, frameless with breakout. The result shown is posts waiting for approval.
6. **Integrations:** a Muse-style tile field. CRMs as text tiles in via OpenImmo, social channels out in their brand colours, planned portals faded.
7. **Good to know:** five details.
8. **Built in Vienna:** links to sns-austria.com/team. There is no founders section; the bios live on the parent site.
9. **Apply for the closed beta.**

**Content rules**
- No pricing.
- Never claim "GDPR compliant", "EU-hosted" or "regulated". Immvela uses US AI providers.
- No statistics.
- Planned features are labelled "Planned" or "Next".

**Other decisions**
- Photos are the Unsplash set; see `public/immvela/redesign/photos/CREDITS.md`. Samuel accepted the small provenance risk on the Lisa Anna interiors.
- The door-opening idea is ON ICE. It is meant for a real filmed advert: "Immvela opens the door. You do the part that matters."

## Open before going live
1. **"Virtually staged" photo:** it is still the old sample. Stage `emptyRoom.jpg` in the Immvela app, then swap it in on the `stagedRoom` line of `lib/immvela-photos.ts`.
2. **Placeholders Samuel must answer:**
   - "[Hosting answer to confirm with SNS]"
   - On the Trust page: [Hosting region], [List of service providers] and [Data processing agreement (AVV)].
3. **Lawyer's sign-off:** the consent wording on both forms.
4. **The merged blog's Immvela post:** it has not been checked against `TRUTH.md`.
5. **German Apply form:** it runs about 50px past a 1366×768 screen.
6. **`/demo` pages and their JSON-LD:** they still use the old module copy.
7. **Nav and footer:** "Modules" and "Why Immvela" are not rebuilt yet, so they are left out.
8. **Deploy:** Samuel pushes and merges to `main` himself. After deploy, do ONE real form submit (Apply, plus a partner form) to confirm the EmailJS template shows the `form_type` value and the fields.

## Rules for whoever continues
- **Never submit the forms in tests.** Test validation only. Real submits send email.
- **Never push or merge.** Show Samuel; he merges.
- **Show mockups before building new visuals.** Samuel judges by seeing. He cannot read German, so screenshot English for review.
