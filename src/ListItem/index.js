import styled from 'styled-components'

const ListItem = styled.li`
  user-select: none;
  cursor: pointer;
  ${props => props.portraitMode && 'display: inline-block; margin: 0 3vw;'}
  ${props => props.active && !props.compact && 'font-family: Anton; font-size: 2.5vw;'}
  ${props => props.active && props.portraitMode && 'font-family: Anton; font-size: 6vw;'}
  transition: .2s;
`
export default ListItem