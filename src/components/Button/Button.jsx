import React from "react";
import { StyledButton } from "./StyledButton";

export const Button = ({ children, width, height, variant, ...props }) => {
  return (
    <StyledButton $variant={variant} $height={height} $width={width} {...props}>
      {children}
    </StyledButton>
  );
};
