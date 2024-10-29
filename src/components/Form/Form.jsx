import React from "react";
import { StyledForm } from "./StyledForm";

export const Form = ({ children, height, variant }) => {
  return (
    <StyledForm $height={height} $variant={variant}>
      {children}
    </StyledForm>
  );
};
