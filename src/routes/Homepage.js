import React, {Component} from 'react'
import styled from 'styled-components'
import Hero from '../Hero'
import Corgi from '../Corgi'
import Door from '../Door'

class Homepage extends Component {
  constructor() {
    super()
    this.state = {
      corgiCount: 0
    }
    this.addCorgi = this.addCorgi.bind(this)
  }

  addCorgi() {
    if (this.state.corgiCount < 20) {
      this.setState({corgiCount: this.state.corgiCount + 1})
    }
  }

  render() {
    let corgis = []
    for (let i = 0; i < this.state.corgiCount; i++) {
      corgis.push(<Corgi key={i} />)
    }
    return (
      <div>
        <Hero addCorgi={this.addCorgi} />
        <Hallway>
          <Door changeTheme={this.props.changeTheme} color={0} title="" />
          <Floor />
        </Hallway>
        {corgis}
      </div>
    )
  }

}

const Hallway = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Floor = styled.div`
  height: 1vh;
  width: 100%;
  background-color: #f26730;
  
  border-top: 2px;
  border-top-style: outset;
  border-color: #d1571e;
  filter : hue-rotate(${props => props.theme.doorColor - 10}deg);
`

export default Homepage