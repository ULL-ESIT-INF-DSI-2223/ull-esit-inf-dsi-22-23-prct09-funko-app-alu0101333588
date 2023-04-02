import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Funko, tipoPop, genero } from './Funko.js';
import { ColeccionFunkos } from './ColeccionFunkos.js';
import { existsSync, mkdirSync } from 'node:fs';
import chalk = require("chalk");

/*
import { writeFileSync } from 'node:fs';

let nombreUsuario : string = "no_vale";
//mkdirSync('./libreriaFunkos/' + nombreUsuario);
let ID : number = 12;
let tipo1 : string = "Pop!";
let genero1 : string = "Animación";

let tipoAux : tipoPop = tipo1 as tipoPop;
let generoAux : genero = genero1 as genero;
let funko1 : Funko = {
  _ID: 12,
  _nombre: "funkazo",
  _descripcion: "descripcion",
  _tipo: tipoAux,
  _genero: generoAux,
  _franquicia: "argv.franquicia", 
  _numero: 367, 
  _exclusivo: false, 
  _caracteristicasEspeciales: "argv.caracteristicasEspeciales", 
  _valorMercado: 1500
};
writeFileSync('./libreriaFunkos/' + nombreUsuario + '/' + ID + '.json', JSON.stringify(funko1, null, 2), 'utf8');

if (existsSync('./libreriaFunkos/' + nombreUsuario)) { 
  console.log(`fiesta`);
}*/


yargs(hideBin(process.argv))

  .command('nuevoUsuario', 'Añadir un nuevo usuario', {
    nombreUsuario: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    }
  }, (argv) => {

    if (!existsSync('./libreriaFunkos/' + argv.nombreUsuario)) { // ¿existe el directorio del usuario?
      mkdirSync('./libreriaFunkos/' + argv.nombreUsuario); // Creamos un fichero con el nick del usuario  
      console.log(chalk.green.bold(`El usuario ${argv.nombreUsuario} se ha creado correctamente`));
    } else {
      console.log(chalk.red.bold(`Error. El usuario ${argv.nombreUsuario} ya existe`));
    }
  })

  .command('anadir', 'Añadir funko', {
    nombreUsuario: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    },
    id: {
      description: 'ID del funko',
      type: 'number',
      demandOption: true
    },
    nombre: {
      description: 'Nombre del funko',
      type: 'string',
      demandOption: true
    },
    descripcion: {
      description: 'Descripción del funko',
      type: 'string',
      demandOption: true
    },
    tipo: {
      description: 'Tipo de funko',
      type: 'string',
      demandOption: true
    },
    genero: {
      description: 'Género del funko',
      type: 'string',
      demandOption: true
    },
    franquicia: {
      description: 'Franquicia a la que pertenece el funko',
      type: 'string',
      demandOption: true
    },
    numero: {
      description: 'número de funko, en la franquicia',
      type: 'number',
      demandOption: true
    },
    exclusivo: {
      description: 'Si es exclusivo o no',
      type: 'boolean',
      demandOption: true
    },
    caracteristicasEspeciales: {
      description: 'Características especiales del funko',
      type: 'string',
      demandOption: true
    },
    valorMercado: {
      description: 'Valor del mercado del funko',
      type: 'number',
      demandOption: true
    }
  }, (argv) => {

    let coleccionFunko1 : ColeccionFunkos = new ColeccionFunkos(argv.nombreUsuario);
    let tipoAux : tipoPop = argv.tipo as tipoPop;
    let generoAux : genero = argv.genero as genero;
    let funko1 : Funko = {
      _ID: argv.id,
      _nombre: argv.nombre,
      _descripcion: argv.descripcion,
      _tipo: tipoAux,
      _genero: generoAux,
      _franquicia: argv.franquicia, 
      _numero: argv.numero, 
      _exclusivo: argv.exclusivo, 
      _caracteristicasEspeciales: argv.caracteristicasEspeciales, 
      _valorMercado: argv.valorMercado
    };
    coleccionFunko1.anadir(funko1);
  })

  .command('modificar', 'Modificar funko', {
    nombreUsuario: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    },
    id: {
      description: 'ID del funko',
      type: 'number',
      demandOption: true
    },
    nombre: {
      description: 'Nombre del funko',
      type: 'string',
      demandOption: true
    },
    descripcion: {
      description: 'Descripción del funko',
      type: 'string',
      demandOption: true
    },
    tipo: {
      description: 'Tipo de funko',
      type: 'string',
      demandOption: true
    },
    genero: {
      description: 'Género del funko',
      type: 'string',
      demandOption: true
    },
    franquicia: {
      description: 'Franquicia a la que pertenece el funko',
      type: 'string',
      demandOption: true
    },
    numero: {
      description: 'número de funko, en la franquicia',
      type: 'number',
      demandOption: true
    },
    exclusivo: {
      description: 'Si es exclusivo o no',
      type: 'boolean',
      demandOption: true
    },
    caracteristicasEspeciales: {
      description: 'Características especiales del funko',
      type: 'string',
      demandOption: true
    },
    valorMercado: {
      description: 'Valor del mercado del funko',
      type: 'number',
      demandOption: true
    }
  }, (argv) => {

    let coleccionFunko1 : ColeccionFunkos = new ColeccionFunkos(argv.nombreUsuario);
    let tipoAux : tipoPop = argv.tipo as tipoPop;
    let generoAux : genero = argv.genero as genero;
    let funko1 : Funko = {
      _ID: argv.id,
      _nombre: argv.nombre,
      _descripcion: argv.descripcion,
      _tipo: tipoAux,
      _genero: generoAux,
      _franquicia: argv.franquicia, 
      _numero: argv.numero, 
      _exclusivo: argv.exclusivo, 
      _caracteristicasEspeciales: argv.caracteristicasEspeciales, 
      _valorMercado: argv.valorMercado
    };
    coleccionFunko1.modificar(funko1);
  })

  .command('eliminar', 'Eliminar funko', {
    nombreUsuario: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    },
    id: {
      description: 'ID del funko',
      type: 'number',
      demandOption: true
    },
  }, (argv) => {

    let coleccionFunko1 : ColeccionFunkos = new ColeccionFunkos(argv.nombreUsuario);
    coleccionFunko1.eliminar(argv.id);
  })

  .command('listar', 'Lista de funkos', {
    nombreUsuario: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    }
  }, (argv) => {

    let coleccionFunko1 : ColeccionFunkos = new ColeccionFunkos(argv.nombreUsuario);
    coleccionFunko1.listar();
  })

  .command('mostrar', 'Mostrar características de un funko', {
    nombreUsuario: {
      description: 'Nombre del usuario',
      type: 'string',
      demandOption: true
    },
    id: {
      description: 'ID del funko',
      type: 'number',
      demandOption: true
    }
  }, (argv) => {

    let coleccionFunko1 : ColeccionFunkos = new ColeccionFunkos(argv.nombreUsuario);
    coleccionFunko1.mostrar(argv.id);
  })

 .help()
 .argv;
