import './App.css';
import Nav from './Components/Nav';
import Landing from './Components/Landing'
import Projects from './Components/Projects';
import About from './Components/About';
import { Route, Routes } from "react-router-dom";

function Application() {
  return (
    <div>
    <Nav/>
    <Routes>
      <Route path ='/' element = {<Landing/>}/>
      <Route path ='/projects' element = {<Projects/>}/>
      <Route path = '/about' element = {<About/>}/>
    </Routes>
    </div>
  );
}

export default Application;
