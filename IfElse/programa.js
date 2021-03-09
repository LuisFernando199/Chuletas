function determinarEdades(entrada){
      var resultado = null;
      var edad = entrada.value;

      if(edad > 0 && edad < 12){
           resultado = "AA y A";
      }else if(edad >= 12 && edad < 15){
          resultado = " B, AA y A";

      }else if (edad >= 15 && edad < 18){
          resultado = "B15, AA, A";
      }else if ( edad >= 18){
          resultado = " Todas las películas ";
      }

   document.getElementById("resultados") .innerHTML = resultado;     

}
