class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    } 
    datosPropietario(){
        return `El Nombre del dueño es: ${this.nombre}. El Domicilio es: ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}`
    }
};

class Animal extends Propietario {       //clase hijo de propietario
    constructor (tipo){
        this._tipo = tipo; 
    }
    get tipo () {
        return this._tipo;
    }
    // set tipo(tipo_nuevo) {
    //     this._tipo = tipo_nuevo;
    // }
}

class Mascota extends Animal {
    constructor (nombreMascota, enfermedad){
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota(){
        return this._nombreMascota;
    }
    set nombreMascota (nombreMascotaNuevo){
        this._nombreMascota = nombreMascotaNuevo;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(enfermedadNueva){
        this._enfermedad = enfermedadNueva;
    }
}
let agregar = document.getElementsByTagName('button');

agregar.addEventListener('click', observando);

function agregando(){
    let nombre = document.getElementById("propietario").value;
    let direccion = document.getElementById("telefono").value;
    let telefono = document.getElementById("direccion").value;
    let tipo = document.getElementById("tipo").value
    let nombreMascota = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("direccion").value;

}

function observando() {
    const nombreData = agregando();
    const nombre = nombreData.nombre;
    const direccion = nombreData.direccion;
    const telefono = nombreData.telefono;
    const tipo = nombreData.tipo;
    const nombreMascota = nombreData.nombreMascota;
    const enfermedad = nombreData.enfermedad;
}
