import {DirectionContainer, Heading} from './styledComponents'

const GradientDirectionItem = props => {
  const {Details, active, changeDirection} = props
  const {displayText, value} = Details
  const changeDir = () => {
    changeDirection(value)
  }
  return (
    <DirectionContainer active={active} onClick={changeDir}>
      <Heading>{displayText}</Heading>
    </DirectionContainer>
  )
}

export default GradientDirectionItem
