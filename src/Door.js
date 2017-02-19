import React from 'react'
import styled from 'styled-components'
import doorImgSrc from './door.png'
import Heading from './Heading'

const Door = (props) => (
  <DoorContainer>
    <Heading tag={'h2'}>{props.title}</Heading>
    <DoorImg color={props.color} src={doorImgSrc} />
  </DoorContainer>
)

const DoorContainer = styled.div`
  text-align: center;
  flex: 0 0 auto;
  margin: 0 8vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const DoorImg = styled.img`
  user-select: none;
  width: 10vh;
  filter : hue-rotate(${props => props.color}deg);
`;

export default Door;