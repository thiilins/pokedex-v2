import React from 'react'

import { ButtonContainer } from './styles'
interface IButtonProps {
  color: 'green' | 'red' | 'blue' | 'yellow'
  title?: string
  to: string
}
const LinkButton: React.FC<IButtonProps> = ({ title = 'Botão', ...props }) => {
  return (
    <ButtonContainer className="poke__button" {...props}>
      {title}
    </ButtonContainer>
  )
}

export default LinkButton
