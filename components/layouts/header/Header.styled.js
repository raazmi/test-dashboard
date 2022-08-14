import {
  Avatar,
  Box,
  Input,
  keyframes,
  styled,
  Typography,
} from "@mui/material";

export const HeaderWrapper = styled(Box)`
  background-color: #ffffff;
  position: fixed;
  left: 100px;
  top: 0;
  width: calc(100vw - 100px);
  height: 70px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding: 0 40px;
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

export const WelcomeText = styled(Typography)(
  ({ theme }) => `
  font-size: 18px;
  justify-self: flex-start;
  flex: 1;
  color: ${theme.palette.text.primary};

  & span {
    font-weight: 600;
  }
`
);

export const StyledInput = styled(Input)(
  ({ theme }) => `
  border: 1px solid #d2d2d2;
  height: 47px;
  border-radius: 10px;

  &::after,
  &::before {
    display: none;
  }

  & > div {
    margin-left: 18px;
    margin-right: 15px;
  }
  `
);

const ping = keyframes`
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(3);
  }
`;

export const NotificationBox = styled(Box)`
  justify-self: flex-end;
  position: relative;
  cursor: pointer;

  & em {
    position: absolute;
    display: inline-block;
    left: auto;
    right: 2px;
    top: 2px;
    height: 8px;
    width: 8px;
    background: red;
    border-radius: 100px;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background: red;
      border-radius: 1000px;
      z-index: -1;
      transform: scale(3);
      opacity: 0.1;
      animation: ${ping} 1s ease infinite;
    }
  }
`;

export const StyledAvatar = styled(Avatar)(
  ({ theme }) => `
  background: #f1f1f1;
  border: 2px solid ${theme.palette.primary.main};
  cursor: pointer;
`
);
