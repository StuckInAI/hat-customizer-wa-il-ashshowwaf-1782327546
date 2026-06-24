---
status: building
title: NFT Hat Customizer Website
---

## Goal
A fun, visually engaging single-page website where users can customize a digital NFT hat — choosing color, size, text/monogram, pattern, and material — and see a live preview of their creation.

---

## Steps

1. **Set up the project foundation**
   - Create /app/src/main.tsx as the app entry point, importing /app/src/styles/global.css and rendering the root App component.
   - Create /app/src/styles/global.css starting with `@import "tailwindcss";` followed by any global base styles.
   - Create /app/src/App.tsx as the root component that composes the page layout.
   - Update /app/index.html to reference the entry point and set the page title to "NFT Hat Customizer".

2. **Define shared TypeScript types**
   - Create /app/src/types/hat.ts to define a `HatConfig` type with fields: `color` (string), `size` (string), `monogram` (string), `pattern` (string), and `material` (string).

3. **Create a custom hook for hat state**
   - Create /app/src/hooks/useHatConfig.ts that initialises default hat settings and exposes state + updater functions for each customization field.

4. **Build the Hat Preview component**
   - Create /app/src/components/HatPreview.tsx.
   - Renders a large, stylised SVG or emoji-based hat illustration in the centre of the screen.
   - Visually reflects the selected color, pattern, and monogram text overlaid on the hat.
   - Uses dynamic Tailwind classes and inline styles only for truly dynamic colour values passed as props.

5. **Build the Color Picker panel**
   - Create /app/src/components/ColorPicker.tsx.
   - Displays a row of colour swatches (at least 8 preset NFT-themed colours: gold, electric blue, neon green, purple, red, black, white, orange).
   - Clicking a swatch updates the hat color in state.
   - The active colour swatch is highlighted with a ring/border.

6. **Build the Pattern Selector panel**
   - Create /app/src/components/PatternSelector.tsx.
   - Displays clickable cards for pattern options: Solid, Stripes, Camo, Pixel Grid, Tie-Dye.
   - The selected pattern is visually highlighted.
   - Each card shows a small pattern preview thumbnail using Tailwind background utility classes.

7. **Build the Material Selector panel**
   - Create /app/src/components/MaterialSelector.tsx.
   - Displays clickable pill/badge buttons for material options: Cotton, Wool, Velvet, Silk, Synthetic.
   - The selected material pill is highlighted in a distinct accent colour.

8. **Build the Size Selector panel**
   - Create /app/src/components/SizeSelector.tsx.
   - Displays clickable size option buttons: S, M, L, XL, One Size.
   - Active size is highlighted.

9. **Build the Monogram Input panel**
   - Create /app/src/components/MonogramInput.tsx.
   - A styled text input limited to 3 characters.
   - Updates the monogram text shown on the hat preview in real time.

10. **Build the Customizer Sidebar**
    - Create /app/src/components/CustomizerSidebar.tsx.
    - Composes all selector panels (Color, Pattern, Material, Size, Monogram) in a scrollable sidebar column.
    - Each section has a clear heading and visual separator.

11. **Build the Action Bar**
    - Create /app/src/components/ActionBar.tsx.
    - Displays the current hat config summary (e.g. "Gold · Stripes · Velvet · M · ABC").
    - Contains a "Mint My Hat 🎩" button styled prominently.
    - Clicking the button shows a fun success toast/banner: "Your NFT Hat has been minted! 🚀" (no real blockchain interaction — purely visual feedback).

12. **Assemble the full page layout in App.tsx**
    - Update /app/src/App.tsx to use `useHatConfig` and wire all state through to child components.
    - Layout: full-height page with a top header/navbar, a centre two-column area (hat preview on the left/centre, customizer sidebar on the right), and the action bar fixed at the bottom.
    - Header includes the site name "NFT Hat Studio" with a gradient logo text and a tagline.

13. **Polish and visual theme**
    - Apply a dark, NFT-aesthetic background (near-black) with neon accent colours throughout.
    - Add smooth transition classes on hat preview colour changes and button interactions.
    - Ensure the layout is responsive: on small screens the sidebar stacks below the hat preview and the action bar remains fixed at the bottom.
