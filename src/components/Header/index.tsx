import { Container, TextHeader, ButtonHeader, LogoHeader } from "./styles"

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <div>
        <LogoHeader src={logo} alt="logo"/>
      </div>
      <div style={{marginLeft: -300, marginTop: 10}}>
        <TextHeader>Como funciona</TextHeader>
        <TextHeader>Resultados</TextHeader>
      </div>
      <div>
        <ButtonHeader>Cadastre-se</ButtonHeader>
        <ButtonHeader style={{background: 'transparent', border: '1px solid #40E550', color: '#40E550'}}>Login</ButtonHeader>
      </div>
    </Container>
  )
}