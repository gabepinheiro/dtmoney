import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: var(--blue);
  padding: 3.2rem 1.6rem 19rem;
`

export const Container = styled.div`
  max-width: 112rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  border:0;
  border-radius: 4px;
  background-color: var(--blue-light);
  color: var(--shape);
  font-size: 1.6rem;
  padding: 0 3.2rem;
  height: 4.8rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

