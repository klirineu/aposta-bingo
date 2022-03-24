import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --green: #40E550;
    --green-background: ##4FD787;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity:0.6;
    cursor: not-allowed;
  }
`