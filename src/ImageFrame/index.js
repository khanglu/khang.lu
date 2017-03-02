import React from 'react'
import styled from 'styled-components'
import {transitionSettings} from '../theme'

const ImageFrame = (props) => {
  return (
    <ImageContainer {...props}>
      <Image {...props} src={props.image.src}/>
      <Description {...props} >
        {props.image.desc}
      </Description>
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  display: inline-block;
  width: ${props => (props.portraitMode ? '100vw' : props.compact ? 0 : '46vw')};
  overflow: hidden;
  position: relative;
  transition: ${transitionSettings};
`
const Image = styled.img`
  width: ${props => (props.portraitMode ? '100vw' : '46vw')};
  border-radius: ${props => props.portraitMode || '2vw'}; 
`

const Description = styled.p`
  font-family: 'Fjalla One', sans-serif;
  text-align: center;
  ${props => !props.portraitMode && props.compact && 'opacity: 0;'}
  color: ${props => props.theme.bgColor}
  transition: .2s;
  font-size: ${props => props.portraitMode ? '3vw': '1.3vw'};
  min-width: 46vw;
`

export default ImageFrame