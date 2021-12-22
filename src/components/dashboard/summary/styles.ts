import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  gap: 3.2rem;
  margin-top: -16rem;

  & > * { flex: 1 }
`

export const SummaryItem = styled.article`
  background-color: var(--shape);
  padding: 2.4rem 3.2rem;
  border-radius: 4px;
  color: var(--text-title);

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
    line-height: 4.8rem;
  }

  &.highlight-bg {
    background-color: #33cc95;
    color: #fff;
  }
`

export const SummaryItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
