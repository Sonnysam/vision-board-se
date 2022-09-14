import React from "react";
import styled from "styled-components";
const CallToActionStyle = styled.div`
  background-color: ${(props) => props.bgColor || "#1cbeec"};
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize || "1.2rem"};
  padding: ${(props) => props.padding || "0.5em 0.7em"};
  border-radius: ${(props) => props.borderRadius || " 10px"};
  border: 1px solid white;
  width: ${(props) => props.width || "fit-content"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-width: 400px;
  &:hover {
    background-color: white;
    border: 1px solid #1cbeec;
    color: #1cbeec;
  }
`;
const CallToAction = ({
  fontSize,
  borderRadius,
  bgColor,
  padding,
  color,
  text,
  width,
  handleClick,
  children
}) => (
  <CallToActionStyle
    onClick={handleClick}
    fontSize={fontSize}
    borderRadius={borderRadius}
    bgColor={bgColor}
    padding={padding}
    color={color}
    text={text}
    width={width}
  >
    {text || children}
  </CallToActionStyle>
);
export default CallToAction;
