import { Button } from "@mui/material";
import colors from "../../styles/color";

const base = {
  padding: "12px 32px",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "50px",
  textTransform: "none",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  "@media (max-width: 768px)": { padding: "10px 24px", fontSize: "0.9rem" },
};

const variants = {
  primary: {
    background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 100%)`,
    color: "#FFFFFF",
    fontWeight: 700,
    boxShadow: `0 4px 20px rgba(242, 140, 58, 0.3)`,
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: `0 10px 34px rgba(242, 140, 58, 0.45)`,
      filter: "brightness(1.06)",
    },
  },
  outline: {
    border: `1.5px solid rgba(242, 140, 58, 0.5)`,
    color: colors.secondary,
    background: "transparent",
    "&:hover": {
      background: "rgba(242, 140, 58, 0.07)",
      borderColor: colors.secondary,
      transform: "translateY(-3px)",
      boxShadow: `0 8px 26px rgba(242, 140, 58, 0.16)`,
    },
  },
};

export default function CustomButton({ variant = "primary", sx = {}, ...props }) {
  return <Button sx={{ ...base, ...variants[variant], ...sx }} {...props} />;
}
