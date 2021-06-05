import { stringify } from "querystring";

export class Produto {

    public id: string;
    public nome: string;
    public marca: string;
    public modelo: string;
    public numeroSerie: string;
    public precoCompra: number;
    public precoVenda: number;

    constructor(id?: string, nome?:string, marca?:string, modelo?: string, numeroSerie?: string, precoCompra?: number, precoVenda?: number) {
        this.id = id,
        this.nome = nome,
        this.marca = marca, 
        this.modelo = modelo,
        this.numeroSerie =numeroSerie,
        this.precoCompra = precoCompra,
        this.precoVenda = precoVenda
    }

}