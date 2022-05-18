import { Container, TitleGreen, Text } from "./styles";

export function Section4() {
  return (
    <Container>
      <TitleGreen>ÚLTIMOS RESULTADOS DAS LOTERIAS</TitleGreen>
      <Text>CONFIRA O ÚLTIMO RESULTADO DA MEGA-SENA E QUINA AQUI!</Text>
      <img style={{ width: 800 }} src='/assets/Grupo7.png' alt='logo' />
      <br />
      <img
        style={{ width: 400, marginTop: 80 }}
        src='/assets/Grupo8.png'
        alt='logo'
      />
    </Container>
  );
}
