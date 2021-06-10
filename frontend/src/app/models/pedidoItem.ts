import {Produto} from './produto';

export class PedidoItem{

    public produto:Produto[];
    public quantidadeItens: number;
    public custoTotal: number;
    
    constructor(){
    }
}