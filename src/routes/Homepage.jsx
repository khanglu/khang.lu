// @flow
import React, { PureComponent } from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Corgi from "../components/Corgi";
import Door from "../components/Door";
import PreLoadImage from "../utilities/PreLoadImage";
import CorgiGif from "../staticAssets/corgi.gif";

class Homepage extends PureComponent {
  state = {
    corgiCount: 0
  };

  addCorgi = () => {
    if (this.state.corgiCount < 20) {
      this.setState({ corgiCount: this.state.corgiCount + 1 });
    }
  };

  render() {
    let corgis = [];
    for (let i = 0; i < this.state.corgiCount; i++) {
      corgis.push(<Corgi key={i} />);
    }
    return (
      <div>
        <Hero addCorgi={this.addCorgi} changeTheme={this.props.changeTheme} />
        <Hallway>
          <Door changeTheme={this.props.changeTheme} />
          <Floor />
        </Hallway>
        {corgis}
        <PreLoadImage src={CorgiGif} />
      </div>
    );
  }
}

const Hallway = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Floor = styled.div`
  height: 1.2vh;
  width: 100%;
  background-color: ${props => props.theme.textColor};
`;

export default Homepage;
