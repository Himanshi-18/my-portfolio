import { Box, Typography, Container } from "@mui/material";
import styled from "@emotion/styled";
import colors from "../../styles/color";
import experiences from "../../data/experiences";
import ExperienceItem from "../ui/ExperienceItem";

const SectionWrapper = styled(Box)`
  padding: 90px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, ${colors.dark1} 0%, ${colors.dark2} 100%);
`;

const TimelineWrap = styled(Box)`
  position: relative;
  margin-top: 24px;
  padding: 20px 0 0 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, rgba(242, 140, 58, 0.28), rgba(255, 176, 103, 0.08));
    border-radius: 2px;
  }

  @media (max-width: 900px) {
    &::before { left: 18px; transform: none; }
  }
`;

const Dot = styled(Box)`
  position: absolute;
  left: calc(50% - 8px);
  top: 22px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
  box-shadow: 0 0 18px rgba(242, 140, 58, 0.28);
  border: 2px solid ${colors.dark0};

  @media (max-width: 900px) { left: 10px; top: 26px; }
`;

const ExperienceTimeline = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <Box sx={{ mb: "18px" }}>
          <Typography sx={{ color: colors.secondary, fontWeight: 700, letterSpacing: "2.5px", fontSize: "0.78rem", textTransform: "uppercase", mb: 1 }}>
            Experience
          </Typography>
          <Typography sx={{ color: colors.textLight, fontWeight: 800, fontSize: "2rem" }}>
            Career Timeline
          </Typography>
        </Box>

        <TimelineWrap>
          <Dot />
          {experiences.map((exp, idx) => (
            <ExperienceItem
              key={exp.org}
              role={exp.role}
              org={exp.org}
              date={exp.date}
              points={exp.points}
              side={idx % 2 === 0 ? "left" : "right"}
              index={idx}
            />
          ))}
        </TimelineWrap>
      </Container>
    </SectionWrapper>
  );
};

export default ExperienceTimeline;
