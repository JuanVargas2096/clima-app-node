const lugar = require('./lugar/lugar')

const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: "Direccion de la ciudad para obtener el clima",
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);

        let temperatura = await clima.getclima(coordenadas.lat, coordenadas.lng)

        return `El clima en ${coordenadas.direccion} es de ${temperatura}`
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))