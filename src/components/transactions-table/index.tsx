import {useEffect, useState} from 'react'
import {api} from 'services/api'

import * as S from './styles'

import {Transaction} from 'components/newtransaction-modal'

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        setTransactions(response.data.transactions)
      })

  }, [])

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
            <td className={transaction.type}>R$ {transaction.amount}</td>
            <td>{transaction.category}</td>
            <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </S.Wrapper>
  )
}
