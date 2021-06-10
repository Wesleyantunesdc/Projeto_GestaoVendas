import { Component, OnInit } from '@angular/core';
import { Vendedor } from 'src/app/models/vendedor';
import { Util } from 'src/app/util/formatador';
import {Pedido} from './../../models/pedido';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  public  valorCaixa:number = 10.5; 
  public util:Util;
  constructor() { }

  displayedColumns: string[] = ['id', 'dataCompra','dataLimite','custo','responsavel','status'];
  public pedidos: Pedido[] = [];

  ngOnInit(): void {
    this.util = new Util();
    let pedido = new Pedido(null,1000,new Date());
    pedido.id = 1239;
    pedido.dataLimiteRecebimento = new Date()

    let pedido2 = new Pedido(null,1000,new Date());
    pedido2.id = 1239;
    pedido2.dataLimiteRecebimento = new Date()
    this.pedidos.push(pedido,pedido2);
  }

}
