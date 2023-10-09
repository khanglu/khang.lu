// @flow
import React, { useState } from "react";
import styled from "styled-components";
import { slideInLeft, slideInRight, animationConfig } from "../utilities/animation";

const fontName = "'Montserrat', sans-serif";

const Hero = (props) => {
  const [corgiCount, setCorgiCount] = useState(0);
  return (
    <HeroBlock>
      <NameBlock>Hey, I'm Khang 👋</NameBlock>
      <SocialBlock>
        <SocialLink href="https://www.linkedin.com/in/khanglu/">LinkedIn</SocialLink>
        <SocialLink href="mailto:info@khang.lu">Email</SocialLink>
        <AddButton
          onClick={() => {
            props.addCorgi();
            setCorgiCount(corgiCount + 1);
          }}
        >
          Add {corgiCount > 0 ? "another" : "a"} Corgi
        </AddButton>
      </SocialBlock>
    </HeroBlock>
  );
};

const HeroBlock = styled.div`
  text-align: center;
  margin: 16vh auto 4vh;
  user-select: none;
  * {
    transition: 0.5s;
  }
`;
const NameBlock = styled.h1`
  display: inline;
  margin: 0 0.1em;
  padding: 0 0.15em 0.02em;
  display: inline-block;
  color: ${(props) => props.theme.textColor};
  font-family: ${fontName}, sans-serif;
  font-size: 6vh;
  animation: ${slideInRight} ${animationConfig};
`;
const SocialBlock = styled.div`
  margin: 1vh auto;
  position: relative;
  left: 3px;
`;
const SocialLink = styled.a`
  user-select: none;
  cursor: pointer;
  display: inline-block;
  font-size: 2vh;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  margin: 0 0.5em;
  font-family: ${fontName};

  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  animation: ${slideInLeft} ${animationConfig};
`;
const AddButton = styled.button`
  user-select: none;
  cursor: pointer;
  display: inline-block;
  font-size: 2vh;
  background-color: ${(props) => props.theme.textColor}
  color: ${(props) => props.theme.bgColor};
  text-decoration: none;
  margin: 0 0.5em;
  font-family: ${fontName};
  border-radius: 0.04em;
  margin-top: 1em;
  padding: 0 1em;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  animation: ${slideInLeft} ${animationConfig};
`;

export default Hero;
