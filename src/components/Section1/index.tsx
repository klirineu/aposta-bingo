import { Container, Image, Text, DivRow, CardImg } from "./styles";
import MgImg from '../../assets/Grupo 6.png'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'
import MgSennaImg from '../../assets/MEGA SENA SEM FUNDO.png'

export function Section1() {
  return (
    <Container>
      <Text>AUMENTE SUAS CHANCES APOSTANDO ONLINE NAS LOTERICAS </Text>
      <Image src={MgImg} alt="mega sena" />
      <DivRow>
        <CardImg src={Card1} alt="mega sena" />
        <CardImg src={Card2} alt="mega sena" />
        <CardImg style={{ height: 212}} src={Card3} alt="mega sena" />
        <Image style={{backgroundSize: 'cover', marginTop: -162, height: 400, width: 650, marginLeft: -40}} src={MgSennaImg} alt="mega sena" />
      </DivRow>
    </Container>
  )
}