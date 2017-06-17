// @flow
import React, { PureComponent } from "react";
import styled, { ThemeProvider } from "styled-components";
import { allThemes } from "./utilities/theme";
import NavBar from "./NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import About from "./routes/About";
import ParticlesWrapper from "./ParticlesWrapper";
import { WINDOW } from "./utilities/environment";

class App extends PureComponent {
  state = {
    themeIndex: 1,
    isPortraitMode: WINDOW.innerWidth / WINDOW.innerHeight < 1.3
  };

  componentDidMount() {
    WINDOW.addEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isPortraitMode: WINDOW.innerWidth / WINDOW.innerHeight < 1.3
    });
  };

  changeTheme = () => {
    // Randomize new theme that is different from the current one
    let newThemeIndex = this.state.themeIndex;
    while (newThemeIndex === this.state.themeIndex) {
      newThemeIndex = Math.floor(Math.random() * allThemes.length);
    }
    this.setState({ themeIndex: newThemeIndex });
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
                  {!this.state.isPortraitMode &&
                    <ParticlesWrapper
                      color={allThemes[this.state.themeIndex].textColor}
                      key={this.state.themeIndex}
                    />}
                  <NavBar changeTheme={this.changeTheme} page="homepage" />
                  <Homepage changeTheme={this.changeTheme} />
                </Background>
              )}
            />
            <Route
              path="/about"
              render={() => (
                <div>
                  <NavBar
                    changeTheme={this.changeTheme}
                    isPortraitMode={this.state.isPortraitMode}
                    page="about"
                  />
                  <About isPortraitMode={this.state.isPortraitMode} />
                </div>
              )}
            />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

const Background = styled.div`
  background-color: ${props => props.theme.bgColor};
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
