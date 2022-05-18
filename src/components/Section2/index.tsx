import {
  Container,
  DivRow,
  Number,
  Img,
  Text,
  Title,
  TitleGreen,
  ImageLeft,
  Button,
} from "./styles";

import { FaqList } from "../Faq";

export function Section2() {
  return (
    <Container>
      <DivRow style={{ justifyContent: "space-between" }}>
        <div style={{ textAlign: "center", width: 250 }}>
          <DivRow>
            <Number>1.</Number>
            <Img src='/assets/cart-plus.png' />
          </DivRow>
          <Text>ADICIONE SUAS APOSTAS AO CARRINHO</Text>
        </div>
        <div style={{ textAlign: "center", width: 250 }}>
          <DivRow>
            <Number>2.</Number>
            <Img src='/assets/cash-stack.png' />
          </DivRow>
          <Text>ADICIONE SUAS APOSTAS AO CARRINHO</Text>
        </div>
        <div style={{ textAlign: "center", width: 250 }}>
          <DivRow>
            <Number>3.</Number>
            <Img src='/assets/calendar-check.png' />
          </DivRow>
          <Text>ADICIONE SUAS APOSTAS AO CARRINHO</Text>
        </div>
      </DivRow>
      <DivRow style={{ justifyContent: "space-between", marginTop: 80 }}>
        <div>
          <Title>
            APOSTAR NO <br />
            AMIGOS.BET É <TitleGreen>FÁCIL</TitleGreen>
          </Title>
          <FaqList />
          <Button>
            {" "}
            <img
              src='/assets/chat-text-fill.png'
              alt=''
              style={{ width: 25, marginRight: 20, marginBottom: -5 }}
            />
            Ainda tem dúvidas ? fale conosco agora mesmo
          </Button>
        </div>
        <div>
          <ImageLeft src='/assets/verificado.png' />
        </div>
      </DivRow>
    </Container>
  );
}
