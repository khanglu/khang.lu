import React, { Component } from 'react'
import styled from 'styled-components'

class BioBlock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      compact: props.compact
    }
  }
  render () {
    return (
      <BioWrapper {...this.props} >
        <BioHeading {...this.props}>BIO</BioHeading>
          <List {...this.props}>
            <li>Hearthstone</li>
            <li>Poker</li>
            <li>Motorcycles</li>
            <li>LEGO</li>
            <li>Pokémon</li>
            <li>Music</li>
            <li>Soccer</li>
          </List>
      </BioWrapper>
    )
  }
}

const BioWrapper = styled.div`
  ${props => props.isStacked || 'height: 100vh;'}
  ${props => (
    props.isStacked ||
    props.compact
      ? 'flex-basis: 25vw;'
      : 'flex-basis: 75vw;'
  )}
  background: ${props => props.theme.textColor};
  transition: .5s;
`
const BioHeading = styled.h1`
  ${ props => props.isStacked && 'text-align: center'};
  font-size: ${ props => props.isStacked ? '20vw' : '6vw'};
  color: ${ props => props.theme.bgColor};
  font-family: 'Anton', sans-serif;
  margin: 2vw 0;
`

const List = styled.ul`
  list-style: none;
  color: ${ props => props.theme.bgColor};
  font-family: 'Fjalla One', sans-serif;
  font-size: ${props => (props.isStacked ? '5vw' : '2vw')};
`

export default BioBlock