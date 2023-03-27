import 'mocha';
import {expect} from 'chai';
import { Map } from "../src/map";
import { AddMapReduce } from "../src/AddMapReduce";
import { DivMapReduce } from "../src/DivMapReduce";
import { ProdMapReduce } from "../src/ProdMapReduce";
import { SubMapReduce } from "../src/SubMapReduce";


describe("add function tests", () => {

  

  //let auxiliar_map : number[] = [];
  //auxiliar_map = objeto.map((elemento : number) => elemento * 2);
  
  /*it("map() returns value [ 20, 40 ]", () => {
    expect(objeto.map((elemento : number) => elemento * 2)).to.be.equal(auxiliar_map);
  });*/

  let auxiliar_suma : Map = new AddMapReduce([10, 20]);

  it("Add: reduce() returns value 60", () => {
    expect(auxiliar_suma.reduce(2)).to.be.equal(60);
  });

  let auxiliar_division : Map = new DivMapReduce([10, 20]);

  it("Div: reduce() returns value 15", () => {
    expect(auxiliar_division.reduce(2)).to.be.equal(15);
  });

  let auxiliar_producto : Map = new ProdMapReduce([10, 20]);

  it("Prod: reduce() returns value 26", () => {
    expect(auxiliar_producto.reduce(2)).to.be.equal(60);
  });

  let auxiliar_resta : Map = new SubMapReduce([10, 20]);

  it("Sub: reduce() returns value 32", () => {
    expect(auxiliar_resta.reduce(2)).to.be.equal(26);
  });

});
