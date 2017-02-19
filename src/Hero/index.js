import React from 'react'
import styled from 'styled-components'

const Hero = (props) => {

  const HeroBlock = styled.div`
    text-align: center;
    margin: 4em auto;
  `
  const HeroHeading = styled.h2`
    color: ${props => props.theme.textColor};
    font-family: 'Unica One', cursive;
    font-size: 4.55vh;
    margin: .8vh 0;
  `

  const NameBlock = styled.h1`
    display: inline;
    border-radius: 3px;
    margin: 0 .1em;
    padding: 0 .17em;
    display: inline-block;
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    font-family: 'Bungee', sans-serif;
    font-size: 6.7vh;
  `

  const SocialBlock = styled.div`
    margin: 1.8vh auto;
  `

  const SocialLink = styled.a`
    display: inline-block;
    font-size: 1.9vh;
    letter-spacing: .15em;
    color: ${props => props.theme.textColor};
    text-decoration: none;
    margin: 0 .5em;
    font-family: 'Unica One', sans-serif;
    
    transition: .2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  `

  return (
    <HeroBlock>
      <HeroHeading tag="h1">Front End Developer</HeroHeading>
      <NameBlock>Khang</NameBlock>
      <NameBlock>Lu</NameBlock>
      <SocialBlock>
        <SocialLink href="https://www.linkedin.com/in/khanglu/">LinkedIn</SocialLink>
        <SocialLink href="http://stackoverflow.com/cv/khanglu">Résumé</SocialLink>
        <SocialLink href="mailto:lulephuckhang@gmail.com">Email</SocialLink>
        <SocialLink href="https://www.facebook.com/khanglplu">Facebook</SocialLink>
      </SocialBlock>
    </HeroBlock>
  )
}



export default Hero