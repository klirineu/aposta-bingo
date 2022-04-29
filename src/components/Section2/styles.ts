import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 100px;
`

export const DivRow = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
  width: 90%;
`

export const Number = styled.h2`
  color: var(--green);
  font-size: 40px;
  margin-top: 12px;
  margin-right: 20px;
`

export const Img = styled.img`
  width: 55px;
  height: 55px;
  background-size: contain;
`

export const Text = styled.h3`
  color: #707070;
  font-size: 20px;
  text-align: center;
  
  margin-top: 25px;
`

export const Title = styled.h2`
  color: #3D3D3D;
  font-size: 40px;
`

export const TitleGreen = styled.h2`
  color: var(--green);
`

export const ImageLeft = styled.img`
  width: 400px;
  height: 500px;
  background-size: contain;
`

export const Button = styled.button`
  margin-top: 100px;
  border: none;
  padding: 15px 50px;
  border-radius: 50px;
  background: #4FD787;
  font-size: 20px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`