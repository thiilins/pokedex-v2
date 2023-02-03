import { BannerImage, Container, BannerText } from './styles'

import ImageBanner from '@/assets/home_banner.svg'
import { LinkButton } from '@/components/Button'
const HomePaga: React.FC = () => {
  return (
    <Container>
      <BannerText>
        <h2>
          <strong>Encontre</strong> todos os seus <strong>Pokemons</strong>{' '}
          favoritos
        </h2>
        <span>
          Você pode conhecer o tipo de Pokémon, seus pontos fortes, desvantagens
          e habilidades
        </span>
        <LinkButton to="/pokemon" title="Ver Pokemons" color="green" />
      </BannerText>
      <BannerImage>
        <div className="img">
          <ImageBanner />
        </div>
      </BannerImage>
    </Container>
  )
}
export default HomePaga
