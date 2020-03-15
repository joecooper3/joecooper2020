import React, { useState } from "react";
import styled from "styled-components";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container open={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <Box>
        <Inner open={isOpen} />
      </Box>
    </Container>
  );
};

export default Hamburger;

const hamburgerLayerWidth = "40px";
const hamburgerLayerHeight = "4px";
const hamburgerLayerSpacing = "6px";
const hamburgerLayerColor = "#000";
const hamburgerLayerBorderRadius = "4px";

const Container = styled.button`
display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
  opacity: ${props => props.open ? '0.7' : '1'};

  &:hover {
      opacity: 0.7;
    }
  }

  &.is-active {
        opacity: 0.7;    
    }
`;

const Box = styled.span`
  width: ${hamburgerLayerWidth};
  height: ${hamburgerLayerHeight} * 3 + ${hamburgerLayerSpacing} * 2;
  display: inline-block;
  position: relative;
`;

const Inner = styled.span`
  display: block;
  margin-top: calc(${hamburgerLayerHeight} / -2);
  top: calc(${hamburgerLayerHeight} / 2);
  transition: background-color 0s 0.13s linear;

  transition-delay: 0.22s;
  background-color: ${props => props.open ? `transparent !important` : hamburgerLayerColor};

  &,
  &::before,
  &::after {
    width: ${hamburgerLayerWidth};
    height: ${hamburgerLayerHeight};
    background-color: ${hamburgerLayerColor};
    border-radius: ${hamburgerLayerBorderRadius};
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: ${props => props.open ? 0 : `calc(${hamburgerLayerHeight} + ${hamburgerLayerSpacing})`};
    transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(
        0,
        ${hamburgerLayerSpacing} + ${hamburgerLayerHeight},
        0
      )
      rotate(45deg);
  }

  &::after {
    bottom: calc(${hamburgerLayerSpacing} + ${hamburgerLayerHeight} * -1);
    top: ${props => props.open ? 0 : `calc((${hamburgerLayerHeight} * 2) + (${hamburgerLayerSpacing} * 2))`};
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(
        0,
        ${hamburgerLayerSpacing} + ${hamburgerLayerHeight},
        0
      )
      rotate(-45deg);
  }
`;
