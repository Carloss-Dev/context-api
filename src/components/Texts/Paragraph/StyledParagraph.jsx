import styled, { css } from "styled-components";

const loginParagraph = css`
  width: 100%;
  color: gray;
  font-weight: 500;
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 0;
  align-self: normal;
`;

export const StyledP = styled.p`
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return loginParagraph;
      case "default":
        return defaultTitle;
    }
  }}
  text-align: ${({ $position }) => $position};
  color: ${({ $color }) => $color};
  margin-top: ${({ $marginTop }) => $marginTop};
  align-self: ${({ $alignSelf }) => $alignSelf};
`;
