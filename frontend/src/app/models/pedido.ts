import { timeStamp } from 'console';
import { PedidoItem } from './pedidoItem';
import {Vendedor} from './vendedor';

export class Pedido{

    public pedidoItem:PedidoItem[];
    public curstoTotal: number;
    public dataCompra: Date;
    public dataLimiteRecebimento: Date;
    public responsavelCompra: Vendedor;
    public status: 'INCOMPLETO'|'AGUARDANDO_PAGAMENTO'|'EM_TRANSITO'|'RECEBIDO'|'DEVOLUCAO'|'RECUSADO'

    constructor(pedidoItem:PedidoItem[],curstoTotal: number,dataCompra: Date, responsavelCompra: Vendedor){
        this.pedidoItem = pedidoItem;
        this.curstoTotal = curstoTotal;
        this.dataCompra = dataCompra;
        this.responsavelCompra = responsavelCompra;
        this.status = 'INCOMPLETO';
    }
}