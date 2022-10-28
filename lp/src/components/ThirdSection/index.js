import React from 'react'
import donos from '../ThirdSection/imgs/DonosdaRazor.png'
import logos from '../ThirdSection/imgs/logos.png'
import './style.css'
const ThirdSection = () => {
  return (
    <div className='ThirdSectionWrapper'>
        <div>
        <h1 className="tituloroxo">PARA OS PROFISSIONAIS MAIS EXIGENTES</h1>
             <img className="donosdaRazor" src={donos} alt="DonosdaRazor"/> 
            <h1 className="titulobranco">QUE USAM OS SOFTWARES MAIS EXIGENTES</h1>
             <img className="logos" src={logos} alt=""/> 
        </div>

    </div>
  )
}

export default ThirdSection