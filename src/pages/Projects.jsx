import { Container, Box } from "@mui/material";
import styled from "@emotion/styled";
import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";
import SectionHeading from "../components/ui/SectionHeading";

const PageWrapper = styled(Box)`
  padding: 110px 0;
  background: linear-gradient(180deg, #1A1A1A 0%, #161616 50%, #1E1E1E 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ProjectsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;

  @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 700px)  { grid-template-columns: 1fr; }
`;

const Projects = () => {
  return (
    <PageWrapper>
      {/* warm orange glow top-right */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(242,140,58,0.1), transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <SectionHeading
          label="Projects"
          title={<>My <span>Project Work</span></>}
          subtitle="A collection of live, private, and in-progress projects showcasing frontend development, responsive UI, API integration, and real product work."
        />

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </ProjectsGrid>
      </Container>
    </PageWrapper>
  );
};

export default Projects;
