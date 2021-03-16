
// miFuncion(4, 2);  puedo llamar una funcion desde donde quiera por el principio de hoisting

//delcaracion de la funcion:
function miFuncion(a, b){
  return a + b;
}
// llamada a la funcion:
let resultado = miFuncion(2, 3);

console.log(resultado);

// declarar una funcion de tipo expresion:
let sumar = function (a,b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

//funciones que se llaman a si misma (self invoking):
(function(a, b){
   console.log('Ejecutando la funcion ' + (a + b));
})(3, 4);

// tipo de datos las funciones pueden ser descritas como objetos porque tiene propiedades y metodos:

console.log(typeof miFuncion);
 var miFuncionTexto = miFuncion.toString();
 console.log(miFuncionTexto);

 // funciones arrow (flecha) evitas poner llaves y return:
// (a, b) son parametros es decir variables que se les dara valor y cuando llamas la fincion (aqui aplicas los argumerntos)
 const sumarFuncionTipoFlecha = (a, b) => a + b;

 Resultado = sumarFuncionTipoFlecha(5, 10);
 console.log(Resultado);
 
 // parametros y argumentos muestra que argumento 0 es 5 y 1 es 4 y 2 es 7 pero no lo realiza:
 let restar = function (c, d){
   console.log(arguments[0]);
   console.log(arguments[1]);
   console.log(arguments[2]);
   return c - d
 };

 reSultado = restar(5 , 4, 7);
 console.log(reSultado);

 // llamamos la funcion y luego la definimos:

 let operacion = sumarTodo(5, 4, 13, 10, 9);
 console.log(operacion);

 function sumarTodo(){
    let Suma = 0;
    for(let i = 0; i < arguments.length; i++){
     Suma += arguments[i]; // Suma = Suma + arguments[i]
    }
    return Suma;
 }

 // tipos primitivos porque no tiene atributos ni metodos se le llama paso por valor y no se pueden modificar:
 let x = 10;

 function cambiarValor(a){
   a = 20;
   
 }
  
  cambiarValor(x);
   console.log(x);// x valdra 10, y a tambien valdra 10, pero no podra cambiar su valor
   //console.log(a);// esta variable no funciona porque esta fuera del metodo


   //paso por referencia creando un bojeto, aqui si que modificas:

   const persona = {
     nombre : 'Luis',
     apellido : 'Fernando'
   }

   function cambiarValorObjeto(p1){
     p1.nombre = 'Vicent';
     p1.apellido = 'Salvador';
   }
   // este es el paso por referencia
   cambiarValorObjeto( persona );
   console.log(persona);
