import { InputAdornment, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  HeaderWrapper,
  NotificationBox,
  StyledAvatar,
  StyledInput,
  WelcomeText,
} from "./Header.styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <WelcomeText>
        Hello <Typography component="span">John Doe</Typography> 👋
      </WelcomeText>
      <StyledInput
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.07042 1.64007C7.30365 0.244153 9.97032 -0.286614 12.5678 0.147807C15.1653 0.582227 17.5142 1.95183 19.1717 3.99847C20.8293 6.04511 21.6811 8.62742 21.5665 11.2587C21.4661 13.5631 20.6306 15.7657 19.1958 17.5501L22.7213 21.2797C23.1082 21.689 23.09 22.3344 22.6808 22.7213C22.2716 23.1082 21.6262 23.09 21.2393 22.6808L17.075 18.2754C16.7006 17.8793 16.7038 17.2587 17.0824 16.8665C18.5659 15.3299 19.4361 13.3038 19.529 11.1699C19.6219 9.03606 18.9312 6.9419 17.587 5.28215C16.2428 3.6224 14.3379 2.51171 12.2314 2.15941C10.125 1.80711 7.96238 2.23754 6.15131 3.36958C4.34024 4.50161 3.00576 6.25706 2.39941 8.30505C1.79305 10.353 1.9567 12.5521 2.8595 14.4878C3.76231 16.4234 5.34191 17.962 7.30059 18.8135C9.25926 19.6649 11.4617 19.7705 13.4928 19.1102C14.0284 18.9361 14.6037 19.2292 14.7778 19.7648C14.9519 20.3004 14.6588 20.8758 14.1233 21.0499C11.6187 21.864 8.90284 21.7339 6.48759 20.6839C4.07235 19.634 2.12454 17.7368 1.01129 15.3499C-0.101962 12.9631 -0.303755 10.2514 0.443943 7.726C1.19164 5.20063 2.83719 3.03598 5.07042 1.64007Z"
                fill="#D2D2D2"
              />
            </svg>
          </InputAdornment>
        }
      />
      <Link href="/notifications">
        <NotificationBox>
          <svg
            width="27"
            height="30"
            viewBox="0 0 27 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.149 6.40326C13.7145 6.40326 14.1729 6.86171 14.1729 7.42723V11.9737C14.1729 12.5392 13.7145 12.9976 13.149 12.9976C12.5834 12.9976 12.125 12.5392 12.125 11.9737V7.42723C12.125 6.86171 12.5834 6.40326 13.149 6.40326Z"
              fill="#E2BC82"
            />
            <path
              d="M13.1748 1.3653C8.15055 1.3653 4.08196 5.43388 4.08196 10.4582V13.3253C4.08196 14.2537 3.69968 15.6463 3.22183 16.4382L1.4879 19.3326C0.422969 21.1211 1.16023 23.1145 3.12626 23.7698C9.65238 25.9406 16.711 25.9406 23.2371 23.7698C25.0802 23.1554 25.8721 20.9983 24.8754 19.3326L23.1415 16.4382C22.6637 15.6463 22.2814 14.24 22.2814 13.3253V10.4582C22.2677 5.46118 18.1718 1.3653 13.1748 1.3653Z"
              stroke="#E2BC82"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.62412 24.3296C9.62412 25.2854 10.0242 26.1759 10.6622 26.814C11.3002 27.452 12.1908 27.8521 13.1466 27.8521C15.0796 27.8521 16.669 26.2626 16.669 24.3296H18.717C18.717 27.3936 16.2106 29.9 13.1466 29.9C11.6176 29.9 10.2144 29.2624 9.21408 28.2621C8.21376 27.2618 7.57617 25.8586 7.57617 24.3296H9.62412Z"
              fill="#E2BC82"
            />
          </svg>
          <em></em>
        </NotificationBox>
      </Link>
      <StyledAvatar>
        <Image
          src="/images/avatar.png"
          alt="site logo"
          height={60}
          width={60}
          priority={true}
        />
      </StyledAvatar>
    </HeaderWrapper>
  );
};

export default Header;
