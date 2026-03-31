import { Box, Typography, IconButton, Divider } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a",
        color: "#cbd5f5",
        py: 6,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
        Himanshi Rawat
      </Typography>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Frontend Developer • React.js • UI Enthusiast
      </Typography>

      <Typography
        variant="body2"
        sx={{
          mt: 2,
          maxWidth: 420,
          mx: "auto",
          color: "#94a3b8",
        }}
      >
        Crafting clean, responsive, and user-friendly web experiences.
      </Typography>

      {/* Social Icons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <IconButton
          component="a"
          href="https://github.com/Himanshi-18"
          target="_blank"
          sx={{
            color: "#cbd5f5",
            "&:hover": { color: "#38bdf8" },
          }}
        >
          <FaGithub size={22} />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/himanshi-rawat-00b566201/"
          target="_blank"
          sx={{
            color: "#cbd5f5",
            "&:hover": { color: "#38bdf8" },
          }}
        >
          <FaLinkedin size={22} />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:himanshirawat0001@gmail.com"
          sx={{
            color: "#cbd5f5",
            "&:hover": { color: "#38bdf8" },
          }}
        >
          <MdEmail size={22} />
        </IconButton>
      </Box>

      <Divider sx={{ my: 4, borderColor: "#334155" }} />

      <Typography variant="caption" sx={{ color: "#64748b" }}>
        © {new Date().getFullYear()} Himanshi Rawat. Built with React & MUI.
      </Typography>
    </Box>
  );
};

export default Footer;
