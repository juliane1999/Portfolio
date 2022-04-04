import './App.css';
import React, {useState} from 'react'
import { Route, Routes } from 
"react-router-dom";
import ThemeContext, {themes} from './Themes/ThemeContext'
import Nav from './Components/Nav';
import Landing from './Components/Landing'
import Projects from './Components/Projects';
import About from './Components/About';
import Power from './Components/Power';
import Credit from './Components/Credit'


function Application() {

  const [theme,setTheme] = useState(themes.dark)

  const toggleTheme = () => theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)

  return (
    <ThemeContext.Provider value={theme}>
      <div onClick={toggleTheme}>
      <Power />
      </div>
      <Nav />
      <Routes>
        <Route path ='/' element = {<Landing/>}/>
        <Route path ='/projects' element = {<Projects/>}/>
        <Route path = '/about' element = {<About/>}/>
      </Routes>
      <Credit />
    </ThemeContext.Provider>
  
  );
}

export default Application;
