import React from "react";
import styled from "styled-components";

import { blue, white } from "../styles/Variables";

interface Props {
  children?: any;
  color?: "blue" | "white";
  el?: "button" | "a";
}

const Button = ({ children, color = "blue", el = "button" }: Props) => (
  <BaseBtn color={color} el={el}>
    {children}
    {el}
  </BaseBtn>
);

export default Button;

const BaseBtn = styled.button`
  min-width: 150px;
  margin: 14px;
  text-decoration: none;
  transition: 0.25s all;
  background: ${props => (props.color === "blue" ? blue : white)};
  color: ${props => (props.color === "blue" ? white : blue)};
  font-size: 20px;
  font-weight: 500;
`;
