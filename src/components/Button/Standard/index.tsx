import React from 'react'

import { ButtonContainer } from './styles'
interface IButtonProps {
  color: 'green' | 'red' | 'blue' | 'yellow'
  title?: string
  onClick?: () => void | Promise<void>
}
const LinkButton: React.FC<IButtonProps> = ({ title = 'Botão', ...props }) => {
  return (
    <ButtonContainer className="poke__button" {...props}>
      {title}
    </ButtonContainer>
  )
}

export default LinkButton
