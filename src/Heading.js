import React from 'react'
import styled from 'styled-components'
import {textColor} from './theme'

const Heading = (props) => {
  const Tag = styled(`${props.tag}`)`
    color: ${textColor};
    font-family: 'Lobster', cursive;
  `;

  return (
    <Tag>
      {props.children}
    </Tag>
  )
}

export default Heading