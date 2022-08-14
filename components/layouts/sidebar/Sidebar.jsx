import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  Logo,
  MenuBox,
  MenuWrapper,
  SidebarWrapper,
  SingleMenu,
} from "./Sidebar.styled";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Link href="/">
        <Logo>
          <Image
            src="/logo.png"
            alt="site logo"
            height={46}
            width={60}
            priority={true}
          />
        </Logo>
      </Link>
      <MenuWrapper>
        <SingleMenu>
          <Link href="/">
            <MenuBox className="active">
              <Box>
                <Image
                  src="/icons/menu-dashboard-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Dashboard</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-order-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Orders</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-products-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Products</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-customers-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Customers</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-reviews-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Reviews</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-shipping-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Shipping</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-analytics-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Analytics</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-notification-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Notification</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
        <SingleMenu>
          <Link href="/">
            <MenuBox>
              <Box>
                <Image
                  src="/icons/menu-settings-icon.png"
                  alt="site logo"
                  layout="fill"
                  objectFit="contain"
                  priority={true}
                />
              </Box>
              <Typography variant="body2">Settings</Typography>
            </MenuBox>
          </Link>
        </SingleMenu>
      </MenuWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
