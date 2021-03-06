// @flow
import React, { PureComponent } from "react";
import styled, { withTheme } from "styled-components";
import CodeFrame from "../CodeFrame";
import devItems from "./devItems";
import List from "../List";
import ListItem from "../ListItem";
import { transitionSettings } from "../utilities/theme";
import { slideInDown, animationConfig } from "../utilities/animation";
import ParticlesWrapper from "../ParticlesWrapper";

// DEV block in about page
class DevBlock extends PureComponent {
  state = {
    activeCodeItem: 0
  };

  changeCode = (index: number) => {
    this.setState({ activeCodeItem: index }, () => this.props.enlarge("dev"));
  };

  render() {
    return (
      <DevWrapper {...this.props}>
        <ParticlesWrapper color={this.props.theme.textColor} />
        <DevHeading {...this.props}>DEV</DevHeading>
        <SkillsBlock {...this.props}>
          <List color="dev" {...this.props}>
            {devItems.map((item, index) => (
              <ListItem
                {...this.props}
                key={index}
                active={this.state.activeCodeItem === index}
              >
                <span
                  tabIndex={index + 1}
                  onFocus={() => this.changeCode(index)}
                  onMouseOver={() => this.changeCode(index)}
                >
                  {item.name}
                </span>
              </ListItem>
            ))}
          </List>
        </SkillsBlock>
        <CodeFrame
          {...this.props}
          code={devItems[this.state.activeCodeItem].code}
        />
      </DevWrapper>
    );
  }
}

// overflow-y: hidden; to handle Safari
const DevWrapper = styled.div`
  ${props => {
  if (!props.isPortraitMode) {
    if (props.isCompact) {
      return "flex-basis: 25vw; height: 100vh;";
    } else {
      return "flex-basis: 75vw; height: 100vh;";
    }
  }
}}
  background: ${props => props.theme.bgColor};
  transition: ${transitionSettings};
  overflow-y: hidden;
`;
const DevHeading = styled.h1`
  text-align: ${props => (props.isPortraitMode ? "center" : "right")};
  font-size: ${props => (props.isPortraitMode ? "20vw" : props.isCompact ? "8vw" : "10vw")};
  color: ${props => props.theme.textColor};
  font-family: 'Anton', sans-serif;
  margin: ${props => (props.isCompact ? "2.5vw 0 3vw" : "2vw 0 .5vw")};
  left: 0.04em;
  transition: ${transitionSettings};
  animation: ${slideInDown} ${animationConfig};
`;
const SkillsBlock = styled.div`
  vertical-align: top;
  display: ${props => (props.isPortraitMode ? "flex" : "inline-block")};
  width: ${props => (props.isPortraitMode ? "100vw" : props.isCompact ? "21vw" : "25vw")};
  transition: ${transitionSettings};
`;

export default withTheme(DevBlock);
