import { Box, Typography, Button, Chip, Container } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import colors from "../../styles/color";
import { FiExternalLink, FiGithub, FiArrowRight } from "react-icons/fi";

import Aarohan from "../../assets/images/aarohan-project.png";
import GirlsFlavour from "../../assets/images/girlsflavour-project.png";
import GeminiClone from "../../assets/images/gemini.png";

const projects = [
  {
    title: "Aarohan – Event & Community",
    type: "Professional",
    description:
      "Built responsive, production-ready UI sections from Figma using React and TypeScript. Focused on reusable components, accessibility, and performance.",
    image: Aarohan,
    tech: ["React", "TypeScript", "Chakra UI"],
    live: "https://aarohanindia.com/",
    github: null,
  },
  {
    title: "Girls Flavour – AI E-commerce",
    type: "Professional",
    description:
      "Improved product workflows and responsive frontend for e-commerce modules, integrating APIs and optimizing UI interactions.",
    image: GirlsFlavour,
    tech: ["WordPress", "PHP", "JavaScript"],
    live: "https://girlsflavour.com/",
    github: null,
  },
  {
    title: "Gemini Clone — AI Chat App",
    type: "Personal",
    description:
      "Crafted a responsive AI chat interface with dynamic components and Firebase-backed state. Prioritized UX and fast rendering.",
    image: GeminiClone,
    tech: ["React", "Firebase"],
    live: "https://gemini-clone-web-app.netlify.app/",
    github: "https://github.com/Himanshi-18/Gemini-Clone",
  },
];

const SectionWrapper = styled(Box)`
  padding: 110px 0;
  background: linear-gradient(135deg, #0a0e27 0%, #111936 50%, #0f172a 100%);
`;

const SectionHeader = styled(Box)`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 55px;
`;

const Label = styled(Typography)`
  color: ${colors.secondary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const Heading = styled(Typography)`
  color: ${colors.white};
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;

  span {
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.35s cubic-bezier(0.2,0.9,0.2,1), box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 217, 255, 0.5);
    box-shadow: 0 28px 70px rgba(0, 217, 255, 0.14);

    img {
      transform: scale(1.08) translateY(-2px);
    }
  }
`;

const ImageWrapper = styled(Box)`
  height: 230px;
  overflow: hidden;
  background: rgba(0, 217, 255, 0.05);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const ContentWrapper = styled(Box)`
  padding: 26px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 230px);
`;

const TypeChip = styled(Chip)`
  width: fit-content;
  margin-bottom: 14px;
  background: rgba(255, 0, 110, 0.1) !important;
  color: #ff4f9a !important;
  border: 1px solid rgba(255, 0, 110, 0.25) !important;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const ProjectTitle = styled(Typography)`
  color: ${colors.white};
  font-size: 1.18rem;
  font-weight: 800;
  margin-bottom: 12px;
`;

const ProjectDescription = styled(Typography)`
  color: #aab6cf;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 18px;
  flex: 1;
`;

const TechChip = styled(Chip)`
  background: rgba(0, 217, 255, 0.08) !important;
  color: ${colors.secondary} !important;
  border: 1px solid rgba(0, 217, 255, 0.22) !important;
  font-size: 0.72rem;
  font-weight: 600;
`;

const ActionRow = styled(Box)`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
`;

const ActionButton = styled(Button)`
  color: ${colors.secondary};
  text-transform: none;
  font-weight: 700;
  border: 1px solid rgba(0, 217, 255, 0.22);
  border-radius: 10px;
  padding: 8px 14px;

  &:hover {
    background: rgba(0, 217, 255, 0.08);
    border-color: rgba(0, 217, 255, 0.5);
  }
`;

const ViewAllWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 45px;
`;

const ViewAllButton = styled(Button)`
  background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
  color: white;
  text-transform: none;
  font-weight: 700;
  border-radius: 999px;
  padding: 12px 28px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 217, 255, 0.22);
  }
`;

const FeaturedProjects = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionHeader>
          <Label>Live Projects</Label>
          <Heading>
            Featured <span>Projects</span>
          </Heading>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <ImageWrapper>
                <img src={project.image} alt={project.title} />
              </ImageWrapper>

              <ContentWrapper>
                <TypeChip label={project.type} size="small" />

                <ProjectTitle>{project.title}</ProjectTitle>

                <ProjectDescription>{project.description}</ProjectDescription>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                  {project.tech.map((tech) => (
                    <TechChip key={tech} label={tech} size="small" />
                  ))}
                </Box>

                <ActionRow>
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
                </ActionRow>
              </ContentWrapper>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <ViewAllWrapper>
          <ViewAllButton href="/projects" endIcon={<FiArrowRight />}>
            View All Projects
          </ViewAllButton>
        </ViewAllWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeaturedProjects;