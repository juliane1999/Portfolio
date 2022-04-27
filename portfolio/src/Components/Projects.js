import React,{ useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import ThemeContext from '../Themes/ThemeContext'
// import HRF from '../Assets/Search.png'
// import ecomm from '../Assets/Ecomm.png'
// import market from '../Assets/Market.png'
// import port from '../Assets/Port.png'
// import clip from '../Assets/Clipboard.png'
import '../Style/Projects.css'


const Project = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className='projects' style={theme}>

      <div className='hrf'>
        <p>Human Rights First</p>
          <div className='hashtags'>
            <h4 style={theme}>#React #JavaScript #Redux</h4>
          </div>
      </div>

      <div className='market'>
        <p>African Marketplace</p>
          <div className='hashtags'>
            <h4 style={theme}>#React #JavaScript #Redux</h4>
          </div>
      </div>

      <div className='ecomm'>
        <p>Ecomm</p>
          <div className='hashtags'>
            <h4 style={theme}>#React #JavaScript #Redux</h4>
          </div>
      </div>

      <div className='portfolio'>
        <p>Portfolio</p>
          <div className='hashtags'>
            <h4 style={theme}>#React #JavaScript #Redux</h4>
          </div>
      </div>

    </div>
  )
}


export default Project



 
 
  

     

    
  
  
 