import React from 'react'
import './style.css'
import logofinal from './img/logofinal.png'
const Footer = () => {
  return (
   <div className="FooterWrapper">
    <div>
 <p class="footerdesign">Razor do Brasil LTDA.</p>
 <p class="footerdesign">CNPJ: 19.847.182/0001-69</p>
 <p class="footerdesign">atendimento@razorcomputadores.com.br</p>
    </div>
   <div>
   <img className="imagemfinal" src={logofinal} alt=""/>
   </div>
   <div>
   <p class="footerdesign last">Rua Dr. Plínio Moura, 153-C, Vila Planaltina</p>
   <p class="footerdesign last">Passo Fundo, Rio Grande do Sul </p>
   <p class="footerdesign last">CEP 99.062-340</p>
   </div>
   </div>
  )
}

export default Footer