/** Gincat System design token reference — mirrors CSS custom properties in globals.css */

export const colors = {
  background: "#fafafa",
  foreground: "#111318",
  surface: "#ffffff",
  surfaceMuted: "#f3f4f6",
  surfaceSubtle: "#eceef1",
  surfaceInverse: "#111318",
  border: "#e4e7eb",
  borderStrong: "#cdd2d9",
  mutedForeground: "#5c6570",
  subtleForeground: "#8b939e",
  accent: "#006d77",
  accentHover: "#005a62",
  accentMuted: "#e8f4f5",
  signal: "#b81232",
  signalHover: "#961028",
  metalSteel: "#6b7280",
  metalGraphite: "#374151",
} as const;

export const sectionSpacing = {
  xs: "4rem",
  sm: "5.5rem",
  md: "7.5rem",
  lg: "9.5rem",
  xl: "12rem",
} as const;

export const containerWidths = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1400px",
  prose: "720px",
} as const;

export const gapScale = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
} as const;

export const radius = {
  xs: "0.125rem",
  sm: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
} as const;

export const shadows = {
  xs: "0 1px 2px 0 rgb(17 19 24 / 0.03)",
  sm: "0 1px 4px 0 rgb(17 19 24 / 0.05)",
  md: "0 2px 8px 0 rgb(17 19 24 / 0.06)",
  lg: "0 4px 16px 0 rgb(17 19 24 / 0.08)",
  xl: "0 8px 32px 0 rgb(17 19 24 / 0.1)",
  card: "0 1px 2px 0 rgb(17 19 24 / 0.04), 0 4px 16px 0 rgb(17 19 24 / 0.05)",
  elevated: "0 8px 40px 0 rgb(17 19 24 / 0.1)",
} as const;

export const motion = {
  easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  durationFast: "150ms",
  durationNormal: "220ms",
  durationSlow: "320ms",
} as const;

export type SectionSpacingKey = keyof typeof sectionSpacing;
export type ContainerWidthKey = keyof typeof containerWidths;
export type GapScaleKey = keyof typeof gapScale;
