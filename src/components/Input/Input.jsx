import React from "react";
import { StyledInput } from "./StyledInput";

export const Input = ({ variant = "default", height, ...props }) => {
  return (
    <StyledInput $variant={variant} $height={height} {...props}></StyledInput>
  );
};
