import { Typography, Box, Chip } from "@mui/material";
import GlassCard from "../common/GlassCard.jsx";

const frontend = ["React", "JavaScript", "TypeScript", "NextJS"];
const tools = ["Git", "Docker", "Figma", "CI/CD"];

const SkillsCard = () => {
  return (
    <GlassCard>

      <Typography
        sx={{
          fontSize: "0.8rem",
          letterSpacing: 2,
          color: "#64748b",
          mb: 1,
        }}
      >
        SKILLS
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: "#e2e8f0",
        }}
      >
        My Skillset
      </Typography>

      <Typography sx={{ color: "#94a3b8", mb: 1 }}>
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
              background: "#020617",
              border: "1px solid #334155",
              color: "#e2e8f0",
            }}
          />
        ))}
      </Box>

      <Typography sx={{ color: "#94a3b8", mb: 1 }}>
        Tools
      </Typography>

      {tools.map((tool) => (
        <Chip
          key={tool}
          label={tool}
          sx={{
            mr: 1,
            mb: 1,
            background: "#020617",
            border: "1px solid #334155",
            color: "#e2e8f0",
          }}
        />
      ))}

    </GlassCard>
  );
};

export default SkillsCard;