import styled, { css } from "styled-components";

const defaultContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: none;
  gap: 0;
`;

const loginContainer = css`
  width: 80%;
  height: 55rem;
  border-radius: 1.5rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  align-self: center;
  background-color: white;
  box-shadow: 3px 4px 8px 0px black;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }
  @media (max-width: 767px) {
    width: 90%;
    padding: 15px;
    flex-direction: column;
    gap: 20px;
  }
`;

const loginImageContainer = css`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px;
  gap: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

const loginContentContainer = css`
  height: 100%;
  padding: 0 50px;

  width: 60%;
  @media (max-width: 767px) {
    width: 100%;
  }
  @media (max-width: 481px) {
    padding: 0 10px;
  }
`;

const inputPlusIcon = css`
  width: 100%;
  position: relative;
`;

export const StyledDiv = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return loginContainer;
      case "input+icon":
        return inputPlusIcon;
      case "image":
        return loginImageContainer;
      case "content":
        return loginContentContainer;
      case "default":
        return defaultContainer;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  align-items: ${({ $alignItems }) => $alignItems};
  background-color: ${({ $bgColor }) => $bgColor};
  align-self: ${({ $alignSelf }) => $alignSelf};
  border: ${({ $border }) => $border};
  border-bottom: ${({ $borderBo }) => $borderBo};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  gap: ${({ $gap }) => $gap};
`;
