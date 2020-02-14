import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";

import Logo from './Logo'
import { black, blue } from '../styles/Variables'

interface Props {
  children: any
}

const LogoContainer = ({ children }: Props) => {
  return (
    <Header>
      <Link to="/">
        {children}
        <Logo />
      </Link>
    </Header>
  )
}

export default LogoContainer;

const Header = styled.h1`
  font-size: 0px;
  svg {
    path {
      fill: ${blue};
      transition: 0.4s fill;
    }
  }
  &:hover {
    svg {
      path {
        fill: ${black}
      }
    }
  }
`