import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { lgdesktopQuery } from '../styles/Variables';

import { GlobalStyle } from "../styles/Global";
import Header from "./header";

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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Master>
  );
};

export default Layout;

const Master = styled.div`
  display: grid;
  grid-template-rows: 124px auto 48px;
`;
