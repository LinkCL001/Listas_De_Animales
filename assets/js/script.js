class Propietario {
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    
}

class Animal extends Propietario {//clase hijo de propietario
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