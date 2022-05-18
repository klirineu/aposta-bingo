import {
  Cards,
  Container,
  Text,
  Title,
  Card,
  CardNumber,
  CardIcon,
  CardText,
} from "./styles";

export function Section3() {
  return (
    <Container>
      <Text>Como começar a apostar</Text>
      <Text>com o (Nome do negócio)</Text>
      <Cards>
        <Title>DÊ OS PRIMEIROS PASSOS E COMECE A APOSTAR AGORA MESMO:</Title>
      </Cards>
      <Cards>
        <Card>
          <CardNumber>1.</CardNumber>
          <CardIcon src='/assets/clipboard-plus.png' alt='' />
          <CardText>
            Para apostar e ficar por dentro do mundo das loterias oficiais da
            Caixa é só fazer o seu cadastro no amigos. bet. É rápido, fácil e
            100% seguro! Você pode fazer seu cadastro utilizando um computador,
            tablet ou smartphone.
          </CardText>
        </Card>
        <Card>
          <CardNumber>2.</CardNumber>
          <CardIcon src='/assets/graph-up.png' alt='' />
          <CardText>
            No Amigos.bet você encontra várias maneiras de apostar na sua
            loteria favorita. Você pode optar pelo “MONTE O SEU JOGO”, caso
            prefira fazer a sua aposta da forma tradicional, escolhendo as
            dezenas em nosso volante virtual. Já os “BOLÕES” do site permitem
            fazer dezenas de apostas em jogos cuidadosamente elaborados para
            aumentar suas chances!
          </CardText>
        </Card>
        <Card>
          <CardNumber>3.</CardNumber>
          <CardIcon src='/assets/money.png' alt='' />
          <CardText>
            O Amgos.bet oferece diversas opções de pagamento para as suas
            apostas, como cartão de crédito, boleto e transferência bancária. Há
            ainda a opção de pagar pelos seus jogos com créditos. Você pode
            tanto comprar créditos e deixá-los disponíveis em sua conta ou
            utilizar o saldo de premiações anteriores.
          </CardText>
        </Card>
        <Card>
          <CardNumber>4.</CardNumber>
          <CardIcon src='/assets/award-fill.png' alt='' />
          <CardText>
            Processamos, validamos, armazenamos, conferimos e informamos você em
            caso de premiações! Todos os prêmios recebidos através de apostas
            realizadas no Amigos.bet são creditados na conta do usuário
            automaticamente após a apuração dos sorteios da Caixa Econômica
            Federal.
          </CardText>
        </Card>
      </Cards>
    </Container>
  );
}
