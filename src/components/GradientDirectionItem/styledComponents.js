import styled from 'styled-components'

export const DirectionContainer = styled.button`
  background-color: white;
  opacity: ${props => (props.active ? '1' : '0.5')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  font-family: 'Roboto';
  border-radius: 8px;
  outline: none;
  border: 0;
  @media screen and (max-width: 768px) {
    width: 75px;
  }
`
export const Heading = styled.p`
  color: #1e293b;
  font-weight: 500;
  font-size: 12px;
`
