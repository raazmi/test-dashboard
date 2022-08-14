import { Grid, Typography } from "@mui/material";
import Counters from "../components/sections/Counters/Counters";
import Revenue from "../components/sections/Revenue/Revenue";
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
          <Revenue/>
        </Grid>
        <Grid
          item
          lg={3}
          sx={{
            marginTop: "40px",
          }}
        >
          <StyledCard>
            Another Card
          </StyledCard>
        </Grid>
        <Grid
          item
          lg={3}
          sx={{
            marginTop: "40px",
          }}
        >
          <StyledCard>
            Another Card
          </StyledCard>
        </Grid>
      </Grid>
    </div>
  );
}
