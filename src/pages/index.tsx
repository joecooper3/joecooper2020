import React from "react";
import { Link } from "gatsby";
import styled, { keyframes } from "styled-components";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

import { black, blue, white } from "../styles/Variables";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <IntroCopy>
        Joe Cooper is a New York City-based
        <SecondLine>
          <HighlightOne>front-end developer</HighlightOne> and{" "}
          <HighlightTwo>visual designer.</HighlightTwo>
        </SecondLine>
      </IntroCopy>
    </Container>
  </Layout>
);

export default IndexPage;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 650px;
  padding: 75px 0;
`;

const IntroCopy = styled.p`
  font-size: 30px;
  letter-spacing: 0.5px;
  line-height: 1.6;
  display: flex;
  flex-flow: column nowrap;
`;

const SecondLine = styled.span`
  display: inline-block;
  position: relative;
  left: -10px;
`;

const colorShift = keyframes`
  0% {color: ${black}}
  100% {color: ${blue}}
`;

const highlighting = keyframes`
  0%   {transform: scaleX(0)}
  100% {transform: scaleX(1)}
`;

const Highlight = styled.span`
  padding: 12px 10px;
  z-index: 0;
  position: relative;
  animation: ${colorShift} 1s forwards;
  animation-delay: 2.5s;

  &:before {
    content: "";
    background: ${white};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: 0 50%;
    animation: ${highlighting} 1.5s forwards;
  }
`;

const HighlightOne = styled(Highlight)``;

const HighlightTwo = styled(Highlight)`
  &:before {
    animation-delay: 1s;
  }
`;
