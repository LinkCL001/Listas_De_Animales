class Propietario {
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    } 
    datosPropietario(){
        return `El Nombre del dueño es: ${this.nombre}. El Domicilio es: ${this.direccion}, y el numero telefonico de contacto: ${this.telefono}`
    }
};

class Animal extends Propietario {       //clase hijo de propietario
    constructor (nombre, direccion, telefono, tipo){
        super(nombre, direccion, telefono)
        this._tipo = tipo; 
    }
    get tipo () {
        return `El tipo de animal es un: ${this._tipo}`;
    }
    
}

class Mascota extends Animal { //clase hijo de animal, nieto de la clase propietario
    constructor (nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo)
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota(){
        return this._nombreMascota;
    }
    set nombreMascota (nombreMascotaNueva){
        this._nombreMascota = nombreMascotaNueva;
    }
    get enfermedad(){
        return this._enfermedad;
    }
    set enfermedad(enfermedadNueva){
        this._enfermedad = enfermedadNueva;
    }
}

let agregar = document.querySelector('form')

let lista = (mascota) => {
    return `<li>${mascota.datosPropietario()}</li><li>${mascota.tipo}, mientras que el nombre de la mascota es: ${mascota.nombreMascota} y la enfermedad es ${mascota.enfermedad}</li>`

}

agregar.addEventListener('submit', (observando) => {
    observando.preventDefault()
    let nombre = document.querySelector("#propietario").value;
    let direccion = document.querySelector("#direccion").value;
    let telefono = document.querySelector("#telefono").value;
    let tipo = document.querySelector("#tipo").value;
    let nombreMascota = document.querySelector("#nombreMascota").value;
    let enfermedad = document.querySelector("#enfermedad").value;
    let resultado = document.querySelector('ul');

    let mascota = new Mascota (nombre, direccion, telefono, tipo, nombreMascota, enfermedad)
    resultado.innerHTML = lista(mascota)
})

