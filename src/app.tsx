import {Dashboard} from 'components/dashboard'
import {Header} from 'components/header'
import {GlobalStyle} from 'styles/global'

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

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Dashboard />
  </>
);



