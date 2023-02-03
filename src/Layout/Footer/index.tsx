import React from 'react'
import { FooterContainer, Copyrights } from './styles'
import SocialMedias from '@components/SocialMedia/index'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <hr />
      <Copyrights>
        Desenvolvido com <span>♥</span> por Thiago Lins
      </Copyrights>
      <SocialMedias />
    </FooterContainer>
  )
}

export default Footer
