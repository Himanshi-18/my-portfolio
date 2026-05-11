import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../../styles/color";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

/* ============================================
   ANIMATIONS
   ============================================ */

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(242,140,58,0.12);
  }
  50% { 
    box-shadow: 0 0 40px rgba(242,140,58,0.22);
  }
`;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const SectionWrapper = styled(Box)`
  padding: 140px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, ${colors.dark1} 0%, ${colors.dark0} 100%);
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(242,140,58,0.08), transparent 40%),
                radial-gradient(circle at 80% 50%, rgba(255,176,103,0.05), transparent 40%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(242,140,58,0.03) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

const GlowBlob = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.25), transparent 70%);
  filter: blur(120px);
  top: -200px;
  right: -200px;
  animation: ${pulse} 6s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
  }
`;

const GlowBlobLeft = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 114, 255, 0.2), transparent 70%);
  filter: blur(100px);
  bottom: -150px;
  left: -150px;
  animation: ${pulse} 8s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ContactMini = () => {
  return (
    <SectionWrapper>
      <GlowBlob
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <Container maxWidth="md" sx={{ textAlign: "center", position: "relative" }}>
        
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "2rem", md: "2.5rem" },
            background: `linear-gradient(45deg, ${colors.secondary}, ${colors.accent})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Let’s Build Something Amazing Together
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 600,
            mx: "auto",
            color: colors.textLightMuted,
            mb: 5,
            lineHeight: 1.7,
          }}
        >
          I’m open to frontend roles, freelance opportunities, and creative collaborations.
          If you have an idea — let’s turn it into something impactful.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center">
          <Button
            variant="contained"
            startIcon={<MdEmail />}
            href="mailto:your-email@gmail.com"
            sx={{
              background: `linear-gradient(45deg, ${colors.secondary}, ${colors.accent})`,
              borderRadius: "30px",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 10px 30px rgba(242,140,58,0.18)",
              "&:hover": { transform: "translateY(-3px)" },
            }}
          >
            Email Me
          </Button>
        </Stack>
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography sx={{ color: colors.textLight, fontWeight: 600 }}>himanshirawat0001@gmail.com</Typography>
          <Typography sx={{ color: colors.textLightMuted, mt: 0.5 }}>linkedin.com/in/himanshi-rawat-00b566201</Typography>
          <Typography sx={{ color: colors.textLightMuted, mt: 0.5 }}>Gurgaon, India</Typography>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default ContactMini;