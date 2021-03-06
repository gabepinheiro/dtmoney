import styled from 'styled-components'

import {darken, transparentize} from 'polished'

export const Form = styled.form``

export const HeadingForm = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 3.2rem;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

`

export const Input = styled.input`
  width: 100%;
  padding: 0 2.4rem;
  height: 6.4rem;
  border-radius: 4px;
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;
  font-weight: 400;
  font-size: 1.6rem;

  &::placeholder {
    color: var(--text-body);
  }

`

export const TransactionTypes = styled.div`
  display: flex;
  gap: 1.6rem;

  & > * {
    flex: 1;
  }
`

type ButtonTypeProps = {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const ButtonType = styled.button<ButtonTypeProps>`
  border-radius: 4px;
  border: 1px solid #d7d7d7;
  background: ${({isActive, activeColor}) =>
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};

  padding: 0 2.4rem;
 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  height: 6.4rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')}
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1.6rem;
    color: var(--text-title);
  }

`

export const ButtonSubmit = styled.button`
  width: 100%;
  height: 6.4rem;
  background-color: var(--green);
  border-radius: 4px;
  border: 0;
  color: var(--white);
  padding: 0 2.4rem;
  margin-top: 2.4rem;
  font-size: 1.6rem;
  font-weight: 600;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
