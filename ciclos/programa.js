/*
  //while
let contador = 0;
while( contador < 3 ){
    console.log(contador);
    contador++;
}
  // do while
do{
    console.log(contador);
    contador++;
}while(contador < 3);
*/
 // for con break
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
		 console.log(contador);
        break;//termina la ejecución del ciclo for por completo 
    }
   
}
  // for con continue : que deja de contar los impares para contar los pares
/* for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;//ir a la siguiente iteracion
    }
    console.log(contador);
}*/
