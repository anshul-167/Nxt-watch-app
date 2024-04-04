import styled from 'styled-components'

// Left Container
export const LeftCont = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.prop ? '#181818' : '#f9f9f9')};
  width: 20vw;
`

// Links Container
export const LinksCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

// Link Text
export const LinkText = styled.p`
  color: ${props => {
    if (props.darkProp) {
      return props.prop ? '#f8fafc' : '#f1f1f1'
    }
    return props.prop ? 'black' : '#64748b'
  }};
  font-weight: ${props => (props.prop ? 'bold' : '')};
  margin-left: 10px;
`

// Link Button
export const LinkButton = styled.button`
  width: 20vw;
  padding-left: 5%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${props => {
    if (props.darkProp) {
      return props.prop ? '#383838' : '#181818'
    }
    return props.prop ? '#ebebeb' : '#f9f9f9'
  }};
  color: ${props => (props.prop ? '#ff0000' : '#313131')};
`

// Left Header
export const LeftHead = styled.p`
  color: ${props => (props.darkProp ? '#f8fafc' : '#1e293b')};
  font-size: 20px;
  font-weight: bold;
`

// Facebook Logo
export const FbLogo = styled.img`
  height: 20px;
  margin-right: 10px;
`

// Bottom Container
export const BottomCont = styled.div`
  margin-left: 10px;
  margin: 15px;
`

// Left Paragraph
export const LeftPara = styled.p`
  font-size: 13px;
  color: ${props => (props.darkProp ? '#f8fafc' : '#1e293b')};
`
