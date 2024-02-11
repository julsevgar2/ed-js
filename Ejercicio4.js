// Ejercicio4.js

class Conductor {
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.licencia = licencia;
    }

    // Mostramos los datos del conductor
    mostrarDatosConductor() {
        console.log(`Nombre del conductor: ${this.nombre}`);
        console.log(`Número de licencia: ${this.licencia}`);
    }
}

class Autobus {
    constructor(capacidad, matricula, listadoConductores) {
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.matricula = matricula;
        this.listadoConductores = listadoConductores;
    }

    // Mostramos los datos del autobús y sus conductores
    mostrarDatosAutobus() {
        console.log(`Matrícula del autobús: ${this.matricula}`);
        console.log(`Capacidad del autobús: ${this.capacidad}`);
        console.log(`Número de pasajeros: ${this.pasajeros}`);
        console.log("Listado de conductores:");
        this.listadoConductores.forEach(conductor => {
            conductor.mostrarDatosConductor();
        });
    }

    // Creamos este método para subir pasajeros al bus
    subir(numPasajeros) {
        const espacioDisponible = this.capacidad - this.pasajeros;
        if (numPasajeros <= espacioDisponible) {
            this.pasajeros += numPasajeros;
        } else {
            this.pasajeros = this.capacidad;
        }
    }

    // Creamos este método para bajar pasajeros del bus
    bajar(numPasajeros) {
        if (numPasajeros <= this.pasajeros) {
            this.pasajeros -= numPasajeros;
        } else {
            this.pasajeros = 0;
        }
    }

    // Buscamos un conductor por número de licencia
    buscarConductor(licencia) {
        return this.listadoConductores.some(conductor => conductor.licencia === licencia);
    }
}

function main() {

    // Creamos objetos de la clase Conductor
    const conductor1 = new Conductor("Juan", "12345");
    const conductor2 = new Conductor("María", "54321");

    // Creamos objetos de la clase Autobús con los conductores
    const autobus = new Autobus(50, "ABC123", [conductor1, conductor2]);

    //Mostramos la infotmación del autobús y sus conductores
    autobus.mostrarDatosAutobus();

    // Mostramos las subidas de pasajeros al bus
    autobus.subir(40);
    console.log("Número de pasajeros después de subir: " + autobus.pasajeros);

    // Mostramos las bajadas de pasajeros del bus
    autobus.bajar(20);
    console.log("Número de pasajeros después de bajar: " + autobus.pasajeros);

    // Buscamos conductor por número de licencia
    console.log("¿Se encontró el conductor con licencia 12345? " + autobus.buscarConductor("12345"));
    console.log("¿Se encontró el conductor con licencia 98765? " + autobus.buscarConductor("98765"));
}

main();