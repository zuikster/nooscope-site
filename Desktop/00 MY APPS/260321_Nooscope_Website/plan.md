# Nooscope — Next.js App Build Prompts

## Context
Convert the vanilla HTML prototype (https://github.com/zuikster/nooscope-site.git) into a **Next.js 15+** App Router (JavaScript) application. Each section below is **one AI prompt → one git commit**. Prompts are written as standalone instructions for an AI coding assistant to execute in sequence.

---

## Commit 1 — Project Setup & Asset Extraction

```
You are setting up a Next.js 15+ project with the App Router and JavaScript (no TypeScript).

STARTING STATE:
The current directory contains three files from an HTML prototype:
- index.html — minimal SPA shell
- styles.css — one @font-face rule with a base64-encoded OTF font ('Droulers' by Bureau Brut)
- app.js — sets app.innerHTML with a base64-encoded PNG background image

YOUR TASK:
1. Run: npx create-next-app@latest . --js --app --no-tailwind --no-eslint --src-dir
   Accept all defaults, overwrite existing files when prompted.

2. Extract assets from the prototype files:
   - From styles.css: copy the full base64 OTF string from the @font-face src URL into src/app/globals.css
   - From app.js: copy the full base64 PNG string and save it as the src of the bg image (keep inline or export as a constant in src/lib/assets.js)

3. Delete index.html, styles.css, app.js after extraction.

4. In src/app/globals.css, replace the default Next.js styles with:
   - The @font-face block for 'Droulers' (base64 embedded)
   - CSS custom properties: --col: 19%; --row: 25%; --green: #63c129;
   - A universal reset: *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
   - html, body { width: 100%; min-height: 100%; font-family: 'Droulers', sans-serif; }

5. In src/app/layout.js, import globals.css and export a root layout with <html lang="en"><body>{children}</body></html>.

6. In src/app/page.js, return a simple <main><p>Nooscope</p></main> as a placeholder.

7. Verify: npm run dev → http://localhost:3000 loads without errors and shows "Nooscope" in Droulers font.

Commit message: "chore: bootstrap Next.js app, extract font and background assets"
```

---

## Commit 2 — 4-Quadrant Grid Layout (Desktop)

```
You are building the fixed 4-quadrant grid layout for the Nooscope website desktop view.

DESIGN SPEC:
- Vertical green line at 19% from left edge (color: #63c129)
- Horizontal green line at 25% from top edge (color: #63c129)
- These lines are fixed and never respond to window resizing
- CSS custom properties already defined: --col: 19%; --row: 25%; --green: #63c129;
- Z-index layers: bg(0) → about-overlay(30) → ui(40) → grid(50)

YOUR TASK:
1. Create src/components/Grid.js:
   - Returns a <div className={styles.grid}></div>
   - Generates both lines via CSS ::before (vertical) and ::after (horizontal) pseudo-elements
   - pointer-events: none so lines never block interaction

2. Create src/styles/Grid.module.css:
   .grid { position: fixed; inset: 0; z-index: 50; pointer-events: none; }
   .grid::before { content: ''; position: absolute; top: 0; bottom: 0; left: var(--col); width: 1px; background: var(--green); }
   .grid::after { content: ''; position: absolute; left: 0; right: 0; top: var(--row); height: 1px; background: var(--green); }

3. Create src/components/Background.js:
   - Renders the full-bleed background image at z-index: 0
   - Image src comes from the base64 constant in src/lib/assets.js (or inline)
   - CSS: position: fixed; inset: 0; z-index: 0; img { width:100%; height:100%; object-fit:cover; display:block; }

4. Update src/app/globals.css — add desktop override at bottom:
   @media (min-width: 768px) {
     html, body { height: 100%; overflow: hidden; }
   }

5. Update src/app/page.js to render <Background /> and <Grid /> (desktop only — hide Grid on mobile via CSS display:none below 768px).

6. Verify at 1280px: two green lines cross the full viewport. Verify at 375px: no green lines visible.

Commit message: "feat: add fixed 4-quadrant grid lines for desktop layout"
```

---

## Commit 3 — Quadrant Components (Logo, Nav, TextPanel)

```
You are building three quadrant-filling components for the Nooscope website.

QUADRANT LAYOUT (desktop, position: fixed within .ui at z-index: 40):
- Upper-Left  (0–19% wide × 0–25% tall): Logo
- Upper-Right (19–100% wide × 0–25% tall): Nav
- Lower-Right (19–100% wide × 25–100% tall): TextPanel

MOBILE LAYOUT (default, normal document flow):
- Full-width flex row header: Logo (left) + Nav (right)
- TextPanel: full-width scrollable section below drawers

YOUR TASK:
1. Create src/components/Logo.js:
   - Returns <a href="/" className={styles.logo}>Nooscope</a>
   - Desktop: position: absolute; top: 0; left: 0; width: var(--col); height: var(--row)
   - Mobile: flex item within header row, natural size
   - Font: 'Droulers'; color: var(--green)

2. Create src/components/Nav.js:
   - Returns <ul className={styles.nav}> with placeholder <li><a href="#">Link</a></li> items
   - Desktop: position: absolute; top: 0; left: var(--col); width: calc(100% - var(--col)); height: var(--row)
   - Mobile: flex item aligned to right within header row
   - overflow: hidden; white-space: nowrap on links

3. Create src/components/TextPanel.js:
   - Returns <div className={styles.panel}><div className={styles.copy}><p>Main content.</p></div></div>
   - Desktop: position: absolute; top: var(--row); left: var(--col); width: calc(100% - var(--col)); height: calc(100% - var(--row)); overflow-y: auto; padding: 2rem
   - Mobile: full-width; min-height: 50vh; padding: 1.5rem; overflow-y: auto
   - Hide scrollbars: scrollbar-width: none; &::-webkit-scrollbar { display: none; }

4. Create src/styles/ module files for each component following the desktop + mobile pattern.

5. Create a .ui wrapper div in page.js at z-index: 40 (position: fixed; inset: 0; desktop only) that contains Logo, Nav, TextPanel, and the AboutDrawer (next commit).

6. On mobile page.js structure:
   <header className="mobileHeader"><Logo /><Nav /></header>
   <main className="mobileMain"><AboutDrawer /><TextPanel /></main>
   Header and main use normal document flow (not fixed).

7. Verify: desktop 1280px shows three components in correct quadrants; mobile 375px shows stacked header + content.

Commit message: "feat: add Logo, Nav, and TextPanel quadrant components"
```

---

## Commit 4 — About Drawer with Easing Animation

```
You are adding the About drawer component with animated open/close transitions.

DESIGN SPEC:
- Lower-left quadrant on desktop: 0–19% wide × 25–100% tall
- Full-width section on mobile, sits between header and TextPanel
- Toggle button fills the full lower-left region on desktop; is a full-width bar on mobile
- Drawer content (about copy) animates open/close with easing

ANIMATION SPEC:
- Easing function: cubic-bezier(0.4, 0, 0.2, 1)  (smooth decelerate — Material Design standard)
- Duration: 0.4s for transform/max-height; 0.3s for opacity
- Mobile: drawer slides DOWN (max-height: 0 → max-height: 80vh) with opacity fade
- Desktop: drawer slides IN FROM LEFT (translateX(-100%) → translateX(0)) with opacity fade

YOUR TASK:
1. Create src/components/AboutDrawer.js as a Client Component ('use client'):
   - Import useState from react
   - State: const [open, setOpen] = useState(false)
   - Render:
     <div className={styles.container}>
       <button
         className={styles.trigger}
         onClick={() => setOpen(o => !o)}
         aria-expanded={open}
       >
         About
       </button>
       <div
         className={`${styles.overlay} ${open ? styles.open : ''}`}
         aria-hidden={!open}
       >
         <div className={styles.copy}>
           <p>About content placeholder.</p>
         </div>
       </div>
     </div>

2. Create src/styles/AboutDrawer.module.css:

   /* Mobile base styles */
   .container { width: 100%; }

   .trigger {
     width: 100%; padding: 1rem;
     background: transparent; border: none; border-top: 1px solid var(--green);
     border-bottom: 1px solid var(--green);
     font-family: 'Droulers', sans-serif; color: var(--green);
     cursor: pointer; text-align: left; font-size: 1rem;
   }

   .overlay {
     max-height: 0; overflow: hidden; opacity: 0;
     transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                 opacity 0.3s ease;
   }
   .overlay.open { max-height: 80vh; opacity: 1; }

   .copy { padding: 1rem; font-family: 'Droulers', sans-serif; }

   /* Desktop overrides */
   @media (min-width: 768px) {
     .container {
       position: absolute; top: var(--row); left: 0;
       width: var(--col); height: calc(100% - var(--row));
     }
     .trigger {
       position: absolute; inset: 0; border: none;
       writing-mode: vertical-rl; text-orientation: mixed;
       transform: rotate(180deg);
       display: flex; align-items: center; justify-content: center;
     }
     .overlay {
       position: fixed; top: var(--row); left: 0;
       width: var(--col); height: calc(100% - var(--row));
       z-index: 30; max-height: none; overflow-y: auto;
       transform: translateX(-100%); display: block; opacity: 0;
       transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                   opacity 0.3s ease;
       scrollbar-width: none;
     }
     .overlay::-webkit-scrollbar { display: none; }
     .overlay.open { transform: translateX(0); opacity: 1; }
   }

3. Add <AboutDrawer /> to page.js (inside .ui on desktop, inside <main> on mobile).

4. Verify:
   - Mobile 375px: click "About" bar → content slides down smoothly; click again → slides back up
   - Desktop 1280px: click left column → content slides in from left with easing; click again → slides out
   - Green grid lines (z-index: 50) always visible on top of open drawer

Commit message: "feat: add AboutDrawer with easing open/close animation"
```

---

## Commit 5 — Mobile Polish & Final Responsive Verification

```
You are finalizing the mobile-first responsive behavior and polishing the layout across all breakpoints.

TARGET BREAKPOINTS:
- Mobile: 320px – 767px (default, no media query)
- Tablet: 768px – 1023px (same as desktop grid layout)
- Desktop: 1024px+ (4-quadrant fixed layout)

YOUR TASK:
1. Add a src/styles/page.module.css with:

   /* Mobile layout */
   .mobileHeader {
     display: flex; align-items: center; justify-content: space-between;
     padding: 1rem; border-bottom: 1px solid var(--green);
   }
   .mobileMain { display: flex; flex-direction: column; min-height: calc(100vh - 64px); }

   /* Desktop layout overrides */
   @media (min-width: 768px) {
     .mobileHeader { display: none; }   /* Logo and Nav move into .ui fixed layer */
     .mobileMain { display: none; }     /* TextPanel and AboutDrawer move into .ui fixed layer */
   }

   /* Ensure desktop .ui children are visible only at ≥ 768px */
   .ui { display: none; }
   @media (min-width: 768px) {
     .ui { display: block; position: fixed; inset: 0; z-index: 40; }
   }

2. Wrap page.js so both mobile and desktop structures coexist in the DOM but only one is visible at each breakpoint:
   <Background />
   <Grid />         {/* hidden on mobile via CSS */}
   {/* Mobile layout */}
   <header className={styles.mobileHeader}><Logo /><Nav /></header>
   <main className={styles.mobileMain}><AboutDrawer /><TextPanel /></main>
   {/* Desktop layout */}
   <div className={styles.ui}>
     <Logo /><Nav /><AboutDrawer /><TextPanel />
   </div>

   Note: Components are rendered twice (mobile and desktop DOM trees). This is acceptable for this scale. Alternatively, use CSS alone to reposition a single DOM tree — use whichever approach produces cleaner code.

3. Test and fix any issues at these sizes using browser DevTools:
   - 320px (small mobile): no overflow, About drawer works, TextPanel scrolls
   - 375px (iPhone): same
   - 768px (iPad portrait): grid appears, quadrants correct
   - 1280px (desktop): full 4-quadrant layout, easing animations work
   - 1920px (large desktop): background image covers fully, no layout breaks

4. Ensure font ('Droulers') renders correctly at all sizes.

5. Run npm run build — fix any warnings or errors before committing.

Commit message: "feat: finalize mobile-first responsive layout across all breakpoints"
```

---

## Implementation Order

### Pre-step: Clone & Add plan.md
```bash
git clone https://github.com/zuikster/nooscope-site.git \
  "/Users/alexeyyurenev/Desktop/00 MY APPS/260321_Nooscope_Website"
```
Then copy this entire plan document to `plan.md` in the project root and commit it:
```bash
git add plan.md
git commit -m "docs: add build plan and AI prompt sequence"
```

### Build Commits
1. Run Commit 1 prompt → bootstrap Next.js 15
2. Run Commit 2 prompt → verify grid lines
3. Run Commit 3 prompt → verify quadrant components
4. Run Commit 4 prompt → verify drawer animation
5. Run Commit 5 prompt → verify full responsive behavior

## Critical Files
- `src/app/globals.css` — font-face, CSS custom properties, reset
- `src/app/page.js` — component assembly, mobile/desktop structure
- `src/components/AboutDrawer.js` — 'use client', useState, animation class toggle
- `src/styles/AboutDrawer.module.css` — easing transitions (mobile max-height, desktop translateX)
- `src/styles/Grid.module.css` — fixed green lines
