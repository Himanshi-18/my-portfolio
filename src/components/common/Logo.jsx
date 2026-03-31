import { Typography } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";

// ✨ Glow Pulse Animation
const glowPulse = keyframes`
  0% {
    text-shadow: 0 0 5px rgba(0,198,255,0.5),
                 0 0 10px rgba(0,198,255,0.4),
                 0 0 15px rgba(0,198,255,0.3);
  }
  50% {
    text-shadow: 0 0 10px rgba(0,198,255,0.9),
                 0 0 20px rgba(0,198,255,0.7),
                 0 0 30px rgba(0,198,255,0.6);
  }
  100% {
    text-shadow: 0 0 5px rgba(0,198,255,0.5),
                 0 0 10px rgba(0,198,255,0.4),
                 0 0 15px rgba(0,198,255,0.3);
  }
`;

const LogoText = styled(Typography)({
  fontWeight: 800,
  fontSize: "28px",
  letterSpacing: "3px",
  cursor: "pointer",
  position: "relative",
  background: "linear-gradient(45deg, #00C6FF, #0072FF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  transition: "all 0.3s ease",

  "&:hover": {
    animation: `${glowPulse} 1.5s infinite ease-in-out`,
  },
});

export default function Logo() {
  return <LogoText>HR</LogoText>;
}