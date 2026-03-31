import React from "react";
import { Box, Typography, Button, Chip, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../../styles/color";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import Aarohan from "../../assets/images/aarohan-project.png";
import GirlsFlavour from "../../assets/images/girlsflavour-project.png";
import GeminiClone from "../../assets/images/gemini.png";

/* ============================================
   DATA
   ============================================ */

const projects = [
  {
    title: "Aarohan – Event & Community",
    type: "Professional",
    description: "Built responsive UI components and contributed to scalable frontend architecture.",
    image: Aarohan,
    tech: ["React", "TypeScript"],
    live: "https://aarohanindia.com/",
    github: null,
  },
  {
    title: "Girls Flavour – AI E-commerce",
    type: "Professional",
    description: "Developed dynamic product workflows and optimized inventory management system.",
    image: GirlsFlavour,
    tech: ["WordPress", "PHP"],
    live: "https://girlsflavour.com/",
    github: null,
  },
  {
    title: "Gemini Clone — AI Chat App",
    type: "Personal",
    description: "Built a Gemini-inspired AI chat app with dynamic UI, responsive layout and Firebase integration.",
    image: GeminiClone,
    tech: ["React", "Firebase"],
    live: "https://gemini-clone-web-app.netlify.app/",
    github: "https://github.com/Himanshi-18/Gemini-Clone",
  },
];

/* ============================================
   ANIMATIONS
   ============================================ */

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 10px 30px rgba(0, 217, 255, 0.1);
  }
  50% { 
    box-shadow: 0 20px 50px rgba(0, 217, 255, 0.25);
  }
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

const ProjectCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid rgba(0, 217, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  animation: ${glow} 4s ease-in-out infinite;

  &:hover {
    transform: translateY(-15px);
    border-color: rgba(0, 217, 255, 0.6);
    box-shadow: 0 30px 80px rgba(0, 217, 255, 0.3);

    .project-image {
      transform: scale(1.1);
    }
  }
`;

const ImageWrapper = styled(Box)`
  overflow: hidden;
  position: relative;
  height: 280px;
  background: linear-gradient(135deg, #00d9ff10, #0072ff10);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3) 50%, transparent);
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`;

const ContentWrapper = styled(Box)`
  padding: 28px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectTitle = styled(Typography)`
  font-weight: 700;
  font-size: 1.4rem;
  color: ${colors.white};
  margin-bottom: 12px;
  background: linear-gradient(135deg, #00d9ff, #0072ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
`;

const ProjectDescription = styled(Typography)`
  color: ${colors.lightGray};
  font-size: 0.95rem;
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const TechChip = styled(Chip)`
  background: rgba(0, 217, 255, 0.1) !important;
  color: ${colors.secondary} !important;
  border: 1px solid rgba(0, 217, 255, 0.3) !important;
  font-weight: 600;
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 217, 255, 0.2) !important;
    border-color: rgba(0, 217, 255, 0.6) !important;
    box-shadow: 0 4px 12px rgba(0, 217, 255, 0.3);
  }
`;

const TypeChip = styled(Chip)`
  width: fit-content;
  margin-bottom: 12px;
  background: rgba(255, 0, 110, 0.1) !important;
  color: #ff006e !important;
  border: 1px solid rgba(255, 0, 110, 0.3) !important;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ActionButton = styled(Button)`
  color: ${colors.secondary};
  text-transform: none;
  font-weight: 600;
  font-size: 0.95rem;
  flex: 1;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 8px;

  &:hover {
    background: rgba(0, 217, 255, 0.1);
    border-color: rgba(0, 217, 255, 0.6);
    box-shadow: 0 4px 12px rgba(0, 217, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 8px 12px;
  }
`;

/* ============================================
   COMPONENT
   ============================================ */

const FeaturedProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={containerVariants}
        >
          <motion.div
            variants={cardVariants}
          >
            <SectionTitle>Featured Projects</SectionTitle>
          </motion.div>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <ProjectCard whileHover={{ y: -15 }}>
                    <ImageWrapper>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                      />
                    </ImageWrapper>

                    <ContentWrapper>
                      <TypeChip label={project.type} size="small" />

                      <ProjectTitle variant="h6">{project.title}</ProjectTitle>

                      <ProjectDescription variant="body2">
                        {project.description}
                      </ProjectDescription>

                      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                        {project.tech.map((tech, i) => (
                          <TechChip key={i} label={tech} size="small" />
                        ))}
                      </Box>

                      <Box sx={{ display: "flex", gap: 2 }}>
                        <ActionButton 
                          startIcon={<FiExternalLink />} 
                          href={project.live} 
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </ActionButton>
                        {project.github && (
                          <ActionButton 
                            startIcon={<FiGithub />} 
                            href={project.github} 
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Code
                          </ActionButton>
                        )}
                      </Box>
                    </ContentWrapper>
                  </ProjectCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};

export default FeaturedProjects;
