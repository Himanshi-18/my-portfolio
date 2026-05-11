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
      <Typography sx={{ fontSize: "0.8rem", letterSpacing: 2, color: "rgba(245,241,234,0.38)", mb: 1 }}>
        VALUES
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#F5F1EA" }}>
        What drives me
      </Typography>
      {values.map((value, index) => (
        <Box key={index} mb={3}>
          <Typography fontWeight={600} sx={{ color: "#F5F1EA" }}>
            {value.title}
          </Typography>
          <Typography sx={{ color: "rgba(245,241,234,0.55)" }}>
            {value.desc}
          </Typography>
        </Box>
      ))}
    </GlassCard>
  );
};

export default ValuesCard;
