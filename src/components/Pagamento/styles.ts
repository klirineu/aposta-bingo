import styled from "styled-components";

export const ContainerForm = styled.section`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2.0rem;
    flex-wrap:wrap;

    form{
    width:100% ; 
    max-width:59.0rem; 
    height: auto; 
    background-color: #fff; 
    box-shadow: 0px 10px 56px 10px rgba(0,0,0,0.1); 
    padding:2.0rem; 
    border-radius:2.0rem; 
    font-size:1.4rem ;   
    color:#707070;
    text-transform:uppercase;
    margin-bottom:3.0rem;

    input{
        outline:none;
        padding:1.0rem;
        border-radius:.9rem;
        border:solid .060rem #707070;
        margin:1.0rem auto;
        ::placeholder{
            color:#707070;
            text-transform:uppercase;
            font-weight:600;
        }
    }
  .teste2 + label::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: solid 2px;
    vertical-align: bottom;
  }

  .teste2:checked + label::after {
    content: '';
    background-color: red;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: absolute;
    left: 5px;
    bottom: 5px;
  }

  }
    /* ===== CHECKOUT ===== */

    div.checkout{
    width: 100%;
    max-width: 50.0rem;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: #616161;
    
    }
    div.content__checkout > p{
    margin: .9rem 0;
    }
    div.content__checkout > p:nth-child(2){
    font-weight: bold;
    }
    div.items__checkout{
    display: flex;
    justify-content: space-between;
    padding:.8rem 0;
    }
    div.line {
    width: 100%;
    padding: 1.0rem 0 ;
    border-top: .035rem solid #a3a3a3;
    }
    div.purchase{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2.0rem 0 ;
    }
    div.purchase > button , a{
    background:none;
    text-decoration: none;
    padding: 1.0rem;
    border-radius: 1.6rem;
    cursor: default;
    text-transform: uppercase;

    }
    div.purchase > button:nth-of-type(1){
    border: #00C300 solid .060rem;
    width: 20.0rem auto;
    }
    div.purchase > button:nth-of-type(2) {
    border: #40E550 solid .060rem;
    background-color: #49e049;
    width: 20.0rem auto;
    }
    div.purchase > button:nth-of-type(2) > a{
    color: #fff;
    font-weight: bolder;
    }

    @media screen and (min-width:320px) and (max-width:480px){
        div.checkout{
            max-width:100%;
        }
    }
    @media screen and (min-width:481px) and (max-width:768px){
        form{
            margin:auto;
        }
        div.checkout{
            max-width:59.0rem;
            margin:5.0rem auto;
        }
    }
    @media screen and (min-width:769px) and (max-width:1024px){
        form{
            margin:auto;
        }
        div.checkout{
            max-width:59.0rem;
            margin:5.0rem auto;
        }
    }
    @media screen and (min-width:1025px) and (max-width:1440px){
        form{
            margin:auto;
        }
        div.checkout{
            max-width:59.0rem;
            margin:5.0rem auto;
        }
    }

`
export const Title = styled.h1`
    text-align:center;
    font-size:4.5rem;
    text-transform:uppercase;
    color:#3D3D3D;
`

