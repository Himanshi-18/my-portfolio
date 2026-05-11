// src/components/home/Hero.jsx
import { useState, useEffect } from "react";
import { Grid, Typography, Button, Stack, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../../styles/color";
import HeroImage from "../../assets/images/hero-image.png";
import { FiArrowRight, FiMail } from "react-icons/fi";

/* ============================================
   ANIMATIONS
   ============================================ */

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotateZ(-2deg); }
  50% { transform: translateY(-20px) rotateZ(2deg); }
`;

const glowBorder = keyframes`
  0%, 100% { 
    box-shadow: 0 0 18px rgba(242,140,58,0.28),
                inset 0 0 12px rgba(242,140,58,0.08);
  }
  50% { 
    box-shadow: 0 0 48px rgba(242,140,58,0.45),
                inset 0 0 20px rgba(242,140,58,0.12);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const HeroMainContainer = styled(Box)`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(145deg, ${colors.dark1} 0%, ${colors.dark2} 60%, ${colors.dark0} 100%);
  background-size: 200% 200%;
  padding: 60px 20px;
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
    background: radial-gradient(circle at 20% 30%, rgba(242,140,58,0.06), transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(255,176,103,0.04), transparent 50%);
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 10% 10%, rgba(242,140,58,0.025) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(255,176,103,0.02) 0%, transparent 50%);
    animation: ${fadeInScale} 3s ease-out;
    pointer-events: none;
    z-index: 1;
  }
`;

const ContentWrapper = styled(Container)`
  position: relative;
  z-index: 2;
`;

const GradientName = styled(Typography)`
  font-weight: 900;
  font-size: 3.5rem;
  background: linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 60%, ${colors.accent2} 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 8s ease infinite;
  letter-spacing: -1px;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const RoleText = styled(Typography)`
  font-size: 1.3rem;
  background: linear-gradient(90deg, ${colors.secondary}, ${colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  min-height: 50px;
  display: flex;
  align-items: center;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CodeCard = styled(motion.div)`
  position: relative;
  background: ${colors.dark2};
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 40px;
  border: 2px solid rgba(242,140,58,0.14);
  color: ${colors.textLight};
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  box-shadow: 0 20px 60px rgba(22,22,22,0.28);
  max-width: 400px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(242,140,58,0.26);
    box-shadow: 0 30px 80px rgba(242,140,58,0.12);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 30px;
    font-size: 0.85rem;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 220px;
  height: 280px;
  object-fit: cover;
  border-radius: 20px;
  border: 3px solid ${colors.secondary};
  box-shadow: 0 20px 50px rgba(22,22,22,0.45);
  animation: none;
  transition: all 0.4s ease;

  &:hover {
    border-color: ${colors.accent};
    box-shadow: 0 30px 70px rgba(242,140,58,0.12);
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 200px;
  }
`;

const StyledButton = styled(Button)`
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-transform: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 10px 24px;
    font-size: 0.9rem;
  }
`;

const PrimaryButton = styled(StyledButton)`
  background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
  color: white;
  box-shadow: 0 6px 26px rgba(242,140,58,0.14);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 36px rgba(242,140,58,0.22);
  }
`;

const SecondaryButton = styled(StyledButton)`
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  background: transparent;

  &:hover {
    background: rgba(242,140,58,0.06);
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(242,140,58,0.12);
  }
`;

/* ============================================
   TYPEWRITER ANIMATION
   ============================================ */

  const roles = [
    "Frontend Developer",
    "React Developer",
    "UI Developer",
    "Frontend Engineer",
  ];

/* ============================================
   HERO COMPONENT
   ============================================ */

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(delay);
    }
  }, [charIndex, index]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <HeroMainContainer>
      <ContentWrapper maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            {/* LEFT SIDE - TEXT CONTENT */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{
                    color: colors.secondary,
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    letterSpacing: "2px",
                  }}
                >
                  WELCOME TO MY PORTFOLIO
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    color: colors.textLight,
                    mb: 0.5,
                    fontWeight: 400,
                  }}
                >
                  Hi, I'm
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <GradientName variant="h1">Himanshi Rawat</GradientName>
              </motion.div>

              <motion.div variants={itemVariants}>
                <RoleText>{text}</RoleText>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.textLightMuted,
                    mb: 4,
                    fontSize: "1.02rem",
                    lineHeight: 1.6,
                    maxWidth: "520px",
                  }}
                >
                  Building responsive and scalable web interfaces using React, JavaScript, and modern frontend technologies.
                </Typography>
              </motion.div>

              {/* Buttons removed as requested; social icons below remain */}

              {/* Social icons row */}
              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Box
                    component="a"
                    href="https://github.com/Himanshi-18"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '10px',
                      color: colors.textLightMuted,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'scale(1.06)',
                        boxShadow: '0 8px 30px rgba(242,140,58,0.12)',
                        color: colors.secondary,
                      }
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0.5C5.73 0.5 0.5 5.74 0.5 12.01C0.5 17.21 3.87 21.66 8.44 23.2C9.03 23.31 9.24 22.94 9.24 22.63C9.24 22.35 9.23 21.56 9.23 20.59C6 21.18 5.22 19.4 5.22 19.4C4.68 18.23 3.86 17.92 3.86 17.92C2.71 17.21 3.95 17.23 3.95 17.23C5.22 17.32 5.86 18.53 5.86 18.53C7 20.31 8.86 19.86 9.6 19.58C9.71 18.78 10.02 18.23 10.36 17.93C7.64 17.64 4.82 16.55 4.82 11.77C4.82 10.43 5.27 9.33 6.03 8.47C5.9 8.17 5.5 6.92 6.14 5.23C6.14 5.23 7.13 4.92 9.23 6.46C10.14 6.2 11.12 6.06 12.09 6.06C13.06 6.06 14.04 6.2 14.95 6.46C17.05 4.92 18.03 5.23 18.03 5.23C18.67 6.92 18.27 8.17 18.14 8.47C18.9 9.33 19.35 10.43 19.35 11.77C19.35 16.56 16.52 17.63 13.79 17.92C14.22 18.32 14.61 19.13 14.61 20.34C14.61 21.99 14.6 22.92 14.6 22.63C14.6 22.94 14.81 23.31 15.41 23.2C19.98 21.66 23.35 17.21 23.35 12.01C23.35 5.74 18.12 0.5 11.85 0.5H12Z" />
                    </svg>
                  </Box>

                  <Box
                    component="a"
                    href="https://www.linkedin.com/in/himanshi-rawat-00b566201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '10px',
                      color: colors.textLightMuted,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'scale(1.06)',
                        boxShadow: '0 8px 30px rgba(242,140,58,0.12)',
                        color: colors.secondary,
                      }
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6C1.1 6 0 4.88 0 3.5C0 2.12 1.1 1 2.48 1C3.86 1 4.98 2.12 4.98 3.5ZM0.5 8.5H4.5V24H0.5V8.5ZM7.5 8.5H11.2V10.4H11.3C11.9 9.34 13.37 8.2 15.5 8.2C19.9 8.2 20.5 10.94 20.5 15.16V24H16.5V15.98C16.5 13.88 16.46 11.24 13.5 11.24C10.5 11.24 10 13.58 10 15.86V24H6V8.5H7.5Z" />
                    </svg>
                  </Box>

                  <Box
                    component="a"
                    href="mailto:himanshirawat0001@gmail.com"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 40,
                      height: 40,
                      borderRadius: '10px',
                      color: colors.textLightMuted,
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        transform: 'scale(1.06)',
                        boxShadow: '0 8px 30px rgba(242,140,58,0.12)',
                        color: colors.secondary,
                      }
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 13.065L.5 5.25V18.75C.5 20.378 1.622 21.5 3.25 21.5H20.75C22.378 21.5 23.5 20.378 23.5 18.75V5.25L12 13.065ZM12 10.935L23.5 3.12H.5L12 10.935Z" />
                    </svg>
                  </Box>
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={3}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      2+
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.textLightMuted,
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      Years Experience
                    </Typography>
                  </Box>

                  <Box sx={{ borderLeft: "2px solid rgba(242,140,58,0.28)", pl: 3 }}>
                    <Typography
                      sx={{
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      5+
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.textLightMuted,
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      Projects Completed
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* RIGHT SIDE - VISUAL ELEMENTS */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <motion.div
                variants={imageVariants}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <CodeCard
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ color: colors.secondary, marginBottom: "8px" }}>
                    {"<"} <span style={{ color: colors.accent2 }}>const</span> Developer{" "}
                    {">"}
                  </div>
                  <div style={{ color: colors.textLight, marginBottom: "6px" }}>
                    role: <span style={{ color: "#10b981" }}>&quot;Frontend Developer&quot;</span>
                  </div>
                  <div style={{ color: colors.textLight, marginBottom: "6px" }}>
                    skills: [<span style={{ color: "#10b981" }}>
                      "React"
                    </span>,{" "}
                    <span style={{ color: "#10b981" }}>&quot;JavaScript&quot;</span>,{" "}
                    <span style={{ color: "#10b981" }}>&quot;MUI&quot;</span>]
                  </div>
                  <div style={{ color: colors.textLight, marginBottom: "6px" }}>
                    focus: <span style={{ color: "#10b981" }}>
                      &quot;Clean UI & Real Product Flows&quot;
                    </span>
                  </div>
                  <div style={{ color: colors.textLight }}>
                    available: <span style={{ color: "#10b981" }}>true</span>
                  </div>
                  <div style={{ color: colors.secondary, marginTop: "8px" }}>
                    {"<"} / Developer {">"}
                  </div>
                </CodeCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </ContentWrapper>
    </HeroMainContainer>
  );
};

export default Hero;