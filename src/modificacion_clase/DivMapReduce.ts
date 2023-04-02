import { Map } from "./map.js";
/**
 * Subclase DivMap Reduce
 * encargada de la operación división
 */
export class DivMapReduce extends Map {

    /**
     * Constructor de la subclase DivMapReduce
     * @param lista 
     */
    constructor (lista : number[]) {
        super(lista);
    }

    /**
     * Método reduce
     * @param acumulador_inicial 
     * @returns 
     */
    reduce(acumulador_inicial: number): number {
        this.afterInitialisation();

        let lista_aplicada: number = 0;
        let i: number = 0;
        this._lista.forEach(element => { 
            lista_aplicada += element / acumulador_inicial;
        });
        return lista_aplicada;
    }
  
}