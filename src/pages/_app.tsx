import type { AppProps } from "next/app";

import { GlobalStyle } from "../styles/global";

export default function _appp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />)
      <GlobalStyle />
    </>
  );
}
