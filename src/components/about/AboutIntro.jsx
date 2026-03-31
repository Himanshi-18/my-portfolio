import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const infoCards = [
  { title: "Role", value: "Frontend Developer" },
  { title: "Focus", value: "React • UI Development • Performance" },
  { title: "Experience", value: "1+ Years Industry Experience" },
  { title: "Focus Areas", value: "UI Development • Component Architecture • Responsive Design" },
];

// Duplicate cards for seamless loop
const loopedCards = [...infoCards, ...infoCards];

const AboutIntro = () => {
  return (
    <Box
      sx={{
        py: 14,
        background:
          "radial-gradient(circle at 30% 20%, rgba(56,189,248,0.08), transparent 40%), #020617",
      }}
    >
      <Container maxWidth="lg">

        {/* TEXT INTRO */}
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
                background: "linear-gradient(135deg,#38bdf8,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              A Little About Me
            </Typography>

            <Typography
              sx={{
                color: "#cbd5f5",
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
                color: "#94a3b8",
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

        {/* INFO CARDS CAROUSEL */}
        <Box
          sx={{
            mt: 4,
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            animate={{
              x: [0, -25 * 4 + "%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            {loopedCards.map((card, index) => (
              <Box
                key={index}
                sx={{
                  flex: "0 0 calc(25% - 6px)",
                  p: 2.5,
                  borderRadius: "16px",
                  background: "rgba(15,23,42,0.8)",
                  border: "1px solid #1e293b",
                  backdropFilter: "blur(10px)",
                  transition: "0.3s",
                  textAlign: "center",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "#38bdf8",
                    boxShadow: "0 0 20px rgba(56, 189, 248, 0.2)",
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#38bdf8",
                    mb: 1,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#e2e8f0",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    lineHeight: 1.4,
                    wordBreak: "break-word",
                  }}
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