import { Children } from '@/types/children'
import React from 'react'
import { Container } from './styles'
interface IContentProps {
  children: Children
}

const Content: React.FC<IContentProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Content
