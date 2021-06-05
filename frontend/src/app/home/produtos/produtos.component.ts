import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import {CDK_TABLE, DataSource} from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})

export class ProdutosComponent implements OnInit {
  constructor(
    private produtoServico: ProdutoService,
    public dialog:MatDialog) { }

  displayedColumns: string[] = ['nome', 'marca', 'modelo', 'numeroSerie','precoCompra','precoVenda'];
  public produtos: Produto[];

  ngOnInit(): void {
    //this.produto = new Produto();
    // this.produto.nome = 'SSD';
    // this.produto.marca = 'RelapagoMarquinhos';
    // this.produto.modelo = '2';
    // this.produto.numeroSerie = '34sd1223434123';
    // this.produto.precoCompra = 89.00;
    // this.produto.precoVenda = 102.00;
    //this.cadastrar(this.produto);
    this.produtos =this.produtoServico.listarTodos();
  }

  cadastrar():void{
    this.openDialog(new Produto());
    //this.produtoServico.cadatrar(produto);
  }

  openDialog(produto):void{
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: produto
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
