import { AppBar, Toolbar, Typography, Box, Container, Button } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import styled from "@emotion/styled";
import colors from "../../styles/color";
import Logo from "../common/Logo";
import navLinks from "../../data/navigation";

const StyledAppBar = styled(AppBar)`
  background: ${colors.dark1};
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(242,140,58,0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 6px 20px rgba(22,22,22,0.06);
`;

const ToolbarWrapper = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;

  @media (max-width: 600px) {
    padding: 10px 0;
  }
`;

const TitleLink = styled(Link)`
  color: ${colors.textLight};
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const NavBar = styled(Box)`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 600px) {
    gap: 14px;
  }
`;

const StyledNavLink = styled(NavLink)`
  position: relative;
  color: ${colors.textLightMuted};
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  padding: 6px 0;
  transition: color 0.25s ease;

  &:hover {
    color: ${colors.textLight};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 1.5px;
    border-radius: 20px;
    background: linear-gradient(90deg, ${colors.secondary}, ${colors.accent});
    transition: width 0.25s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }

  &.active {
    color: ${colors.secondary};
  }

  @media (max-width: 600px) {
    font-size: 0.78rem;
  }
`;

const Navbar = () => {
  return (
    <StyledAppBar elevation={0}>
      <Container maxWidth="lg">
        <ToolbarWrapper disableGutters>
          <Typography variant="h6" component="div">
            <TitleLink to="/">
              <Logo />
            </TitleLink>
          </Typography>

          <NavBar>
            {navLinks.map(({ to, label }) => (
              <StyledNavLink key={to} to={to}>
                {label}
              </StyledNavLink>
            ))}

            <Button
              variant="contained"
              component="a"
              href="/Himanshi_Rawat.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: `linear-gradient(135deg, ${colors.secondary}, ${colors.accent})`,
                color: "#ffffff",
                textTransform: "none",
                fontWeight: 700,
                borderRadius: "999px",
                padding: "8px 18px",
                boxShadow: "0 8px 28px rgba(242,140,58,0.16)",
                "&:hover": { transform: "translateY(-2px)", filter: "brightness(1.03)", boxShadow: "0 12px 36px rgba(242,140,58,0.22)" },
              }}
            >
              Download Resume
            </Button>
          </NavBar>
        </ToolbarWrapper>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
