import React, { useref } from 'react'
import styled from 'styled-components'
import pipe from '../Assets/Pipe.png'
import arrow from '../Assets/Arrow.gif'
import '../Style/Projects.css'

const Contain = styled.div`
display: flex;
flex-flow: column wrap;
width:100%;
align-content: center;
cursor:pointer;
z-index:10;
`
const Pipe = () => {

    let audio = new Audio('/Super.mp3')

    const start = (pause) => {
        audio.play();
        window.scrollBy(0,1000);

        window.scrollBy(0,2000);
      }


  return (
    <Contain onClick={start}>
        <img src={arrow} height={400} alt='arrow'/>
        <img src={pipe}  width={500} height={800} alt='blue pipe' />
    </Contain>
  )
}

export default Pipe