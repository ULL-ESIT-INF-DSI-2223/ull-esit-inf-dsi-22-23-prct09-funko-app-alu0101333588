import { Map } from "./map.js";
/**
 * Subclase DivMap Reduce
 * encargada de la operación división
 */
/*
export class AddMapReduce extends Map {
    /*constructor(protected mutationRate: number, protected crossoverRate: number,
        protected maxNumberGenerations: number) {
      super(mutationRate, crossoverRate, maxNumberGenerations);
    }
    
    /**
     * Constructor de la subclase DivMapReduce
     * @param lista 
     
    constructor (lista : number[]) {
        super(lista);
    }

    /**
     * Método reduce
     * @param acumulador_inicial 
     * @returns 
     
    reduce(acumulador_inicial: number): number {
        this.afterInitialisation();

        let lista_aplicada: number = 0;
        let i: number = 0;
        this._lista.forEach(element => { 
            lista_aplicada += element * acumulador_inicial;
        });
        /*while (this._lista[i]) {
            lista_aplicada = funcion(lista_aplicada, this._lista[i]);
            i++;
        }
        return lista_aplicada;
    }
  
    /**
     * Particular implementation of the population initialisation
     
    /*protected initPopulation() {
      console.log(`GA: initialising population`);
      const firstInd = {
        decisionVariables: [1, 2],
        evaluate: () => {},
      };
      const secondInd = {
        decisionVariables: [3, 4],
        evaluate: () => {},
      };
  
      this.population.push(firstInd, secondInd);
    }
  
    /**
     * Particular implementation of the crossover operator
     
    /*protected crossover(firstIndividual: Individual,
        secondIndividual: Individual, crossoverRate: number):
        [Individual, Individual] {
      console.log(`GA: applying crossover with crossover rate ${crossoverRate}`);
      return [firstIndividual, secondIndividual];
    }
  

    protected mutation(_: Individual, mutationRate: number) {
      console.log(`GA: applying mutation with mutation rate ${mutationRate}`);
    }
  

    protected selectFromParentsAndChildren(_: Individual[]) {
      console.log(`GA: Selecting survivors for next generation`);
      return this.population;
    }
  

    protected afterSurvivorSelection() {
      console.log(`GA: I have just selected survivors for the next generation`);
    }
}*/
