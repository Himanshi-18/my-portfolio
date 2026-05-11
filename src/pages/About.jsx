import { Box } from "@mui/material";
import AboutIntro from "../components/about/AboutIntro";
import StoryCard from "../components/about/StoryCard";
import SkillsCard from "../components/about/SkillsCard";
import ValuesCard from "../components/about/ValuesCard";
import CurrentCard from "../components/about/CurrentCard";
import { Container, Grid } from "@mui/material";

function About() {
  return (
    <>
      <AboutIntro />
      <Box
        sx={{
          py: 12,
          background: "linear-gradient(180deg, #1E1E1E 0%, #161616 100%)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(242,140,58,0.08), transparent 70%)",
            filter: "blur(80px)",
            pointerEvents: "none",
          },
        }}
      >
        <Container>
          <Grid
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
              gap: 4,
              position: "relative",
              zIndex: 1,
            }}
          >
            <StoryCard />
            <SkillsCard />
            <ValuesCard />
            <CurrentCard />
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default About;
