import { Typography, Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import colors from "../../styles/color";
import { FiCode, FiDatabase, FiLayout, FiCheckCircle } from "react-icons/fi";
import { SectionWrapper } from "../../styles/shared";

const AboutGrid = styled(Box)`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;

const CardsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const StrengthCard = styled(motion.div)`
  min-height: 215px;
  padding: 26px;
  border-radius: 18px;
  background: ${colors.dark2};
  border: 1px solid rgba(242, 140, 58, 0.08);
  backdrop-filter: blur(6px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.36);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(242, 140, 58, 0.22);
    box-shadow: 0 16px 48px rgba(242, 140, 58, 0.06), 0 4px 12px rgba(0,0,0,0.3);
  }
`;

const cards = [
  {
    icon: <FiLayout />,
    title: "Frontend UI",
    text: "Responsive and reusable interfaces using React, JavaScript, MUI, Bootstrap, and modern UI patterns.",
  },
  {
    icon: <FiCode />,
    title: "Real Projects",
    text: "Worked on CRM dashboards, Saviesh Club, and interactive wardrobe modules with real product flows.",
  },
  {
    icon: <FiDatabase />,
    title: "API Integration",
    text: "REST API handling, dynamic data rendering, forms, validations, and UI state management.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Testing & Debugging",
    text: "Figma matching, responsive fixes, flow testing, bug fixing, and user experience improvements.",
  },
];

const highlights = ["React.js", "Figma → Code", "Responsive Frontend", "Dashboard UIs"];

function AboutSection() {
  return (
    <SectionWrapper sx={{ background: `linear-gradient(180deg, ${colors.dark1} 0%, ${colors.dark2} 100%)` }}>
      {/* warm spotlight top-right */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(242,140,58,0.06), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <AboutGrid>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{ color: colors.secondary, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", mb: "14px" }}
            >
              About Me
            </Typography>

            <Typography sx={{ color: colors.textLight, fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: 800, lineHeight: 1.18, mb: "20px" }}>
              I design and build interfaces for{" "}
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                real-world products
              </Box>
            </Typography>

            <Typography sx={{ color: colors.textLightMuted, fontSize: "1rem", lineHeight: 1.8, maxWidth: "520px", mb: "28px" }}>
              I'm a Frontend Developer with around 2 years of experience building responsive,
              production-ready frontends for dashboards and product platforms. I've worked on
              real-world projects such as Aarohan and Saviesh Club, delivering dashboard interfaces,
              component libraries, and Figma-to-code workflows that speed up delivery and ensure
              consistent UI across screens.
            </Typography>

            <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {highlights.map((item) => (
                <Box
                  key={item}
                  sx={{
                    padding: "9px 16px",
                    borderRadius: "999px",
                    color: colors.secondary,
                    background: "rgba(242, 140, 58, 0.07)",
                    border: "1px solid rgba(242, 140, 58, 0.12)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </motion.div>

          <CardsGrid>
            {cards.map((card, index) => (
              <StrengthCard
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Box
                  sx={{
                    width: 44, height: 44, borderRadius: "12px", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    color: colors.secondary, background: "rgba(242, 140, 58, 0.08)",
                    fontSize: "1.3rem", mb: "16px",
                  }}
                >
                  {card.icon}
                </Box>
                <Typography sx={{ color: colors.textLight, fontSize: "1rem", fontWeight: 700, mb: "10px" }}>
                  {card.title}
                </Typography>
                <Typography sx={{ color: colors.textLightMuted, fontSize: "0.9rem", lineHeight: 1.65 }}>
                  {card.text}
                </Typography>
              </StrengthCard>
            ))}
          </CardsGrid>
        </AboutGrid>
      </Container>
    </SectionWrapper>
  );
}

export default AboutSection;
