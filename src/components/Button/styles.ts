import { css } from 'styled-components'
import theme from '@styles/theme'

export const ButtonStyle = css`
  ${({ theme }) => css`
    padding: 1.2rem 1.2rem 1.5rem 1.2rem;
    cursor: pointer;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border: 0;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.2rem;
    border-radius: 11px;
    text-align: center;
    font-weight: ${theme.fonts.weight.bold};
    &:hover {
      color: white;
      box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.5);
    }
  `}
`
export const colors = {
  green: theme.colors.greenBg,
  red: theme.colors.redBg,
  yellow: theme.colors.yellowBg,
  blue: theme.colors.blueBg
}
