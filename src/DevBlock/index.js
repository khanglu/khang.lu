import React, { Component } from 'react'
import styled from 'styled-components'
import CodeBlock from '../CodeBlock'
import codeSamples from './codeSamples'

class DevBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      compact: props.compact
    }
  }

  render () {
    return (
      <DevWrapper {...this.props} >
        <DevHeading {...this.props}>DEV</DevHeading>
        <DevContent>
          <SkillsBlock {...this.props}>
            <List {...this.props}>
              <li>es6+ JavaScript</li>
              <li>react</li>
              <li>redux</li>
              <li>webpack</li>
              <li>npm</li>
              <li>gulp</li>
            </List>
            <List {...this.props}>
              <li>sass</li>
              <li>css modules</li>
              <li>styled-components</li>
              <li>radium</li>
            </List>
          </SkillsBlock>
          <CodeBlock {...this.props} code={codeSamples.js} />
        </DevContent>
      </DevWrapper>
    )
  }
}

const DevWrapper = styled.div`
  ${props => props.isStacked || 'height: 100vh;'}
  background: ${props => props.theme.bgColor};
  transition: .5s;
  ${props => (
      props.isStacked 
        ? 'margin-top: 5em;'
        : props.compact 
          ? 'flex-basis: 25vw;'
          : 'flex-basis: 75vw;'
  )}
 
`
const DevHeading = styled.h1`
  text-align: ${ props => props.isStacked ? 'center' : 'right'};
  font-size: ${ props => props.isStacked ? '20vw' : '6vw'};
  color: ${ props => props.theme.textColor};
  font-family: 'Anton', sans-serif;
  
  margin: 2vw 0;
`

const DevContent = styled.div`
  
`

const SkillsBlock = styled.div`
  display: ${props => (props.isStacked ? 'flex' : 'inline-block')};
  width: ${props => (props.isStacked ? '100vw' : '30vw')};
  transition: .5s;
`

const List = styled.ul`
  margin-top: 0;
  list-style: none;
  color: ${ props => props.theme.textColor};
  font-family: 'Fjalla One', sans-serif;
  font-size: ${props => (props.isStacked ? '5vw' : '2vw')};
`

export default DevBlock