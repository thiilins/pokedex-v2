import styled, { css } from 'styled-components'
import { darken } from 'polished'
import { ButtonStyle, colors } from '../styles'

interface IButtonContainerProps {
  color: 'green' | 'red' | 'blue' | 'yellow'
}
export const ButtonContainer = styled.button<IButtonContainerProps>`
  ${({ theme, color }) => css`
    ${ButtonStyle}
    background: ${colors[color]};

    &:hover {
      background: ${darken(0.2, colors[color])};
    }
  `}
`
