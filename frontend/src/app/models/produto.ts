import {Negocio} from './negocio';

export class Produto extends Negocio{

    public id: string;
    public nome: string;
    public marca: string;
    public modelo: string;
    public numeroSerie: string;
    public valorCusto: number;
    public cor: String;

    constructor() {
        super('Inalterado')
        this.id = '',
        this.nome = '',
        this.marca = '', 
        this.modelo = '',
        this.numeroSerie = '',
        this.cor = '',
        this.valorCusto = 0.0
    }
}