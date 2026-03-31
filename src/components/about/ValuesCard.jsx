import { Typography, Box } from "@mui/material";
import GlassCard from "../common/GlassCard.jsx";

const values = [
  {
    title: "Continuous Learning",
    desc: "Technology evolves rapidly so I constantly improve my skills.",
  },
  {
    title: "Clean Code",
    desc: "Readable and maintainable code is essential for scalable systems.",
  },
  {
    title: "User Experience",
    desc: "Interfaces should be intuitive, fast and accessible.",
  },
];

const ValuesCard = () => {
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
        VALUES
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          mb: 3,
          color: "#e2e8f0",
        }}
      >
        What drives me
      </Typography>

      {values.map((value, index) => (
        <Box key={index} mb={3}>
          <Typography fontWeight={600} color="#e2e8f0">
            {value.title}
          </Typography>

          <Typography color="#94a3b8">
            {value.desc}
          </Typography>
        </Box>
      ))}

    </GlassCard>
  );
};

export default ValuesCard;