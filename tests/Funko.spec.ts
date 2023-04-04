import 'mocha';
import {expect} from 'chai';
import { Funko } from '../src/Funko.js';
import { genero } from "../src/genero.js";
import { tipoPop } from "../src/tipoPop.js";


describe("interfaz Funko", () => {


  let tipoAux : tipoPop = "Pop!" as tipoPop;
  let generoAux : genero = "Películas y TV" as genero;
  let funko1 : Funko = {
    _ID: 368,
    _nombre: "The Child",
    _descripcion: "De la serie The Mandalorian",
    _tipo: tipoAux,
    _genero: generoAux,
    _franquicia: "Star Wars", 
    _numero: 2, 
    _exclusivo: false, 
    _caracteristicasEspeciales: "extremadamente adorable", 
    _valorMercado: 20
  };
  
  it("ID", () => {
    expect(funko1._ID).to.be.a('number')
    expect(funko1._ID).to.equal(368)
  });

  it("nombre", () => {
    expect(funko1._nombre).to.be.a('string')
    expect(funko1._nombre).to.equal('The Child')
  });

  it("descripcion", () => {
    expect(funko1._descripcion).to.be.a('string')
    expect(funko1._descripcion).to.equal('De la serie The Mandalorian')
  });

  it("tipo", () => {
    expect(funko1._tipo).to.equal('Pop!')
  });

  it("genero", () => {
    expect(funko1._genero).to.equal('Películas y TV')
  });

  it("franquicia", () => {
    expect(funko1._franquicia).to.be.a('string')
    expect(funko1._franquicia).to.equal('Star Wars')
  });

  it("numero", () => {
    expect(funko1._numero).to.be.a('number')
    expect(funko1._numero).to.equal(2)
  });

  it("exclusivo", () => {
    expect(funko1._exclusivo).to.be.a('boolean')
    expect(funko1._exclusivo).to.equal(false)
  });

  it("caracteristicasEspeciales", () => {
    expect(funko1._caracteristicasEspeciales).to.be.a('string')
    expect(funko1._caracteristicasEspeciales).to.equal('extremadamente adorable')
  });

  it("valorMercado", () => {
    expect(funko1._valorMercado).to.be.a('number')
    expect(funko1._valorMercado).to.equal(20)
  });

});