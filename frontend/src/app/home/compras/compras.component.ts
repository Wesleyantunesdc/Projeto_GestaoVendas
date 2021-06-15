import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Vendedor } from 'src/app/models/vendedor';
import { Util } from 'src/app/util/formatador';
import {Pedido} from './../../models/pedido';
import {ModalComponent} from './modal';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  public  valorCaixa:number = 1500.50; 
  public util:Util;
  constructor(
    public dialog:MatDialog
  ) { }

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

  openDialog():void{
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      minWidth: '600px',
      data: "Ola mundo"
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
