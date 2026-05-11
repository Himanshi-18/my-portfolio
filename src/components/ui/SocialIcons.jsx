import { Box } from "@mui/material";
import socialLinks from "../../data/social";
import colors from "../../styles/color";

export default function SocialIcons({ size = 40, iconSize = 18 }) {
  const linkSx = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    fontSize: iconSize,
    borderRadius: "10px",
  color: colors.textLightMuted,
  background: "rgba(255,255,255,0.02)",
  border: "1px solid rgba(255,255,255,0.03)",
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "scale(1.06)",
      boxShadow: "0 8px 28px rgba(242,140,58,0.14)",
      color: colors.secondary,
      background: "rgba(242,140,58,0.08)",
      borderColor: "rgba(242,140,58,0.28)",
    },
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {socialLinks.map(({ href, label, Icon, target }) => (
        <Box
          key={label}
          component="a"
          href={href}
          target={target}
          rel={target ? "noopener noreferrer" : undefined}
          aria-label={label}
          sx={linkSx}
        >
          <Icon />
        </Box>
      ))}
    </Box>
  );
}
