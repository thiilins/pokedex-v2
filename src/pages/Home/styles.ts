import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    min-width: 99vw;
    display: grid;
    padding: 2rem;
    height: 100%;
    grid-template-areas:
      'imageBanner'
      'textBanner';
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      180deg,
      ${theme.colors.backgroundPrimary} 0%,
      ${theme.colors.backgroundSecondary} 50%
    );
    @media (min-width: 800px) {
      grid-template-areas: 'textBanner imageBanner';
      grid-template-columns: 1fr 1fr;
    }
  `}
`
export const BannerImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    grid-area: imageBanner;
    min-width: auto;
    min-height: auto;
    width: 100%;
    height: 100%;
    @media (min-width: 800px) {
      min-width: auto;
      min-height: auto;
    }
  `}
`
export const BannerText = styled.div`
  ${({ theme }) =>
    css`
      font-family: ${theme.fonts.family.karla};
      display: flex;
      flex-direction: column;
      grid-area: textBanner;
      min-width: auto;
      min-height: auto;
      width: 100%;
      height: auto;
      gap: 2rem;
      text-align: center;
      justify-content: center;
      button {
        width: 70%;
      }
      h2 {
        font-size: 3rem;
        line-height: 1.1;
        font-weight: ${theme.fonts.weight.regular};
        strong {
          font-weight: ${theme.fonts.weight.bold};
        }
      }
      span {
        font-style: normal;
        font-size: 1.5rem;
        line-height: 1.3;
        font-weight: ${theme.fonts.weight.regular};
      }
      @media (min-width: 920px) {
        min-width: auto;
        min-height: auto;
        width: 100%;
        height: 100%;
        gap: 2rem;
        padding: 2rem;
        text-align: left;
        button {
          width: 30%;
        }
        h2 {
          font-size: 4rem;
          line-height: 1.1;
          font-weight: ${theme.fonts.weight.regular};
          strong {
            font-weight: ${theme.fonts.weight.bold};
          }
        }
        span {
          font-style: normal;
          font-size: 2rem;
          line-height: 1.3;
          font-weight: ${theme.fonts.weight.regular};
        }
      }
    `}
`
