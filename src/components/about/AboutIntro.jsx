import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import colors from "../../styles/color";

const infoCards = [
  { title: "Role", value: "Frontend Developer" },
  { title: "Focus", value: "React • UI Development • Performance" },
  { title: "Experience", value: "2+ Years Industry Experience" },
  { title: "Focus Areas", value: "UI Development • Component Architecture • Responsive Design" },
];

const loopedCards = [...infoCards, ...infoCards];

const AboutIntro = () => {
  return (
    <Box
      sx={{
        py: 14,
        background:
          `radial-gradient(circle at 30% 20%, rgba(242,140,58,0.08), transparent 40%), ${colors.dark1}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 3,
                background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Little About Me
            </Typography>

            <Typography
              sx={{
                color: colors.textLightMuted,
                fontSize: "1.1rem",
                lineHeight: 1.9,
                maxWidth: "850px",
                mx: "auto",
                mb: 3,
              }}
            >
              My journey into technology began with Electronics &
              Communication engineering before transitioning into
              Computer Science. Through curiosity and continuous
              learning, I discovered my passion for building
              interactive and responsive web interfaces.
            </Typography>

            <Typography
              sx={{
                color: colors.textLightMuted,
                lineHeight: 1.8,
                maxWidth: "850px",
                mx: "auto",
              }}
            >
              Today, I focus on creating modern web applications
              using React and other frontend technologies while
              constantly improving UI performance and user
              experience.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ mt: 4, width: "100%", overflow: "hidden", position: "relative" }}>
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: "8px", width: "max-content" }}
          >
            {loopedCards.map((card, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: "0 0 240px",
                    p: 2.5,
                    borderRadius: "16px",
                    background: colors.dark2,
                    border: "1px solid rgba(255,255,255,0.04)",
                    backdropFilter: "blur(6px)",
                    transition: "0.3s",
                    textAlign: "center",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: "rgba(242,140,58,0.18)",
                      boxShadow: "0 8px 28px rgba(242,140,58,0.08)",
                    },
                  }}
                >
                <Typography
                  variant="body2"
                  sx={{ color: "#F28C3A", mb: 1, fontWeight: 600, fontSize: "0.85rem" }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{ color: "rgba(245,241,234,0.8)", fontWeight: 500, fontSize: "0.8rem", lineHeight: 1.4, wordBreak: "break-word" }}
                >
                  {card.value}
                </Typography>
              </Box>
            ))}
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutIntro;
