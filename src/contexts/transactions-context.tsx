import {createContext, ReactNode, useContext} from 'react'

const TransactionsContext = createContext([])

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
  return (
    <TransactionsContext.Provider value={[]}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
} 
