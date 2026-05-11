import { Box, Typography } from "@mui/material";
import colors from "../../styles/color";

export default function SectionHeading({ label, title, subtitle, align = "center", light = false }) {
  const headingColor  = light ? colors.textDark : colors.textLight;
  const subtitleColor = light ? colors.mutedText : colors.textLightMuted;

  return (
    <Box
      sx={{
        textAlign: align,
        maxWidth: align === "center" ? 760 : "none",
        mx: align === "center" ? "auto" : 0,
        mb: "55px",
      }}
    >
      {label && (
        <Typography
          sx={{
            color: colors.secondary,
            fontSize: "0.78rem",
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            mb: "14px",
          }}
        >
          {label}
        </Typography>
      )}

      <Typography
        sx={{
          color: headingColor,
          fontSize: { xs: "2rem", md: "2.8rem" },
          fontWeight: 800,
          lineHeight: 1.2,
          mb: "16px",
          "& span": {
            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          },
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography sx={{ color: subtitleColor, fontSize: "1rem", lineHeight: 1.7 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
