import { Stack, Typography } from "@mui/material";

const SectionTitle = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Typography variant="subtitle1" sx={{
        marginBottom: "15px",
        fontWeight: "500",
        fontSize: "18px"
      }}>
        Earning Revenue
      </Typography>
    </Stack>
  );
};

export default SectionTitle;
