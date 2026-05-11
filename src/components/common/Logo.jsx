import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../../styles/color";

const LogoText = styled(Typography)`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.25s ease;

  span {
    background: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
`;

export default function Logo() {
  return (
    <LogoText>
      <span>H</span>R
    </LogoText>
  );
}