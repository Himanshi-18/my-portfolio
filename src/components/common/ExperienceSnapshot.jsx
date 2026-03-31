import { Box, Typography, Grid, Paper} from "@mui/material";
import ncLogo from "../../assets/images/nc-logo.png";
import hunaru from "../../assets/images/hunaru.png";
import mindAviator from "../../assets/images/mind_aviator.png"
import Twowaits from "../../assets/images/twowaits.png"
import Escorts from "../../assets/images/escorts.png"

const experience = [
  {
    logo: ncLogo,
    title: "Northcorp Software Pvt. Ltd.",
    subtitle: "Frontend Developer",
    date: "April 2025 - Present",
  },
  {
    logo: hunaru,
    title: "Hunaru One",
    subtitle: "ReactJS Intern",
    date: "January 2025 – March 2025",
  },
  {
    logo: mindAviator,
    title: "Hunaru One",
    subtitle: "Frontend Developer",
    date: "December 2023 - December 2024",
  },
  {
    logo: Twowaits,
    title: "TwoWaits",
    subtitle: "Web Development Intern",
    date: "February 2022 - February 2022",
  },
  {
    logo: Escorts,
    title: "Escorts Kubota Limited",
    subtitle: "Diploma Engineer trainee",
    date: "September 2019 - December 2020",
  }
];

const ExperienceSnapshot = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: "#020617",
        color: "#e5e7eb",
      }}
    >
      <Box maxWidth="1100px" mx="auto" px={3}>
        {/* Section Heading */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textAlign: "center",
            mb: 2,
          }}
        >
          Experience
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#94a3b8",
            maxWidth: 600,
            mx: "auto",
            mb: 6,
          }}
        >
          A quick overview of my frontend journey, skills, and the kind of
          products I’ve worked on.
        </Typography>

        {/* Cards */}
        <Grid container spacing={6}>
          {experience.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 3,
                  textAlign: "center",
                  border: "1px solid #1e293b",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "#38bdf8",
                  },
                }}
              >
                {/* Company Logo */}
                <Box
                  component="img"
                  src={item.logo}
                  alt={item.title}
                  sx={{
                    width: 100,
                    height: 60,
                    mb: 1,
                    borderRadius: 1,
                    objectFit: "contain",
                  }}
                />

                {/* Role */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#333",
                  }}
                >
                  {item.subtitle}
                </Typography>

                {/* Company Name */}
                <Typography
                  variant="body1"
                  sx={{ mb: 0.5 }}
                >
                  {item.title}
                </Typography>

                {/* Date */}
                <Typography
                  variant="body2"
                  sx={{ color: "#5f5f5f" }}
                >
                  {item.date}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ExperienceSnapshot;
