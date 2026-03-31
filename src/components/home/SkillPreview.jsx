import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../../styles/color";

import Reactjs from "../../assets/images/reactjs.png";
import Tailwind from "../../assets/images/tailwind.png";
import Sql from "../../assets/images/sql.png";
import Javascript from "../../assets/images/javascript.png";
import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import Bootstrap from "../../assets/images/bootstrap.png";
import PHP from "../../assets/images/php.png";

/* ============================================
   DATA
   ============================================ */

const skills = [
  { name: "React", img: Reactjs, level: "Expert" },
  { name: "JavaScript", img: Javascript, level: "Expert" },
  { name: "Tailwind", img: Tailwind, level: "Advanced" },
  { name: "HTML", img: HTML, level: "Expert" },
  { name: "CSS", img: CSS, level: "Advanced" },
  { name: "Bootstrap", img: Bootstrap, level: "Advanced" },
  { name: "SQL", img: Sql, level: "Intermediate" },
  { name: "PHP", img: PHP, level: "Intermediate" },
];

const marqueeSkills = [...skills, ...skills];

/* ============================================
   ANIMATIONS
   ============================================ */

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 15px rgba(0, 217, 255, 0.2); }
  50% { box-shadow: 0 0 30px rgba(0, 217, 255, 0.5); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
`;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const SectionWrapper = styled(Box)`
  padding: 120px 0;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(0, 217, 255, 0.1), transparent 40%),
                radial-gradient(circle at 80% 70%, rgba(0, 114, 255, 0.1), transparent 50%);
    pointer-events: none;
  }
`;

const SectionTitle = styled(Typography)`
  font-weight: 900;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 80px;
  background: linear-gradient(135deg, #00d9ff 0%, #0072ff 50%, #ff006e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 60px;
  }
`;

const SkillCard = styled(motion.div)`
  min-width: 180px;
  margin: 0 20px;
  padding: 40px 20px;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  text-align: center;
  border: 2px solid rgba(0, 217, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${float} 3s ease-in-out infinite, ${glow} 4s ease-in-out infinite;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 217, 255, 0.1),
      transparent 50%,
      rgba(0, 114, 255, 0.1)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-15px) scale(1.05);
    background: rgba(15, 23, 42, 0.9);
    border-color: rgba(0, 217, 255, 0.6);
    box-shadow: 0 20px 50px rgba(0, 217, 255, 0.4);

    &::before {
      opacity: 1;
    }

    img {
      transform: scale(1.15) rotate(8deg);
    }
  }

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 16px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 0 10px rgba(0, 217, 255, 0.3));
  }

  @media (max-width: 768px) {
    min-width: 160px;
    padding: 30px 15px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;

const SkillName = styled(Typography)`
  color: ${colors.secondary};
  font-weight: 700;
  font-size: 1rem;
  transition: color 0.3s ease;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SkillLevel = styled(Typography)`
  color: ${colors.lightGray};
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
`;

const FadeLeft = styled(Box)`
  position: absolute;
  left: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(to right, #0a0e27, transparent);
  z-index: 2;
  pointer-events: none;
`;

const FadeRight = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  height: 100%;
  background: linear-gradient(to left, #0a0e27, transparent);
  z-index: 2;
  pointer-events: none;
`;

const MarqueeContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  margin: 60px 0;
`;

const GridContainer = styled(Container)`
  position: relative;
  z-index: 3;
`;

/* ============================================
   COMPONENT
   ============================================ */

const SkillPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <SectionWrapper>
      <GridContainer maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <SectionTitle>My Tech Stack</SectionTitle>
          </motion.div>

          <Grid container spacing={2} sx={{ mb: 4, justifyContent: "center" }}>
            {skills.map((skill, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: "16px",
                      background: "rgba(15, 23, 42, 0.6)",
                      backdropFilter: "blur(20px)",
                      border: "2px solid rgba(0, 217, 255, 0.2)",
                      transition: "all 0.4s ease",
                      cursor: "pointer",

                      "&:hover": {
                        border: "2px solid rgba(0, 217, 255, 0.6)",
                        background: "rgba(15, 23, 42, 0.9)",
                        boxShadow: "0 15px 40px rgba(0, 217, 255, 0.3)",
                      },

                      "& img": {
                        width: "60px",
                        height: "60px",
                        mb: 2,
                        transition: "all 0.4s ease",
                        filter: "drop-shadow(0 0 8px rgba(0, 217, 255, 0.3))",
                      },

                      "&:hover img": {
                        transform: "scale(1.1) rotate(8deg)",
                      },
                    }}
                  >
                    <img src={skill.img} alt={skill.name} />
                    <Typography
                      sx={{
                        color: colors.secondary,
                        fontWeight: 700,
                        fontSize: "1rem",
                        mb: 0.5,
                      }}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: colors.lightGray,
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        opacity: 0.7,
                      }}
                    >
                      {skill.level}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </GridContainer>
    </SectionWrapper>
  );
};

export default SkillPreview;
