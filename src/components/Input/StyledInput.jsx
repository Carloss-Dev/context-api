import styled, { css } from "styled-components";

const defaultInput = css`
  width: 100%;
  height: 4.4rem;
  background-color: #f0f0f0;
  border: none;
  border-radius: 10px;
  padding-left: 40px;
  font-size: 16px;
`;

export const StyledInput = styled.input`
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return loginForm;
      case "default":
        return defaultInput;
    }
  }}
  ${({ $height }) => $height}
`;
