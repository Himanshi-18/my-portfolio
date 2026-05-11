import { Typography, Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import colors from "../../styles/color";
import { FiCode, FiDatabase, FiLayout, FiCheckCircle } from "react-icons/fi";

const SectionWrapper = styled(Box)`
  padding: 110px 0;
  background: linear-gradient(135deg, #0a0e27 0%, #111936 50%, #0f172a 100%);
`;

const AboutGrid = styled(Box)`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CardsGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
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
  line-height: 1.18;
  margin-bottom: 20px;

  span {
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const IntroText = styled(Typography)`
  color: #aab6cf;
  font-size: 1rem;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 28px;
`;

const HighlightBox = styled(Box)`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const HighlightItem = styled(Box)`
  padding: 10px 16px;
  border-radius: 999px;
  color: ${colors.secondary};
  background: rgba(0, 217, 255, 0.08);
  border: 1px solid rgba(0, 217, 255, 0.18);
  font-size: 0.85rem;
  font-weight: 600;
`;

const StrengthCard = styled(motion.div)`
  min-height: 220px;
  padding: 26px;
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  whileHover={{ scale: 1.02 }}

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 217, 255, 0.38);
    box-shadow: 0 18px 45px rgba(0, 217, 255, 0.12);
  }
`;

const IconBox = styled(Box)`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.secondary};
  background: rgba(0, 217, 255, 0.1);
  font-size: 1.35rem;
  margin-bottom: 18px;
`;

const CardTitle = styled(Typography)`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CardText = styled(Typography)`
  color: #9ba8c2;
  font-size: 0.9rem;
  line-height: 1.65;
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

function About() {
  return (
    <SectionWrapper>
      <Container maxWidth="lg">
        <AboutGrid>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Label>About Me</Label>

            <Heading>
              I design and build interfaces for <span>real-world products</span>
            </Heading>

            <IntroText>
              Im a Frontend Developer with around 2 years of experience
              building responsive, production-ready frontends for dashboards
              and product platforms. Ive worked on real-world projects such
              as Aarohan and Saviesh Club, delivering dashboard interfaces,
              component libraries, and Figma-to-code workflows that speed up
              delivery and ensure consistent UI across screens.
            </IntroText>

            <HighlightBox>
              <HighlightItem>React.js</HighlightItem>
              <HighlightItem>Figma → Code</HighlightItem>
              <HighlightItem>Responsive Frontend</HighlightItem>
              <HighlightItem>Dashboard UIs</HighlightItem>
            </HighlightBox>
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
                <IconBox>{card.icon}</IconBox>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </StrengthCard>
            ))}
          </CardsGrid>
        </AboutGrid>
      </Container>
    </SectionWrapper>
  );
}

export default About;