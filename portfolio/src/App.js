import './App.css';
import React from 'react'
import Nav from './Components/Nav';
import Landing from './Components/Landing'
import Projects from './Components/Projects';
import About from './Components/About';
import { Route, Routes } from 
"react-router-dom";
import { ThemeProvider } from 'styled-components'
import {lightTheme,darkTheme} from './Themes/Theme'
import GlobalStyles from './Themes/GlobalStyles'
import { useDarkMode } from './Components/useDarkMode'
import Toggle from './Components/Toggle'
import Footer from './Components/Footer'
// import Power from './Components/Power'

function Application() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={toggleTheme} />

    <Nav/>
    <Routes>
      <Route path ='/' element = {<Landing/>}/>
      <Route path ='/projects' element = {<Projects/>}/>
      <Route path = '/about' element = {<About/>}/>
    </Routes>
    <Footer />
        </>
    </ThemeProvider>
  
  );
}

export default Application;
