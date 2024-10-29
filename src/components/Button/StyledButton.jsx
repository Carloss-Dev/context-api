import styled, { css } from "styled-components";

const login = css`
  width: 49%;
  height: 50%;
  background-color: transparent;
  border-radius: 8px;
  font-weight: bold;
  border: 1px solid lightgray;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.5s;
  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1);
  }
`;

const primary = css`
  width: 100%;
  height: 100%;
  background-color: #0d6efd;
  color: white;
  font-size: 15px;
  border-radius: 15px;
  border: none;
  transition-duration: 0.5s;

  &:hover {
    background-color: #0b5ed7;
    transform: scale(1.1);
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return login;
      case "primary":
        return primary;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
