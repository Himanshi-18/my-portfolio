import { Typography, Box } from "@mui/material";
import GlassCard from "../common/GlassCard.jsx";

const current = [
  "Building modern React applications",
  "Improving UI performance",
  "Exploring AI integration in web apps",
];

const CurrentCard = () => {
  return (
    <GlassCard>
      <Typography sx={{ fontSize: "0.8rem", letterSpacing: 2, color: "rgba(245,241,234,0.38)", mb: 1 }}>
        CURRENTLY
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#F5F1EA" }}>
        What I am up to
      </Typography>
      {current.map((item, index) => (
        <Box key={index} display="flex" mb={2}>
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#F28C3A",
              mt: "8px",
              mr: 2,
              flexShrink: 0,
            }}
          />
          <Typography sx={{ color: "rgba(245,241,234,0.7)" }}>{item}</Typography>
        </Box>
      ))}
    </GlassCard>
  );
};

export default CurrentCard;
