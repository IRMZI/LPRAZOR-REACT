import React from 'react'
import donos from '../ThirdSection/imgs/DonosdaRazor.png'
import logos from '../ThirdSection/imgs/logos.png'
import CRazor from '../ThirdSection/imgs/ConhecaRazor.png'
import './style.css'
const ThirdSection = () => {
  return (
    <div className='ThirdSectionWrapper' id='CRazor'>
        <div>
            <a href='https://razor.com.br/sobre/'> <img className="Crazor" src={CRazor} alt=""/>  </a>
            <img className="donosdaRazor" src={donos} alt="DonosdaRazor"/> 
            <h1 id="OHW">PARA OS PROFISSIONAIS MAIS EXIGENTES</h1>
        </div>
        <div>
            <h1 className="titulobranco">QUE USAM OS SOFTWARES MAIS EXIGENTES</h1>
             <img className="logos" src={logos} alt=""/> 
        </div>

    </div>
  )
}

export default ThirdSection