import { Typography, Box, Chip } from "@mui/material";
import GlassCard from "../common/GlassCard.jsx";

const frontend = ["React", "JavaScript", "TypeScript", "NextJS"];
const tools = ["Git", "Docker", "Figma", "CI/CD"];

const SkillsCard = () => {
  return (
    <GlassCard>
      <Typography sx={{ fontSize: "0.8rem", letterSpacing: 2, color: "rgba(245,241,234,0.38)", mb: 1 }}>
        SKILLS
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#F5F1EA" }}>
        My Skillset
      </Typography>

      <Typography sx={{ color: "rgba(245,241,234,0.5)", mb: 1, fontSize: "0.85rem" }}>
        Frontend
      </Typography>
      <Box mb={3}>
        {frontend.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              mr: 1,
              mb: 1,
              background: "rgba(242,140,58,0.1)",
              border: "1px solid rgba(242,140,58,0.22)",
              color: "#FFB067",
              fontWeight: 600,
              fontSize: "0.78rem",
            }}
          />
        ))}
      </Box>

      <Typography sx={{ color: "rgba(245,241,234,0.5)", mb: 1, fontSize: "0.85rem" }}>
        Tools
      </Typography>
      <Box>
        {tools.map((tool) => (
          <Chip
            key={tool}
            label={tool}
            sx={{
              mr: 1,
              mb: 1,
              background: "rgba(242,140,58,0.07)",
              border: "1px solid rgba(242,140,58,0.16)",
              color: "rgba(245,241,234,0.7)",
              fontWeight: 500,
              fontSize: "0.78rem",
            }}
          />
        ))}
      </Box>
    </GlassCard>
  );
};

export default SkillsCard;
