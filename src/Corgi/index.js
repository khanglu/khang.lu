import React from 'react'
import styled, {keyframes} from 'styled-components'
import corgi from './corgi.gif'

const Corgi = () => (
  <CorgiGif src={corgi} />
)

const run = keyframes`
  from {
    right: -10vw;
  }
  to {
    right: 100vw;
  }
`

const CorgiGif = styled.img`
  z-index: 99;
  user-select: none;
  pointer-events: none;
  
  display: inline;
  position: fixed;
  bottom: -6vh;
  height: 30vh;
  animation: ${run} 3s infinite;
	animation-timing-function: linear;
`


export default Corgi;