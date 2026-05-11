import { useState } from "react";
import { Box, Typography, Grid, Stack, Container, TextField, Alert, Collapse } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { FiSend, FiMail, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import CustomButton from "../components/ui/CustomButton";
import colors from "../styles/color";

const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { from_name: "", from_email: "", subject: "", message: "" };

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const PageWrapper = styled(Box)`
  padding: 120px 0 100px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #1A1A1A 0%, #161616 50%, #1E1E1E 100%);
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 12% 50%, rgba(242, 140, 58, 0.07), transparent 42%),
      radial-gradient(ellipse at 88% 50%, rgba(255, 176, 103, 0.04), transparent 38%);
    pointer-events: none;
  }
`;

const GlowBlob = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(242, 140, 58, 0.1), transparent 70%);
  filter: blur(130px);
  top: -200px;
  right: -200px;
  pointer-events: none;
  animation: ${pulse} 6s ease-in-out infinite;

  @media (max-width: 768px) { width: 300px; height: 300px; }
`;

const GlowBlobLeft = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 176, 103, 0.07), transparent 70%);
  filter: blur(110px);
  bottom: -150px;
  left: -150px;
  pointer-events: none;
  animation: ${pulse} 9s ease-in-out infinite;

  @media (max-width: 768px) { width: 250px; height: 250px; }
`;

/* White glass card on dark bg — premium contrast */
const GlassCard = styled(Box)`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(24px);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid rgba(242, 140, 58, 0.18);
  box-shadow: 0 8px 48px rgba(0, 0, 0, 0.4), 0 2px 12px rgba(242, 140, 58, 0.08);

  @media (max-width: 600px) { padding: 28px 20px; }
`;

const StyledTextField = styled(TextField)`
  && .MuiInputBase-root {
    background: rgba(255, 255, 255, 0.06);
    color: #F5F1EA;
    border-radius: 10px;
    transition: all 0.25s ease;
    &:hover { background: rgba(255, 255, 255, 0.09); }
    &.Mui-focused { background: rgba(255, 255, 255, 0.1); }
  }
  && .MuiOutlinedInput-notchedOutline {
    border-color: rgba(242, 140, 58, 0.2);
    transition: border-color 0.25s ease;
  }
  &&:hover .MuiOutlinedInput-notchedOutline { border-color: rgba(242, 140, 58, 0.42); }
  && .Mui-focused .MuiOutlinedInput-notchedOutline { border-color: ${colors.secondary}; }
  && .MuiInputLabel-root { color: rgba(245, 241, 234, 0.45); font-size: 0.9rem; }
  && .MuiInputLabel-root.Mui-focused { color: ${colors.secondary}; }
  && .MuiInputBase-input { color: #F5F1EA; }
  && .MuiFormHelperText-root { color: #fca5a5; }
`;

const contactDetails = [
  {
    icon: FiMail,
    label: "Email",
    value: "himanshirawat0001@gmail.com",
    href: "mailto:himanshirawat0001@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Delhi, India",
  },
];

