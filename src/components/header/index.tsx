import logoImg from 'assets/logo.svg'

import * as S from './styles'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <img src={logoImg} alt="dt money" />
        <S.Button>
          Nova Transação
        </S.Button>
      </S.Container>
    </S.Wrapper>
  )
}
