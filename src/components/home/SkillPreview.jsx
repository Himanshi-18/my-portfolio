import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import colors from "../../styles/color";
import {
  FiCode,
  FiLayers,
  FiServer,
  FiTool,
} from "react-icons/fi";

const skillGroups = [
  {
    icon: <FiCode />,
    title: "Frontend",
    skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    icon: <FiLayers />,
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Bootstrap", "MUI", "Chakra UI"],
  },
  {
    icon: <FiServer />,
    title: "Backend Basics",
    skills: ["Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    icon: <FiTool />,
    title: "Tools",
    skills: ["Git", "GitHub", "GitLab", "Postman", "VS Code", "Vite"],
  },
];

const SectionWrapper = styled(Box)`
  padding: 110px 0;
  background: linear-gradient(180deg, ${colors.dark0} 0%, ${colors.dark1} 100%);
`;

const SectionHeader = styled(Box)`
  text-align: center;
  max-width: 720px;
  margin: 0 auto 55px;
`;

const Label = styled(Typography)`
  color: ${colors.secondary};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 14px;
`;

const Heading = styled(Typography)`
  color: ${colors.white};
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 16px;

  span {
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled(Typography)`
  color: ${colors.textLightMuted};
  font-size: 1rem;
  line-height: 1.7;
`;

const SkillsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  min-height: 245px;
  padding: 28px;
  border-radius: 22px;
  background: ${colors.dark2};
  border: 1px solid rgba(255,255,255,0.04);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(242,140,58,0.12);
    box-shadow: 0 18px 45px rgba(242,140,58,0.06);
  }
`;

const IconBox = styled(Box)`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  background: rgba(242,140,58,0.08);
  font-size: 1.4rem;
  margin-bottom: 18px;
`;

const CardTitle = styled(Typography)`
  color: ${colors.white};
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 18px;
`;

const ChipWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillChip = styled(Box)`
  padding: 9px 14px;
  border-radius: 999px;
  color: ${colors.textLightMuted};
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.03);
  font-size: 0.82rem;
  font-weight: 500;
`;

const SkillPreview = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <SectionHeader>
          <Label>Skills</Label>
          <Heading>
            Tech stack I use to build <span>real interfaces</span>
          </Heading>
          <SubText>
            A practical set of frontend, styling, backend basics, and tools used
            across real projects, dashboards, API integrations, and responsive UI work.
          </SubText>
        </SectionHeader>

        <SkillsGrid>
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <IconBox>{group.icon}</IconBox>
              <CardTitle>{group.title}</CardTitle>

              <ChipWrapper>
                {group.skills.map((skill) => (
                  <SkillChip key={skill}>{skill}</SkillChip>
                ))}
              </ChipWrapper>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default SkillPreview;