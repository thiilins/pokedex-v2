import styled, { css } from 'styled-components'
import theme from '@styles/theme'
import { darken } from 'polished'
const colors = {
  green: theme.colors.greenBg,
  red: theme.colors.redBg,
  yellow: theme.colors.yellowBg,
  blue: theme.colors.blueBg
}
interface IButtonContainerProps {
  color: 'green' | 'red' | 'blue' | 'yellow'
}
export const ButtonContainer = styled.button<IButtonContainerProps>`
  ${({ theme, color }) => css`
    padding: 1.2rem;
    cursor: pointer;
    background: ${colors[color]};
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border: 0;
    font-size: 1.2rem;
    border-radius: 11px;
    &:hover {
      background: ${darken(0.2, colors[color])};
      color: white;
      box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.5);
    }
  `}
`
