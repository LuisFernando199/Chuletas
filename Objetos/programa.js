let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
       return this.idioma.toUpperCase();
    },
    set lang(lang){
     this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
//aqui vemos en mayusculas el varlo es usando get:
console.log(persona.lang);
//aqui con SET modificamos el valor de lang y de ES pasa a EN y los 2 dan EN:
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);
//Si poner get delante de nombreCompleto cuando llames a la funcion no tendras que poner ().
// get nombreCompleto(){return this....}/ console.log(persona.nombreCompleto);
// formas de mirar una propiedad:
console.log( persona.nombre + ' ' + persona.apellido);

console.log( persona['apellido'] );

let personasArray = Object.values(persona);
console.log(personasArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

//for in creas una variable y la recorres:
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}

/* crar objetos con new que almacena en otra espacio vacio (  una puede estar en 0x333 y esta en 0x444):
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log( persona2.tel );*/
// Para eliminar objetos puedes usar delete nombreProiedad.nombreObjeto;

//----CONSTRUCTORES de objetos:
//los constructores de objetos empiezan en mayuscula
//nuestro parametro es igual que la variable(lado derecho), el de la izquierda es la propiedad
function Persona(nombre1, apellido, email){
    this.nombre = nombre1;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto2 = function(){
        return this.nombre + ' ' + this.apellido;
        
    }
}

//crear un objeto en un nuevo espacio de memoria
let padre = new Persona('Luis', 'Martinez', 'L@hotm.com');
console.log(padre.nombreCompleto2());
//Unan la misma propiedad pero con diferentes valores.
let madre = new Persona('Laura', 'Fernandez');
console.log(madre);

//------prototype
// podemos agregar propiedades usando prototype :
Persona.prototype.tel = '695695695'
console.log(padre.tel);

//---- metodo Call:
// nos permite llamar un metodo definido en un objeto desde otro objeto
let persona1 = {
    nombre: 'Jose',
    apellido: 'Pere',
    nombreCompleto1 : function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}
let persona3 = {
    nombre: 'Carlos',
    apellido: 'Lara',
}
// Usamos call para usar el metodo persona1.nombreCompleto1 con los datos de persona3
console.log(persona1.nombreCompleto1());

console.log(persona1.nombreCompleto1.call(persona3, 'Ingeniro', '696956'));
//este call tambien muestra unos argumentos de titulo y tel definidos en la funcion

/*----metodo apply: se usa igual que el metodo call, la diferencia esque en los parametros,
que pasas en la función luego al llamarlos en vez de hacerlo uno a uno,
haces un arreglo con los con los parametros que pusiste y le añades el nombre del arreglo a la llamada.*/
