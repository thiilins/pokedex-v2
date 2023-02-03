import { Scrollbar } from '@/components/Scrollbar'
import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
    &:disabled {
      text-decoration: none;
      pointer-events: none;
      cursor: default;
      user-select: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.family.karla};
    font-weight: ${theme.fonts.weight.bold};
  }

  strong {
    font-weight: ${theme.fonts.weight.bold};
  }
  a {
    text-decoration: none;
    color: unset;
  }
  html {
    font-family: ${theme.fonts.family.source};
  }
  body {
    overflow-x: hidden;
    overflow-y: auto;
    ${Scrollbar}
  }
`}
   `
