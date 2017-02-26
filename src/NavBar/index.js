import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Tabitha from './Tabitha'

const NavBar = (props) => (
  <NavBarContainer {...props}>
    <Tabitha changeTheme={props.changeTheme} />
    <NavLinkContainer>
      <NavLink {...props} to="/">Home</NavLink>
      <NavLink {...props} to="about">About</NavLink>
    </NavLinkContainer>
  </NavBarContainer>
)

const NavBarContainer = styled.div`
  z-index: 69;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1em;
`

const NavLink = styled(Link)`
  color: ${props => 
    props.portraitMode 
      ? props.theme.textColor 
      : props.page === 'about' 
        ? props.theme.bgColor 
        : props.theme.textColor}
  flex: 0 0 auto;
  margin: 0 .5em;
  text-decoration: none;
  font-family: 'Unica One', cursive;
  font-size: 3vh;
  
  transition: .2s ease-in-out;
  &:hover {
      transform: scale(1.1);
    }
`

export default NavBar