const socialIcons = [
  { Icon: FaGithub,   href: "https://github.com/Himanshi-18",                           label: "GitHub"   },
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/himanshi-rawat-00b566201/",    label: "LinkedIn" },
];

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const iconBoxSx = {
  width: 42,
  height: 42,
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  fontSize: "1.1rem",
};

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY);
  const [errors, setErrors]     = useState({});
  const [loading, setLoading]   = useState(false);
  const [status, setStatus]     = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!formData.from_name.trim())               next.from_name  = "Name is required.";
    if (!formData.from_email.trim())              next.from_email = "Email is required.";
    else if (!EMAIL_RE.test(formData.from_email)) next.from_email = "Enter a valid email.";
    if (!formData.subject.trim())                 next.subject    = "Subject is required.";
    if (!formData.message.trim())                 next.message    = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, formData, EJS_KEY);
      setStatus("success");
      setFormData(EMPTY);
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <GlowBlob animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <GlowBlobLeft animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            sx={{
              color: colors.secondary,
              fontWeight: 700,
              letterSpacing: "2.5px",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              mb: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Contact
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          {/* ── LEFT COLUMN ── */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2rem", sm: "2.3rem", md: "2.7rem" },
                    lineHeight: 1.2,
                    mb: 2.5,
                    background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.accent} 60%, #F5F1EA 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  Let's build something great together
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  sx={{
                    color: colors.textLightMuted,
                    lineHeight: 1.8,
                    mb: 5,
                    fontSize: "0.97rem",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  I'm open to frontend roles, freelance opportunities, and creative
                  collaborations. If you have a project in mind — let's turn it into
                  something impactful.
                </Typography>
              </motion.div>

              {/* Contact detail rows */}
              <Stack spacing={3} mb={5}>
                {contactDetails.map(({ icon: Icon, label, value, href, target }) => (
                  <motion.div key={label} variants={itemVariants}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Box
                        sx={{
                          ...iconBoxSx,
                          background: "rgba(242, 140, 58, 0.1)",
                          border: "1px solid rgba(242, 140, 58, 0.2)",
                          color: colors.secondary,
                        }}
                      >
                        <Icon />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            color: "rgba(245,241,234,0.4)",
                            fontSize: "0.68rem",
                            letterSpacing: "1.2px",
                            textTransform: "uppercase",
                            mb: 0.3,
                          }}
                        >
                          {label}
                        </Typography>
                        {href ? (
                          <Typography
                            component="a"
                            href={href}
                            target={target}
                            rel={target ? "noopener noreferrer" : undefined}
                            sx={{
                              color: colors.textLight,
                              fontSize: "0.9rem",
                              textDecoration: "none",
                              transition: "color 0.2s",
                              "&:hover": { color: colors.secondary },
                            }}
                          >
                            {value}
                          </Typography>
                        ) : (
                          <Typography sx={{ color: colors.textLight, fontSize: "0.9rem" }}>
                            {value}
                          </Typography>
                        )}
                      </Box>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>

              {/* Social icons */}
              <motion.div variants={itemVariants}>
                <Stack direction="row" spacing={1.5} justifyContent={{ xs: "center", md: "flex-start" }}>
                  {socialIcons.map(({ Icon, href, label }) => (
                    <Box
                      key={label}
                      component="a"
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      sx={{
                        ...iconBoxSx,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "rgba(245,241,234,0.5)",
                        textDecoration: "none",
                        transition: "all 0.2s",
                        "&:hover": {
                          color: colors.secondary,
                          borderColor: "rgba(242, 140, 58, 0.38)",
                          background: "rgba(242, 140, 58, 0.08)",
                        },
                      }}
                    >
                      <Icon />
                    </Box>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          {/* ── RIGHT COLUMN — form ── */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <GlassCard component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Stack spacing={2.5}>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                    <StyledTextField
                      label="Name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      error={!!errors.from_name}
                      helperText={errors.from_name}
                      variant="outlined"
                      fullWidth
                      slotProps={{ inputLabel: { shrink: true } }}
                    />
                    <StyledTextField
                      label="Email"
                      name="from_email"
                      type="email"
                      value={formData.from_email}
                      onChange={handleChange}
                      error={!!errors.from_email}
                      helperText={errors.from_email}
                      variant="outlined"
                      fullWidth
                      slotProps={{ inputLabel: { shrink: true } }}
                    />
                  </Stack>
                  <StyledTextField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    error={!!errors.subject}
                    helperText={errors.subject}
                    variant="outlined"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                  <StyledTextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    slotProps={{ inputLabel: { shrink: true } }}
                  />

                  <Collapse in={status !== null}>
                    {status === "success" && (
                      <Alert
                        icon={<FiCheckCircle />}
                        severity="success"
                        sx={{
                          background: "rgba(16,185,129,0.1)",
                          color: "#6ee7b7",
                          border: "1px solid rgba(16,185,129,0.22)",
                          borderRadius: "10px",
                          "& .MuiAlert-icon": { color: "#6ee7b7" },
                        }}
                      >
                        Message sent! I'll get back to you soon.
                      </Alert>
                    )}
                    {status === "error" && (
                      <Alert
                        severity="error"
                        sx={{
                          background: "rgba(239,68,68,0.08)",
                          color: "#fca5a5",
                          border: "1px solid rgba(239,68,68,0.22)",
                          borderRadius: "10px",
                          "& .MuiAlert-icon": { color: "#fca5a5" },
                        }}
                      >
                        Something went wrong. Please try again or email me directly.
                      </Alert>
                    )}
                  </Collapse>

                  <CustomButton
                    type="submit"
                    disabled={loading}
                    endIcon={loading ? null : <FiSend />}
                    fullWidth
                    sx={{ py: "14px", borderRadius: "50px", fontSize: "1rem", mt: 0.5 }}
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </CustomButton>
                </Stack>
              </GlassCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </PageWrapper>
  );
};

export default Contact;
