import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Oregano&family=VT323&display=swap');

body{
    background-color: {(props) => props.themes.body}
    font-family: 'VT323', monospace;   
    transition: all 0.25s linear;
}`;

export default GlobalStyles


