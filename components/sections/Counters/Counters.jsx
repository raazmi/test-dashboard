import { Grid } from "@mui/material";
import CounterBox from "../../items/CounterBox/CounterBox";

const Counters = () => {
  return (
    <Grid
      container
      columnSpacing={3}
    >
      <Grid item lg={3} sx={{
        marginTop: "30px",
      }}>
        <CounterBox
          title="Customers"
          count={10}
          icon="/icons/icon-users.svg"
          increament={20}
          decreament={0}
        />
      </Grid>
      <Grid item lg={3} sx={{
        marginTop: "30px",
      }}>
      <CounterBox
          title="Orders"
          count={10}
          icon="/icons/icon-orders.svg"
          increament={0}
          decreament={20}
        />
      </Grid>
      <Grid item lg={3} sx={{
        marginTop: "30px",
      }}>
      <CounterBox
          title="Revenue"
          count={2500}
          icon="/icons/icon-chart.svg"
          increament={20}
          decreament={0}
        />
      </Grid>
      <Grid item lg={3} sx={{
        marginTop: "30px",
      }}>
      <CounterBox
          title="AVG Order Value"
          count={7}
          icon="/icons/icon-value.svg"
          increament={0}
          decreament={20}
        />
      </Grid>
    </Grid>
  );
};

export default Counters;
