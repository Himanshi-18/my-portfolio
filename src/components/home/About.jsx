import { Typography, Box, Button, Grid, Container } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import colors from "../../styles/color";
import AboutImage from "../../assets/images/about-illustration.png";
import { FiArrowRight } from "react-icons/fi";

/* ============================================
   ANIMATIONS
   ============================================ */

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 217, 255, 0.2); }
  50% { box-shadow: 0 0 40px rgba(0, 217, 255, 0.5); }
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
    background: radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.08), transparent 40%),
                radial-gradient(circle at 70% 80%, rgba(0, 217, 255, 0.05), transparent 50%);
    pointer-events: none;
  }
`;

const GlassCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 60px 40px;
  border: 2px solid rgba(0, 217, 255, 0.2);
  position: relative;
  z-index: 2;
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(0, 217, 255, 0.6);
    box-shadow: 0 20px 60px rgba(0, 217, 255, 0.3);
  }

  @media (max-width: 768px) {
    padding: 40px 25px;
  }
`;

const GradientHeading = styled(Typography)`
  font-weight: 900;
  font-size: 3rem;
  background: linear-gradient(135deg, #00d9ff 0%, #0072ff 50%, #ff006e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 30px;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
  filter: drop-shadow(0 10px 40px rgba(0, 217, 255, 0.25));
  border: 2px solid rgba(0, 217, 255, 0.2);
  animation: ${float} 4s ease-in-out infinite;
  transition: all 0.4s ease;

  &:hover {
    border-color: rgba(0, 217, 255, 0.6);
    filter: drop-shadow(0 20px 60px rgba(0, 217, 255, 0.4));
  }

  @media (max-width: 768px) {
    max-width: 350px;
  }
`;

const DescriptionText = styled(Typography)`
  color: ${colors.lightGray};
  line-height: 1.9;
  margin-bottom: 24px;
  font-size: 1.05rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #00d9ff, #0072ff);
  color: white;
  padding: 14px 36px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
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

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(0, 217, 255, 0.5);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.9rem;
  }
`;

/* ============================================
   COMPONENT
   ============================================ */

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8 } 
    },
  };

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          <Grid container spacing={6} alignItems="center">
            {/* LEFT SIDE */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <GradientHeading variant="h2">About Me</GradientHeading>
              </motion.div>

              <motion.div variants={itemVariants}>
                <DescriptionText variant="body1">
                  I'm a passionate frontend developer with a keen eye for modern design and user experience. With expertise in React, JavaScript, and responsive design, I transform ideas into beautiful, functional web interfaces.
                </DescriptionText>
              </motion.div>

              <motion.div variants={itemVariants}>
                <DescriptionText variant="body1">
                  I focus on performance, scalability, and smooth user experiences. Every project I build is an opportunity to push creative boundaries and deliver exceptional results. I'm constantly learning new technologies and refining my craft.
                </DescriptionText>
              </motion.div>

              <motion.div variants={itemVariants}>
                <DescriptionText variant="body1">
                  Beyond coding, I'm passionate about animation, UI/UX design, and creating delightful digital experiences that users love. Let's collaborate and build something amazing together!
                </DescriptionText>
              </motion.div>

              <motion.div variants={itemVariants}>
                <StyledButton
                  endIcon={<FiArrowRight />}
                  href="/about"
                >
                  Learn More About Me
                </StyledButton>
              </motion.div>
            </Grid>

            {/* RIGHT SIDE */}
            <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
              <motion.div variants={imageVariants}>
                <StyledImage 
                  src={AboutImage} 
                  alt="About Illustration"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}

export default About;
