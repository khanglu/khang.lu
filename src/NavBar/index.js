import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Tabitha from './Tabitha'

const NavBar = (props) => (
  <NavBarContainer {...props}>
    <Tabitha changeTheme={props.changeTheme} />
    <NavLinkContainer>
      <NavBarLink {...props} to="/" exact activeClassName="active">Home</NavBarLink>
      <NavBarLink {...props} to="/about" activeClassName="active">About</NavBarLink>
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
const NavBarLink = styled(NavLink)`
  color: ${props => 
    props.isPortraitMode 
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
  &.active {
    padding: 0 .5vh;
    border-radius: .3vh;
    color: ${props =>
      props.isPortraitMode
        ? props.theme.bgColor
        : props.page === 'about'
          ? props.theme.textColor
          : props.theme.bgColor}
    background-color: ${props =>
      props.isPortraitMode
        ? props.theme.textColor
        : props.page === 'about'
          ? props.theme.bgColor
          : props.theme.textColor}
  }
`

export default NavBar
