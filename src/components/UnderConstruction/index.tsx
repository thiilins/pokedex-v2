import React from 'react'
import UnderConstructionImg from '@/assets/construction.svg'
import { Container } from './styles'

const UnderConstruction: React.FC = () => {
  return (
    <Container>
      <UnderConstructionImg />
      <h2>Em Construção</h2>
    </Container>
  )
}

export default UnderConstruction
