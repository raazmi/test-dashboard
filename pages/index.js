import { Grid, Typography } from "@mui/material";
import Counters from "../components/sections/Counters/Counters";
import Revenue from "../components/sections/Revenue/Revenue";
import TopSales from "../components/sections/TopSales/TopSales";
import { StyledCard } from "../styles/GlobalStyled";

export default function Home() {
  return (
    <div className="homepage">
      <Typography variant="h6" fontWeight={600}>
        Dashboard
      </Typography>
      <Counters />
      <Grid container columnSpacing={3}>
        <Grid
          item
          lg={6}
          sx={{
            marginTop: "40px",
          }}
        >
          <Revenue />
        </Grid>
        <Grid
          item
          lg={3}
          sx={{
            marginTop: "40px",
          }}
        >
          <TopSales />
        </Grid>
        <Grid
          item
          lg={3}
          sx={{
            marginTop: "40px",
          }}
        >
          <StyledCard>
            <Typography
              variant="subtitle1"
              sx={{
                marginBottom: "15px",
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              Users
            </Typography>
          </StyledCard>
        </Grid>
      </Grid>
    </div>
  );
}
