import { Funko } from "./Funko.js";
import chalk = require("chalk");

import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
  rmSync,
} from "node:fs";

export class ColeccionFunkos {
  private _funkos: Funko[] = [];
  private _nombreUsuario: string;

  /**
   * Constructor de la clase ColeccionFunkos
   * @param nombreUsuario Nick del usuarioo que tiene la colección
   */
  constructor(nombreUsuario: string) {
    this._nombreUsuario = nombreUsuario;

    if (!existsSync("./libreriaFunkos/" + this._nombreUsuario)) {
      // ¿existe el directorio del usuario?
      mkdirSync("./libreriaFunkos/" + nombreUsuario);
    } else {
      // Almacenamos los datos
      let registrosFunkos = readdirSync(
        "./libreriaFunkos/" + this._nombreUsuario
      );

      for (let i: number = 0; i < registrosFunkos.length; i++) {
        let funko = readFileSync(
          "./libreriaFunkos/" + this._nombreUsuario + "/" + registrosFunkos[i],
          "utf8"
        ); // valor predeterminado

        let archivoJson = JSON.parse(funko);

        let auxiliar: Funko = {
          _ID: archivoJson._ID,
          _nombre: archivoJson._nombre,
          _descripcion: archivoJson._descripcion,
          _tipo: archivoJson._tipo,
          _genero: archivoJson._genero,
          _franquicia: archivoJson._franquicia,
          _numero: archivoJson._numero,
          _exclusivo: archivoJson._exclusivo,
          _caracteristicasEspeciales: archivoJson._caracteristicasEspeciales,
          _valorMercado: archivoJson._valorMercado,
        };
        this._funkos.push(auxiliar);
      }
    }
  }

  /**
   * Función para añadir un nuevo funko a la Colección
   * @param funko : Funko - es el funko a introducir en la colección
   */
  anadir(funko: Funko): string {
    if (this.existeFunko(funko._ID)) {
      return chalk.red.bold(
        `NO se ha podido añadir el funko, dado que el ID ${funko._ID} ya existe`
      );
    } else {
      writeFileSync(
        "./libreriaFunkos/" + this._nombreUsuario + "/" + funko._ID + ".json",
        JSON.stringify(funko, null, 2),
        "utf8"
      );
      this._funkos.push(funko);
      return chalk.green.bold(
        `Se ha añadido correctamente el funko ${funko._nombre}`
      );
    }
  }

  /**
   * Función para modificar un funko existente
   * @param funko : Funko - es el funko a sustituir en la colección
   */
  modificar(funko: Funko): string {
    if (this.existeFunko(funko._ID)) {
      let posicion_funko: number = this.ubicacionFunko(funko._ID);
      this._funkos[posicion_funko] = funko;
      writeFileSync(
        "./libreriaFunkos/" + this._nombreUsuario + "/" + funko._ID + ".json",
        JSON.stringify(funko, null, 2),
        "utf8"
      );
      return chalk.green.bold(
        `Se ha modificado correctamente el funko ${funko._nombre}`
      );
    } else {
      return chalk.red.bold(
        `NO se ha podido modificar el funko en cuestión dado que no existe ["${funko._ID}"]`
      );
    }
  }

  /**
   * Función para eliminar un funko existente
   * @param ID : number - es la ID del funko a eliminar en la colección
   */
  eliminar(ID: number): string {
    if (this.existeFunko(ID)) {
      let posicion_funko: number = this.ubicacionFunko(ID);
      this._funkos.splice(posicion_funko);
      rmSync("./libreriaFunkos/" + this._nombreUsuario + "/" + ID + ".json");
      return chalk.green.bold(
        `Se ha eliminado correctamente el funko con ID ${ID}`
      );
    } else {
      return chalk.red.bold(
        `NO se ha podido eliminar el funko en cuestión dado que no existe ["${ID}"]`
      );
    }
  }

  /**
   * Función para listar por pantalla todos los funkos existentes
   * correspondientes a dicho usuario
   */
  listar(): void {
    this._funkos.forEach((funko) => {
      console.log(`**** ID: ${funko._ID}`);
      console.log(`Nombre: ${funko._nombre}`);
      console.log(`Descripción: ${funko._descripcion}`);
      console.log(`Tipo: ${funko._tipo}`);
      console.log(`Género: ${funko._genero}`);
      console.log(`Franquicia: ${funko._franquicia}`);
      console.log(`Número: ${funko._numero}`);
      console.log(`Exclusivo: ${funko._exclusivo}`);
      console.log(
        `Características especiales: ${funko._caracteristicasEspeciales}`
      );
      this.rangoValoresMercado(funko._valorMercado);
      console.log(`****`);
    });
  }

  /**
   * Función para mostrar la información de un funko existente
   * @param ID : number - es la ID del funko a mostrar
   */
  mostrar(ID: number): string {
    if (this.existeFunko(ID)) {
      let posicion_funko: number = this.ubicacionFunko(ID);
      console.log(`**** ID: ${this._funkos[posicion_funko]._ID}`);
      console.log(`Nombre: ${this._funkos[posicion_funko]._nombre}`);
      console.log(`Descripción: ${this._funkos[posicion_funko]._descripcion}`);
      console.log(`Tipo: ${this._funkos[posicion_funko]._tipo}`);
      console.log(`Género: ${this._funkos[posicion_funko]._genero}`);
      console.log(`Franquicia: ${this._funkos[posicion_funko]._franquicia}`);
      console.log(`Número: ${this._funkos[posicion_funko]._numero}`);
      console.log(`Exclusivo: ${this._funkos[posicion_funko]._exclusivo}`);
      console.log(
        `Características especiales: ${this._funkos[posicion_funko]._caracteristicasEspeciales}`
      );
      this.rangoValoresMercado(this._funkos[posicion_funko]._valorMercado);
      console.log(`****`);
      return chalk.green.bold(`Se ha podido mostrar el funko en cuestión`);
    } else {
      return chalk.red.bold(
        `NO se ha podido mostrar el funko en cuestión dado que no existe ["${ID}"]`
      );
    }
  }

  /**
   * Función para mostrar el valor de mercado
   * en un color determinado, en función del rango
   * al que pertenezca
   * @param valorMercado : number - es valor de mercado que posee el funko
   */
  rangoValoresMercado(valorMercado: number): void {
    if (valorMercado <= 250) {
      // 0 - 250
      console.log(chalk.red(`Valor de mercado: ${valorMercado}`));
    } else if (valorMercado <= 500) {
      // 251 - 500
      console.log(chalk.blue(`Valor de mercado: ${valorMercado}`));
    } else if (valorMercado <= 2500) {
      // 501 - 2500
      console.log(chalk.white(`Valor de mercado: ${valorMercado}`));
    } else {
      // > 2500
      console.log(chalk.green(`Valor de mercado: ${valorMercado}`));
    }
  }

  /**
   * Función para saber si un funko existe o no,
   * mediante su ID
   * @param ID : number - es la ID del funko a buscar
   */
  existeFunko(ID: number): boolean {
    let existe: boolean = false;
    this._funkos.forEach((funko) => {
      if (funko._ID === ID) {
        existe = true;
      }
    });

    if (existe) {
      return true;
    }
    return false;
  }

  /**
   * Función para mostrar la ubicación numérica
   * en la que se encuentra un determinado funko
   * dentro del array de funkos,
   * mediante su ID
   * @param ID : number - es la ID del funko a buscar
   */
  ubicacionFunko(ID: number): number {
    for (let i: number = 0; i < this._funkos.length; i++) {
      if (this._funkos[i]._ID === ID) {
        return i;
      }
    }
    return -1;
  }
}
