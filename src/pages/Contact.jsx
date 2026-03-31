import React from "react";
import { Box, Typography, Button, Stack, Container, TextField, TextareaAutosize } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../styles/color";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

/* ============================================
   ANIMATIONS
   ============================================ */

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
  }
  50% { 
    box-shadow: 0 0 40px rgba(0, 217, 255, 0.5);
  }
`;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const SectionWrapper = styled(Box)`
  padding: 140px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0f172a 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(0, 217, 255, 0.15), transparent 40%),
                radial-gradient(circle at 80% 50%, rgba(0, 114, 255, 0.15), transparent 40%);
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 0%,
      rgba(0, 217, 255, 0.05) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

const GlowBlob = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.25), transparent 70%);
  filter: blur(120px);
  top: -200px;
  right: -200px;
  animation: ${pulse} 6s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
  }
`;

const GlowBlobLeft = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 114, 255, 0.2), transparent 70%);
  filter: blur(100px);
  bottom: -150px;
  left: -150px;
  animation: ${pulse} 8s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;

const ContentBox = styled(Container)`
  position: relative;
  z-index: 2;
  text-align: center;
`;

const MainHeading = styled(Typography)`
  font-weight: 900;
  font-size: 3.5rem;
  background: linear-gradient(135deg, #00d9ff 0%, #0072ff 50%, #ff006e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 24px;
  letter-spacing: -1px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SubHeading = styled(Typography)`
  max-width: 700px;
  margin: 0 auto 48px;
  color: ${colors.lightGray};
  line-height: 1.8;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 32px;
  }
`;

const ContactForm = styled(motion.form)`
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 40px;
  border: 2px solid rgba(0, 217, 255, 0.2);
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
  box-shadow: 0 20px 60px rgba(0, 217, 255, 0.1);

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const StyledTextField = styled(TextField)`
  && .MuiInputBase-root {
    background: rgba(0, 0, 0, 0.3);
    color: ${colors.white};
    border-radius: 10px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }

    &.Mui-focused {
      background: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 0 2px ${colors.secondary};
    }
  }

  && .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 217, 255, 0.3);
    transition: border-color 0.3s ease;
  }

  &&:hover .MuiOutlinedInput-notchedOutline {
    border-color: rgba(0, 217, 255, 0.6);
  }

  && .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${colors.secondary};
  }

  && .MuiInputLabel-root {
    color: ${colors.lightGray};
  }

  && .MuiInputLabel-root.Mui-focused {
    color: ${colors.secondary};
  }
`;

const StyledTextarea = styled(TextareaAutosize)`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid rgba(0, 217, 255, 0.3);
  background: rgba(0, 0, 0, 0.3);
  color: ${colors.white};
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${colors.secondary};
    box-shadow: 0 0 0 2px ${colors.secondary};
    background: rgba(0, 0, 0, 0.5);
  }

  &::placeholder {
    color: ${colors.darkGray};
  }
`;

const SubmitButton = styled(Button)`
  background: linear-gradient(135deg, #00d9ff, #0072ff);
  color: white;
  padding: 14px 36px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: none;
  box-shadow: 0 8px 30px rgba(0, 217, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 217, 255, 0.5);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 12px 28px;
    font-size: 0.9rem;
  }
`;

const SocialIcon = styled(motion.a)`
  color: ${colors.lightGray};
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.secondary};
    transform: translateY(-5px) scale(1.1);
  }
`;

/* ============================================
   COMPONENT
   ============================================ */

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <SectionWrapper>
      <GlowBlob animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity }} />
      <GlowBlobLeft animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity }} />

      <ContentBox maxWidth="md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <MainHeading>Let's Connect</MainHeading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SubHeading variant="body1">
              I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </SubHeading>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ContactForm noValidate autoComplete="off">
              <Stack spacing={3} mb={4}>
                <StyledTextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
                <StyledTextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  type="email"
                  InputLabelProps={{ shrink: true }}
                />
                <StyledTextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
                <StyledTextarea
                  aria-label="message"
                  placeholder="Your Message"
                />
              </Stack>
              <SubmitButton endIcon={<FiSend />} fullWidth>
                Send Message
              </SubmitButton>
            </ContactForm>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Stack direction="row" spacing={4} justifyContent="center" mt={6}>
              <SocialIcon 
                href="https://linkedin.com/in/himanshi-rawat" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: colors.secondary }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon 
                href="https://github.com/Himanshi-18" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: colors.secondary }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </SocialIcon>
              <SocialIcon 
                href="mailto:himanshirawat22@gmail.com" 
                whileHover={{ scale: 1.2, color: colors.secondary }}
                whileTap={{ scale: 0.9 }}
              >
                <MdEmail />
              </SocialIcon>
              <SocialIcon 
                href="https://twitter.com/your-twitter"
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: colors.secondary }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </SocialIcon>
            </Stack>
          </motion.div>
        </motion.div>
      </ContentBox>
    </SectionWrapper>
  );
};

export default Contact;
