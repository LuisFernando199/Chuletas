// Una clase es una plantilla para crear objetos, y no se aplica el metodo hoisting
//En las propiedades se suele usar un guion bajo_

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){ //esto es un metodo(funcion) que llevaremos a la clase hija
       return this._nombre + ' ' + this.apellido;
    }
} 
//ahora que esta creada la clase podemos crear objetos:
let persona1 = new Persona('Luis', 'Martinez');
// en el siguiente se modifica el nombre usando el metodo se:
persona1.nombre = 'Geo Lola';

// se llama al metodo get para sacar el atributo nombre:
console.log(persona1.nombre);
let persona2 = new Persona('Carlos', 'Aquino');
console.log(persona2);
//metodo get para leer su valor o un set para modificarlo


//----Herencias vamos hacer que la clase hija herede las caracteristicas de la padre
 // para heredar usamos la palabra extends
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);// con super llamamos al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //----Sobreescritura, para modificar el metodo de la clase padre:
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido + ' ' + this._departamento;// puedes poner super.nombreCompleto(), para no tener que poner _nombre y _apellido
    }
}
let empleado1 = new Empleado('Miguel', 'Radu', 'Conductor');
console.log(empleado1);
console.log(empleado1.nombreCompleto());// aqui accedemos al meto heredado de la clase padre

