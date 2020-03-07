import React from "react";
import Link from "gatsby-link";
import styled, { css } from "styled-components";

import { black, blue, blue10, blue20, white } from "../styles/Variables";

interface Props {
  children?: any;
  to?: string;
  color?: "blue" | "white";
  el?: "button" | "a" | "Link";
}

const Button = ({ children, to, color = "blue", el = "button" }: Props) => {
  if (el === "Link") {
    return (
      <ButtonLink to={to} color={color}>
        {children}
      </ButtonLink>
    );
  } else {
    return (
      <BaseBtn color={color} as={el}>
        {children}
      </BaseBtn>
    );
  }
};

export default Button;

const BaseStyles = () => css`
  min-width: 150px;
  text-align: center;
  margin: 14px;
  text-decoration: none;
  transition: 0.25s all ease-in;
  background: ${props => (props.color === "blue" ? blue : white)};
  border: 1px solid ${props => (props.color === "blue" ? black : blue)};
  color: ${props => (props.color === "blue" ? white : blue)};
  font-size: 20px;
  font-weight: 500;
  font-family: "Thein";
  padding: 20px 33px;
  box-shadow: 5px 5px ${props => (props.color === "blue" ? black : blue)};
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background: ${props => (props.color === "blue" ? blue20 : white)};
    color: ${props => (props.color === "blue" ? white : blue10)};
    box-shadow: 7px 7px ${props => (props.color === "blue" ? black : blue20)};
  }
`;

const BaseBtn = styled.button`
  ${BaseStyles()};
`;

const ButtonLink = styled(Link)`
  ${BaseStyles()};
`;
