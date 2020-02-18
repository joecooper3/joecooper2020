import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import Layout from "../components/layout";

const AboutPage = ({ data }) => (
  <Layout>
    <div className="main-body">
      <h1>About Joe Cooper</h1>
      <div
        style={{ width: `100%`, maxWidth: `800px`, margin: `10px 0 30px 0` }}
      >
        {/* <Img sizes={data.itMeToo.sizes} /> */}
      </div>
      <p>
        I’m a front-end developer and designer currently working at{" "}
        <a
          href="https://www.madwell.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Madwell
        </a>
        , a Brooklyn-based advertising agency.
      </p>

      <p>
        I’ve been dabbling in web design since I was 11, during the halcyon days
        of{" "}
        <a
          href="https://en.wikipedia.org/wiki/AOLpress"
          target="_blank"
          rel="noopener noreferrer"
        >
          AOLPress
        </a>
        . I began offering front-end design and development services
        professionally to clients in 2014 and broadened my horizons to include
        visual design of all kinds. I’m passionate about social justice and have
        offered my services to a number of non-profit organizations and NGOs,
        including CASES, Civic Hall Labs, NYC BigApps, the Legal Action Center,
        the ATI/Reentry Coalition, Entertainment Impact, ELMA, and Lantern.
      </p>

      <p>
        In addition to anything design, I also enjoy experimental music, old
        video games, and futilely rooting for the Buffalo Bills.
      </p>
      <p className="button-container">
        <Link to="/portfolio" className="blue-btn">
          See my portfolio
        </Link>
      </p>
    </div>
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query ItMe {
    itMeToo: imageSharp(id: { regex: "/itme/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
