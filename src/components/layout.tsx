import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { lgdesktopQuery } from "../styles/Variables";

import { GlobalStyle } from "../styles/Global";
import Header from "./header";
import Footer from "./footer";

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Master>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      <Footer />
    </Master>
  );
};

export default Layout;

const Master = styled.div`
  display: grid;
  grid-template-rows: 124px auto 48px;
  min-height: 100vh;
  justify-items: center;
`;
