import { Box, styled } from "@mui/material";

export const ChartRadialWraper = styled(Box)`
  .recharts-area {
    transform: rotateX(180deg);
    transform-origin: center center;
  }
  .recharts-radial-bar-background {
    path {
      fill: #f2f5f9 !important;
    }
  }
  .recharts-radial-bar-sectors {
    path {
      stroke-linecap: round !important;
      stroke-linejoin: round !important;
    }
  }
  .recharts-legend-wrapper {
    border-top: 1px solid rgba(41, 41, 41, 0.05);
    padding-top: 10px;
    margin-bottom: -10px;
  }
`;
