import styled from 'styled-components'

export const GradientMainContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Roboto';
`
export const MainHeading = styled.h1`
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Description = styled.p`
  color: white;
  font-size: 21px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`

export const ListItem = styled.li`
  list-style-type: none;
`

export const CustomButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border: 0px solid;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 5px;
  font-weight: 700;
`
export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`
export const EachColorItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Color = styled.p`
  color: white;
  font-weight: 500;
`
export const InputColor = styled.input`
  border: 1px;
  background-color: ${props => props.color};
  width: 70px;
  padding: 15px 20px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
`
