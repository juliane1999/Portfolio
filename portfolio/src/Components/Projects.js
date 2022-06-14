/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import ThemeContext from '../Themes/ThemeContext'
import HRF from '../Assets/Search.png'
import ecomm from '../Assets/Ecomm.png'
import market from '../Assets/Market.png'
import port from '../Assets/Port.png'
import Pipe from '../Components/Pipe'
import '../Style/Projects.css'


const Project = () => {

  const theme = useContext(ThemeContext)

  return (
    <div className='projects' style={theme}>

      <div className='main-title'>
        <h1 id='front-end' style={theme}>Front-end</h1>
      </div>

      <div className='hrf'>
        <a target='_blank' href = 'https://github.com/juliane1999/human-rights-first-docdb-fe'>
          <p style={theme} className='title'>Human Rights First</p>
            <img className='bg-images' src={HRF} alt='hrf'/>
              <div className='hashtags'>
                <p style={theme}>#React #JavaScript #CSS #XML #AntDesign #DocSearchTool </p>
              </div>
        </a>
      </div>

      <div className='market'>
        <a target='_blank' href = 'https://african-marketplace-project.vercel.app/'>
          <p style={theme} className='title'>African Marketplace</p>
            <img className='bg-images' src={market} alt='market'/>
              <div className='hashtags'>
                <p style={theme}>#React #JavaScript #Redux #CSS #XML #Node.js #Express #Vercel</p>
              </div>
        </a>
      </div>

      <div className='ecomm'>
        <a target='_blank' href = 'https://github.com/c-and-j/front-end'>
          <p style={theme} className='title'>Ecomm</p>
            <img className='bg-images' src={ecomm} alt='ecomm'/>
              <div className='hashtags'>
                <p style={theme}>#React #JavaScript #Redux # XML #Tailwind #API #Heroku</p>
              </div>
        </a>
      </div>

      <div className='portfolio'>
        <p className='title'>Portfolio</p>
          <img className='bg-images' src={port} alt='portfolio'/>
            <div className='hashtags'>
              <p style={theme}>#React #JavaScript #SCSS #ContextAPI #CreateGlobalStyle #PixelArt</p>
            </div>
      </div>

      <Pipe />

      <span id='empty'></span>

      <div className='main-title'>
        <h1 id='design' style={theme}>UX/UI</h1>
      </div>

      <div className='figma'>
        <a>
        <Link to = '/figma' style={{textDecoration: 'none'}}/>
          <p style={theme} className='title'>Human Rights First</p>
            <img className='bg-images' src={HRF} alt='hrf'/>
              <div className='hashtags'>
                <p id='fig-hash' style={theme}>#Figma #Whimsical #Mockup #Wireframes</p>
              </div>
        </a>
      </div>

      <div className='figma'>
        <a>
        <Link to = '/figma' style={{textDecoration: 'none'}}/>
          <p style={theme} className='title'>Coming Soon</p>
            <img className='bg-images' src={market} alt='market'/>
              <div className='hashtags'>
                <p style={theme}></p>
              </div>
        </a>
      </div>

      <div className='figma'>
        <a>
        <Link to = '/figma' style={{textDecoration: 'none'}}/>
          <p className='title'>Ecomm</p>
            <img className='bg-images' src={ecomm} alt='ecomm'/>
              <div className='hashtags'>
              <p id='fig-hash' style={theme}>#Sketch #Invision #Mockup #Wireframes</p>
              </div>
        </a>
      </div>

      <div className='figma'>
        <a>
        <Link to = '/figma' style={{textDecoration: 'none'}}/>
          <p className='title'>Portfolio</p>
            <img className='bg-images' src={port} alt='portfolio'/>
              <div className='hashtags'>
              <p id='fig-hash' style={theme}>#Figma #PhotoShop #Krita #ClipStudioPaint #Mockup #Wireframes</p>
              </div>
        </a>
      </div>

    </div>

    
  )
}


export default Project



 
 
  

     

    
  
  
 