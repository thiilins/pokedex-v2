import { Scrollbar } from '@/components/Scrollbar'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  ${({ theme }) => css`
    grid-area: CT;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    min-width: 99vw;
    width: 100%;
    min-height: calc(100vh - 80px);
    ${Scrollbar}
  `}
`
