import React from 'react'
import ResponsivePlayer from './info'
import './style.css'
import video from '../../video/RyzenCPU.mp4'
import rtx from '../../components/SecondSection/img/RTX 3090.png'
import ssd from '../../components/SecondSection/img/SSDNVME.png'
const SecondSection = () => {
  return (
    <div className="SecondSection">
    <h1 id="tituloryzen">EQUIPADO COM O PODEROSO</h1>
     <h2 id="nomeryzen"> Ryzen™ Threadripper™</h2> 
     <p id="descryzen"> Processador de ultima geração </p>
     <video class="ryzen" width="55%" height="auto" autoPlay loop playinline muted >
    <source src={video} type="video/mp4"/>
    </video>
    <h2 id="nomertx"> RTX 3090 TI™</h2> 
    <h1 id="tituloitem"> FOCO NO DESEMPENHO</h1> 
    <p id="descitem"> A melhor placa de video do mercado</p> 
    <img id="rtx"src={rtx} alt=""/>
    <h2 id="nomeSSD"> Samsung 970 EVO Plus™</h2>
    <p id="tituloitem"> LEITURA DE DADOS</p>   
    <h1 id="descitem"> com 2 TB de armazenamento </h1> 
    <img  id="ssd" src={ssd} alt=""/>   

    </div>
  )
}

export default SecondSection