import { Box, Link, MenuItem, MenuList, styled } from "@mui/material";

export const SidebarWrapper = styled(Box)`
  background-color: #292929;
  position: fixed;
  left: 0;
  top: 0;
  width: 100px;
  height: 100vh;
`;

export const Logo = styled(Link)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 86px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

export const MenuWrapper = styled(MenuList)`
  display: block;
`;

export const SingleMenu = styled(MenuItem)(
  ({ theme }) => `
    display: block;
    padding: 0;
    margin-top: 20px;
    background-color: transparent;
    color: #ffffff;
    text-align: center;
    border: 0 !important;
    outline: 0 !important;
  `
);

export const MenuBox = styled(Link)(
  ({ theme }) => `
  padding: 10px 5px;
  display: block;
  text-decoration: none;

  & div{
    position: relative;
    height: 30px;
  }

  & p{
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 0;
  }

  &:hover{
    background-color: rgba(255,255,255,0.1);
    text-decoration: none;
  }

  &.active{
    background-color: ${theme.palette.primary.light};
    
    p{
      color: #000000;
    }
  }
`
);
