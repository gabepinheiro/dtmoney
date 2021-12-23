import {useState} from 'react'

import {Dashboard} from 'components/dashboard'
import {Header} from 'components/header'
import {GlobalStyle} from 'styles/global'

import Modal from 'react-modal'

import {createServer} from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'withdraw',
          category: 'Food'
        }
      ]
    })
  }
})

Modal.setAppElement('[data-js=root]')

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

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToggleNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  )
}



