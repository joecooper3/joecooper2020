import React from "react";
import styled from "styled-components";

import { blue, white } from "../styles/Variables";

const Footer = () => {
  return <Container>&copy; 2020 Joe Cooper</Container>;
};

export default Footer;

const Container = styled.footer`
  background: ${blue};
  color: ${white};
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
