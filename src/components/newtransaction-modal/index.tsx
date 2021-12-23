import Modal from 'react-modal'

import * as S from './styles'

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
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        title="Fechar Modal"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Ícone de um X" />
      </button>

      <S.Form>
        <S.HeadingForm>Cadastrar transação</S.HeadingForm>

        <S.Input placeholder="Título" />

        <S.Input placeholder="Valor" />

        <S.Input placeholder="Categoria" />

        <S.ButtonSubmit
          type="submit"
          children="Cadastrar"
        />
      </S.Form>
    </Modal >
  )
}
