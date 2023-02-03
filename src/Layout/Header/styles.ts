import { lighten } from 'polished'
import styled, { css } from 'styled-components'
export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    grid-area: HD;
    display: flex;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    height: 80px;
    width: 100vw;
    align-items: center;
    gap: 2.5rem;
    padding: 2rem;
    justify-content: flex-start;
    background-color: ${theme.colors.backgroundPrimary};
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
    & .logo {
      display: flex;
      gap: 1rem;
      align-items: center;
      font-weight: 900;
      color: #fff;
      & svg {
        fill: ${theme.colors.blueBg};
        transition: all 0.2s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  `}
`
