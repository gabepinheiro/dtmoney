import {useState, FormEvent} from 'react'
import Modal from 'react-modal'
import {TransactionInput} from 'contexts/transactions-context'

import {api} from 'services/api'

import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import closeImg from 'assets/close.svg'

import * as S from './styles'

export type NewTransactionModalProps = {
  isOpen: boolean
  onRequestClose: () => void
}

Modal.setAppElement('[data-js=root]')

export const NewTransactionModal = ({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) => {
  const [type, setType] = useState('')

  const closeModal = () => {
    onRequestClose()
    setType('')
  }

  const getFormElement = (target: HTMLFormElement) =>
    (element: string): HTMLInputElement =>
      target[element]

  const handleCreateNewTransaction = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement

    if (!target) {
      return
    }

    const getElement = getFormElement(target)

    const transaction: TransactionInput = {
      title: getElement('title').value,
      amount: Number(getElement('value').value),
      category: getElement('category').value,
      type,
    }

    api.post('/transactions', transaction)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        title="Fechar Modal"
        className="react-modal-close"
        onClick={closeModal}
      >
        <img src={closeImg} alt="Ícone de um X" />
      </button>

      <S.Form onSubmit={handleCreateNewTransaction}>
        <S.HeadingForm>Cadastrar transação</S.HeadingForm>

        <S.InputsWrapper>
          <S.Input id="title" name="title" placeholder="Título" />

          <S.Input id="value" name="value" placeholder="Valor" />

          <S.TransactionTypes>
            <S.ButtonType
              type="button"
              title="Entrada"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </S.ButtonType>

            <S.ButtonType
              type="button"
              title="Saída"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </S.ButtonType>
          </S.TransactionTypes>

          <S.Input id="category" name="category" placeholder="Categoria" />
        </S.InputsWrapper>

        <S.ButtonSubmit
          type="submit"
          children="Cadastrar"
        />
      </S.Form>
    </Modal >
  )
}
