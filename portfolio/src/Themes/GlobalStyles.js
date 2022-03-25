// import {createGlobalStyle} from 'styled-components'

// const GlobalStyles = createGlobalStyle`


// @import url('https://fonts.googleapis.com/css2?family=Oregano&family=VT323&display=swap');

// body{
//     background: {(props) => props.themes.body}
//     color: {(props) => props.themes.text}
//     font-family: 'VT323', monospace;   
//     transition: all 0.25s linear;
// }`;

// export default GlobalStyles

import { createGlobalStyle } from 'styled-components';

 const GlobalStyles = createGlobalStyle`

 body{
   background: ${({ theme }) => theme.body};
   color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
 }
 `

export default GlobalStyles


