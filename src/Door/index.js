import React from 'react'
import styled, {keyframes} from 'styled-components'

const Door = (props) => (
  <DoorContainer onClick={() => props.changeTheme()}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 439.53 476.2">
      <title>59871</title>
      <g>
        <rect x="0.67" y="422.3" width="92.11" height="53.9"/>
        <rect x="346.76" y="422.3" width="92.11" height="53.9"/>
        <rect x="343.09" y="381.61" width="53.73" height="34.22"/>
        <rect x="42.71" y="381.61" width="53.73" height="34.22"/>
        <rect x="0.67" y="321.25" width="92.11" height="53.9"/>
        <rect x="0.67" y="220.2" width="92.11" height="53.9"/>
        <rect x="346.76" y="321.25" width="92.11" height="53.9"/>
        <rect x="346.76" y="220.2" width="92.11" height="53.9"/>
        <path d="M362.62,185l95.24-22.63L429.21,79.91l-97.27,45.3A126.93,126.93,0,0,1,362.62,185Z" transform="translate(-18.33)"/>
        <path d="M144.26,125.21L47,79.91,18.33,162.35,113.57,185A127,127,0,0,1,144.26,125.21Z" transform="translate(-18.33)"/>
        <path d="M325.91,0H150.28L178,98.92a127,127,0,0,1,120.21,0Z" transform="translate(-18.33)"/>
        <path d="M361.42,213.73h53.73V179.15L360,192.25A123.51,123.51,0,0,1,361.42,211v2.74Z" transform="translate(-18.33)"/>
        <rect x="42.71" y="280.56" width="53.73" height="34.22"/>
        <rect x="343.09" y="280.56" width="53.73" height="34.22"/>
        <path d="M173.3,106.12L149.45,21,99,27,74.62,85.65,152.77,122A124.08,124.08,0,0,1,173.3,106.12Z" transform="translate(-18.33)"/>
        <path d="M323.42,122l77.31-36L374.39,27l-47.8-5.5-23.7,84.58A124.11,124.11,0,0,1,323.42,122Z" transform="translate(-18.33)"/>
        <path d="M61,213.73h53.73V211a123.64,123.64,0,0,1,1.42-18.74L61,179.15v34.58Z" transform="translate(-18.33)"/>
        <path d="M243.84,476.2h38.52V102.82a116.27,116.27,0,0,0-38.52-8.54V476.2h0Z" transform="translate(-18.33)"/>
        <path d="M193.84,476.2h38.52V94.28a116.27,116.27,0,0,0-38.52,8.54V476.2Z" transform="translate(-18.33)"/>
        <path d="M293.84,108.26V476.2h38.52V141.93A117.39,117.39,0,0,0,293.84,108.26Z" transform="translate(-18.33)"/>
        <path d="M343.84,476.2H355V211a116.38,116.38,0,0,0-11.12-49.79v315Z" transform="translate(-18.33)"/>
        <path d="M143.84,141.93V476.2h38.52V108.27A117.42,117.42,0,0,0,143.84,141.93Zm29.74,150.3a10.48,10.48,0,1,1-10.48-10.48A10.48,10.48,0,0,1,173.57,292.23Z" transform="translate(-18.33)"/>
        <path d="M121.24,476.2h11.12v-315A116.38,116.38,0,0,0,121.24,211V476.2Z" transform="translate(-18.33)"/>
      </g>
    </svg>
  </DoorContainer>
)

const shaking = keyframes`{
	0% { transform: translate(2px, 1px) rotate(0deg); }
	10% { transform: translate(-1px, -2px) rotate(-1deg); }
	20% { transform: translate(-2px, 0px) rotate(1deg); }
	30% { transform: translate(0px, 2px) rotate(0deg); }
	40% { transform: translate(1px, -1px) rotate(1deg); }
	50% { transform: translate(-1px, 2px) rotate(-1deg); }
	60% { transform: translate(-2px, 1px) rotate(0deg); }
	70% { transform: translate(2px, 1px) rotate(-1deg); }
	80% { transform: translate(-1px, -1px) rotate(1deg); }
	90% { transform: translate(2px, 2px) rotate(0deg); }
	100% { transform: translate(1px, 2px) rotate(-1deg); }
}
`
const DoorContainer = styled.div`
  text-align: center;
  user-select: none;
  svg {
    height: 20vh;
    path, rect {
      fill: ${props => props.theme.textColor}
      pointer-events: all;
      transition: .5s;
    }
    &:hover {
      position: relative;
      bottom: -2px;
      animation: ${shaking} 0.8s infinite;
      animation-timing-function: linear;
    }
  }
`
export default Door