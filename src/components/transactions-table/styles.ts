import styled from 'styled-components'

export const Wrapper = styled.table`
  width: 100%;
  border-spacing: 0 0.8rem;

  th, td {
    font-weight: 400;
    padding: 1.6rem 3.2rem;
    text-align: left;
    line-height: 2.4rem;

  }

  th {
    color: var(--text-body);
  }

  td {
    border: 0;
    background-color: var(--shape);
    border-radius: 4px;

    &:not(:first-child) {
      color: var(--text-body);
    }

    &.withdraw {
      color: var(--red);
    }

    &.deposit {
      color: var(--green);
    }
  }
`
