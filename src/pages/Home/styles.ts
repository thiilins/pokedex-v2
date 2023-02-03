import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    min-width: 100%;
    display: grid;
    position: relative;
    height: 100%;

    grid-template-areas:
      'imageBanner'
      'textBanner';
    align-items: center;
    justify-content: center;

    @media (min-width: 800px) {
      min-width: 100vw;
      grid-template-areas: 'textBanner imageBanner';
      grid-template-columns: 1fr 1fr;
    }
  `}
`
export const BannerImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: imageBanner;
    min-width: auto;
    min-height: auto;
    width: 100%;
    height: 100%;
    position: relative;
    div.img {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      svg {
        height: 100%;
      }
    }

    @media (min-width: 800px) {
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
      align-items: center;
      justify-content: center;
      padding: 2rem;
      .poke__button {
        width: 300px;
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
        font-size: 1rem;
        line-height: 1.3;
        font-weight: ${theme.fonts.weight.regular};
      }

      @media (min-width: 920px) {
        width: 100%;
        height: 100%;
        gap: 2rem;
        align-items: flex-start;
        flex-direction: column;
        padding: 4rem;
        text-align: left;
        .poke__button {
          width: 300px;
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
          font-size: 1.6rem;.
          line-height: 1.3;
          font-weight: ${theme.fonts.weight.regular};
        }
      }
    `}
`
