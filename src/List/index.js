import styled from 'styled-components'

const List = styled.ul`
  ${props => props.portraitMode
    ? 'text-align: center; padding: 0;'
    : 'padding-left: 3vw;'
  }
  margin-top: 0;
  list-style: none;
  color: ${ props => props.name === 'bio' ? props.theme.bgColor : props.theme.textColor};
  font-family: 'Fjalla One', sans-serif;
  font-size: ${props => (props.portraitMode ? '5vw' : '2vw')};
`

export default List