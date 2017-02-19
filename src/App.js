import React from 'react'
import styled from 'styled-components'
import Door from './Door'
import NavBar from './NavBar/'
import Hero from './Hero'
import {bgColor} from './theme'

const App = () =>{

  const Background = styled.div`
  background-color: ${bgColor};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

  return (
  <Background>
    <NavBar />
    <Hero />
    <Hallway>
      <Doors>
        <Door color={0} title="" />
      </Doors>
      <Floor />
    </Hallway>
  </Background>
)}


const Hallway = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// In case I want more doors
const Doors = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: -2px;
  position: relative;
`;

const Floor = styled.div`
  height: 1vh;
  width: 100%;
  background-color: #f26730;
  
  border-top: 2px;
  border-top-style: outset;
  border-color: #d1571e;
`;

export default App;