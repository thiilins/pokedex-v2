import React from 'react'

import { ButtonContainer } from './styles'
interface IButtonProps {
  color: 'green' | 'red' | 'blue' | 'yellow'
}
const Button: React.FC<IButtonProps> = ({ color }) => {
  return <ButtonContainer color={color}>Conteúdo</ButtonContainer>
}

export default Button
