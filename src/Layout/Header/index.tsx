import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Logo from '@/assets/logo.svg'
const Header = () => {
  const navigate = useNavigate()
  return (
    <S.HeaderContainer>
      <div className="logo" onClick={() => navigate('/')}>
        <Logo />
      </div>
    </S.HeaderContainer>
  )
}

export default Header
