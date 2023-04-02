
export enum tipoPop {
  Pop = "Pop!",
  PopRides = "Pop! Rides",
  VynilSoda = "Vynil Soda",
  VynilGold = "Vynil Gold"
}


export enum genero {
  Animacion = "Animación",
  PeliculasTV = "Películas y TV",
  Videojuegos = "Videojuegos",
  Deportes = "Vynil Gold",
  Musica = "Música",
  Anime = "Anime"
}

/**
 * Interfaz Funko que contiene todos los atributos requeridos
 * para describir tal objeto, según sus características 
 * @param _ID : number; Identificador único del Funko
 * @param _nombre : string; Nombre del funko
 * @param _descripcion : string; Descripción del funko
 * @param _tipo : tipoPop; Tipo de funko
 * @param _genero: Genero; Género del funko
 * @param _franquicia : string; A qué franquicia pertenece
 * @param _numero : number; El número identificativo del funko dentro ed la franquicia
 * @param _exclusivo : boolean; Si es exclusivo o no
 * @param _caracteristicasEspeciales : string; Descripción de las caracterísicas especiales
 * @param _valorMercado : number; Cuál es el valor numérico en el mercado
*/

export interface Funko {
  _ID : number;
  _nombre : string;
  _descripcion : string;
  _tipo : tipoPop;
  _genero: genero;
  _franquicia : string;
  _numero : number;
  _exclusivo : boolean;
  _caracteristicasEspeciales : string;
  _valorMercado : number;
}

/*
export class Funko {
  private _ID : number;
  private _nombre : string;
  private _descripcion : string;
  private _tipo : tipoPop;
  private _genero: genero;
  private _franquicia : string;
  private _numero : number;
  private _exclusivo : boolean;
  private _caracteristicasEspeciales : string;
  private _valorMercado : number;

  /**
  * Constructor de la clase Funko 
  * @param ID : number; Identificador único del Funko
  * @param nombre : string; Nombre del funko
  * @param descripcion : string; Descripción del funko
  * @param tipo : tipoPop; Tipo de funko
  * @param genero: Genero; Género del funko
  * @param franquicia : string; A qué franquicia pertenece
  * @param numero : number; El número identificativo del funko dentro ed la franquicia
  * @param exclusivo : boolean; Si es exclusivo o no
  * @param caracteristicasEspeciales : string; Descripción de las caracterísicas especiales
  * @param valorMercado : number; Cuál es el valor numérico en el mercado
  
  constructor (ID : number, nombre : string, descripcion : string, tipo : tipoPop, genero1: genero, 
    franquicia : string, numero : number, exclusivo : boolean, caracteristicasEspeciales : string,
    valorMercado : number) {
    
    this._ID = ID;
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._tipo = tipo;
    this._genero = genero1;
    this._franquicia = franquicia;
    this._numero = numero;
    this._exclusivo = exclusivo;
    this._caracteristicasEspeciales = caracteristicasEspeciales;

  }

  /**
  * Getter del atributo de la clase _ID
  
  get ID () {
    return this._ID;
  }

  /**
  * Getter del atributo de la clase _nombre
  
  get nombre () {
    return this._nombre;
  }

  /**
  * Getter del atributo de la clase _descripcion
  
  get descripcion () {
    return this._descripcion;
  }

  /**
  * Getter del atributo de la clase _tipo
  
  get tipo () {
    return this._tipo;
  }


}*/