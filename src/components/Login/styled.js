import styled from 'styled-components'

export const MainCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  height: 100vh;
  background-color: #f9f9f9;
`

export const Card = styled.div`
  display: flex;
  background-color: #f8fafc;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  padding: 3%;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
`

export const Img = styled.img`
  height: 40px;
  margin-bottom: 5%;
`

export const Label = styled.label`
  color: #64748b;
  font-size: 12px;
  font-weight: bold;
`

export const P = styled.p`
  color: #ff0b37;
  font-size: 10px;
`

export const CheckboxLabel = styled.label`
  color: #0f0f0f;
  font-size: 12px;
  font-weight: bold;
`

export const Input = styled.input`
  width: 250px;
  padding: 10px;
  border: solid 1px #1e293b;
  border-radius: 4px;
  outline: none;
  cursor: text;
  margin-top: 5px;
  color: #1e293b;
`

export const Checkbox = styled.input`
  margin-right: 5px;
`

export const InputCont = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;
`

export const CheckboxCont = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`

export const Button = styled.button`
  width: 250px;
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
