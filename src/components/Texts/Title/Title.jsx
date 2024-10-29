import React from "react";
import { StyledTitle } from "./StyledTitle";

export const Title = ({ children, variant }) => {
  return <StyledTitle $variant={variant}>{children}</StyledTitle>;
};
