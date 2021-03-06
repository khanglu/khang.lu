const devItems = [
  {
    name: "tooling",
    code: [
      "/*",
      "FRONT-END:",
      " - Javascript, React, Redux, Webpack",
      "",
      "BACK-END:",
      " - Node, Express, RESTful API, AWS",
      "",
      "WORKFLOW TOOLS:",
      " - GitHub, GitFlow, Agile Development, BitBucket, Jira, Trello",
      "",
      "DESIGN:",
      " - Photoshop, Illustrator",
      "",
      "",
      "",
      "*/"
    ]
  },
  {
    name: "react",
    code: [
      "// Composition and funtional-oriented components.",
      "// With a bit of local state and life-cycle methods *wink*",
      "",
      "const Hero = (props) => (",
      "  <HeroBlock>",
      '    <HeroHeading tag="h1">Front End Developer</HeroHeading>',
      "    <NameBlock>Khang</NameBlock>",
      "    <NameBlock>Lu</NameBlock>",
      "    <SocialBlock>",
      "      <Link href={linkedIn}>LinkedIn</Link>",
      "      <Link href={mail}>Email</Link>",
      "      <Link href={facebook}>Facebook</Link>",
      "      <Link onClick={() => props.addCorgi()}>Add a Corgi</Link>",
      "    </SocialBlock>",
      "  </HeroBlock>",
      ")"
    ]
  },
  {
    name: "redux",
    code: [
      "// You might not need Redux, until you do",
      "",
      "function counter(state = 0, action) {",
      "  switch (action.type) {",
      "    case 'INCREMENT': return state + 1",
      "    case 'DECREMENT': return state - 1",
      "    default: return state",
      "  }",
      "}",
      "",
      "let store = createStore(counter)",
      "store.subscribe(() => console.log(store.getState()))",
      "",
      "store.dispatch({ type: 'INCREMENT' }) // 1",
      "store.dispatch({ type: 'INCREMENT' }) // 2",
      "store.dispatch({ type: 'DECREMENT' }) // 1"
    ]
  },
  {
    name: "webpack",
    code: [
      "// I cannot live without Webpack now",
      "// Transpiling, CSS-prefixing, hot-reloading, code-splitting",
      "// Tree-shaking, minifying, assets-bundling, source-mapping",
      "",
      "// ALso coffee-making, rice-cooking, vacuum-cleaning",
      "",
      "const path = require('path');",
      "",
      "module.exports = {",
      "  entry: './app/index.js',",
      "  output: {",
      "    filename: 'bundle.js',",
      "    path: path.resolve(__dirname, 'dist')",
      "  }",
      "};",
      ""
    ]
  },
  {
    name: "styled-components",
    code: [
      "// This thing is life-saving",
      "",
      "import React from 'react';",
      "import styled from 'styled-components';",
      "",
      "const Title = styled.h1`",
      "  font-size: 1.5em;",
      "  text-align: center;",
      "  color: palevioletred;",
      "`;",
      "",
      "const Wrapper = styled.section`",
      "  padding: 4em;",
      "  background: papayawhip;",
      "`;",
      ""
    ]
  },
  {
    name: "animation",
    code: [
      "// Animation of the door in homepage",
      "",
      "const DoorShaking = keyframes`{",
      "  0% { transform: translate(2px, 1px) rotate(0deg); }",
      "  10% { transform: translate(-1px, -2px) rotate(-1deg); }",
      "  20% { transform: translate(-2px, 0px) rotate(1deg); }",
      "  30% { transform: translate(0px, 2px) rotate(0deg); }",
      "  40% { transform: translate(1px, -1px) rotate(1deg); }",
      "  50% { transform: translate(-1px, 2px) rotate(-1deg); }",
      "  60% { transform: translate(-2px, 1px) rotate(0deg); }",
      "  70% { transform: translate(2px, 1px) rotate(-1deg); }",
      "  80% { transform: translate(-1px, -1px) rotate(1deg); }",
      "  90% { transform: translate(2px, 2px) rotate(0deg); }",
      "  100% { transform: translate(1px, 2px) rotate(-1deg); }",
      "}`",
      ""
    ]
  }
];

export default devItems;
