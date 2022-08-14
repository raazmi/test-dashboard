import { Box, Card, styled } from "@mui/material";

export const StyledCard = styled(Card)`
  display: block;
  padding: 20px;
  box-shadow: 0px 4px 15px rgba(41, 41, 41, 0.15);
  border-radius: 20px;
  transform: translateY(0);
  transition: all 0.4s ease;

  &:hover{
    transform: translateY(-4px);
    box-shadow: 0px 4px 15px rgba(41, 41, 41, 0.25);
  }
`;

export const IconBox = styled(Box)`
  height: 75px;
  width: 75px;
  display: inline-block;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(153, 178, 198, 0.1);
`;
