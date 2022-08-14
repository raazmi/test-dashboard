import { Box, Card, styled } from "@mui/material";

export const CounterWrap = styled(Box)`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const CounterMiddle = styled(Box)`
  flex: 1;
`;

export const CounterGrowth = styled(Box)`
  text-align: center;
  svg{
    color: ${(props) => props.increament ? "#04AF00": "#FF0303"};
  }
  span {
    display: block;
    color: ${(props) => props.increament ? "#04AF00": "#FF0303"};
    font-weight: 600;
    font-size: 10px;
  }
`;
