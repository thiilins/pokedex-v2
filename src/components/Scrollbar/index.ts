import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Scrollbar = css`
  ${({ theme }) => css`
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${theme.colors.backgroundPrimary};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${darken(0.2, theme.colors.backgroundSecondary)};
      border-radius: 20px; /* roundness of the scroll thumb */
    }
  `}
`
