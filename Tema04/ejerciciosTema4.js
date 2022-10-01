/* Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos. */

let numeroIf = -4;

function esPositivo(x){
        if (x < 0){
            console.log("Es negativo");
        }else if(x == 0){
            console.log("Es 0");
        }else{
            console.log("Es positivo");
        }
}

esPositivo(numeroIf);

/*Crea un bucle While, este bucle tendrá que tener como condición que la variable 
numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
Incrementar el valor de la variable en uno cada vez que se ejecute.
Mostrarlo por pantalla cada vez que se ejecute.*/

let numeroWhile = 0;

function sumandoNumeroWhile(x){
    while (x < 3){
        x = x + 1
        console.log(x);
    }
    
}

sumandoNumeroWhile(numeroWhile);

/*Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.
*/

let numeroDo = 0;

do{
    numeroDo = 3 
    console.log(numeroDo);
}while(numeroDo < 3)



/* Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición 
será que la variable sea igual o menor que 3, 
se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.*/

let numeroFor = 0;

function sumandoNumeroFor(x){
    for( let x = 0; x < 3; x++)
        console.log(x);
    }

sumandoNumeroFor(numeroFor);

/* Por último, para el Switch, deberás crear la variable estacion, y 
distintos case para las cuatro estaciones del año. Dependiendo del valor de la 
variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. 
También habrá que poner un default para cuando el valor de la variable no sea una estación.
*/


let estacion = "verano";

switch (estacion){
    case "verano":
        console.log("Es verano");
        break;
    case "invierno":
        console.log("Es invierno");
        break;
    case "otoño":
        console.log("Es otoño");
        break;
    case "primavera":
        console.log("Es primavera");
        break;
    default:
        console.log("Eso no es una estacion");
}

