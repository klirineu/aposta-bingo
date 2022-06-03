import styled from "styled-components";

export const Container = styled.header`
  min-width: 1200px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const TextHeader = styled.strong`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`
export const ButtonHeader = styled.button`
  width: 180px;
  height: 37px;
  border-radius: 50px;
  background: transparent;
  border: 1px solid #40E550;
  color: #40E550;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;

  &:hover{
    border: none;
    background: var(--green);
    color: white;
  }
`

export const LogoHeader = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 50px;
`
