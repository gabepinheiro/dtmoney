import logoImg from 'assets/logo.svg'

import * as S from './styles'

export type HeaderProps = {
  onNewTransactionModalOpen: () => void
}

export const Header = ({onNewTransactionModalOpen}: HeaderProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <img src={logoImg} alt="dt money" />
        <S.Button onClick={onNewTransactionModalOpen}>
          Nova Transação
        </S.Button>
      </S.Container>

    </S.Wrapper>
  )
}
