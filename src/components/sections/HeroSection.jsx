import { useState, useEffect } from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../../styles/color";
import HeroImage from "../../assets/images/hero-image.png";
import SocialIcons from "../ui/SocialIcons";

const gradientShift = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const fadeInScale = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const HeroWrapper = styled(Box)`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(145deg, ${colors.dark1} 0%, ${colors.dark2} 60%, ${colors.dark0} 100%);
  background-size: 200% 200%;
  animation: ${gradientShift} 40s ease infinite;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 40%, rgba(242, 140, 58, 0.09), transparent 48%),
      radial-gradient(ellipse at 80% 70%, rgba(255, 176, 103, 0.06), transparent 45%);
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 5% 5%, rgba(242, 140, 58, 0.05) 0%, transparent 45%),
      radial-gradient(circle at 95% 95%, rgba(255, 176, 103, 0.04) 0%, transparent 45%);
    animation: ${fadeInScale} 3s ease-out;
    pointer-events: none;
    z-index: 1;
  }
`;

const GradientName = styled(Typography)`
  font-weight: 900;
  font-size: 3.5rem;
  background: linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 55%, ${colors.textLight} 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 10s ease infinite;
  letter-spacing: -1px;

  @media (max-width: 768px) { font-size: 2.5rem; }
  @media (max-width: 480px) { font-size: 1.8rem; }
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

  @media (max-width: 768px) { font-size: 1.1rem; }
`;

const CodeCard = styled(motion.div)`
  position: relative;
  background: ${colors.dark2};
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 36px;
  border: 1px solid rgba(242, 140, 58, 0.22);
  color: ${colors.textLight};
  font-family: "Fira Code", monospace;
  font-size: 0.92rem;
  line-height: 1.65;
  box-shadow: 0 20px 60px rgba(43, 43, 43, 0.18), 0 4px 20px rgba(242, 140, 58, 0.08);
  max-width: 400px;
  transition: all 0.35s ease;

  &:hover {
    border-color: rgba(242, 140, 58, 0.42);
    box-shadow: 0 30px 80px rgba(43, 43, 43, 0.22), 0 8px 32px rgba(242, 140, 58, 0.16);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) { padding: 26px; font-size: 0.82rem; }
`;

const ProfileImage = styled(motion.img)`
  width: 220px;
  height: 280px;
  object-fit: cover;
  border-radius: 20px;
  border: 2px solid rgba(242, 140, 58, 0.35);
  box-shadow: 0 20px 60px rgba(200, 140, 80, 0.18), 0 4px 24px rgba(242, 140, 58, 0.14);
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(255, 176, 103, 0.55);
    box-shadow: 0 30px 80px rgba(200, 140, 80, 0.26), 0 8px 36px rgba(242, 140, 58, 0.22);
  }

  @media (max-width: 768px) { width: 160px; height: 200px; }
`;

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Developer",
  "Frontend Engineer",
];

const gradientStat = {
  fontSize: "1.8rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, #F28C3A, #FFB067)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const HeroSection = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];
    if (charIndex < currentRole.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const d = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(d);
    }
  }, [charIndex, index]);

  return (
    <HeroWrapper>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            {/* LEFT — text content */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  sx={{ color: colors.secondary, mb: 1, fontWeight: 600, fontSize: "1.05rem", letterSpacing: "2.5px" }}
                >
                  WELCOME TO MY PORTFOLIO
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="h3" sx={{ color: colors.white, mb: 0.5, fontWeight: 400 }}>
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
                  sx={{ color: colors.textLightMuted, mb: 4, fontSize: "1rem", lineHeight: 1.7, maxWidth: "520px" }}
                >
                  Building responsive and scalable web interfaces using React,
                  JavaScript, and modern frontend technologies.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ mt: 2 }}>
                  <SocialIcons size={40} iconSize={18} />
                </Box>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
                  <Box>
                    <Typography sx={gradientStat}>2+</Typography>
                    <Typography sx={{ color: colors.textLightMuted, fontSize: "0.9rem", fontWeight: 500 }}>
                      Years Experience
                    </Typography>
                  </Box>
                  <Box sx={{ borderLeft: "1px solid rgba(242,140,58,0.2)", pl: 3 }}>
                    <Typography sx={gradientStat}>5+</Typography>
                    <Typography sx={{ color: colors.textLightMuted, fontSize: "0.9rem", fontWeight: 500 }}>
                      Projects Completed
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>

            {/* RIGHT — visual elements */}
            <Grid
              item xs={12} md={6}
              sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3 }}
            >
              <motion.div variants={imageVariants}>
                <ProfileImage
                  src={HeroImage}
                  alt="Himanshi Rawat"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              <motion.div
                variants={imageVariants}
                style={{ width: "100%", display: "flex", justifyContent: "center" }}
              >
                <CodeCard whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                  <div style={{ color: "#F28C3A", marginBottom: "8px" }}>
                    {"<"} <span style={{ color: "#FFB067" }}>const</span> Developer {">"}
                  </div>
                  <div style={{ color: "#F5F1EA", marginBottom: "6px" }}>
                    role: <span style={{ color: "#10b981" }}>"Frontend Developer"</span>
                  </div>
                  <div style={{ color: "#F5F1EA", marginBottom: "6px" }}>
                    skills: [<span style={{ color: "#10b981" }}>"React"</span>,{" "}
                    <span style={{ color: "#10b981" }}>"JavaScript"</span>,{" "}
                    <span style={{ color: "#10b981" }}>"MUI"</span>]
                  </div>
                  <div style={{ color: "#F5F1EA", marginBottom: "6px" }}>
                    focus: <span style={{ color: "#10b981" }}>"Clean UI & Real Product Flows"</span>
                  </div>
                  <div style={{ color: "#F5F1EA" }}>
                    available: <span style={{ color: "#10b981" }}>true</span>
                  </div>
                  <div style={{ color: "#F28C3A", marginTop: "8px" }}>{"<"} / Developer {">"}</div>
                </CodeCard>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </HeroWrapper>
  );
};

export default HeroSection;
