import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--green-background);
`

export const Text = styled.h2`
  color: white;
  font-size: 40px;
  font-weight: bold;
  &:first-child {
    padding-top: 40px;
  }
  padding-left: 40px;
  text-transform: uppercase;
`

export const Cards = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Title = styled.h3`
  color: white;
`

export const Card = styled.div`
  text-align: center;
  width: 250px;
  background-color: white;
  padding: 20px;
  border-radius: 30px;
  margin: 40px 20px;
`

export const CardNumber = styled.p`
  margin-left: 70px;
  width: 65px;
  height: 65px;
  padding-top: 10px;
  background: white;
  margin-top: -50px;
  margin-bottom: 20px;
  border-radius: 70px;
  border: 3px solid var(--green-background);
  font-size: 30px;
  color: var(--green-background);
  font-weight: bold;
`

export const CardIcon = styled.img`
  width: 40px;
  margin-top: 20px;
`

export const CardText = styled.p`
  color: var(--green-background);
  margin-top: 30px;
  font-size: 15px;
`
