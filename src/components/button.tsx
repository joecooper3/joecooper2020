import React from 'react';
import styled from "styled-components";

interface ButtonOptions {
  color: "blue" | "white",
  el: "button" | "a"
}

const Button = (color: ButtonOptions, el: ButtonOptions) => {

}

const BaseBtn = styled.button`
  min-width: 150px;
  margin: 14px;
  text-decoration: none;
  transition: 0.25s all;
`;