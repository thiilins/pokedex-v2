import { darken, lighten, transparentize } from 'polished'
import styled, { css } from 'styled-components'
export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    min-height: 80px;
    z-index: 10;
    min-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    background: ${theme.colors.backgroundPrimary};
    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.3);
    justify-content: center;
    .menu {
      font-weight: ${theme.fonts.weight.bold};
      width: 100%;
      max-height: 0;
      overflow: hidden;
    }
    ul {
      list-style: none;
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 1rem;
      width: 100%;
      padding-top: 2rem;
    }
    li {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      border-radius: 0.8rem;
      cursor: pointer;
      min-height: 100%;
      width: 100%;
      padding: 1.2rem;
      cursor: pointer;
      min-height: 100%;
      padding: 1rem;
      font-size: 1.2rem;
      font-weight: 700;
      font-family: ${theme.fonts.family.karla};
      color: ${darken(0.2, theme.colors.backgroundPrimary)};
      border: 0;
      background: transparent;
      &:hover {
        background-color: ${transparentize(
          0.2,
          transparentize(0.1, theme.colors.backgroundSecondary)
        )};
        color: ${darken(0.5, theme.colors.backgroundPrimary)};
      }
    }
    #toggler_label {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
    #toggler:checked ~ .menu {
      max-height: 100%;
    }

    .toggler__icon {
      fill: ${theme.colors.blueBg};
      width: 40px;
      height: auto;
      position: absolute;
      right: 2rem;
    }
    .logo {
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        transform: translate(5px, -5px) scale(1.03);
      }
      display: flex;
      color: white;
      width: 200px;
      justify-content: center;
      align-items: center;
      svg {
        width: 80%;
        height: auto;
        fill: ${theme.colors.blueBg};
      }
    }
    #toggler {
      display: none;
    }
    @media screen and (min-width: 600px) {
      min-height: unset;
      max-height: 80px;
      padding: 0 1rem 0 2rem;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-between;
      #toggler_label {
        display: none;
      }
      ul {
        height: 80px;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: unset;
        width: auto;
        padding: unset;
        gap: 0;
        padding-top: unset;
      }

      .menu {
        max-height: 80px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      li {
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80px;
        button {
          transition: all 0.3s ease-in-out;
          border-radius: 0;
          width: 100%;
          height: 80px;
          padding: 1.2rem;
        }
      }
    }
  `}
`
