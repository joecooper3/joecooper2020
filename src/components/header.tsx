import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Logo from './Logo.tsx';

import { blue, white } from "../styles/Variables";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
  <Container>
    <nav>
      <ul>
        <li>about</li>
        </ul>
    </nav>
    <Logo />
  </Container>
);

export default Header;

const Container = styled.header`
  color: ${blue};
  background: ${white};
  display: grid;
  grid-template-columns: 1fr 235px;
  align-items: center;
  padding: 0 50px;
`;

const ATag = styled(Link)`
  color: ${blue};
  text-decoration: none;
`;
