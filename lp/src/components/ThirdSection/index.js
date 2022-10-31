import React from 'react'
import donos from '../ThirdSection/imgs/DonosdaRazor.png'
import logos from '../ThirdSection/imgs/logos.png'
import CRazor from '../ThirdSection/imgs/ConhecaRazor.png'
import Certificados from '../ThirdSection/imgs/Certificados_razor.png'
import './style.css'
const ThirdSection = () => {
  return (
    <div className='ThirdSectionWrapper' id='CRazor'>
             <div className='RazorC'>
             <a href='https://razor.com.br/sobre/'> <img className="Crazor" src={CRazor} alt=""/>  </a>
            <img className="donosdaRazor" src={donos} alt="DonosdaRazor"/> 
              </div> 
            <h1 id="OHW">PARA OS PROFISSIONAIS MAIS EXIGENTES</h1>
            <h1 className="titulobranco">QUE USAM OS SOFTWARES MAIS EXIGENTES</h1>
             <img className="logos" src={logos} alt=""/>
             <h1 className="titulobranco">Certificado por quem entende do assunto</h1>
             <img className="certificados" src={Certificados}/>


    </div>
  )
}

export default ThirdSection