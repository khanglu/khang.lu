import React, {Component} from 'react'
import styled from 'styled-components'
import Hero from '../Hero'
import Corgi from '../Corgi'
import Door from '../Door'
import LazyLoadImage from '../LazyLoadImage'
import CorgiGif from '../../staticAssets/corgi.gif'

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
        <LazyLoadImage src={CorgiGif} />
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
  height: 1.2vh;
  width: 100%;
  background-color: ${props => props.theme.textColor};
`

export default Homepage