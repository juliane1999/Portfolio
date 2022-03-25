import React from 'react'
import styled from 'styled-components'
import btn from '../Assets/Powerbtn.png'

const Power = () => {

  const Pow = styled.button`
  position: fixed;
  top: 1.5rem;
  left:8%;
  transform: translate(-50%, 0);
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items:center;
  z-index:3;
  cursor: pointer;

  &:hover{
  background-color: rgba(0, 255, 221, 0.4);
  box-shadow: 0 0 8px 6px rgba(0, 255, 221, 0.2);
}`

return (
  <Pow>
  <img src = {btn} width={30} height={30} alt = 'button' />
  </Pow>
  )
}

export default Power