import React from 'react'
import styled from 'styled-components'
import Tabitha from './Tabitha'
import {textColor} from '../theme'

const NavBar = () => (
  <NavBarContainer>
    <Tabitha />
    <NavLinkContainer>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/about">My Work</NavLink>
      <NavLink href="/about">Contact</NavLink>
    </NavLinkContainer>
  </NavBarContainer>
)

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2em;
`

const NavLink = styled.a`
  color: ${textColor}
  flex: 0 0 auto;
  margin: 0 1em;
  text-decoration: none;
  font-family: 'Pacifico', cursive;
  
  &:hover {
    opacity: .7
  }
`

export default NavBar
