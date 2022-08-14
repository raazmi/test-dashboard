import { Box } from "@mui/material";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { PageContent } from "./Layout.styled";

const Layout = ({ children }) => {
  return (
    <Box>
      <Sidebar />
      <Header />
      <PageContent>{children}</PageContent>
    </Box>
  );
};

export default Layout;
