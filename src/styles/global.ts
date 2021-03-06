import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --green: #40E550;
    --green-background: #4FD787;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity:0.6;
    cursor: not-allowed;
  }
  /**Monte seu jogo */
  main{
    width: 100%;
    min-height: auto;
    padding: 2.0rem;
  }
  main > div.content_text{
    width: 45%;
    max-width: 55%;
    cursor: default;
  }
  div.content_text > h1{
    text-transform: uppercase;
    font-size: 3.5rem;
    font-weight: bold;
    padding: 2.0rem 0;
  }
  div.content_text > h1 > span{
    color: #4FD787 ;
  }
  div.content_text > p:nth-child(2){
    font-size: 2.0rem;
    text-transform: uppercase;
    color:#4FD787 ;
    font-weight: bold;
    padding: 1.0rem 0;
  }
  div.content_text > p:nth-child(3){
    font-size: 2.0rem;
    color: #707070;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  section > div.content_bingo{
    display: flex;
    flex-wrap: wrap;
    width: 50%;
    max-width: 52%;
    padding: .9rem 0;
  }
  label {
    display: flex;
    font-size: 2.0rem;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    height: 3.0rem;
    width: 3.0rem;
    background-color:#4fd788b6 ;
    border-radius: 50%;
    color: #3D3D3D;
  }
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"]:checked + label {
    background-color: #40E550;
    color: #fff;
  }
  div.card_lateral{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.6rem;
    width: 50%;
    max-width: 60.0rem;
    margin: 0 auto;
    padding: 2.0rem;
    border-radius: 2rem;
    -webkit-box-shadow: 0px 8px 33px 0px rgba(179, 179, 179, 0.78);
    -moz-box-shadow: 0px 8px 33px 0px rgba(179, 179, 179, 0.78);
    box-shadow: 0px 8px 33px 0px rgba(179, 179, 179, 0.78);
  }
  div.card_lateral > h2{
    text-transform: uppercase;
    text-align: center;
    font-size: 1.5rem;
    color: #141414;
  }
  div.card_lateral > h2 > span:nth-child(1){
    color:#707070 ;
  }
  div.card_lateral > h2 > span:nth-child(2){
    color:#4FD787;
  }
  div.card_lateral > div.block{
    background-color: #E8E8E8;
    text-transform: uppercase;
    margin: 1.0rem auto;
    padding: .5rem;
    width: 22.0rem ;
    text-align: center;
    border-radius: 2.0rem;
    color: #B1B1B1;
    font-weight: bold;
  }
  div.card_lateral > div.block > .icon_signal{
    margin: 0 1.0rem auto;
    color: #C1C1C1;
  }
  div.card_lateral > h3{
    color: #707070;
    text-transform: uppercase;
    font-size: 1.4rem;
  }
  div.card_lateral > h3 > span{
    color:#4FD787 ;
    font-weight: bold;
  }
  div.min_max_dezenas  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: auto;
  }
  div.min_max_dezenas > p {
    text-transform: uppercase;
    font-weight: bold;
    color: #707070;
    margin: 2.0rem 0;
    font-size: 1.5rem;
  }
  div.min_max_dezenas > p > span{
    color:#4FD787 ;
  }
  div.card_lateral > button{
    width: 100%;
    border: none;
    padding: 1.0rem;
    border-radius: 2.0rem;
    background-color:#4FD787 ;
    font-size:2.0rem ;
    font-weight: bold;
    text-transform: uppercase;
  }
  div.card_lateral > button > a{
    text-decoration: none;
    color: #fff;
    outline: none;
  }

  div.scrolling-wrapper {
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 2.0rem;
  }
  div.scrolling-wrapper > div.card {
    border-radius: 3rem;
    -webkit-box-shadow: 0px 8px 33px 0px rgba(179, 179, 179, 0.78);
    -moz-box-shadow: 0px 8px 33px 0px rgba(179, 179, 179, 0.78);
    box-shadow: 0px 8px 33px 0px rgba(179, 179, 179, 0.78);
    font-size: 1.3rem;
    text-transform: uppercase;
    text-align: center;
    width: 75.0rem ;
    height: 32.0rem;
    display: inline-block;
    margin: 1.5rem;
    flex: 0 0 auto;
  }
  div.card > div.card_header , h2.card_header{
    background-color: #4FD787;
    color: #fff;
    padding: .9rem;
    border-radius: 3rem 3rem 0 0;
  }
  div.card > span {
    font-weight: bold;
    color:#4FD787 ;
  }

  div.content_result{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem;
    margin: 0;
  }
  div.block_content_result{
    display: flex;
    flex-direction: column;
    line-height: 3.0rem;
    color:#707070 ;
    font-weight: bold;
  }
  div.scrolling-wrapper-flexbox {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  div.scrolling-wrapper::-webkit-scrollbar {
    display: none;
  }
  div.second > h4{
    font-size: 3.0rem;
    text-transform: uppercase;
    color: #4FD787;
    font-weight: bold;
    padding: 2.0rem 0;
  }
  div.second > span{
    color: #3D3D3D;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  .numberSelected{
    display: flex;
    font-size: 2.0rem;
    justify-content: center;
    align-items: center;
    margin: .5rem;
    height: 3.0rem;
    width: 3.0rem;
    background-color:#9FA2A0 ;
    border-radius: 50%;
    color: #3D3D3D;
  }

  .flex_numbers {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row
  }
`