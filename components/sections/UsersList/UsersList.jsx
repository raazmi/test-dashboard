import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { StyledCard } from "../../../styles/GlobalStyled";
import { UserTable } from "./UsersList.styled";

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "John@abc.com",
    verified: true,
  },
  {
    id: 2,
    name: "Mariah Betts",
    email: "mariah@abc.com",
    verified: false,
  },
  {
    id: 3,
    name: "John Doe",
    email: "John@abc.com",
    verified: true,
  },
  {
    id: 4,
    name: "Mariah Betts",
    email: "mariah@abc.com",
    verified: false,
  },
];

const UsersList = () => {
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
        Users
      </Typography>
      <TableContainer>
        <UserTable>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  #
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  Name
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  Email
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: "16px",
                  }}
                >
                  Status
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="left">{user.id}</TableCell>
                <TableCell align="left">
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {user.name}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    {user.email}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {user.verified ? (
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "12px",
                        color: "#04AF00",
                      }}
                    >
                      Verified
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#FF0303",
                      }}
                    >
                      Unverified
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </UserTable>
      </TableContainer>
    </StyledCard>
  );
};

export default UsersList;
