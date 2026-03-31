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
      <Box sx={{ backgroundColor: "#0f172a", color: "#e5e7eb" }}>
          <AboutIntro />
      </Box>
      <Box
  sx={{
    py: 14,
    background:
      "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.08), transparent 40%), #020617",
  }}
>
  <Container>
  <Grid
    sx={{
      width: "100%",
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        md: "repeat(2, 1fr)",
      },
      gap: 4,
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
  )
}

export default About;