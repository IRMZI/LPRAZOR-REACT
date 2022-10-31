import '../../css/reset.css'
import '../../css/criadores.css'
import '../../css/fonts.css'
import Primeiro from "./img/autores/primeiro.jpg"
import Segundo from './img/autores/segundo.jpg'
import Terceiro from './img/autores/terceiro.png'
import Quarto from './img/autores/quarto.png'


var posicao = 0;

function Creditos (){
    return(
        <div id="divCreditos">
            <div class="container">
              <div class="row">
                <div class="col-2">
                  <img  className="backf" id="voltar" src="https://img.icons8.com/ios-glyphs/60/000000/circled-left.png" onClick={Recuar} onMouseOver={mudaCorL} onMouseOut={voltaCorL} alt='->' ></img>
                </div>
             <div class="col-8">
                <p id="madeby">Feito por:</p>
                <p id="name">Rafael Romariz</p>
                <div class="text-center">
                <img className="rounded-circle img-fluid foto" id="foto-primeiro" src={Primeiro} alt="200X200"></img>
                <img className="rounded-circle img-fluid foto" id="foto-segundo" src={Segundo} alt="200X200"></img>
                <img className="rounded-circle img-fluid foto" id="foto-terceiro" src={Terceiro} alt="200X200"></img>
                <img className="rounded-circle img-fluid foto" id="foto-quarto" src={Quarto} alt="200X200"></img>
                </div>

             </div>
                <div class="col-2">
                  <img  className="backf" id="avancar" src="https://img.icons8.com/ios-filled/50/000000/circled-right.png" onMouseOver={mudaCorR} onMouseOut={voltaCorR} onClick={Avancar} alt='->'></img>
                </div>
          </div>
    </div>
<br></br>
  <div>
  <a id="textoPrim"> Desenvolvedor front-end | UI/UX</a>
  </div>
<br></br>
    <div id="ctt">
        <a id="linkedin" href="http://linkedin.com/in/rafael-romariz-b2b45322b/">
          <img className="logo" src="https://img.icons8.com/metro/26/000000/linkedin.png" width={30} height={30} />
        </a>
        <a id="git" href="http://github.com/IRMZI">
          <img id="gitlink" className="logo" src="https://img.icons8.com/ios-filled/50/000000/github.png" width={30} height={30} />
        </a>
          <a id="ig" href="http://instagram.com/Romariz.dev">
        <img className="logo" src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v2.png" width="30px" height="30px" />
        </a>
      </div>
 </div>
    )
}


const Avancar = () => {    
    posicao++;

    if (posicao === 1)
    {    
        Erik();
    }

    if (posicao === 2) 
    {
        
        João();

    }

    if (posicao === 3)//Numero maximo
    {
        posicao = 0;
        Rafael();
    }
}

const Recuar = () => {
  posicao -=1;
      
      if (posicao === -1)
      {
          João();
          posicao = 2;
      }
  
      if (posicao === 1)
      {
          Erik();
      }
  
      if (posicao === 0)
      {
          Rafael();
      }
  }


const Rafael = () =>{
  document.getElementById('name').innerText = "Rafael Romariz";
  document.getElementById("linkedin").href = "http://linkedin.com/in/rafael-romariz-b2b45322b/";
  document.getElementById("git").href = "http://github.com/IRMZI";
  document.getElementById("ig").href = "http://instagram.com/Romariz.dev";
  document.getElementById('textoPrim').innerText='Desenvolvedor front-end | UI/UX';

  document.getElementById('foto-segundo').style.display = 'none';
  document.getElementById('foto-terceiro').style.display = 'none';
  document.getElementById('foto-quarto').style.display = 'none';
  document.getElementById('foto-primeiro').style.display = 'inline';
}

const Erik = () =>{
  document.getElementById('name').innerText = "Erik Oliveira";
  document.getElementById("linkedin").href = "https://www.linkedin.com/in/erikoliveira28";
  document.getElementById("git").href = "https://github.com/SoL1dcs";
  document.getElementById("ig").href = "http://instagram.com/erikoliveira818";
  document.getElementById('textoPrim').innerText='Lider de desenvolvimento';

  document.getElementById('foto-primeiro').style.display = 'none';
  document.getElementById('foto-terceiro').style.display = 'none';
  document.getElementById('foto-quarto').style.display = 'none';
  document.getElementById('foto-segundo').style.display = 'inline';
}

const João = () =>{
  document.getElementById('name').innerText = "João Zanardi";
  document.getElementById("linkedin").href ="https://www.linkedin.com/in/joao-vitor-565b14250/";
  document.getElementById("git").href = "https://github.com/joaoVitorZanardi";
  document.getElementById("ig").href = "https://instagram.com"; 
  document.getElementById('textoPrim').innerText="Desenvolvedor e Lider do squad";

  document.getElementById('foto-primeiro').style.display = 'none';
  document.getElementById('foto-segundo').style.display = 'none';
  document.getElementById('foto-quarto').style.display = 'none';
  document.getElementById('foto-terceiro').style.display = 'inline';
}

const mudaCorR = () => {
  document.getElementById('avancar').src="https://img.icons8.com/ios-glyphs/60/7115F2/circled-right.png"
}

const voltaCorR = () => {
  document.getElementById('avancar').src="https://img.icons8.com/ios-glyphs/60/000000/circled-right.png"
}

const mudaCorL = () => {
  document.getElementById('voltar').src="https://img.icons8.com/ios-glyphs/60/7115F2/circled-left.png"
}

const voltaCorL = () => {
  document.getElementById('voltar').src="https://img.icons8.com/ios-glyphs/60/000000/circled-left.png"
}

export default Creditos