// @flow
import React, { PureComponent } from "react";
import Hero from "../Hero";
import Corgi from "../Corgi";
import PreLoadImage from "../utilities/PreLoadImage";
import CorgiGif from "../staticAssets/corgi.gif";

class Homepage extends PureComponent {
  state = {
    corgiCount: 0,
  };

  addCorgi = () => {
    if (this.state.corgiCount < 20) {
      this.setState({ corgiCount: this.state.corgiCount + 1 });
      this.props.changeTheme(1);
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
        {corgis}
        <PreLoadImage src={CorgiGif} />
      </div>
    );
  }
}

export default Homepage;
