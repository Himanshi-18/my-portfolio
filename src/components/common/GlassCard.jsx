import { Box } from "@mui/material";
import { motion } from "framer-motion";

const GlassCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: "18px",
          background: "#252525",
          border: "1px solid rgba(242, 140, 58, 0.12)",
          transition: "all 0.35s ease",
          height: "100%",
          "&:hover": {
            transform: "translateY(-8px)",
            borderColor: "rgba(242, 140, 58, 0.32)",
            boxShadow: "0 16px 48px rgba(242,140,58,0.1), 0 4px 12px rgba(0,0,0,0.3)",
          },
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default GlassCard;
