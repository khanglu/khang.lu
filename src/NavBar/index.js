// @flow
import React from 'react';
import styled from 'styled-components';
import Tabitha from './Tabitha';

const NavBar = (props: any) => (
  <NavBarContainer {...props}>
    <Tabitha changeTheme={props.changeTheme} />
  </NavBarContainer>
);

const NavBarContainer = styled.div`
  z-index: 69;
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default NavBar;
