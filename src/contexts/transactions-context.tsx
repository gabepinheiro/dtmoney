import {useState, useEffect, createContext, ReactNode, useContext} from 'react'

import {api} from 'services/api'

type TransactionsContextProps = {
  transactions: Transaction[]
  createTransaction: (data: TransactionInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextProps>(
  {} as TransactionsContextProps
)

type TransactionsProviderProps = {
  children: ReactNode
}

export type Transaction = {
  id: number
  title: string
  amount: number
  category: string
  type: string
  createdAt: string
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => {
        setTransactions(response.data.transactions)
      })

  }, [])

  const createTransaction = async (data: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...data,
      createdAt: new Date()
    })

    const {transaction} = response.data

    setTransactions(state => state.concat(transaction))
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
} 
