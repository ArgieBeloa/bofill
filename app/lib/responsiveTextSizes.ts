/**
 * Responsive Text Size Reference — Bofill Landing Page
 *
 * Breakpoints: sm = 640px, lg = 1024px (Tailwind defaults)
 *
 *   Element                | Mobile (<640px) | Tablet (640–1024px) | Laptop+ (1024px+)
 *   ------------------------|-----------------|----------------------|-------------------
 *   Eyebrow text            | 14px            | 16px                 | 16px
 *   H1 "Your Story, Matters"| 30px            | 36px                 | 48px
 *   Paragraph / body copy   | 16px            | 18px                 | 18px
 *   Stat numbers            | 20px            | 24px                 | 24px
 *   Stat / feature labels   | 14px            | 16px                 | 16px
 *   Buttons                 | 14px            | 16px                 | 16px
 *
 * Body copy has a floor of 16px — going smaller hurts mobile readability/accessibility.
 * H1 jumps most dramatically since it's the visual anchor; other text scales conservatively.
 */

export const textSizes = {
  eyebrow: "text-sm sm:text-base",
  h1: "text-3xl sm:text-4xl lg:text-5xl",
  paragraph: "text-base sm:text-lg",
  statNumber: "text-xl sm:text-2xl",
  statLabel: "text-sm sm:text-base",
  button: "text-sm sm:text-base",
} as const;

export type TextSizeKey = keyof typeof textSizes;
