import React from 'react'
import styled from 'styled-components'

const CodeBlock = (props) => {
  return (
    <CodeContainer {...props}>
      {props.code.map((line, index) => {
        return <CodeLine {...props} key={index}><pre>{index + "    " + line}</pre></CodeLine>
      })}
    </CodeContainer>
  )
}

const CodeContainer = styled.div`
    display: inline-block;
    vertical-align: top;
    width: ${props => (props.isStacked ? '100vw' : props.compact ? 0 : '40vw')};
    word-wrap:break-word;
    background: ${props => props.theme.textColor};
    transition: .5s;
  `

const CodeLine = styled.div`
    color: ${props => props.theme.bgColor};
    padding: 0 1vw;
    font-size: ${props => (props.isStacked ? '2vw' : '1vw')};
    
    pre {
      margin: .4vw;
    }
  `


export default CodeBlock