var posicao = 0;

function Voltar() {
    const recuar = () => {
        posicao -= 1;

        if (posicao === -1) //numero minimo
        {
            posicao = 3; 
            document.getElementById('name').innerText = "Lucas";
            document.getElementById('foto').src="https://github.com/IRMZI/Landing-Page-teufuturo/blob/main/imgs/autores/quarto.png?raw=true";
            document.getElementById("linkedin").href ="https://www.linkedin.com/in/lucas-henrique-da-silva-a72498200/";
            document.getElementById("git").href = "https://github.com";
            document.getElementById("ig").href = "http://instagram.com/lucashenrique.dasilva.77";
            document.getElementById('textoPrim').innerText="Designer e Scrum Master";
        }
    
        if (posicao === 2)
        {
            document.getElementById('name').innerText = "João Zanardi";
            document.getElementById('foto').src="https://github.com/IRMZI/Landing-Page-teufuturo/blob/main/imgs/autores/terceiro.png?raw=true";
            document.getElementById("linkedin").href ="https://www.linkedin.com/in/joao-vitor-565b14250/";
            document.getElementById("git").href = "https://github.com/joaoVitorZanardi";
            document.getElementById("ig").href = "http://instagram.com"; 
            document.getElementById('textoPrim').innerText="Desenvolvedor e Lider do squad";
        }
    
        if (posicao === 1)
        {
            document.getElementById('name').innerText = "Erik Oliveira";
            document.getElementById('foto').src="https://github.com/IRMZI/Landing-Page-teufuturo/blob/main/imgs/autores/segundo.jpg?raw=true";
            document.getElementById("linkedin").href = "https://www.linkedin.com/in/erikoliveira28";
            document.getElementById("git").href = "https://github.com/SoL1dcs";
            document.getElementById("ig").href = "http://instagram.com/erikoliveira818";
            document.getElementById('textoPrim').innerText='Lider de desenvolvimento';
        }
    
        if (posicao === 0)
        {
            document.getElementById('name').innerText = "Rafael Romariz";
            document.getElementById('foto').src="https://github.com/IRMZI/Landing-Page-teufuturo/blob/main/imgs/autores/primeiro.jpg?raw=true";
            document.getElementById("linkedin").href = "http://linkedin.com/in/rafael-romariz-b2b45322b/";
            document.getElementById("git").href = "http://github.com/IRMZI";
            document.getElementById("ig").href = "http://instagram.com/Romariz.dev";
            document.getElementById('textoPrim').innerText='Desenvolvedor front-end | UI/UX';
        }
    }
  
    return (
      <img  className="backf" id="avancar" src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png" onClick={recuar} alt='->'></img>
    );
  }

export default Voltar