import React from "react";
import styled from "styled-components";
import { transitionSettings } from "../utilities/theme";
import { slideInUp, animationConfig } from "../utilities/animation";

// Code block in About page
const CodeFrame = props => {
  return (
    <CodeWrapper {...props}>
      <CodeContainer {...props}>
        {props.code.map((line, index) => {
          let indexText = index + 1;
          // Ensure line number 1 to 9 has one extra space so they has the same character as double-digit lines
          if (index < 9) {
            indexText = index + 1 + " ";
          }
          return (
            <CodeLine {...props} key={index}>
              <pre>{indexText + "    " + line}</pre>
            </CodeLine>
          );
        })}
      </CodeContainer>
    </CodeWrapper>
  );
};

const CodeWrapper = styled.div`
  ${props => props.isPortraitMode && "padding: 5vw;"}
  display: inline-block;
  width: ${props => (props.isPortraitMode ? "90vw" : props.isCompact ? 0 : "46vw")};
  transition: ${transitionSettings};
  animation: ${slideInUp} ${animationConfig};
`;
const CodeContainer = styled.div`
  padding: 1vw 0;
  width: 100%;
  word-wrap: break-word;
  background: ${props => props.theme.textColor};
  border-radius: 2vh; 
  transition: ${transitionSettings};
`;
const CodeLine = styled.div`
  color: ${props => props.theme.bgColor};
  padding: 0 1vw;
  font-size: ${props => (props.isPortraitMode ? "2vw" : "1vw")};
  pre {
    margin: .4vw;
  }
`;

export default CodeFrame;
