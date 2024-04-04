import styled from 'styled-components'

export const Logo = styled.img`
  height: 30px;
`

export const Profile = styled.img`
  height: 30px;
`

export const Checkbox = styled.input`
  margin-right: 5px;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 4%;
  width: 100vw;
  height: 10vh;
  background-color: ${props => (props.prop ? '#181818' : '#f9f9f9')};
`

export const ButtonsCont = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-evenly;
  width: 30vw;
  align-items: center;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

export const LogoutButton = styled.button`
  color: ${props => (props.prop ? '#f9f9f9' : '#3b82f6')};
  background-color: transparent;
  outline: none;
  border: solid 1px ${props => (props.prop ? '#f9f9f9' : '#3b82f6')};
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 5px;
`
