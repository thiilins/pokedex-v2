import { useNavigate } from 'react-router-dom'
import { HeaderContainer } from './styles'
import Logo from '@/assets/logo.svg'
import { TiThMenu } from 'react-icons/ti'
import SocialMedias from '@components/SocialMedia/index'
const Header = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <div className="logo" onClick={() => navigate('/')}>
        <Logo />
      </div>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" id="toggler_label">
        <TiThMenu className="toggler__icon" />
      </label>
      <div className="menu">
        <ul>
          <li>
            <button>Pokemon</button>
          </li>
          <li>
            <button>Pesquisar</button>
          </li>
          <li className="social">
            <SocialMedias header />
          </li>
        </ul>
      </div>
    </HeaderContainer>
  )
}

export default Header
