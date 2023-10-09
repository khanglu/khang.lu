// @flow
import React, { PureComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { allThemes } from "./utilities/theme";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import ParticlesWrapper from "./ParticlesWrapper";

class App extends PureComponent {
  state = {
    themeIndex: 0,
    isPortraitMode: window.innerWidth / window.innerHeight < 1.3,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isPortraitMode: window.innerWidth / window.innerHeight < 1.3,
    });
  };

  changeTheme = (themeIndex) => {
    this.setState({ themeIndex: themeIndex });
  };

  render() {
    const { themeIndex } = this.state;
    return (
      <ThemeProvider theme={allThemes[themeIndex]}>
        <BrowserRouter>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <Background>
                  {!this.state.isPortraitMode && (
                    <ParticlesWrapper
                      color={allThemes[this.state.themeIndex].textColor}
                      key={this.state.themeIndex}
                    />
                  )}
                  <Homepage changeTheme={this.changeTheme} />
                </Background>
              )}
            />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const Background = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: .5s;
  animatio
`;

export default App;
