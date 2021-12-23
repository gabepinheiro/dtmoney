import styled from 'styled-components'

export const Form = styled.form``

export const HeadingForm = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 3.2rem;
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

  &:not(:last-of-type) {
    margin-bottom: 1.6rem;
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
