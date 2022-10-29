import '../../../css/criadores.css'



var posicao = 0;

function Avancar() {
    const Avancar = () => {    
        posicao++
    
        if (posicao === 1)
        {
            document.getElementById('name').innerText = "Erik Oliveira";
            Erik();
            document.getElementById("linkedin").href = "https://www.linkedin.com/in/erikoliveira28";
            document.getElementById("git").href = "https://github.com/SoL1dcs";
            document.getElementById("ig").href = "http://instagram.com/erikoliveira818";
            document.getElementById('textoPrim').innerText='Lider de desenvolvimento';
        }
    
        if (posicao === 2) 
        {
            document.getElementById('name').innerText = "João Zanardi";
            João();
            document.getElementById("linkedin").href ="https://www.linkedin.com/in/joao-vitor-565b14250/";
            document.getElementById("git").href = "https://github.com/joaoVitorZanardi";
            document.getElementById("ig").href = "https://instagram.com"; 
            document.getElementById('textoPrim').innerText="Desenvolvedor e Lider do squad";
        }
    
        if(posicao === 3)
        {
            document.getElementById('name').innerText = "Lucas";
            Lucas();
            document.getElementById("linkedin").href ="https://www.linkedin.com/in/lucas-henrique-da-silva-a72498200/";
            document.getElementById("git").href = "https://github.com";
            document.getElementById("ig").href = "http://instagram.com/lucashenrique.dasilva.77";
            document.getElementById('textoPrim').innerText="Designer e Scrum Master";
        }
    
        if (posicao === 4)//Numero maximo
        {
            posicao = 0;
            document.getElementById('name').innerText = "Rafael Romariz";
            Rafael();
            document.getElementById("linkedin").href = "http://linkedin.com/in/rafael-romariz-b2b45322b/";
            document.getElementById("git").href = "http://github.com/IRMZI";
            document.getElementById("ig").href = "http://instagram.com/Romariz.dev";
            document.getElementById('textoPrim').innerText='Desenvolvedor front-end | UI/UX';
        }
    }

    const Rafael = () =>{
        document.getElementById('foto-segundo').style.display = 'none';
        document.getElementById('foto-terceiro').style.display = 'none';
        document.getElementById('foto-quarto').style.display = 'none';
        document.getElementById('foto-primeiro').style.display = 'inline';
    }

    const Erik = () =>{
        document.getElementById('foto-primeiro').style.display = 'none';
        document.getElementById('foto-terceiro').style.display = 'none';
        document.getElementById('foto-quarto').style.display = 'none';
        document.getElementById('foto-segundo').style.display = 'inline';
    }

    const João = () =>{
        document.getElementById('foto-primeiro').style.display = 'none';
        document.getElementById('foto-segundo').style.display = 'none';
        document.getElementById('foto-quarto').style.display = 'none';
        document.getElementById('foto-terceiro').style.display = 'inline';
    }

    const Lucas = () =>{
        document.getElementById('foto-primeiro').style.display = 'none';
        document.getElementById('foto-segundo').style.display = 'none';
        document.getElementById('foto-terceiro').style.display = 'none';
        document.getElementById('foto-quarto').style.display = 'inline';
    }

    const mudaCor = () => {
        document.getElementById('avancar').src="https://img.icons8.com/ios-glyphs/60/7115F2/circled-right.png"
    }

    const voltaCor = () => {
        document.getElementById('avancar').src="https://img.icons8.com/ios-glyphs/60/000000/circled-right.png"
    }
  
    return (
      <img  className="backf" id="avancar" src="https://img.icons8.com/ios-filled/50/000000/circled-right.png" onMouseOver={mudaCor} onMouseOut={voltaCor} onClick={Avancar} alt='->' ></img>
    );
  }

export default Avancar