import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing:  border-box;
  }

  html {
    font-size: 62.5%;

    @media (max-width: 1080px) {
      font-size: 56.25%;
    }

    @media (max-width: 720px) {
      font-size: 50%;
    }
}

  body {
    font-size: 1.6rem;
    background: var(--background);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`
