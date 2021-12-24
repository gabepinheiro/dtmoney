import {useTransactions} from 'contexts/transactions-context'

import * as S from './styles'

export const TransactionsTable = () => {
  const transactions = useTransactions()

  return (
    <S.Wrapper>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}
            </td>
            <td>{transaction.category}</td>
            <td>
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createdAt))}
            </td>
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  )
}
