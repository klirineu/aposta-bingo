import { Header } from "./components/Header";
import { Section1 } from "./components/Section1";
import { Section2 } from "./components/Section2";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <GlobalStyle />
    </>
  );
}