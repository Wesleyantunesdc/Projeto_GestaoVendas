import { PedidoItem } from './pedidoItem';
import {Vendedor} from './vendedor';

export class Pedido{

    public id:number;
    public pedidoItem:PedidoItem[];
    public custoTotal: number;
    public dataCompra: Date;
    public dataLimiteRecebimento: Date;
    public responsavelCompra: Vendedor;
    public status: 'INCOMPLETO'|'AGUARDANDO_PAGAMENTO'|'EM_TRANSITO'|'RECEBIDO'|'DEVOLUCAO'|'RECUSADO'

    constructor(pedidoItem?:PedidoItem[],custoTotal?: number,dataCompra?: Date, responsavelCompra?: Vendedor){
        this.pedidoItem = pedidoItem;
        this.custoTotal = custoTotal;
        this.dataCompra = dataCompra;
        this.responsavelCompra = responsavelCompra;
        this.status = 'INCOMPLETO';
    }
}