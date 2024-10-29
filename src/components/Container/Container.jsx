import React from "react";
import { StyledDiv } from "./StyledContainer";

export const Container = ({
  variant = "default",
  width,
  height,
  justifyContent,
  flexDirection,
  alignItems,
  bgColor,
  alignSelf,
  children,
  border,
  borderBo,
  borderRadius,
  gap,
}) => {
  return (
    <StyledDiv
      $variant={variant}
      $width={width}
      $height={height}
      $justifyContent={justifyContent}
      $flexDirection={flexDirection}
      $alignItems={alignItems}
      $bgColor={bgColor}
      $alignSelf={alignSelf}
      $border={border}
      $borderBo={borderBo}
      $borderRadius={borderRadius}
      $gap={gap}
    >
      {children}
    </StyledDiv>
  );
};
