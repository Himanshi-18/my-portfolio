import { Box } from "@mui/material";

export default function SkillChip({ label }) {
  return (
    <Box
      sx={{
        display: "inline-block",
        padding: "7px 13px",
        borderRadius: "999px",
        color: "#6B6257",
        background: "rgba(242, 140, 58, 0.06)",
        border: "1px solid rgba(242, 140, 58, 0.16)",
        fontSize: "0.8rem",
        fontWeight: 500,
        transition: "all 0.2s",
        "&:hover": {
          background: "rgba(242, 140, 58, 0.12)",
          color: "#F28C3A",
          borderColor: "rgba(242, 140, 58, 0.35)",
        },
      }}
    >
      {label}
    </Box>
  );
}
