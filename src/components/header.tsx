import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import LogoContainer from "./LogoContainer";

import { blue, white } from "../styles/Variables";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
  <Container>
    <nav>
      <NavList>
        <Item><Link to="/about/">about</Link></Item>
        <Item><Link to="/portfolio/">portfolio</Link></Item>
        <Item><Link to="/contact/">contact</Link></Item>
        <Item>résumé</Item>
      </NavList>
    </nav>
    <LogoContainer>
      {siteTitle}
    </LogoContainer>
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

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
`
const Item = styled.li`
  margin-right: 30px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 20px;
`;
