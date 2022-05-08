import { Container, TitleGreen, Text } from "./styles"

import ImageResult from "../../assets/Grupo 7.png"
import ImagePayments from "../../assets/Grupo 8.png"

export function Section4() {
  return (
    <Container>
      <TitleGreen>ÚLTIMOS RESULTADOS DAS LOTERIAS</TitleGreen>
      <Text>CONFIRA O ÚLTIMO RESULTADO DA MEGA-SENA E QUINA AQUI!</Text>
      <img style={{width: 800}} src={ImageResult} alt="logo"/><br/>
      <img style={{width: 400, marginTop: 80}} src={ImagePayments} alt="logo"/>
    </Container>
  )
}