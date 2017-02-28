import React from 'react'
import styled from 'styled-components'

const CodeFrame = (props) => {
  return (
    <CodeWrapper {...props}>
      <CodeContainer {...props}>
        {props.code.map((line, index) => {
          let indexText = index;
          if (index < 10) {
            indexText = index + ' ';
          }
          return <CodeLine {...props} key={index}><pre>{indexText + "    " + line}</pre></CodeLine>
        })}
      </CodeContainer>
    </CodeWrapper>
  )
}

const CodeWrapper = styled.div`
  ${props => props.portraitMode && 'padding: 5vw;'}
  display: inline-block;
  width: ${props => (props.portraitMode ? '90vw' : props.compact ? 0 : '46vw')};
  transition: .5s;
`
const CodeContainer = styled.div`
  padding: 1vw 0;
  width: 100%;
  word-wrap: break-word;
  background: ${props => props.theme.textColor};
  border-radius: 2vw; 
  transition: .5s;
`
const CodeLine = styled.div`
  color: ${props => props.theme.bgColor};
  padding: 0 1vw;
  font-size: ${props => (props.portraitMode ? '2vw' : '1vw')};
  
  pre {
    margin: .4vw;
  }
`


export default CodeFrame