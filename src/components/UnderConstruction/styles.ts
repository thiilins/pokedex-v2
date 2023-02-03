import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: constructionAnimation 3s infinite;
    svg {
      width: 400px;
      height: auto;
    }
    @keyframes constructionAnimation {
      0% {
        color: ${darken(0.1, theme.colors.backgroundSecondary)};
        transform: scale(1);
      }
      25% {
        color: ${darken(0.3, theme.colors.backgroundSecondary)};
      }
      50% {
        color: ${darken(0.5, theme.colors.backgroundSecondary)};
        transform: scale(1.2);
      }
      75% {
        color: ${darken(0.3, theme.colors.backgroundSecondary)};
      }
      100% {
        color: ${darken(0.1, theme.colors.backgroundSecondary)};
        transform: scale(1);
      }
    }
    h2 {
      font-size: 3rem;
    }
  `}
`
