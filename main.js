/*----------------SECCION 1-INTRODUCCION
//Ejercicio 1: estructura ya creada
//Ejercicio 2:
console.log("Seccion1 - Ejercicio 2");
let a = 10;
let b = 5;
let c = a + b;
console.log("La suma de a y b es: ", c);

Ejercicio 3 (modificado con humor)
console.log("Seccion1 - Ejercicio 3");
let numeroAdivinado = prompt("Piense en un número y yo lo adivinaré: ")
console.log("Su número es", numeroAdivinado);
*/

/*----------------SECCION 2-OPERADORES LOGICOS Y CONDICIONALES
//Ejercicio 1: 
console.log("Seccion2 - Ejercicio 1");
let num1 = -45;
let num2 = -2;
if(num1>num2){
  c=num1;
  console.log("El mayor de los dos números es: ",c);
}else{
  c=num2
  console.log("El mayor de los dos números es: ",c);
}

Ejercicio 2:
console.log("Seccion2 - Ejercicio 2");
let numero = prompt("Ingrese un número para determinar si este es par o no: ");
if(numero % 2 == 0){
  console.log("El número ",numero, " es par.");
}else{
  console.log("El número ",numero, " es impar.");
}
*/

/*----------------SECCION 3-OPERADORES DE ASIGNACION Y BUCLES
//Ejercicio 1:
console.log("Seccion3 - Ejercicio 1");
let variableDiez = 10;
while(variableDiez>0){
  console.log(variableDiez),
  variableDiez--;
}

//Ejercicio 2:
console.log("Seccion3 - Ejercicio 2");
let nroIngresado;
do{
  nroIngresado = prompt("Ingrese un número mayor a 100: ");
}while(nroIngresado<100)
console.log("Ingresó el número: ",nroIngresado);
*/

/*----------------SECCION 4-FUNCIONES JAVASCRIPT
//Ejercicio 1
console.log("Seccion4 - Ejercicio 1");
let par = prompt("Ingrese un número para determinar si es par: ");
const esPar = (par)=>{
  if(par % 2 == 0){
    return true;
  }else{
    return false;
  }25
}
console.log("El número ",par," es par:",esPar(par));

//Ejercicio 2
console.log("Seccion4 - Ejercicio 2");
let celcius = prompt("Ingrese grados celsius: ");
const convertirCelsiusAFahrenheit  = (celcius) =>{
  let fahrenheit = celcius*1.8+32
  console.log(celcius,"grados Celsius equivalen a ",fahrenheit,"grados Fahrenheit.")
}
console.log(convertirCelsiusAFahrenheit(celcius));
*/

/*----------------SECCION 5-OBJETOS JAVASCRIPT
//Ejercicio 1
console.log("Seccion5 - Ejercicio 1");
let persona={
  nombre: "Ana",
  edad: "21",
  ciudad: "Luján de Cuyo",
  setCiudad: function(nuevaCiudad){
    this.ciudad=nuevaCiudad;
  },
};
console.log("Nombre: ",persona.nombre,", Edad: ",persona.edad,", Ciudad de la persona ANTES:",persona.ciudad);
let newCity=prompt("Ingrese la nueva ciudad para la persona: ");
persona.setCiudad(newCity);
console.log("Nombre: ",persona.nombre,", Edad: ",persona.edad,", Ciudad de la persona LUEGO:",persona.ciudad);

//Ejercicio 2
console.log("Seccion5 - Ejercicio 2");
let libro={
  titulo: prompt("Ingrese el títitulo"),
  autor: prompt("Ingrese el autor"),
  añoPublic : prompt("Ingrese el año de publicación: "),
  getAntiguedad: function(añoPublic){
    if((2024-añoPublic)>10){
      return true;
    }else{
      return false;
    }
  },
};
console.log("El libro",libro.titulo," de ",libro.autor,", ¿tiene más de diez años de antiguedad?: ", libro.getAntiguedad(libro.añoPublic));
*/

/*----------------SECCION 6-ARRAYS
//Ejercicio 1
console.log("Seccion6 - Ejercicio 1");
const numeros = [1,2,3,4,5,6,7,8,9,10];
let numerosDuplic=[];
for(let i=0; i<10; i++){
  numerosDuplic[i] = numeros[i]*2;
}
console.log("Números originales: ",numeros);
console.log("Números duplicados en su valor: ",numerosDuplic);

//Ejercicio 2
console.log("Seccion6 - Ejercicio 2");
let pares = [];
console.log("Primeros 10 números pares: ");
for(let i=1;i<=20;i++){
  if(i%2==0){
    pares[i]=i;
    console.log(i);
  }
}
*/
//----------------SECCION 7-DOM

//Ejercicio 1
const parrafo=document.getElementById("parrafosAzul");
const button1=document.getElementById("buttonCambiarCol")
const cambiarColor = ()=>{
  if(parrafo.classList.contains("parrafosAzul")){
    parrafo.classList.remove("parrafosAzul");
  }else{
    parrafo.classList.add("parrafosAzul");
  }
}
button1.addEventListener("click", ()=>{
  cambiarColor();
})

//Ejercicio 2
const button2=document.getElementById("buttonRecibe");
const obtenerInfo = ()=>{
  const texto=document.getElementById("textoIngresado").value;
  alert("El texto ingresado fue: "+texto);
}
button2.addEventListener("click", ()=>{
  obtenerInfo();
})

//----------------SECCION 8-EVENTOS EN DOM
//Ejercicio 1
const elem1 = document.getElementById("el1");
elem1.addEventListener("click",()=>{
  console.log(document.getElementById("el1").textContent);
})

const elem2 = document.getElementById("el2");
elem2.addEventListener("click",()=>{
  console.log(document.getElementById("el2").textContent);
})

const elem3 = document.getElementById("el3");
elem3.addEventListener("click",()=>{
  console.log(document.getElementById("el3").textContent);
})

const elem4 = document.getElementById("el4");
elem4.addEventListener("click",()=>{
  console.log(document.getElementById("el4").textContent);
})

//Ejercicio 2
const desButton = document.getElementById("desButton");
const habButton = document.getElementById("habButton");
const input = document.getElementById("input");

const inhabButton = ()=>{
  document.getElementById("input").disabled=true;
}

const habilitButton = () =>{
  document.getElementById("input").disabled=false;
}

desButton.addEventListener("click", ()=>{
  inhabButton();
})

habButton.addEventListener("click",()=>{
  habilitButton();
})

//----------------SECCION 9-LOCAL STORAGE
//Ejercicio 1
const buttonElim=document.getElementById("buttonElim");
const buttonGuard=document.getElementById("buttonGuard");
const mail=document.getElementById("mail");

buttonGuard.addEventListener("click",()=>{
  guardarMail();
  const result = localStorage.getItem("datosMail")
  if(result){
    const correoGuardado = document.getElementById("CorreoGuardado");
    const parsedResult = JSON.parse(result);
    correoGuardado.innerHTML=`<p>Correo guardado: ${parsedResult.mail}</p>`;
  }else{
    console.log("Los datos no existen.")
  }
});

buttonElim.addEventListener("click",()=>{
  eliminarMail();
});

const eliminarMail=()=>{       
  const mail=document.getElementById("mail").value;
  localStorage.removeItem("datosMail", JSON.stringify({mail}));
}

const guardarMail=()=>{       
  const mail=document.getElementById("mail").value;
  localStorage.setItem("datosMail", JSON.stringify({mail}));
}


