import { stringify } from "querystring";

export class Produto{
    
    public id:string;
    public nome:string;
    public marca:string;
    public modelo:string;
    public numeroSerie:string;
    public precoCompra:number;
    public precoVenda:number;
    
    constructor(){
        this.id = '',
        this.marca = '',
        this.modelo = '',
        this.numeroSerie = '',
        this.precoCompra = 0,
        this.precoVenda = 0
    }

}