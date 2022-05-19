import { Container, Content, DivRow, Title } from "./styles";

import { useState } from "react";

export function FaqList() {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  return (
    <Container>
      <div>
        <DivRow>
          <img
            src={
              !showA ? "/assets/arrow-bar-right.png" : "/assets/arrow-down.png"
            }
            alt=''
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <Title onClick={() => setShowA(!showA)}>
            POR QUE ESCOLHER O{" "}
            <Title style={{ color: "#4FD787" }}>***** ?</Title>
          </Title>
        </DivRow>
        {showA && (
          <Content>
            O amigos.bet é uma plataforma onde você contara com a presença de
            seus amigos e a credibilidade e confiança da administração.
          </Content>
        )}
      </div>
      <div>
        <DivRow>
          <img
            src={
              !showB ? "/assets/arrow-bar-right.png" : "/assets/arrow-down.png"
            }
            alt=''
            style={{ width: 20, height: 20, marginRight: 8 }}
          />
          <Title onClick={() => setShowB(!showB)}>
            SE EU GANHAR, COMO RECEBO MEU{" "}
            <Title style={{ color: "#4FD787" }}>PRÊMIO?</Title>
          </Title>
        </DivRow>
        {showB && (
          <Content>
            Caso você ganhe, o prêmio será pago da mesma forma como você
            adquiriu seu bilhete, através do Pix. só serão aceito os pagamentos
            através do Pix.
          </Content>
        )}
      </div>
    </Container>
  );
}
