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
    box-shadow: 0 0 15px rgba(0, 217, 255, 0.3),
                inset 0 0 15px rgba(0, 217, 255, 0.1);
  }
  50% { 
    box-shadow: 0 0 40px rgba(0, 217, 255, 0.6),
                inset 0 0 20px rgba(0, 217, 255, 0.2);
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
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 15s ease infinite;
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
    background: radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.15), transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(0, 114, 255, 0.1), transparent 50%);
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
      radial-gradient(circle at 10% 10%, rgba(0, 217, 255, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 90% 90%, rgba(0, 114, 255, 0.05) 0%, transparent 50%);
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
  background: linear-gradient(135deg, #00d9ff 0%, #0072ff 50%, #ff006e 100%);
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
  background: linear-gradient(90deg, #00d9ff, #0072ff);
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
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 2px solid rgba(0, 217, 255, 0.3);
  color: ${colors.white};
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  animation: ${float} 5s ease-in-out infinite, ${glowBorder} 4s ease-in-out infinite;
  box-shadow: 0 20px 60px rgba(0, 217, 255, 0.1);
  max-width: 400px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 217, 255, 0.6);
    box-shadow: 0 30px 80px rgba(0, 217, 255, 0.25);
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
  border: 3px solid #00d9ff;
  box-shadow: 0 20px 50px rgba(0, 217, 255, 0.3);
  animation: ${float} 4s ease-in-out infinite;
  transition: all 0.4s ease;

  &:hover {
    border-color: #0072ff;
    box-shadow: 0 30px 70px rgba(0, 217, 255, 0.5);
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
  background: linear-gradient(135deg, #00d9ff, #0072ff);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 217, 255, 0.5);
  }
`;

const SecondaryButton = styled(StyledButton)`
  border: 2px solid #00d9ff;
  color: #00d9ff;
  background: transparent;

  &:hover {
    background: rgba(0, 217, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 217, 255, 0.3);
  }
`;

/* ============================================
   TYPEWRITER ANIMATION
   ============================================ */

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Enthusiast",
  "Creative Thinker",
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
                    color: colors.white,
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
                <RoleText>{text}_</RoleText>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="body1"
                  sx={{
                    color: colors.lightGray,
                    mb: 4,
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    maxWidth: "500px",
                  }}
                >
                  Crafting innovative, modern digital experiences with React and cutting-edge web technologies. Passionate about creating responsive, animated, and delightful user interfaces.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <PrimaryButton
                    endIcon={<FiArrowRight />}
                  >
                    View My Work
                  </PrimaryButton>

                  <SecondaryButton
                    startIcon={<FiMail />}
                  >
                    Get In Touch
                  </SecondaryButton>
                </Stack>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={3}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #00d9ff, #0072ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      3+
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.lightGray,
                        fontSize: "0.9rem",
                        fontWeight: 500,
                      }}
                    >
                      Years Experience
                    </Typography>
                  </Box>

                  <Box sx={{ borderLeft: "2px solid rgba(0,217,255,0.3)", pl: 3 }}>
                    <Typography
                      sx={{
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #00d9ff, #0072ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      10+
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.lightGray,
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
              {/* PROFILE IMAGE */}
              <motion.div
                variants={imageVariants}
              >
                <ProfileImage
                  src={HeroImage}
                  alt="Himanshi Rawat"
                  whileHover={{ scale: 1.05, rotateZ: 2 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* CODE CARD */}
              <motion.div
                variants={imageVariants}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <CodeCard
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div style={{ color: "#00d9ff", marginBottom: "8px" }}>
                    {"<"} <span style={{ color: "#ff006e" }}>const</span> Developer{" "}
                    {">"}
                  </div>
                  <div style={{ color: "#e0e0e0", marginBottom: "6px" }}>
                    role: <span style={{ color: "#10b981" }}>"Frontend Developer"</span>
                  </div>
                  <div style={{ color: "#e0e0e0", marginBottom: "6px" }}>
                    skills: [<span style={{ color: "#10b981" }}>
                      "React"
                    </span>,{" "}
                    <span style={{ color: "#10b981" }}>"JavaScript"</span>,{" "}
                    <span style={{ color: "#10b981" }}>"MUI"</span>]
                  </div>
                  <div style={{ color: "#e0e0e0", marginBottom: "6px" }}>
                    passion: <span style={{ color: "#10b981" }}>
                      "Creative UI & Animation"
                    </span>
                  </div>
                  <div style={{ color: "#e0e0e0" }}>
                    available: <span style={{ color: "#10b981" }}>true</span>
                  </div>
                  <div style={{ color: "#00d9ff", marginTop: "8px" }}>
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