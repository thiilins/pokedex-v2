import { Scrollbar } from '@/components/Scrollbar'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    grid-area: CT;
    margin: 0 auto;
    max-width: 1920px;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    min-width: 100vw;
    min-height: 100vh;
    padding: 7rem 0 6rem 0;
    ${Scrollbar}
  `}
`
