import React from "react";
import styled, { keyframes } from "styled-components";
import { WINDOW } from "../utilities/environment";

const Corgi = () => <CorgiGif src={"/static/corgi.gif"} />;

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
  bottom: -4vh;
  height: 20vh;
  animation: ${run} ${WINDOW.innerWidth / WINDOW.innerHeight * 5}s infinite;
	animation-timing-function: linear;
`;

export default Corgi;
