import styled from 'styled-components'

export const InputCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border: solid 1px #cccccc;
  border-radius: 3px;
  width: 30vw;
`

export const Input = styled.input`
  border: none;
  padding: 10px;
  cursor: text;
  width: 90%;
  outline: none;
`

export const SearchButton = styled.button`
  cursor: pointer;
  color: #606060;
  background-color: #f9f9f9;
  border-left: solid 1px #cccccc;
  border: none;
  padding: 10px;
  font-weight: bold;
  font-size: 12px;
`

export const HomeCont = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
`

export const VideosCont = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  flex-wrap: wrap;
  padding-left: 0px;
  height: 60vh;
`

export const Img = styled.img`
  height: 300px;
  width: 190px;
`

export const Li = styled.li`
  margin: 15px;
`

export const ErrorImg = styled.img`
  height: 40vh;
`

export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 90vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f1f5f9')};
`

export const H2 = styled.h1`
  color: #212121;
`

export const P = styled.p`
  color: #94a3b8;
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 13px;
  font-weight: bold;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`

export const HomeMainCont = styled.div`
  background-color: ${props => (props.prop ? '#181818' : '#f9f9f9')};
`
