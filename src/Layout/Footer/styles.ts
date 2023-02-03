import { darken, transparentize } from 'polished'
import styled, { css } from 'styled-components'

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    hr {
      position: absolute;
      top: 0;
      width: 95vw;
      left: 2.5vw;
      right: 2.5vw;
      height: 1px;
      background: ${darken(0.25, theme.colors.backgroundSecondary)}30;
      border: 0;
    }
    color: ${transparentize(0.25, theme.colors.black)};
    font-weight: ${theme.fonts.weight.medium};
    justify-content: space-between;
    font-size: 1.1rem;
    align-items: center;
    padding: 1.5rem 2rem 1rem 2rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  `}
`

export const Copyrights = styled.div`
  ${({ theme }) => css`
    display: flex;
    span {
      color: ${theme.colors.redBg};
      padding: 0 0.5rem;
    }
  `}
`
