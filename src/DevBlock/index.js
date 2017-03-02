import React, { Component } from 'react'
import styled from 'styled-components'
import CodeFrame from '../CodeFrame'
import devList from './devList'
import ListItem from '../ListItem'
import {transitionSettings} from '../theme'

class DevBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      compact: props.compact,
      activeCodeItem: 0
    }
    this.changeCode = this.changeCode.bind(this)
  }

  changeCode (index) {
    this.setState({activeCodeItem: index})
  }

  render () {
    return (
      <DevWrapper {...this.props} >
        <DevHeading {...this.props}>DEV</DevHeading>
          <SkillsBlock {...this.props}>
            <List {...this.props}>
              {devList.map((item, index) => (
                <ListItem
                  {...this.props}
                  key={index}
                  active={this.state.activeCodeItem === index}
                >
                  <span onMouseOver={() => this.changeCode(index)}>
                    {item.name}
                  </span>
                </ListItem>
              ))}
            </List>
          </SkillsBlock>
          <CodeFrame {...this.props} code={devList[this.state.activeCodeItem].code} />
      </DevWrapper>
    )
  }
}

// overflow-y: hidden; to handle Safari
const DevWrapper = styled.div`
  overflow-y: hidden;
  ${props => !props.portraitMode && 'height: 100vh;'}
  background: ${props => props.theme.bgColor};
  transition: ${transitionSettings};
  ${props => (
      props.portraitMode 
        ? 'padding-top: 5em;'
        : props.compact 
          ? 'flex-basis: 25vw;'
          : 'flex-basis: 75vw;'
  )}
`
const DevHeading = styled.h1`
  text-align: ${ props => props.portraitMode ? 'center' : 'right'};
  font-size: ${ props => props.portraitMode ? '20vw' : props.compact ? '8vw' : '10vw'};
  color: ${ props => props.theme.textColor};
  font-family: 'Anton', sans-serif;
  margin: ${props => props.compact ? '2.5vw 0 3vw' : '2vw 0 .5vw'};
  left: 0.04em;
  transition: ${transitionSettings};
`
const SkillsBlock = styled.div`
  vertical-align: top;
  display: ${props => (props.portraitMode ? 'flex' : 'inline-block')};
  width: ${props => (props.portraitMode ? '100vw' : props.compact ? '21vw' : '25vw')};
  transition: ${transitionSettings};
`
const List = styled.ul`
  ${props => props.portraitMode 
    ? 'text-align: center; padding: 0;'
    : 'padding-left: 3vw;'
  }
  margin-top: 0;
  list-style: none;
  color: ${ props => props.theme.textColor};
  font-family: 'Fjalla One', sans-serif;
  font-size: ${props => (props.portraitMode ? '5vw' : '2vw')};
`
export default DevBlock