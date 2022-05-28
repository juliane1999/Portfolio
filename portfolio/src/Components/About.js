/* eslint-disable react/jsx-no-duplicate-props */
import React, {useContext} from 'react'
import tree from '../Assets/About.png'
import Cards from './Cards'
import ThemeContext from '../Themes/ThemeContext'
import '../Style/About.css'

export default function About() {

  const theme = useContext(ThemeContext)

  return(
    <>
    <img src={tree} id = 'about' alt='tree' style={theme}></img>

    <div className='wrap'>
      <Cards/>
    </div>

    {/* <div style={theme}>
      <h1 style={theme}>Mobile App Coming Soon</h1>
    </div> */}
    </>
  ) 
};
   

