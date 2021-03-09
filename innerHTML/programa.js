function mostrarNombre(parametro){
    var nombre = parametro.value;
    var saludo = "hola " + nombre;

    document.getElementById('test').innerHTML = saludo;
}
