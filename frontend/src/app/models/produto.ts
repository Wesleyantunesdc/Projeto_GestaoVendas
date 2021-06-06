import { stringify } from "querystring";
import {Negocio} from './negocio';

export class Produto extends Negocio{

    public id: string;
    public nome: string;
    public marca: string;
    public modelo: string;
    public numeroSerie: string;
    public precoCompra: number;
    public precoVenda: number;

    constructor() {
        super('Inalterado')
        this.id = '',
        this.nome = '',
        this.marca = '', 
        this.modelo = '',
        this.numeroSerie = '',
        this.precoCompra = 0.0,
        this.precoVenda = 0.0
    }
}