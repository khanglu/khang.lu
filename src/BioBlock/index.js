import React, { Component } from 'react'
import styled from 'styled-components'
import bioItems from './bioItems'
import ImageFrame from '../ImageFrame'

class BioBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      compact: props.compact,
      activeImage: 0
    }
    this.changeImage = this.changeImage.bind(this)
  }

  changeImage (index) {
    this.setState({activeImage: index})
  }

  render () {
    return (
      <BioWrapper {...this.props} >
        <BioHeading {...this.props}>BIO</BioHeading>
          <BioList {...this.props} >
            <List {...this.props} >
              {bioItems.map((item, index) => (
                <ListItem
                  {...this.props}
                  onClick={() => this.changeImage(index)}
                  key={index}
                  active={this.state.activeImage === index}
                >
                  {item.name}
                </ListItem>
              ))}
            </List>
          </BioList>
          <ImageFrame {...this.props} image={bioItems[this.state.activeImage]} />
      </BioWrapper>
    )
  }
}

const BioWrapper = styled.div`
  ${props => props.portraitMode || 'height: 100vh;'}
  ${props => (
    props.portraitMode ||
    props.compact
      ? 'flex-basis: 25vw;'
      : 'flex-basis: 75vw;'
  )}
  background: ${props => props.theme.textColor};
  transition: .5s;
  overflow: hidden;
`
const BioHeading = styled.h1`
  ${ props => props.portraitMode && 'text-align: center'};
  font-size: ${ props => props.portraitMode ? '20vw' : '7vw'};
  color: ${ props => props.theme.bgColor};
  font-family: 'Anton', sans-serif;
  margin: 2vw 0;
  position: relative;
  left: -4px;
`

const BioList = styled.div`
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
  color: ${ props => props.theme.bgColor};
  font-family: 'Fjalla One', sans-serif;
  font-size: ${props => (props.portraitMode ? '5vw' : '2vw')};
`

const ListItem = styled.li`
  cursor: pointer;
  ${props => props.portraitMode && 'display: inline-block; margin: 0 3vw;'}
  ${props => props.active && !props.compact && 'font-family: Anton; font-size: 2.5vw;'}
  transition: .2s;
  ${props => props.active && props.portraitMode && 'font-family: Anton; font-size: 6vw;'}
`

export default BioBlock