import React from "react";
import styled from "styled-components";
import { transitionSettings } from "../utilities/theme";

const ImageFrame = props => {
  return (
    <ImageContainer {...props}>
      <Image {...props} src={props.image.src} />
      <Description {...props}>
        {props.image.desc}
      </Description>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  display: inline-block;
  width: ${props => (props.isPortraitMode ? "100vw" : props.isCompact ? 0 : "46vw")};
  overflow: hidden;
  position: relative;
  transition: ${transitionSettings};
`;
const Image = styled.img`
  width: ${props => (props.isPortraitMode ? "100vw" : "46vw")};
  border-radius: ${props => props.isPortraitMode || "2vh"}; 
`;

const Description = styled.p`
  font-family: 'Fjalla One', sans-serif;
  text-align: center;
  ${props => !props.isPortraitMode && props.isCompact && "opacity: 0;"}
  color: ${props => props.theme.bgColor};
  transition: .2s;
  font-size: ${props => (props.isPortraitMode ? "3vw" : "1.3vw")};
  min-width: 46vw;
`;

export default ImageFrame;
