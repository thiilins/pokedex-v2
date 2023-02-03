import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    position: relative;
    overflow: hidden;
    background: linear-gradient(
      180deg,
      ${theme.colors.backgroundPrimary} 0%,
      ${theme.colors.backgroundSecondary} 50%
    );
    min-width: 100vw;
    min-height: 100vh;
  `}
`
