import styled from 'styled-components'
import { zoomIn , animationConfig} from '../animation'

const ListItem = styled.li`
  user-select: none;
  cursor: pointer;
  ${props => props.isPortraitMode && 'display: inline-block; margin: 0 3vw;'}
  ${props => props.active && !props.isCompact && 'font-family: Anton; font-size: 2.5vw;'}
  ${props => props.active && props.isPortraitMode && 'font-family: Anton; font-size: 6vw;'}
  transition: .2s;
  span:focus {
    outline: none;
  }
  
  span {
    display: inline-block;
    animation: ${zoomIn} ${animationConfig};
  }
`
export default ListItem