import React,{ useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
// import HRF from '../Assets/Search.png'
// import ecomm from '../Assets/Ecomm.png'
// import market from '../Assets/Market.png'
// import port from '../Assets/Port.png'
// import clip from '../Assets/Clipboard.png'
import ThemeContext from '../Themes/ThemeContext'

const Project = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={theme}>
      <h1>Project</h1>
    </div>
  )
}


export default Project



 
 
  

     

    
  
  
 