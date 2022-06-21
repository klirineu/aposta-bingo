import { useState } from "react";
import { ContainerForm, Title } from "./styles";

export function PagamentoComponent() {

    const [paymentCard, setPaymentCard] = useState('');
    const [numberCard, setNumberCard] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [securitycode, setsecuritycode] = useState('');
    const [paymentPix, setPaymentPix] = useState('');
    const [Validation, setValidation] = useState('');
    const [validationBilling, setBilling] = useState('');
    //  =====

    // const handleSubmit = event => {
    //     event.preventDefault();

    //     console.log(paymentCard);
    //     console.log(numberCard);
    //     console.log(expireDate);
    //     console.log(securitycode);
    //     console.log(Validation);
    //     console.log(validationBilling);
    //     console.log(paymentPix);
    //     //  =====
    //     setPaymentCard('');
    //     setPaymentPix('');
    //     setNumberCard('');
    //     setExpireDate('');
    //     setsecuritycode('');
    //     setValidation('');
    //     setBilling('');

    // };
    return (
        <>
            <Title>pagamento</Title>
            <ContainerForm>
                <form>
                    <div className="check__item">
                    <input
                        type="radio"
                        name="address"
                        value={"Cartão"}
                      />
                      <strong style={{marginLeft: 20, fontSize: 16, fontWeight: "400"}}>Número do cartão</strong>
                    </div>
                    {/* ========================================== */}
                    <div className="fields">
                        <input className="input" style={{width: "100%"}} placeholder="digite somente números " onChange={event => setNumberCard(event.target.value)} value={numberCard} />
                    </div>
                    <div className="input__fields" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div className="fields">
                            <strong>data de vencimento</strong>
                            <div className="block__fields">
                                <input style={{width: "100%"}}  className="input date" placeholder="**/**" onChange={event => setExpireDate(event.target.value)} value={expireDate} />
                            </div>
                        </div>

                        <div className="fields">
                            <strong>código de segurança</strong>
                            <div className="block__fields">
                                <input style={{width: "100%"}}  className="input code-cvc" onChange={event => setsecuritycode(event.target.value)} value={securitycode} />
                            </div>
                        </div>

                    </div>
                    {/* ========================================== */}
                    <div>
                      <input
                          type="radio"
                          name="address"
                          value={"Pix"}
                        />
                        <strong style={{marginLeft: 20, fontSize: 16, fontWeight: "400"}}>PIX</strong>
                    </div>
                </form>

                <div className="checkout">
                    <div className="content__checkout">
                        <p>resumo</p>
                        <p>quina - <span>8</span> dezenas</p>
                        <p>r$: <span className="value__total" id="value__total">6,00</span></p>
                    </div>

                    <div className="line"></div>

                    <div className="items__checkout">
                        <p>subtotal</p>
                        <span>r$ 0,00</span>
                    </div>

                    <div className="items__checkout">
                        <p>código promocional</p>
                        <span>r$ 0,00</span>
                    </div>

                    <div className="line"></div>

                    <div className="items__checkout">
                        <p className="total">total r$: <span id="total">6,00</span></p>
                        <span>r$ 0,00</span>
                    </div>
                    <div className="purchase">
                        <button type="button">
                            <a href="/">voltar</a>
                        </button>
                        <button type="button">
                            <a href="/">comprar</a>
                        </button>
                    </div>
                </div>
            </ContainerForm>
        </>
    );
}