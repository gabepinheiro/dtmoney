import {useState, useEffect} from 'react'

import Modal from 'react-modal'

import * as S from './styles'

import incomeImg from 'assets/income.svg'
import outcomeImg from 'assets/outcome.svg'
import closeImg from 'assets/close.svg'

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

      <S.Form>
        <S.HeadingForm>Cadastrar transação</S.HeadingForm>

        <S.InputsWrapper>
          <S.Input placeholder="Título" />

          <S.Input placeholder="Valor" />

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

          <S.Input placeholder="Categoria" />
        </S.InputsWrapper>

        <S.ButtonSubmit
          type="submit"
          children="Cadastrar"
        />
      </S.Form>
    </Modal >
  )
}
