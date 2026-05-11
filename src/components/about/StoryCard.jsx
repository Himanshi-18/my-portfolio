import { Typography } from "@mui/material";
import GlassCard from "../common/GlassCard.jsx";

const StoryCard = () => {
  return (
    <GlassCard>
      <Typography sx={{ fontSize: "0.8rem", letterSpacing: 2, color: "rgba(245,241,234,0.38)", mb: 1 }}>
        STORY
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: "#F5F1EA" }}>
        How I've got here
      </Typography>
      <Typography sx={{ color: "rgba(245,241,234,0.6)", lineHeight: 1.8 }}>
        My journey into technology began with Electronics &
        Communication engineering before transitioning into
        Computer Science. Through curiosity and continuous
        learning, I discovered my passion for building
        interactive web interfaces.
      </Typography>
    </GlassCard>
  );
};

export default StoryCard;
