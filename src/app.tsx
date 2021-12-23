import {useState} from 'react'

import {Dashboard} from 'components/dashboard'
import {Header} from 'components/header'
import {NewTransactionModal} from 'components/newtransaction-modal'
import {GlobalStyle} from 'styles/global'

import {createServer, Model} from 'miragejs'

createServer({
  models: {
    transaction: Model
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
    <>
      <GlobalStyle />
      <Header onNewTransactionModalOpen={handleToggleNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToggleNewTransactionModal}
      />
    </>
  )
}



