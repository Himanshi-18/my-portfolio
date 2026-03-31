import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "../../styles/color";
import Logo from "./Logo";

/* ============================================
   ANIMATIONS
   ============================================ */

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const glow = keyframes`
  0%, 100% { 
    box-shadow: 0 2px 10px rgba(0, 217, 255, 0.1);
  }
  50% { 
    box-shadow: 0 4px 20px rgba(0, 217, 255, 0.2);
  }
`;

/* ============================================
   STYLED COMPONENTS
   ============================================ */

const StyledAppBar = styled(AppBar)`
  background: rgba(10, 14, 39, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 2px solid rgba(0, 217, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  animation: ${slideDown} 0.6s ease-out, ${glow} 4s ease-in-out infinite;
  box-shadow: 0 4px 30px rgba(0, 217, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-bottom-color: rgba(0, 217, 255, 0.3);
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: ${colors.lightGray};
  text-decoration: none;
  margin: 0 20px;
  font-weight: 600;
  padding: 8px 0;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  letter-spacing: 0.5px;

  &:hover {
    color: ${colors.secondary};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, ${colors.secondary}, ${colors.accent});
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px rgba(0, 217, 255, 0.3);
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${colors.secondary};

    &::after {
      width: 100%;
      box-shadow: 0 0 12px ${colors.secondary};
    }
  }
`;

const TitleLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-weight: 700;
  letter-spacing: -0.5px;

  &:hover {
    color: ${colors.secondary};
    transform: scale(1.05);
  }
`;

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

const NavBar = styled(Box)`
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 960px) {
    gap: 15px;

    ${StyledNavLink} {
      margin: 0 10px;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 600px) {
    gap: 5px;

    ${StyledNavLink} {
      margin: 0 5px;
      font-size: 0.75rem;
    }
  }
`;

/* ============================================
   COMPONENT
   ============================================ */

const Header = () => {
  return (
    <StyledAppBar elevation={0}>
      <Container maxWidth="xl">
        <ToolbarWrapper>
          <Typography variant="h6" component="div">
            <TitleLink to="/">
              <Logo />
            </TitleLink>
          </Typography>

          <NavBar>
            <StyledNavLink to="/about">About</StyledNavLink>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
            <StyledNavLink to="/contact">Let's Talk</StyledNavLink>
          </NavBar>
        </ToolbarWrapper>
      </Container>
    </StyledAppBar>
  );
};

export default Header;
