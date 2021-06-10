import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import {Util} from './../../util/formatador';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})

export class ProdutosComponent implements OnInit {
  public util:Util;

  constructor(
    private produtoServico: ProdutoService,
    public dialog:MatDialog) { }

  displayedColumns: string[] = ['nome', 'marca', 'modelo', 'numeroSerie'/*,'precoCompra','precoVenda',*/,'editar','excluir'];
  public produtos: Produto[];

  ngOnInit(): void {
    this.produtos =this.produtoServico.listarTodos();
    this.util = new Util();
  }

  cadastrar():void{
    let produto:Produto = new Produto();
    produto.situacao = 'Novo';
    this.openDialog(produto);
  }

  openDialog(produto):void{
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '50%',
      minWidth: '600px',
      data: produto
    });

    dialogRef.afterClosed().subscribe(result => {
      this.produtos =this.produtoServico.listarTodos();
    });
  }

  editar(produto:Produto){
    produto.situacao = 'Modificado';
    this.openDialog(produto);
  }

  excluir(id: string){
    this.produtoServico.excluir(id);
    this.produtos =this.produtoServico.listarTodos();
  }
}
