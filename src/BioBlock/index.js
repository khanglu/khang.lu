// @flow
import React, { PureComponent } from "react";
import styled from "styled-components";
import bioItems from "./bioItems";
import ImageFrame from "../ImageFrame";
import List from "../List";
import ListItem from "../ListItem";
import { transitionSettings } from "../utilities/theme";
import devItems from "../DevBlock/devItems";
import { slideInUp, animationConfig } from "../utilities/animation";

class BioBlock extends PureComponent {
  state = {
    activeImage: 0,
  };

  changeImage = (index: number) => {
    this.setState({ activeImage: index }, () => this.props.enlarge("bio"));
  };

  render() {
    return (
      <BioWrapper {...this.props}>
        <BioHeading {...this.props}>BIO</BioHeading>
        <BioList {...this.props}>
          <List name="bio" {...this.props}>
            {bioItems.map((item, index) => (
              <ListItem {...this.props} key={index} active={this.state.activeImage === index}>
                <span
                  tabIndex={devItems.length + index + 1}
                  onFocus={() => this.changeImage(index)}
                  onMouseOver={() => this.changeImage(index)}
                >
                  {item.name}
                </span>
              </ListItem>
            ))}
          </List>
        </BioList>
        <ImageFrame {...this.props} image={bioItems[this.state.activeImage]} />
      </BioWrapper>
    );
  }
}

const BioWrapper = styled.div`
  ${(props) => {
    if (!props.isPortraitMode) {
      if (props.isCompact) {
        return "flex-basis: 25vw; height: 100vh;";
      } else {
        return "flex-basis: 75vw; height: 100vh;";
      }
    }
  }}
  background: ${(props) => props.theme.textColor};
  transition: ${transitionSettings};
  overflow-y: hidden;
`;
const BioHeading = styled.h1`
  ${(props) => props.isPortraitMode && "text-align: center"};
  font-size: ${(props) => (props.isPortraitMode ? "20vw" : props.isCompact ? "8vw" : "10vw")};
  color: ${(props) => props.theme.bgColor};
  font-family: "Anton", sans-serif;
  margin: ${(props) => (props.isCompact ? "2.5vw 0 3vw" : "2vw 0 .5vw")};
  position: relative;
  right: 0.04em;
  transition: ${transitionSettings};
  animation: ${slideInUp} ${animationConfig};
`;
const BioList = styled.div`
  vertical-align: top;
  display: ${(props) => (props.isPortraitMode ? "flex" : "inline-block")};
  width: ${(props) => (props.isPortraitMode ? "100vw" : props.isCompact ? "21vw" : "25vw")};
  transition: ${transitionSettings};
`;

export default BioBlock;
