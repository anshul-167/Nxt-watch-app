import styled from 'styled-components'

// Container
export const Cont = styled.div`
  display: flex;
`

// Like Button
export const LikeButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  color: ${props => (props.Prop ? '#2563eb' : '#64748b')};
  border: none;
`

// Save Button
export const SaveButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 15px;
  color: #64748b;
`

// Saved Button
export const SavedButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  font-size: 15px;
  color: #2563eb;
`

// Home Main Container
export const HomeMainCont = styled.div`
  background-color: ${props => (props.prop ? '#181818' : '#f9f9f9')};
`
