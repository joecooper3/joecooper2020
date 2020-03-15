import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import Hamburger from "./hamburger";
import LogoContainer from "./LogoContainer";

import { blue, white } from "../styles/Variables";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
  <Container>
        <LogoContainer>
      {siteTitle}
    </LogoContainer>
    <Hamburger />
    <nav>
      <NavList>
        <Item><Link to="/about/">about</Link></Item>
        <Item><Link to="/portfolio/">portfolio</Link></Item>
        <Item><Link to="/contact/">contact</Link></Item>
        <Item>blog</Item>
      </NavList>
    </nav>
  </Container>
);

export default Header;

const Container = styled.header`
  color: ${blue};
  background: ${white};
  display: grid;
  grid-template-columns: 235px 1fr;
  align-items: center;
  padding: 0 50px;
  width: 100%;
  box-sizing: border-box;
`;

const NavList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`
const Item = styled.li`
  margin-right: 30px;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 20px;
`;
