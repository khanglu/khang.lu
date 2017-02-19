import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading.js'
import {bgColor, textColor} from '../theme'

const Hero = () => {
  const HeroBlock = styled.div`
    text-align: center;
    margin: 4em auto;
  `

  const NameBlock = styled.span`
    border-radius: 3px;
    margin: 0 .1em;
    padding: .1em .3em;
    display: inline-block;
    background-color: ${textColor};
    color: ${bgColor};
    font-family: 'Righteous', sans-serif;
    font-size: 400%;
  `

  const SocialBlock = styled.div`
    margin: 1.5em auto;
  `

  const SocialLink = styled.a`
    letter-spacing: .15em;
    color: ${textColor};
    text-decoration: none;
    margin: 0 .5em;
    font-family: 'Economica', sans-serif;
  `

  return (
    <HeroBlock>
      <Heading tag="h1">Front End Developer</Heading>
      <NameBlock>Khang</NameBlock>
      <NameBlock>Lu</NameBlock>
      <SocialBlock>
        <SocialLink href="https://www.linkedin.com/in/khanglu/">LinkedIn</SocialLink>
        <SocialLink href="http://stackoverflow.com/cv/khanglu">Résumé</SocialLink>
        <SocialLink href="mailto:lulephuckhang@gmail.com">Email</SocialLink>
      </SocialBlock>
    </HeroBlock>
  )
}



export default Hero