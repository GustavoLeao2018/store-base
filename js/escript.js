function mostrar(titulo){
    let titulos = [ 'inicio', 'destaques', 'loja', 'cadastro', 'desenvolvimento', 'sobre' ];
    let footerpagina = document.getElementById('footer-pagina').classList;

    for(let i = 0; i < titulos.length; i++){
        
        if(titulos[i] != titulo){ 
            document.getElementById(titulos[i].toLowerCase()).style.display = 'none';            
        }
        else if(titulos[i] == 'destaques'){
            document.getElementById(titulos[i].toLowerCase()).style.display = 'block';
            footerpagina.remove('footer');
            footerpagina.add('footer-embaixo');
        }
        else if(titulos[i] == 'loja'){
            document.getElementById(titulos[i].toLowerCase()).style.display = 'block';
            footerpagina.remove('footer');
            footerpagina.add('footer-embaixo');
        }
        else {
            document.getElementById(titulo.toLowerCase()).style.display = 'block';
            footerpagina.add('footer');
        }
    }
  
}


function copiar(texto) {
    var copyText = document.getElementById("comando");
    copyText.select(); 
    document.execCommand("copy");
    console.log(copyText.value);
}


