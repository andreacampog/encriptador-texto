let btnCopiar = document.querySelector(".copiar");
let cuadroMensajes = document.querySelector(".form__outbox--msg");
let imagen = document.querySelector(".msg--img");
let cuadroResultado = document.querySelector(".form__outbox--result");
let textoDesencriptado = document.querySelector("#result");


function limpiarTextArea(){
    document.querySelector("#entrada").value = " ";  
    cuadroResultado.style.display = 'none';
    mostrarElemento(cuadroMensajes);
    mostrarElemento(imagen);    
}



function validarEntrada(){   
    btnCopiar.classList.remove("ocultar");
    let textoEntrada = document.querySelector("#entrada").value;
    let contenido = textoEntrada.trim(); //quito espacios y tabulaciones
    if (contenido === '') {
        //alert('El texto no puede estar en blanco.'); 
        textoEntrada.focus(); // Con esto espero por el text area de nuevo     
        validarEntrada();       
    }
    else{
        mostrarElemento(cuadroMensajes);
        return contenido;
       } 
    
}

function encriptarEntrada(){
    mostrarResultado((procesoEncriptar(validarEntrada())));      
    
}

function desencriptarEntrada(){
    mostrarResultado((procesoDesencriptar(validarEntrada())));      
}


function ocultarElemento(elemento){
    elemento.classList.add("ocultar");   
}


function mostrarElemento(elemento){
    elemento.classList.remove("ocultar");   
}


function mostrarResultado(resultado){
    ocultarElemento(imagen);
    ocultarElemento(cuadroMensajes);
    cuadroResultado.style.display = 'block';
    textoDesencriptado.innerHTML = resultado;    
}

function copiarElemento(){
    let texto = document.querySelector("#result");
    let contenidoTexto = texto.innerHTML;
    navigator.clipboard.writeText(contenidoTexto);  
    btnCopiar.classList.toggle("ocultar");
    //alert("Copiado con exito");
    
}

function procesoEncriptar(texto){
    let listaSalida = [];
    let letra;
    let lista= texto.split("");    
    for(let i=0; i<=texto.length-1; i++){  
        if(lista[i] === "a"){
            letra= "ai";       
        }else if(lista[i] === "e"){
            letra = "enter"; 
            }
            else if(lista[i] === "i"){
                    letra= "imes";       
                }else if(lista[i] === "o"){
                    letra = "ober"; 
                    }else if(lista[i]==="u"){
                        letra = "ufat"                
        }else{
            letra =lista[i];                
        }listaSalida.push(letra);           
        
    }return listaSalida.join("");           
}

function procesoDesencriptar(texto){        
    let textoDesencriptado = texto
                                    .replaceAll("enter", "e")
                                    .replaceAll("ai", "a")        
                                    .replaceAll("imes", "i")
                                    .replaceAll("ober", "o")
                                    .replaceAll("ufat", "u");

    console.log(textoDesencriptado);
    return textoDesencriptado;
}  




function menuHamburguesa(){
    let menuHamburguesa = document.querySelector('.hamburguer-menu');
    let contenido = document.querySelector('.menu--info-proyect');   
    menuHamburguesa.classList.toggle('menu-abierto');
    contenido.classList.toggle('menu-abierto');

}

    
// Agrega un evento de clic al documento

document.addEventListener('click', function(event) {
    let menuHamburguesa = document.querySelector('.hamburguer-menu');
    let contenido = document.querySelector('.menu--info-proyect');   
    const estaDentroDelMenu = menuHamburguesa.contains(event.target);
    
    
    // Cierra el menú si el clic no está dentro del menu hamburguesa
    if (!estaDentroDelMenu && menuHamburguesa.classList.contains('menu-abierto')) {
      menuHamburguesa.classList.remove('menu-abierto');
      contenido.classList.remove('menu-abierto');
    }
  });





    
  
