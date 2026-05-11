import { Box, Typography, List, ListItem } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import colors from "../../styles/color";

const Card = styled(Box)`
  background: ${colors.dark2};
  border-radius: 14px;
  padding: 20px 22px;
  border: 1px solid rgba(255,255,255,0.04);
  backdrop-filter: blur(6px);
  box-shadow: 0 6px 26px rgba(0,0,0,0.6);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 52px rgba(242, 140, 58, 0.08), 0 6px 18px rgba(0,0,0,0.5);
    border-color: rgba(242, 140, 58, 0.18);
  }
`;

export default function ExperienceItem({ role, org, date, points, side, index }) {
  const itemSx = {
    position: "relative",
    width: "50%",
    padding: "18px 28px",
    boxSizing: "border-box",
    textAlign: side === "left" ? "right" : "left",
    ...(side === "right" && { marginLeft: "50%" }),
    "@media (max-width: 900px)": {
      width: "100%",
      marginLeft: "0 !important",
      textAlign: "left",
      paddingLeft: "44px",
      marginBottom: "18px",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Box sx={itemSx}>
        <Card>
          <Typography sx={{ color: colors.textLight, fontWeight: 800, fontSize: "1.05rem" }}>
            {role}
          </Typography>
          <Typography sx={{ color: colors.textLightMuted, fontSize: "0.95rem", mt: "6px" }}>
            {org}
          </Typography>
          <Typography sx={{ color: colors.secondary, fontSize: "0.82rem", mt: "8px" }}>
            {date}
          </Typography>
          <List sx={{ mt: 1, pl: 2 }}>
            {points.map((point, i) => (
              <ListItem key={i} sx={{ display: "list-item", pl: 0 }}>
                <Typography component="span" sx={{ color: colors.textLightMuted, fontSize: "0.92rem" }}>
                  {point}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>
    </motion.div>
  );
}
