import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import music from '../Assets/Song.mp3'
import symbol from '../Assets/Music.png'

const Box = styled.div`
animation-name: float;
transform: translatey(0px);
animation: float 8s ease-in-out infinite;
display:flex;
cursor:pointer;
position:fixed;
right: 2rem;
top: 1rem;
z-index:10;
&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}

@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	75% {
		transform: translatey(5px);
	}
    100% {
		transform: translatey(0px);
	}
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.theme.text};
border: 1px solid ${props => props.theme.body};
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 1rem;
width: 2px;
margin:0 0.1rem
`

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()}>
            {/* <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/>
            <Line click={click}/> */}
            <img src={symbol} click={click} width={50} height={50} alt='music symbol'></img>

            <audio src={music} ref={ref}  loop />

        </Box>
    )
}

export default SoundBar