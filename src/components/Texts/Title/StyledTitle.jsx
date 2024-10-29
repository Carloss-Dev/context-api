import styled, { css } from "styled-components";

const LoginTitle = css`
  width: 100%;
  height: 8rem;
  font-size: 4.4rem;
  color: black;
`;

const defaultTitle = css`
  font-size: 10rem;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return LoginTitle;
      case "default":
        return defaultTitle;
    }
  }}
`;
