import { Typography } from "@mui/material";
import { StyledCard } from "../../../styles/GlobalStyled";
import ChartArea from "../../items/ChartArea/ChartArea";

const Revenue = () => {
  return (
    <StyledCard>
      <Typography
        variant="subtitle1"
        sx={{
          marginBottom: "15px",
          fontWeight: "500",
          fontSize: "18px",
        }}
      >
        Earning Revenue
      </Typography>
      <ChartArea />
    </StyledCard>
  );
};

export default Revenue;
