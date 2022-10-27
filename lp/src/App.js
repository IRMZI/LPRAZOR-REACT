import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Creditos from "./components/Creditos/Creditos"
import Navbar from "./components/Navbar/index"
import Sidebar from './components/Sidebar/index'
import { useState } from 'react';
import Firstsection from './components/FirstSection';


const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Navbar toggle={toggle}/>
     <Firstsection/>
     <Creditos/>
    </Router>
  );
}

export default App;
