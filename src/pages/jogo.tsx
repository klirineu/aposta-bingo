import type { NextPage } from "next";
import { Header } from "../components/Header";
import { MonteSeuJogo } from "../components/MonteSeuJogo";
import { GlobalStyle } from "../styles/global";

const Jogo: NextPage = () =>{
  return (
    <>
      <Header />
      <MonteSeuJogo />
      <GlobalStyle />
    </>
  )
}

export default Jogo