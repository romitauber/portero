const displayValor1 = document.getElementById('piso');
const displayValor2 = document.getElementById('depto');
const numeroBotones = document.querySelectorAll('.boton');
const valor1 = [];
let numeroPiso = "";
let numeroDepto = "";


numeroBotones.forEach(boton => {
    boton.addEventListener('click', function agregarNumeroPiso(numero) {
        valor1.push(boton.innerHTML);
        let display1 = valor1 [0];
        let display2 = valor1 [1];
        let display3 = valor1 [2];
        
            if (display2 === undefined) {
                display2 = " ";
            }
        display1 = valor1 [0] + display2;
            if (display3 === undefined) {
                display3 = " ";
            }
            numeroPiso = display1;
            numeroDepto = display3;
        document.getElementsByName("valor1")[0].value = numeroPiso;
        document.getElementsByName("valor2")[0].value = numeroDepto;
        console.log(numeroPiso);
        console.log(numeroDepto);
    })})

    
function llamar() {
    numPiso = parseFloat(numeroPiso);
    console.log(typeof numPiso);
    numDepto = parseFloat(numeroDepto);
    console.log(numDepto);

    if (numDepto < 1) {
        const mensaje1 = document.createElement('H2');
        mensaje1.textContent = `No existe el N° de departamento 0, por favor verifique los valores ingresados` ;  
        mensaje1.classList.add('mensaje2');
        const mensaje = document.querySelector(".mensaje");
        mensaje.appendChild(mensaje1);
    } else if (numDepto >8) {
         const mensaje1 = document.createElement('H2');
         mensaje1.textContent = `No existe el N° de departamento ${numDepto}, por favor verifique los valores ingresados` ;  
         mensaje1.classList.add('mensaje2');
         const mensaje = document.querySelector(".mensaje");
         mensaje.appendChild(mensaje1);
     } else if ( !(numPiso <= 44) && ( numDepto <=8) ){
        const mensaje1 = document.createElement('H2');
        mensaje1.textContent = `No existe el N° de piso ${numPiso}, por favor verifique los valores ingresados`;  
        mensaje1.classList.add('mensaje2');
        const mensaje = document.querySelector(".mensaje");
        mensaje.appendChild(mensaje1);
     } else if ( (numPiso <= 44) && (numDepto <=8) && (numDepto >=1)){
        const mensaje1 = document.createElement('H2');
        mensaje1.textContent = `Llamando al piso N° ${numPiso} Departamento ${numDepto}`;  
        mensaje1.classList.add('mensaje2');
        const mensaje = document.querySelector(".mensaje");
        mensaje.appendChild(mensaje1);
     }
     
     
  }   

function borrar() {
    valor1.pop();
    valor1.pop();
    valor1.pop();
    numeroPiso = "";
    numeroDepto = "";
    document.getElementsByName("valor1")[0].value = numeroPiso;
    document.getElementsByName("valor2")[0].value = numeroDepto;

}
