import React from 'react'
import './style.css'
import pcrazor from './images/pcrazorfundoremovido.png'
import 'bootstrap/dist/css/bootstrap.min.css';
const Firstsection = () => {
  return (
    <div class="firstsection">
    <h1 class="titulobranco">LANÇAMENTO</h1>
    <h1 class="tituloroxo">WORKSTATION PRO</h1>
    <h1 id="OHW">ONE-HIT WONDERS</h1> 
    <div id="pcrazor">
     <img id="heroImage" src={pcrazor} alt="pcrazor"></img>
     <div id="textosrazor">
            <h1 id="titulodesign">Design Minimalista.</h1>
            <p id="descdesign">+Perfomance</p>
            <p id="descdesign">-RGB</p>
            <p id="descdesign">+Discreto</p>
           <a href='https://api.whatsapp.com/send?phone=555430466350&text=Ol%C3%A1.%20Estou%20no%20site%20da%20Razor%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.'> <div class="button" to=""> Orçar  </div> </a>
     </div>
  
    </div>
    </div>
    
  )
}

export default Firstsection