import '../../css/reset.css'
import '../../css/criadores.css'
import '../../css/fonts.css'
import Voltar from "./Funcoes/Voltar"
import Avancar from "./Funcoes/Avancar"
import Primeiro from "./img/autores/primeiro.jpg"
import Segundo from './img/autores/segundo.jpg'
import Terceiro from './img/autores/terceiro.png'
import Quarto from './img/autores/quarto.png'


var posicao = 0;

function Creditos (){
    return(
      <section  id='criadores'>
        <div id="divCreditos">
            <div class="container">
              <div class="row">
                <div class="col-2">
                  <Voltar />
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
                  <Avancar />
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
 </section>
    )
}



export default Creditos