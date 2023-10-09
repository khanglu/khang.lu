import React from "react";
import styled, { keyframes } from "styled-components";
import corgi from "../staticAssets/corgi.gif";

const Corgi = () => <CorgiGif src={corgi} />;

const run = keyframes`
  from {
    right: -15vw;
  }
  to {
    right: 115vw;
  }
`;

/* Set animation duration to be proportional with screen size,
that way we have little corgi at the same speed across devices */
const CorgiGif = styled.img`
  z-index: 99;
  user-select: none;
  pointer-events: none;
  display: inline;
  position: fixed;
  animation: ${run} ${(window.innerWidth / window.innerHeight) * 5}s infinite;
  animation-timing-function: linear;
`;

export default Corgi;
