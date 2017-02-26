import React, {Component} from 'react'
import styled from 'styled-components'
import DevBlock from '../DevBlock'
import BioBlock from '../BioBlock'

class About extends Component {
  constructor () {
    super()
    this.state = {
      isDevBig: true
    }
    this.enlarge = this.enlarge.bind(this)
  }

  enlarge (block) {
    if (block === 'dev') {
      this.setState({ isDevBig: true })
    } else {
      this.setState({ isDevBig: false })
    }
  }


  render () {
    const {isStacked} = this.props
    return(
      <AboutContainer isStacked={isStacked}>
        <DevBlock
          isStacked={isStacked}
          compact={!this.state.isDevBig}
          onMouseEnter={() => this.state.isStacked || this.enlarge('dev')}
        />
        <BioBlock
          isStacked={isStacked}
          compact={this.state.isDevBig}
          onMouseEnter={() => this.state.isStacked || this.enlarge('bio')}
        />
      </AboutContainer>
    )
  }
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.isStacked ? 'column' : 'row'};
`

export default About