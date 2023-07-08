import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem/index'
import {
  GradientMainContainer,
  MainHeading,
  Description,
  UnorderedList,
  CustomButton,
  ColorContainer,
  EachColorItem,
  Color,
  InputColor,
  ListItem,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: 'top',
    color2: '#014f7b',
    color1: '#8ae323',
    gradientValue: ` to top, #8ae323, #014f7b`,
  }

  onChangeColor1 = e => {
    this.setState({color1: e.target.value})
  }

  changeDirection = e => {
    this.setState({direction: e})
  }

  onChangeColor2 = e => {
    this.setState({color2: e.target.value})
  }

  changeColor = () => {
    const {color1, color2, direction} = this.state
    this.setState({gradientValue: ` to ${direction}, ${color1}, ${color2}`})
  }

  render() {
    const {direction, color1, color2, gradientValue} = this.state
    return (
      <GradientMainContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Description>Choose Direction</Description>
        <UnorderedList>
          {gradientDirectionsList.map(each => (
            <ListItem key={each.directionId}>
              <GradientDirectionItem
                value={each.value}
                Details={each}
                active={direction === each.value}
                changeDirection={this.changeDirection}
              />
            </ListItem>
          ))}
        </UnorderedList>
        <Description>Pick the Colors</Description>
        <ColorContainer>
          <EachColorItem>
            <Color>{color1}</Color>
            <InputColor
              type="color"
              color={color1}
              onChange={this.onChangeColor1}
            />
          </EachColorItem>
          <div>
            <Color>{color2}</Color>
            <InputColor
              type="color"
              color={color2}
              onChange={this.onChangeColor2}
            />
          </div>
        </ColorContainer>
        <CustomButton type="button" onClick={this.changeColor}>
          Generate
        </CustomButton>
      </GradientMainContainer>
    )
  }
}

export default GradientGenerator
