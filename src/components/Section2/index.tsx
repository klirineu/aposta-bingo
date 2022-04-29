import {Container, DivRow, Number, Img, Text, Title, TitleGreen, ImageLeft, Button,} from './styles'
import CartIcon from '../../assets/cart-plus.png'
import CashIcon from '../../assets/cash-stack.png'
import CalendarIcon from '../../assets/calendar-check.png'
import VerificadoImg from '../../assets/verificado.png'
import { FaqList } from '../Faq'

import chatTextFillIcon from "../../assets/chat-text-fill.png"

export function Section2() {
  return (
    <Container>
      <DivRow style={{justifyContent: 'space-between'}}>
        <div style={{textAlign: 'center', width: 250}}>
          <DivRow>
            <Number>1.</Number>
            <Img src={CartIcon}/>
          </DivRow>
          <Text>
            ADICIONE SUAS APOSTAS 
            AO CARRINHO
          </Text>
        </div>
        <div style={{textAlign: 'center', width: 250}}>
          <DivRow>
            <Number>2.</Number>
            <Img src={CashIcon}/>
          </DivRow>
          <Text>
            ADICIONE SUAS APOSTAS 
            AO CARRINHO
          </Text>
        </div>
        <div style={{textAlign: 'center', width: 250}}>
          <DivRow>
            <Number>3.</Number>
            <Img src={CalendarIcon}/>
          </DivRow>
          <Text>
            ADICIONE SUAS APOSTAS 
            AO CARRINHO
          </Text>
        </div>
      </DivRow>
      <DivRow style={{justifyContent: 'space-between', marginTop: 80}}>
        <div>
          <Title>
            APOSTAR NO <br/>
            AMIGOS.BET 
            É <TitleGreen>FÁCIL</TitleGreen>
          </Title>
          <FaqList />
          <Button> <img src={chatTextFillIcon} alt="" style={{width: 25, marginRight: 20, marginBottom: -5}}/>Ainda tem dúvidas ? fale conosco agora mesmo</Button>
        </div>
        <div>
          <ImageLeft src={VerificadoImg}/>
        </div>
      </DivRow>
    </Container>
  )
}