import React from 'react'
import styled, { keyframes} from 'styled-components'
import doorImgSrc from './door.png'

const Door = (props) => (
  <DoorContainer>
    <DoorImg onClick={() => props.changeTheme()} color={props.color} src={doorImgSrc} />
  </DoorContainer>
)

const DoorContainer = styled.div`
  margin: 0 8vh;
  display: flex;
  justify-content: center;
`;

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

const DoorImg = styled.img`
  user-select: none;
  height: 20vh;
  filter : hue-rotate(${props => props.theme.doorColor}deg);
  
  &:hover {
    position: relative;
    bottom: -2px;
	  animation-name: ${shaking} 0.8s infinite;
	  animation-timing-function: linear;
  }
`



export default Door;