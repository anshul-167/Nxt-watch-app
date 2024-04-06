import styled from 'styled-components'

export const Img = styled.img`
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

export const MainCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const H1 = styled.h1`
  color: #212121;
`

export const P = styled.p`
  color: #94a3b8;
`
