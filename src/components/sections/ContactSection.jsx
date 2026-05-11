import { Box, Typography, Container, Stack } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { MdEmail } from "react-icons/md";
import CustomButton from "../ui/CustomButton";
import colors from "../../styles/color";

const pulse = keyframes`
  0%, 100% { opacity: 0.45; }
  50%       { opacity: 1;    }
`;

const DarkWrapper = styled(Box)`
  padding: 100px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #1E1E1E 0%, #161616 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 25% 50%, rgba(242, 140, 58, 0.07), transparent 45%),
      radial-gradient(ellipse at 75% 50%, rgba(255, 176, 103, 0.04), transparent 45%);
    pointer-events: none;
  }
`;

const GlowBlob = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(242, 140, 58, 0.1), transparent 70%);
  filter: blur(120px);
  top: -200px;
  right: -200px;
  animation: ${pulse} 7s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) { width: 280px; height: 280px; }
`;

const ContactSection = () => {
  return (
    <DarkWrapper>
      <GlowBlob animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 8, repeat: Infinity }} />

      <Container maxWidth="sm" sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <Typography
          sx={{
            color: colors.secondary,
            fontWeight: 700,
            letterSpacing: "2.5px",
            fontSize: "0.75rem",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          Contact
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 2.5,
            fontSize: { xs: "1.9rem", md: "2.5rem" },
            lineHeight: 1.2,
            background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let's Build Something Amazing Together
        </Typography>

        <Typography
          variant="body1"
          sx={{ maxWidth: 560, mx: "auto", color: colors.textLightMuted, mb: 4.5, lineHeight: 1.75 }}
        >
          I'm open to frontend roles, freelance opportunities, and creative collaborations.
          If you have an idea — let's turn it into something impactful.
        </Typography>

        <CustomButton
          component="a"
          href="mailto:himanshirawat0001@gmail.com"
          startIcon={<MdEmail />}
        >
          Email Me
        </CustomButton>
      </Container>
    </DarkWrapper>
  );
};

export default ContactSection;
