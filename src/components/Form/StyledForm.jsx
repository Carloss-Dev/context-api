import styled, { css } from "styled-components";

const loginForm = css`
  width: 100%;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const StyledForm = styled.form`
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return loginForm;
      case "default":
        return defaultContainer;
    }
  }}
  height: ${({ $height }) => $height};
`;
