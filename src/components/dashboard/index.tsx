import {TransactionsTable} from 'components/transactions-table'
import {Summary} from './summary'

import * as S from './styles'

export const Dashboard = () => {
  return (
    <S.Wrapper>
      <Summary />

      <S.TableWrapper>
        <TransactionsTable />
      </S.TableWrapper>
    </S.Wrapper>
  )
}
