import React from "react";
import { StyledP } from "./StyledParagraph";

export const Paragraph = ({
  children,
  position,
  variant,
  color,
  marginTop,
  alignSelf,
}) => {
  return (
    <StyledP
      $position={position}
      $variant={variant}
      $color={color}
      $marginTop={marginTop}
      $alignSelf={alignSelf}
    >
      {children}
    </StyledP>
  );
};
