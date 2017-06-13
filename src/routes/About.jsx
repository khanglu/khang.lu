// @flow
import React, { PureComponent } from "react";
import styled from "styled-components";
import DevBlock from "../components/DevBlock";
import BioBlock from "../components/BioBlock";
import bioItems from "../components/BioBlock/bioItems";
import PreLoadImage from "../utilities/PreLoadImage";

class About extends PureComponent {
  state = {
    isDevBig: true
  };

  enlarge(block: string) {
    if (block === "dev") {
      this.setState({ isDevBig: true });
    } else {
      this.setState({ isDevBig: false });
    }
  }

  render() {
    const { isPortraitMode } = this.props;

    return (
      <AboutContainer isPortraitMode={isPortraitMode}>
        <DevBlock
          isPortraitMode={isPortraitMode}
          isCompact={!this.state.isDevBig}
          enlarge={block => isPortraitMode || this.enlarge(block)}
        />
        <BioBlock
          isPortraitMode={isPortraitMode}
          isCompact={this.state.isDevBig}
          enlarge={block => isPortraitMode || this.enlarge(block)}
        />
        {bioItems.map((item, i) => {
          return <PreLoadImage key={i} src={item.src} />;
        })}
      </AboutContainer>
    );
  }
}

const AboutContainer = styled.div`
  display: flex;
  ${props => (props.isPortraitMode ? "padding-top: 5em; flex-direction: column; background-color:" + props.theme.bgColor + ";" : "flex-direction: row;")}
`;

export default About;
