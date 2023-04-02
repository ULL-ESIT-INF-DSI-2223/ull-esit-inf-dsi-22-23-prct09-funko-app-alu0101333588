

/**
 * Abstract class of an Evolutionary Algorithm, which must be
 * extended by subclasses that implement a particular approach.
 */
export abstract class Map {

  protected _lista: number[];

  constructor(lista : number[]) {
    this._lista = lista;
  }


  /**
   * Template method that defines the skeleton of an Evolutionary Algorithm.
   */
  public run() {
    
    // Hook
    this.afterInitialisation();
    //this.map();
    //this.reduce();
    // _lista initialisation
    //this.init_lista();
    // Hook
    //this.afterInitialisation();
    // Initial _lista evaluation
    //this.evaluate_lista();
    
    //this.afterEvaluation();

    // Run the generations of the algorithm
    //let currentNumberGenerations = 0;
    //while (currentNumberGenerations < this.maxNumberGenerations) {
      // Generates the children
      //const child_lista = this.generateAndEvaluateChild_lista();
      // Hook
      //this.afterChildrenGeneration();
      // Selects the fittest individuals from among parents and children
      //this._lista = this.selectFromParentsAndChildren(child_lista);
      // Hook
      //this.afterSurvivorSelection();
      // New generation performed
      //currentNumberGenerations++;
    //}
  }

  map(funcion: (lista_: number) => number): number[] {

    this.afterInitialisation();

    let lista_aplicada: number[] = [];
    let i: number = 0;
    while (this._lista[i]) {
      lista_aplicada.push(funcion(this._lista[i]));
      i++;
    }
    return lista_aplicada;
  }

  /**
   * Operations that must be implemented by subclasses
   * Operación abstracta reduce
   * @param acumulador_inicial
   */
  abstract reduce(acumulador_inicial: number): number;

  /**
   * Empty operations that could be implemented by subclasses (not
   * mandatory)
   * Hooks
   */
  protected afterInitialisation() {
    console.log(`Se ha procedido a iterar la lista`);
  }
  //protected afterEvaluation() {}
  //protected afterChildrenGeneration() {}
  //protected afterSurvivorSelection() {}
  
}