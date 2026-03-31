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
          background: "rgba(15,23,42,0.75)",
          border: "1px solid #1e293b",
          backdropFilter: "blur(12px)",
          transition: "all 0.35s ease",
          height: "100%",

          "&:hover": {
            transform: "translateY(-8px)",
            borderColor: "#38bdf8",
            boxShadow: "0 10px 40px rgba(56,189,248,0.2)",
          },
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default GlassCard;