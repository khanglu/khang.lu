import React, { Component } from 'react'
import styled from 'styled-components'
import bioItems from './bioItems'
import ImageFrame from '../ImageFrame'
import ListItem from '../ListItem'
import {transitionSettings} from '../theme'

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
                  key={index}
                  active={this.state.activeImage === index}
                >
                  <span onMouseOver={() => this.changeImage(index)}>
                    {item.name}
                  </span>
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
  transition: ${transitionSettings};
  overflow: hidden;
`
const BioHeading = styled.h1`
  ${ props => props.portraitMode && 'text-align: center'};
  font-size: ${ props => props.portraitMode ? '20vw' : props.compact ? '8vw' : '10vw'};
  color: ${ props => props.theme.bgColor};
  font-family: 'Anton', sans-serif;
  margin: ${props => props.compact ? '2.5vw 0 3vw' : '2vw 0 .5vw'};
  position: relative;
  right: 0.04em;
  transition: ${transitionSettings};
`

const BioList = styled.div`
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
  color: ${ props => props.theme.bgColor};
  font-family: 'Fjalla One', sans-serif;
  font-size: ${props => (props.portraitMode ? '5vw' : '2vw')};
`

export default BioBlock