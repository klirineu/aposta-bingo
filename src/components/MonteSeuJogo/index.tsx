import React, { useState } from "react";
import { AiFillSignal } from "react-icons/ai";
import Link from "next/link"

export function MonteSeuJogo() {
  const [numberSelected, setNumberSelected] = useState<string[]>([])

  function addNumberSelected(number: string) {
    if(numberSelected.includes(number)) {
      var index = numberSelected.indexOf(number)
      
        if(index !== -1) {
          setNumberSelected([
            ...numberSelected.slice(0, index),
            ...numberSelected.slice(index + 1)
          ])
        } 
    } else {
      setNumberSelected([...numberSelected, number])
    }

  }

    return (

        <main>
            <div className="content_text">
                <h1>monte seu <span>jogo</span></h1>
                <p>escolha tudo o que deseja incluir em sua aposta:</p>
                <p>Clique nas dezenas abaixo para montar seu jogo</p>
            </div>
            
            <section>

                <div className="content_bingo">
                    <input type="checkbox" id="1"  onClick={() => addNumberSelected("1")}/>
                    <label htmlFor="1" >1</label>

                    <input onClick={() => addNumberSelected("2")} type="checkbox" id="2" />
                    <label htmlFor="2">2</label>

                    <input onClick={() => addNumberSelected("3")} type="checkbox" id="3" />
                    <label htmlFor="3">3</label>

                    <input onClick={() => addNumberSelected("4")} type="checkbox" id="4" />
                    <label htmlFor="4">4</label>

                    <input onClick={() => addNumberSelected("5")} type="checkbox" id="5" />
                    <label htmlFor="5">5</label>

                    <input onClick={() => addNumberSelected("6")} type="checkbox" id="6" />
                    <label htmlFor="6">6</label>

                    <input onClick={() => addNumberSelected("7")} type="checkbox" id="7" />
                    <label htmlFor="7">7</label>

                    <input onClick={() => addNumberSelected("8")} type="checkbox" id="8" />
                    <label htmlFor="8">8</label>

                    <input onClick={() => addNumberSelected("9")} type="checkbox" id="9" />
                    <label htmlFor="9">9</label>

                    <input onClick={() => addNumberSelected("10")} type="checkbox" id="10" />
                    <label htmlFor="10">10</label>

                    {/* ------------ 10 / 20 ------------ */}

                    <input onClick={() => addNumberSelected("11")} type="checkbox" id="11" />
                    <label htmlFor="11">11</label>

                    <input onClick={() => addNumberSelected("12")} type="checkbox" id="12" />
                    <label htmlFor="12">12</label>

                    <input onClick={() => addNumberSelected("13")} type="checkbox" id="13" />
                    <label htmlFor="13">13</label>

                    <input onClick={() => addNumberSelected("14")} type="checkbox" id="14" />
                    <label htmlFor="14">14</label>

                    <input onClick={() => addNumberSelected("15")} type="checkbox" id="15" />
                    <label htmlFor="15">15</label>

                    <input onClick={() => addNumberSelected("16")} type="checkbox" id="16" />
                    <label htmlFor="16">16</label>

                    <input onClick={() => addNumberSelected("17")} type="checkbox" id="17" />
                    <label htmlFor="17">17</label>

                    <input onClick={() => addNumberSelected("18")} type="checkbox" id="18" />
                    <label htmlFor="18">18</label>

                    <input onClick={() => addNumberSelected("19")} type="checkbox" id="19" />
                    <label htmlFor="19">19</label>

                    <input onClick={() => addNumberSelected("20")} type="checkbox" id="20" />
                    <label htmlFor="20">20</label>

                    {/* ------------ 20 / 30 ------------ */}

                    <input onClick={() => addNumberSelected("21")} type="checkbox" id="21" />
                    <label htmlFor="21">21</label>

                    <input onClick={() => addNumberSelected("22")} type="checkbox" id="22" />
                    <label htmlFor="22">22</label>

                    <input onClick={() => addNumberSelected("23")} type="checkbox" id="23" />
                    <label htmlFor="23">23</label>

                    <input onClick={() => addNumberSelected("24")} type="checkbox" id="24" />
                    <label htmlFor="24">24</label>

                    <input onClick={() => addNumberSelected("25")} type="checkbox" id="25" />
                    <label htmlFor="25">25</label>

                    <input onClick={() => addNumberSelected("26")} type="checkbox" id="26" />
                    <label htmlFor="26">26</label>

                    <input onClick={() => addNumberSelected("27")} type="checkbox" id="27" />
                    <label htmlFor="27">27</label>

                    <input onClick={() => addNumberSelected("28")} type="checkbox" id="28" />
                    <label htmlFor="28">28</label>

                    <input onClick={() => addNumberSelected("29")} type="checkbox" id="29" />
                    <label htmlFor="29">29</label>

                    <input onClick={() => addNumberSelected("30")} type="checkbox" id="30" />
                    <label htmlFor="30">30</label>

                    {/* ------------ 30 / 40 ------------ */}

                    <input onClick={() => addNumberSelected("31")} type="checkbox" id="31" />
                    <label htmlFor="31">31</label>

                    <input onClick={() => addNumberSelected("32")} type="checkbox" id="32" />
                    <label htmlFor="32">32</label>

                    <input onClick={() => addNumberSelected("33")} type="checkbox" id="33" />
                    <label htmlFor="33">33</label>

                    <input onClick={() => addNumberSelected("34")} type="checkbox" id="34" />
                    <label htmlFor="34">34</label>

                    <input onClick={() => addNumberSelected("35")} type="checkbox" id="35" />
                    <label htmlFor="35">35</label>

                    <input onClick={() => addNumberSelected("36")} type="checkbox" id="36" />
                    <label htmlFor="36">36</label>

                    <input onClick={() => addNumberSelected("37")} type="checkbox" id="37" />
                    <label htmlFor="37">37</label>

                    <input onClick={() => addNumberSelected("38")} type="checkbox" id="38" />
                    <label htmlFor="38">38</label>

                    <input onClick={() => addNumberSelected("39")} type="checkbox" id="39" />
                    <label htmlFor="39">39</label>

                    <input onClick={() => addNumberSelected("40")} type="checkbox" id="40" />
                    <label htmlFor="40">40</label>

                    {/* ------------ 40 / 50 ------------ */}

                    <input onClick={() => addNumberSelected("41")} type="checkbox" id="41" />
                    <label htmlFor="41">41</label>

                    <input onClick={() => addNumberSelected("42")} type="checkbox" id="42" />
                    <label htmlFor="42">42</label>

                    <input onClick={() => addNumberSelected("43")} type="checkbox" id="43" />
                    <label htmlFor="43">43</label>

                    <input onClick={() => addNumberSelected("44")} type="checkbox" id="44" />
                    <label htmlFor="44">44</label>

                    <input onClick={() => addNumberSelected("45")} type="checkbox" id="45" />
                    <label htmlFor="45">45</label>

                    <input onClick={() => addNumberSelected("46")} type="checkbox" id="46" />
                    <label htmlFor="46">46</label>

                    <input onClick={() => addNumberSelected("47")} type="checkbox" id="47" />
                    <label htmlFor="47">47</label>

                    <input onClick={() => addNumberSelected("48")} type="checkbox" id="48" />
                    <label htmlFor="48">48</label>

                    <input onClick={() => addNumberSelected("49")} type="checkbox" id="49" />
                    <label htmlFor="49">49</label>

                    <input onClick={() => addNumberSelected("50")} type="checkbox" id="50" />
                    <label htmlFor="50">50</label>

                    {/* ------------ 50 / 60 ------------ */}

                    <input onClick={() => addNumberSelected("51")} type="checkbox" id="51" />
                    <label htmlFor="51">51</label>

                    <input onClick={() => addNumberSelected("52")} type="checkbox" id="52" />
                    <label htmlFor="52">52</label>

                    <input onClick={() => addNumberSelected("53")} type="checkbox" id="53" />
                    <label htmlFor="53">53</label>

                    <input onClick={() => addNumberSelected("54")} type="checkbox" id="54" />
                    <label htmlFor="54">54</label>

                    <input onClick={() => addNumberSelected("55")} type="checkbox" id="55" />
                    <label htmlFor="55">55</label>

                    <input onClick={() => addNumberSelected("56")} type="checkbox" id="56" />
                    <label htmlFor="56">56</label>

                    <input onClick={() => addNumberSelected("57")} type="checkbox" id="57" />
                    <label htmlFor="57">57</label>

                    <input onClick={() => addNumberSelected("58")} type="checkbox" id="58" />
                    <label htmlFor="58">58</label>

                    <input onClick={() => addNumberSelected("59")} type="checkbox" id="59" />
                    <label htmlFor="59">59</label>

                    <input onClick={() => addNumberSelected("60")} type="checkbox" id="60" />
                    <label htmlFor="60">60</label>
                </div>

                <div className="card_lateral">
                    <div className="flex_numbers" id="flex_numbers" >
                        {numberSelected.map(number => (
                          <label className="numberSelected">{number}</label>
                        ))}
                    </div>
                    <h2>01 aposta simples <span>com 6 dezenas</span> <span>r${numberSelected.length},00</span></h2>
                    <div className="block">
                        turbinar aposta
                        <AiFillSignal className="icon_signal"></AiFillSignal>
                    </div>
                    <h3>selecione mais <span>1 dezena</span> para liberar o turbo</h3>
                    <div className="min_max_dezenas">
                        <p>mínimo de dezenas: <span>06</span></p>
                        <p>dezenas selecionadas: <span>{numberSelected.length}</span></p>
                    </div>
                    <Link href="/pagamento">
                      <button type="button">
                        <strong className="add_cart">adicionar ao carrinho</strong>
                      </button>
                    </Link>
                </div>

            </section>
            <div className="content_text second">
                <h4>últimos resultados das loterias</h4>
                <span>confira o último resultado da mega-sena e quina aqui!</span>
            </div>

            <div className="scrolling-wrapper">
                <div className="card">
                    <div className="card_header">
                        <h2 className="card_header">sorteio 15/02/2022 ° pessoas 2335 ° 7 milhões</h2>
                    </div>
                    <div className="content_balls" id="content_balls">&thinsp;</div>
                    <span>acumulou!</span>

                    <div className="content_result">

                        <div className="block_content_result">
                            <h3>premiação</h3>
                            <span>Sena</span>
                            <span>Quina</span>
                        </div>
                        <div className="block_content_result">
                            <h3>ganhadores</h3>
                            <span>&thinsp;</span>
                            <span>61</span>
                        </div>
                        <div className="block_content_result">
                            <h3>prêmio</h3>
                            <span>&thinsp;</span>
                            <span>R$ 824,21</span>
                        </div>

                    </div>
                </div>
                <div className="card">
                    <div className="card_header">
                        <h2 className="card_header">sorteio 15/02/2022 ° pessoas 2335 ° 7 milhões</h2>
                    </div>
                    <div className="content_balls" id="content_balls">&thinsp;</div>
                    <span>acumulou!</span>
                    <div className="content_result">

                        <div className="block_content_result">
                            <h3>premiação</h3>
                            <span>Sena</span>
                            <span>Quina</span>
                        </div>
                        <div className="block_content_result">
                            <h3>ganhadores</h3>
                            <span>&thinsp;</span>
                            <span>61</span>
                        </div>
                        <div className="block_content_result">
                            <h3>prêmio</h3>
                            <span>&thinsp;</span>
                            <span>R$ 824,21</span>
                        </div>

                    </div>
                </div>
                <div className="card">
                    <div className="card_header">
                        <h2 className="card_header">sorteio 15/02/2022 ° pessoas 2335 ° 7 milhões</h2>
                    </div>
                    <div className="content_balls" id="content_balls">&thinsp;</div>
                    <span>acumulou!</span>
                    <div className="content_result">

                        <div className="block_content_result">
                            <h3>premiação</h3>
                            <span>Sena</span>
                            <span>Quina</span>
                        </div>
                        <div className="block_content_result">
                            <h3>ganhadores</h3>
                            <span>&thinsp;</span>
                            <span>61</span>
                        </div>
                        <div className="block_content_result">
                            <h3>prêmio</h3>
                            <span>&thinsp;</span>
                            <span>R$ 824,21</span>
                        </div>

                    </div>
                </div>
            </div>
        </main>

    );
}
