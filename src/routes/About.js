import React, {Component} from 'react'
import styled from 'styled-components'
import DevBlock from '../DevBlock'
import BioBlock from '../BioBlock'

class About extends Component {
  constructor (props) {
    super(props)
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
    const {portraitMode} = this.props
    return(
      <AboutContainer portraitMode={portraitMode}>
        <DevBlock
          portraitMode={portraitMode}
          compact={!this.state.isDevBig}
          onMouseEnter={() => this.state.portraitMode || this.enlarge('dev')}
        />
        <BioBlock
          portraitMode={portraitMode}
          compact={this.state.isDevBig}
          onMouseEnter={() => this.state.portraitMode || this.enlarge('bio')}
        />
      </AboutContainer>
    )
  }
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.portraitMode ? 'column' : 'row'};
`

export default About