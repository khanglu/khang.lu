import React, { Component } from 'react'
import styled from 'styled-components'
import CodeBlock from '../CodeBlock'
import devList from './devList'

class DevBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      compact: props.compact,
      activeCodeItem: 0
    }
  }

  changeCode (index) {
    this.setState({activeCodeItem: index})
  }

  render () {
    return (
      <DevWrapper {...this.props} >
        <DevHeading {...this.props}>DEV</DevHeading>
        <DevContent>
          <SkillsBlock {...this.props}>
            <List {...this.props}>
              {devList.map((item, index) => (
                <ListItem
                  {...this.props}
                  onClick={() => this.changeCode(index)}
                  key={index}
                  active={this.state.activeCodeItem === index}
                >
                  {item.name}
                </ListItem>
              ))}
            </List>
          </SkillsBlock>
          <CodeBlock {...this.props} code={devList[this.state.activeCodeItem].code} />
        </DevContent>
      </DevWrapper>
    )
  }
}

const DevWrapper = styled.div`
  ${props => props.portraitMode || 'height: 100vh;'}
  background: ${props => props.theme.bgColor};
  transition: .5s;
  ${props => (
      props.portraitMode 
        ? 'margin-top: 5em;'
        : props.compact 
          ? 'flex-basis: 25vw;'
          : 'flex-basis: 75vw;'
  )}
 
`
const DevHeading = styled.h1`
  text-align: ${ props => props.portraitMode ? 'center' : 'right'};
  font-size: ${ props => props.portraitMode ? '20vw' : '7vw'};
  color: ${ props => props.theme.textColor};
  font-family: 'Anton', sans-serif;
  margin: 2vw 0;
  transition: .5s;
`

const DevContent = styled.div`
  
`

const SkillsBlock = styled.div`
  vertical-align: top;
  display: ${props => (props.portraitMode ? 'flex' : 'inline-block')};
  width: ${props => (props.portraitMode ? '100vw' : props.compact ? '21vw' : '25vw')};
  transition: .5s;
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

const ListItem = styled.li`
  cursor: pointer;
  ${props => props.portraitMode && 'display: inline-block; margin: 0 3vw;'}
  ${props => props.active && !props.compact && 'font-family: Anton; font-size: 2.5vw;'}
  ${props => props.active && !props.compact && props.portraitMode && 'font-family: Anton; font-size: 6vw;'}
  transition: .2s;
`

export default DevBlock