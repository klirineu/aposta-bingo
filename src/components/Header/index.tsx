import { Container, TextHeader, ButtonHeader, LogoHeader } from "./styles";
import Link from "next/link"

export function Header() {
  return (
    <Container>
      <div>
        <LogoHeader src='/assets/logo.svg' alt='logo' />
      </div>
      <div style={{ marginLeft: -300, marginTop: 10 }}>
        <TextHeader>Como funciona</TextHeader>
        <TextHeader>Resultados</TextHeader>
      </div>
      <div>
        <Link href="/jogo">
          <ButtonHeader>
            Comprar bilhete
          </ButtonHeader>
        </Link>
      </div>
    </Container>
  );
}
