import {useState} from 'react'

import {Dashboard} from 'components/dashboard'
import {Header} from 'components/header'
import {NewTransactionModal} from 'components/newtransaction-modal'

import {GlobalStyle} from 'styles/global'

import {TransactionsProvider} from 'contexts/transactions-context'

import {createServer, Model} from 'miragejs'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev.',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Despesas',
          amount: 11000,
          createdAt: new Date('2021-02-14 11:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})


export const App = () => {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(false)

  const handleToggleNewTransactionModal = () => {
    setIsNewTransactionModalOpen(state => !state)
  }

  return (
    <TransactionsProvider>
      <GlobalStyle />
      <Header onNewTransactionModalOpen={handleToggleNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToggleNewTransactionModal}
      />
    </TransactionsProvider>
  )
}



