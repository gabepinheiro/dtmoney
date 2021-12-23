import {useEffect} from 'react'

import * as S from './styles'

export const TransactionsTable = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(r => r.json())
      .then(data => console.log(data))
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
        <tr>
          <td>Desenvolvimento de website</td>
          <td className="deposit">R$ 12.000</td>
          <td>Desenvolvimento</td>
          <td>22/02/2021</td>
        </tr>
        <tr>
          <td>Alugal</td>
          <td className="withdraw">- R$ 1.100</td>
          <td>Casa</td>
          <td>17/02/2021</td>
        </tr>
      </tbody>
    </S.Wrapper>
  )
}
