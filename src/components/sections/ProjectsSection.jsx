import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FiArrowRight } from "react-icons/fi";
import projects from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";
import CustomButton from "../ui/CustomButton";

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1;   }
`;

const DarkWrapper = styled(Box)`
  padding: 110px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #1A1A1A 0%, #161616 50%, #1E1E1E 100%);
`;

const ProjectsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;

  @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 700px)  { grid-template-columns: 1fr; }
`;

const featured = projects.filter((p) => p.featured);

const ProjectsSection = () => {
  return (
    <DarkWrapper>
      {/* warm orange glow — bottom-right */}
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(242,140,58,0.12), transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />
      {/* subtle top-left fill */}
      <Box
        sx={{
          position: "absolute",
          top: -60,
          left: -60,
          width: 380,
          height: 380,
          background: "radial-gradient(circle, rgba(255,176,103,0.06), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <SectionHeading
          label="Live Projects"
          title={<>Featured <span>Projects</span></>}
        />

        <ProjectsGrid>
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </ProjectsGrid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: "45px" }}>
          <CustomButton
            component="a"
            href="/projects"
            endIcon={<FiArrowRight />}
          >
            View All Projects
          </CustomButton>
        </Box>
      </Container>
    </DarkWrapper>
  );
};

export default ProjectsSection;
