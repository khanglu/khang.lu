import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Door from './Door'
import NavBar from './NavBar/'
import Hero from './Hero'
import {allThemes} from './theme'

class App extends Component {
  constructor() {
    super()
    this.state = {
      themeIndex: 0
    }

    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme() {
    if (this.state.themeIndex === allThemes.length - 1) {
      this.setState({themeIndex: 0})
    } else {
      this.setState({themeIndex: this.state.themeIndex + 1})
    }
  }

  render() {
    const {themeIndex} = this.state
    return (
      <ThemeProvider theme={allThemes[themeIndex]}>
        <Background>
          <NavBar />
          <Hero />
          <Hallway>
            <Door changeTheme={this.changeTheme} color={0} title="" />
            <Floor />
          </Hallway>
        </Background>
      </ThemeProvider>
    )
  }
}

const Background = styled.div`
  background-color: ${props => props.theme.bgColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const Hallway = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Floor = styled.div`
  height: 1vh;
  width: 100%;
  background-color: #f26730;
  
  border-top: 2px;
  border-top-style: outset;
  border-color: #d1571e;
  filter : hue-rotate(${props => props.theme.doorColor - 10}deg);
`;

export default App;