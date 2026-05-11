import styled from "@emotion/styled";
import { Box } from "@mui/material";
import colors from "./color";

export const SectionWrapper = styled(Box)`
  padding: 110px 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, ${colors.dark1} 0%, ${colors.dark2} 100%);
`;
