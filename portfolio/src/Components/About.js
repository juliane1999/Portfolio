/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import tree from '../Assets/About@2x.png'
import Cards from './Cards'

export default function About() {
return(
  <div className= 'about-container'>
    <img src={tree} id = 'about' alt='tree'></img>
    <Cards/>
  </div>
)
};
   

