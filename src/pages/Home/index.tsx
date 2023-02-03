import { BannerImage, Container, BannerText } from './styles'

import ImageBanner from '@/assets/home_banner.svg'
import Button from '@/components/Button'
const HomePaga: React.FC = () => {
  return (
    <Container>
      <BannerText>
        <h2>
          <strong>Encontre</strong> todos os seus <strong>Pokémon</strong>{' '}
          favorito
        </h2>
        <span>
          Você pode conhecer o tipo de Pokémon, seus pontos fortes, desvantagens
          e habilidades
        </span>
        <Button color="green" />
      </BannerText>
      <BannerImage>
        <ImageBanner />
      </BannerImage>
    </Container>
  )
}
export default HomePaga
