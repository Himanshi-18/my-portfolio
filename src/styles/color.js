const colors = {
  // Section backgrounds (alternating) - default to charcoal variants to avoid
  // accidental light backgrounds. If you need light sections, create explicit keys.
  bg0: "#1E1E1E", // Dark Charcoal fallback
  bg1: "#252525", // Slightly lighter surface
  bg2: "#2B2B2B", // Elevated surface

  // Dark section backgrounds
  dark0: "#161616", // Dark Charcoal (Projects / Footer)
  dark1: "#1E1E1E", // Soft Charcoal (Contact)
  dark2: "#252525", // Card / elevated surfaces on dark sections

  // Primary accents
  secondary: "#F28C3A", // Primary Orange (highlights, active)
  accent: "#FFB067", // Light Orange (secondary highlights)
  accent2: "#D97706", // Deeper warm accent for subtle contrast

  // Text colors
  textDark: "#1E1E1E", // Dark text on light backgrounds
  mutedText: "#6B6257", // Muted / body text on light backgrounds
  textLight: "#F5F1EA", // Light text on dark backgrounds
  textLightMuted: "#B8B2A7",

  // Misc / legacy keys (kept for compatibility)
  // Keep these backward-compatible but mapped to sensible values for dark mode
  white: "#F5F1EA", // light text on dark backgrounds
  lightGray: "#B8B2A7", // muted light text
  darkGray: "#9E9890",
  primary: "#F28C3A",
  highlight: "#ff4d4d",
  black: "#1E1E1E",
  success: "#10b981",
  darkSection: "#252525",
};

export default colors;
