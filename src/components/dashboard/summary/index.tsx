import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import totalImg from 'assets/total.svg'

import * as S from './styles'

export const Summary = () => {
  return (
    <S.Wrapper>
      <S.SummaryItem>
        <S.SummaryItemHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </S.SummaryItemHeader>
        <strong>R$ 1.000</strong>
      </S.SummaryItem>

      <S.SummaryItem>
        <S.SummaryItemHeader>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </S.SummaryItemHeader>
        <strong>- R$ 500,00</strong>
      </S.SummaryItem>

      <S.SummaryItem className="highlight-bg">
        <S.SummaryItemHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </S.SummaryItemHeader>
        <strong>R$ 500,00</strong>
      </S.SummaryItem>

    </S.Wrapper>
  )
}
