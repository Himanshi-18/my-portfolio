import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import skillGroups from "../../data/skills";
import SectionHeading from "../ui/SectionHeading";
import SkillChip from "../ui/SkillChip";
import colors from "../../styles/color";
import { SectionWrapper } from "../../styles/shared";

const SkillsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1000px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 600px)  { grid-template-columns: 1fr; }
`;

const SkillCard = styled(motion.div)`
  min-height: 245px;
  padding: 28px;
  border-radius: 18px;
  background: ${colors.dark2};
  border: 1px solid rgba(255,255,255,0.04);
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 26px rgba(0,0,0,0.6);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(242, 140, 58, 0.12);
    box-shadow: 0 16px 48px rgba(242, 140, 58, 0.06), 0 4px 12px rgba(0,0,0,0.3);
  }
`;

const SkillsSection = () => {
  return (
    <SectionWrapper sx={{ background: "linear-gradient(180deg, #1A1A1A 0%, #161616 50%, #1E1E1E 100%)" }}>
      {/* warm glow center-left */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: -100,
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(242,140,58,0.06), transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <SectionHeading
          label="Skills"
          title={<>Tech stack I use to build <span>real interfaces</span></>}
          subtitle="A practical set of frontend, styling, backend basics, and tools used across real projects, dashboards, API integrations, and responsive UI work."
        />

        <SkillsGrid>
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <SkillCard
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Box
                  sx={{
                    width: 46, height: 46, borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: colors.secondary, background: "rgba(242, 140, 58, 0.1)",
                    fontSize: "1.35rem", mb: "16px",
                  }}
                >
                  <Icon />
                </Box>

                <Box sx={{ color: colors.textLight, fontSize: "1.05rem", fontWeight: 700, mb: "16px" }}>
                  {group.title}
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
                  {group.skills.map((skill) => (
                    <SkillChip key={skill} label={skill} />
                  ))}
                </Box>
              </SkillCard>
            );
          })}
        </SkillsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default SkillsSection;
