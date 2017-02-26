import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tabitha from './Tabitha'

const NavBar = (props) => (
  <NavBarContainer {...props}>
    <Tabitha />
    <NavLinkContainer>
      <NavLink {...props} to="about">About</NavLink>
      <NavLink {...props} to="about">My Work</NavLink>
    </NavLinkContainer>
  </NavBarContainer>
)

const NavBarContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2em;
`

const NavLink = styled(Link)`
  color: ${props => 
    props.isStacked 
      ? props.theme.textColor 
      : props.page === 'about' 
        ? props.theme.bgColor 
        : props.theme.textColor}
  flex: 0 0 auto;
  margin: 0 1em;
  text-decoration: none;
  font-family: 'Pacifico', cursive;
  
  transition: .2s ease-in-out;
  &:hover {
      transform: scale(1.1);
    }
`

export default NavBar
