/* eslint-disable react/jsx-no-duplicate-props */
import React, {useContext} from 'react'
import tree from '../Assets/About@2x.png'
import Cards from './Cards'
import ThemeContext from '../Themes/ThemeContext'
import '../Style/About.css'

export default function About() {

  const theme = useContext(ThemeContext)

  return(
    <>
      <img src={tree} id = 'about' alt='tree'></img>
      
      <div className= 'about-container' style={theme}>
        <Cards/>
      </div>
    </>
  ) 
};
   

