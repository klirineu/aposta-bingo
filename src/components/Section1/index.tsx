import { Container, Image, Text, DivRow, CardImg } from "./styles";

export function Section1() {
  return (
    <Container>
      <Text>AUMENTE SUAS CHANCES APOSTANDO ONLINE NAS LOTERICAS </Text>
      <Image src='/assets/Grupo6.png' alt='mega sena' />
      <DivRow>
        <CardImg src='/assets/card1.png' alt='mega sena' />
        <CardImg src='/assets/card2.png' alt='mega sena' />
        <CardImg
          style={{ height: 212 }}
          src='/assets/card3.png'
          alt='mega sena'
        />
        <Image
          style={{
            backgroundSize: "cover",
            height: 400,
            width: 650,
            marginLeft: -120,
          }}
          src='/assets/MEGASENASEMFUNDO.png'
          alt='mega sena'
        />
      </DivRow>
    </Container>
  );
}
