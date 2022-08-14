import { Box, Typography } from "@mui/material";
import { IconBox, StyledCard } from "../../../styles/GlobalStyled";
import { CounterGrowth, CounterMiddle, CounterWrap } from "./CounterBox.styled";
import OutboundIcon from "@mui/icons-material/Outbound";

const CounterBox = ({ count, title, icon, increament, decreament }) => {
  return (
    <StyledCard>
      <CounterWrap>
        <IconBox>
          <img src={icon} alt="" />
        </IconBox>
        <CounterMiddle>
          <Typography
            variant="h4"
            fontWeight="bold"
            color={(theme) => theme.palette.text.secondary}
          >
            {count}
          </Typography>
          <Typography
            variant="caption"
            fontWeight="medium"
            color={(theme) => theme.palette.text.secondary}
          >
            {title}
          </Typography>
        </CounterMiddle>
        <CounterGrowth increament={increament} decreament={decreament}>
          <OutboundIcon />
          <Typography variant="caption" fontWeight="medium">
            {increament ? `+${increament} Inc` : `-${decreament} Dec`}
          </Typography>
        </CounterGrowth>
      </CounterWrap>
    </StyledCard>
  );
};

export default CounterBox;
