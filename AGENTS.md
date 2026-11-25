# Portfolio UI and spacing rules

These rules apply to every route, component, and case study template. Follow them for new UI and when editing existing UI. If existing code conflicts with these rules, use the rules as the target and replace the conflicting spacing when that code is touched.

## Repository and stack

- **Application:** Single-page portfolio built with React 19 and TypeScript 5.8, bundled and served by Vite 8.
- **Styling:** Tailwind CSS 4.3, integrated with Vite using `@tailwindcss/vite`. `src/main.tsx` imports `src/index.css`; that file imports Tailwind with `@import "tailwindcss"`, loads the Google fonts, defines `@theme` font aliases and global design tokens, and contains the platform's component and responsive CSS. There is no standalone Tailwind or PostCSS configuration file. Use Tailwind utility classes alongside the existing component CSS and tokens.
- **Typography:** IBM Plex Sans for interface/body text, Host Grotesk for display text, and IBM Plex Mono for metadata. These are declared in `src/index.css` and loaded from Google Fonts.
- **Motion and icons:** `motion` and `gsap` for animation; `lucide-react` for icons. Respect reduced-motion preferences and existing interaction behavior.
- **Runtime integrations:** Vercel Analytics and Speed Insights. The repository also includes a Google GenAI dependency and `api/chat.ts` endpoint.
- **Main entry points:** `index.html` → `src/main.tsx` → `src/App.tsx`. App routes and shared navigation live in `src/App.tsx` and `src/hooks/usePortfolioNavigation.ts`.
- **Source organization:** `src/pages/` contains Home, About, and project/case study pages; `src/components/` contains shared UI; `src/hooks/` contains reusable behavior; `src/data/portfolioData.ts` contains portfolio content; `src/lib/` contains service helpers; `src/assets/` contains imported media. `public/` contains static assets, SEO files, and the social preview image. `scripts/` contains build and repository utilities.
- **Commands:** `npm run dev` starts Vite on port 3000; `npm run build` runs the Vite build and SEO page generation; `npm run preview` serves the build; `npm run lint` runs `tsc --noEmit`.

## Spacing scale — strict

Use only these spacing values, in pixels:

| Token | Value | Tailwind examples |
| --- | ---: | --- |
| `space-1` | 4px | `p-1`, `gap-1`, `mt-1` |
| `space-2` | 8px | `p-2`, `gap-2`, `mt-2` |
| `space-3` | 12px | `p-3`, `gap-3`, `mt-3` |
| `space-4` | 16px | `p-4`, `gap-4`, `mt-4` |
| `space-6` | 24px | `p-6`, `gap-6`, `mt-6` |
| `space-8` | 32px | `p-8`, `gap-8`, `mt-8` |
| `space-12` | 48px | `p-12`, `gap-12`, `mt-12` |
| `space-16` | 64px | `p-16`, `gap-16`, `mt-16` |
| `space-24` | 96px | `p-24`, `gap-24`, `mt-24` |

- In Tailwind, use only spacing utilities that resolve to a value in this table. The examples are illustrative; the same values apply to `m`, `mx`, `my`, `px`, `py`, `space-y`, `scroll-m`, and related spacing utilities.
- In CSS, use only a spacing token that resolves exactly to a value in this table, or a Tailwind utility from the scale above. Existing tokens are not automatically valid: do not use a token whose value is outside the scale. If CSS needs a token, define/reuse a named token for one of the listed values; do not introduce another value or a fluid `clamp()` spacing value.
- **Do not use arbitrary spacing values** such as `p-[13px]`, `mt-[22px]`, `gap-[1.25rem]`, inline margin/padding, or inline styles/custom properties that calculate or set spacing. Do not use raw `px`, `rem`, `%`, `vw`, or `clamp()` values for margin, padding, gap, inset/position offsets, scroll margin, or scroll padding.
- This restriction is about spacing. It does not prohibit values needed for typography, borders, image/video dimensions, aspect ratios, transforms, or other non-spacing visual properties.
- Avoid Tailwind spacing classes whose resolved value is absent from the table (for example `p-5`, `mt-7`, `gap-10`, and `py-20`). Do not change the scale to accommodate one component; choose the nearest listed token.

## Shared layout standards

