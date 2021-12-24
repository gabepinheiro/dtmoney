import {useState, useEffect, createContext, ReactNode, useContext} from 'react'

import {api} from 'services/api'

const TransactionsContext = createContext<Transaction[]>([])

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

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
} 
