import { Box, Typography, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import colors from "../../styles/color";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Card = styled(motion.div)`
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: #252525;
  border: 1px solid rgba(242, 140, 58, 0.1);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(242, 140, 58, 0.32);
    box-shadow:
      0 24px 64px rgba(0, 0, 0, 0.45),
      0 8px 24px rgba(242, 140, 58, 0.14);
  }
`;

const ImageWrapper = styled(Box)`
  height: 220px;
  overflow: hidden;
  background: #1A1A1A;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.55s ease;
    filter: brightness(0.88);
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(1);
  }
`;

const Content = styled(Box)`
  padding: 26px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 220px);
`;

const TechChip = styled(Chip)`
  background: rgba(242, 140, 58, 0.1) !important;
  color: ${colors.accent} !important;
  border: 1px solid rgba(242, 140, 58, 0.22) !important;
  font-size: 0.72rem !important;
  font-weight: 600 !important;
`;

const ActionButton = styled(Button)`
  color: ${colors.secondary};
  text-transform: none;
  font-weight: 600;
  font-size: 0.85rem;
  border: 1px solid rgba(242, 140, 58, 0.25);
  border-radius: 10px;
  padding: 7px 14px;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(242, 140, 58, 0.09);
    border-color: rgba(242, 140, 58, 0.5);
    box-shadow: 0 4px 16px rgba(242, 140, 58, 0.14);
  }
`;

export default function ProjectCard({ project, index }) {
  return (
    <Card
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <ImageWrapper>
        <img src={project.image} alt={project.title} />
      </ImageWrapper>

      <Content>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          <Chip
            label={project.type}
            size="small"
            sx={{
              background: "rgba(242, 140, 58, 0.12)",
              color: colors.accent,
              border: "1px solid rgba(242, 140, 58, 0.2)",
              fontSize: "0.7rem",
            }}
          />
          <Chip
            label={project.status}
            size="small"
            sx={{ fontSize: "0.7rem", background: "rgba(255,255,255,0.07)", color: "rgba(245,241,234,0.5)" }}
          />
        </Box>

        <Typography sx={{ color: colors.textLight, fontWeight: 800, fontSize: "1.1rem", mb: 1 }}>
          {project.title}
        </Typography>

        <Typography sx={{ color: colors.textLightMuted, fontSize: "0.9rem", lineHeight: 1.6, mb: 2 }}>
          {project.description}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
          {project.tech.map((t) => (
            <TechChip key={t} label={t} size="small" />
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: "12px", marginTop: "auto" }}>
          {project.live ? (
            <ActionButton
              startIcon={<FiExternalLink />}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </ActionButton>
          ) : (
            <ActionButton disabled sx={{ opacity: 0.4 }}>Coming Soon</ActionButton>
          )}

          {project.github && (
            <ActionButton
              startIcon={<FiGithub />}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </ActionButton>
          )}
        </Box>
      </Content>
    </Card>
  );
}
