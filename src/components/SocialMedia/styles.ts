import { darken, transparentize } from 'polished'
import styled, { css } from 'styled-components'
import { ISocialMediaProps } from '.'
export const SocialMediaContainer = styled.div<ISocialMediaProps>`
  ${({ theme, header }) => css`
    display: flex;
    gap: 0.5rem;

    button {
      padding: 0.5rem;
      background: transparent;
      border: 0;
      cursor: pointer;
      svg {
        width: 30px;
        height: auto;
        color: ${header
          ? darken(0.2, theme.colors.backgroundSecondary)
          : 'unset'};
        &:hover {
          color: ${darken(0.3, theme.colors.backgroundSecondary)};
        }
      }
    }
  `}
`
