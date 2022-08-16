import { Typography } from "@mui/material";
import { StyledCard } from "../../../styles/GlobalStyled";
import ChartRadial from "../../items/ChartRadial/ChartRadial";

const TopSales = () => {
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
        Top Sales
      </Typography>
      <ChartRadial />
    </StyledCard>
  );
};

export default TopSales;
