import React from 'react'
import styled from 'styled-components'
import {slideInLeft, slideInRight, slideInUp, animationConfig} from '../animation'

const Hero = (props) => (
  <HeroBlock>
    <HeroHeading tag="h1">Front End Developer</HeroHeading>
    <NameBlock>Khang</NameBlock>
    <NameBlock>Lu</NameBlock>
    <SocialBlock>
      <SocialLink href="https://www.linkedin.com/in/khanglu/">LinkedIn</SocialLink>
      <SocialLink href="mailto:info@khang.lu">Email</SocialLink>
      <SocialLink href="https://github.com/khanglu/khang.lu">GitHub</SocialLink>
      <SocialLink style={{fontSize: '2.6vh'}} onClick={()=>props.addCorgi()}>Add a Corgi</SocialLink>
    </SocialBlock>
  </HeroBlock>
)

const HeroBlock = styled.div`
  text-align: center;
  margin: 9em auto 4em;
  user-select: none;
  * {
    transition: .5s;
  }
`
const HeroHeading = styled.h2`
  color: ${props => props.theme.textColor};
  font-family: 'Caesar Dressing', cursive;
  font-size: 4.78vh;
  margin: .6vh 0;
  animation: ${slideInUp} ${animationConfig};
  font-weight: 400;
`
const NameBlock = styled.h1`
  display: inline;
  border-radius: .04em;
  margin: 0 .1em;
  padding: 0 .15em .02em;
  display: inline-block;
  background-color: ${props => props.theme.textColor};
  color: ${props => props.theme.bgColor};
  font-family: 'Caesar Dressing', sans-serif;
  letter-spacing: .2vh;
  font-size: 8.9vh;
  animation: ${slideInRight} ${animationConfig};
`
const SocialBlock = styled.div`
  margin: 1vh auto;
  position: relative;
  left: 3px;
`
const SocialLink = styled.a`
  user-select: none;
  cursor: pointer;
  display: inline-block;
  font-size: 1.86vh;
  letter-spacing: .1em;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  margin: 0 .5em;
  font-family: 'Caesar Dressing', sans-serif;
  
  transition: .2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  animation: ${slideInLeft} ${animationConfig};
`


export default Hero