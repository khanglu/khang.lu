import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import {allThemes} from './theme'
import NavBar from './NavBar'
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './routes/Homepage'
import About from './routes/About'

class App extends Component {
  constructor() {
    super()
    this.state = {
      // Get random number between 0 and 3 to randomize theme
      themeIndex: Math.floor(Math.random() * allThemes.length)
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
      <BrowserRouter>
        <ThemeProvider theme={allThemes[themeIndex]}>
          <Background>
            <NavBar />
            <Route exact path="/" render={() => (
              <Homepage
                changeTheme={this.changeTheme}
              />
            )} />
            <Route path="/about" component={Homepage} />
          </Background>
        </ThemeProvider>
      </BrowserRouter>
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
`


export default App