import { Box, styled, Table } from "@mui/material";

export const UserTable = styled(Table)`
  width: 100%;
  border-top: 1px solid rgba(41, 41, 41, 0.05);

  th {
    padding: 24px 5px;
    border-bottom: 1px solid rgba(41, 41, 41, 0.05) !important;
  }
  td {
    padding: 25px 5px;
    border-bottom: 1px solid rgba(41, 41, 41, 0.05) !important;
  }
  tr:last-child{
    td{
      padding-bottom: 0;
      border-bottom: 0 !important;
    }
  }
`;