- **Content container:** Center primary page content in `max-w-6xl` (72rem / 1152px) with `w-full`. Use `px-4` on phones, `sm:px-6` when the viewport has room, and `xl:px-8` on wide screens. Do not create a wider one-off content container for a case study.
- **Page and header alignment:** Keep the shared site header contents, all route content, and the shared footer within the same centered 1152px (`max-w-6xl`) page shell. Keep every section and its inner content aligned to that shell using the same responsive gutters (`px-4 sm:px-6 xl:px-8`); section backgrounds, borders, titlebars, and footer content must share the same left and right edges as the header contents.
- **Section separation:** Keep adjacent page sections 24px apart on phones (`gap-6`) and 48px apart on desktop (`md:gap-12`) across Home, About, and all case studies. Do not put a bottom margin on one section and a top margin on the next. Use the shared `--dp-spacing-section-gap` token for platform section separation so spacing stays consistent.
- **Section inset:** Use 48px vertical padding on compact/mobile layouts (`py-12`) and 64px on larger layouts (`md:py-16`). A page may use 32px (`py-8`) for a clearly compact band; apply that choice consistently to equivalent bands across pages.
- **Card inset:** Use 16px on phones (`p-4`) and 24px from tablet/desktop (`sm:p-6` or `md:p-6`). Keep nested content aligned to the same container gutter.
- **Card surface color:** Use the shared soft gray `--dp-color-surface` (`#eef0f3`) for card, footer-body, and dialog backgrounds. Keep pure white for media canvases, form fields, and message bubbles where contrast or the asset requires it.
- **Grid and component gaps:** Use 16px (`gap-4`) for dense/mobile grids and 24px (`md:gap-6`) for roomy grids. Use 8px or 12px only for closely related controls or text groups.
- **Case studies:** Use the same `max-w-6xl` content container, page gutters, section separation, section inset, card inset, and grid gaps as Home and About. Variations in case study content or background do not change the spacing system. Sticky/scrollytelling sections may control positioning for their interaction, but their surrounding section and content spacing still follows these standards. On phone widths (760px and below), the About TV sequence follows the complete hero copy, scrolls naturally without sticking over it or adding a spacer runway, and scrubs the frames as the TV passes through the viewport. Preserve the existing side-by-side sticky treatment on larger screens.
- **Case study intro spacing:** Keep the Back/tag row at `py-3`. Leave one 16px gap (`mt-4` or the shared `.case-study-backbar + .case-study-hero` rule) between that row and the hero. Use 24px hero vertical inset on phones and 32px from tablet/desktop. Do not stack the generic section margin/inset on top of template-specific hero padding; use the shared case-study intro classes for all six routes.
- **Alignment and readability:** Keep body copy left-aligned by default. Center text only for short labels, compact metrics, or a deliberate hero treatment. At every breakpoint, prevent headings, dates, navigation, and body copy from colliding or becoming difficult to scan.
- **Section titlebar alignment:** Keep blue section title text and its right-side controls aligned to the global header gutters: 12px from the titlebar edge on phones and 24px from 640px upward. Keep the blue background full width; apply the inset to the titlebar contents so the left label aligns with the brand and right controls align with the Resume action.
- **Responsive behavior:** Use standard responsive Tailwind variants and existing breakpoints. Reflow columns before they overflow; maintain container gutters and text alignment on phones. Do not solve a breakpoint issue with a one-off pixel offset.
- **Platform consistency:** Reuse shared components, tokens, and established titlebar/frame treatments. Avoid local spacing overrides that make a page or case study feel detached from the rest of the portfolio.

## Existing project note — preserve

- Keep the portfolio's social preview image aligned with the hero section on the Home page. Whenever the Home page hero changes, update the social preview image to reflect the current hero and keep the social metadata pointing to that image.

## Homepage hero and section rhythm rules

- **Mobile hero height:** Below `md`, never use `min-h-screen`, `h-screen`, or `100vh` for a hero. Let mobile hero height hug its content with explicit mobile padding such as `pt-24 pb-12`; increase padding only at `md:` or `lg:` breakpoints.
- **Homepage section rhythm:** Place every top-level homepage section in one vertical stack with a uniform gap (`flex flex-col gap-6 md:gap-12`), or use the shared section gap between adjacent sections. Use zero negative margins and do not leave adjacent sections unpadded; ensure there is visible space between every section. The gap from the global header to the first homepage section must match the stack gap at each breakpoint.
