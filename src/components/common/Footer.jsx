import { Box, Stack, Typography, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import colors from "../../styles/color";

const iconSx = {
  color: colors.darkGray,
  p: "4px",
  "&:hover": { color: colors.secondary, backgroundColor: "transparent" },
  transition: "color 0.2s",
};

const Footer = () => (
  <Box
    component="footer"
    sx={{
      backgroundColor: colors.dark0,
      borderTop: `1px solid rgba(242, 140, 58, 0.14)`,
      py: "18px",
      px: 3,
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      gap="6px"
    >
      <Typography variant="caption" sx={{ color: "rgba(245,241,234,0.45)" }}>
        © {new Date().getFullYear()} Himanshi Rawat · Built with React + MUI
      </Typography>
      <Stack direction="row" spacing={0}>
        <IconButton
          component="a"
          href="https://github.com/Himanshi-18"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={iconSx}
        >
          <FaGithub size={14} />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/himanshi-rawat-00b566201/"
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={iconSx}
        >
          <FaLinkedin size={14} />
        </IconButton>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;
