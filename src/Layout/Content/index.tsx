import { Children } from '@/types/children'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { Container } from './styles'
interface IContentProps {
  children: Children
}

const Content: React.FC<IContentProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Content
