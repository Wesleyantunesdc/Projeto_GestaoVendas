import { Injectable } from '@angular/core';
import {Produto} from './../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  listarTodos() : Produto[]{
    const produtos = localStorage['produtos'];
    return produtos ? JSON.parse(produtos): [];
  }

  cadatrar(produto:Produto): void{
    console.log(produto.nome)
    const produtos = this.listarTodos();
    produto.id = new Date().getTime().toString();
    produtos.push(produto);
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  editar(produto:Produto): void{
    const produtos: Produto[] = this.listarTodos();
    console.log(produto.marca)
    produtos.forEach((obj,index,objs) => {
      if(produto.id === obj.id) {
        objs[index] = produto;
      }
    });
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  excluir(id:string): void{
    let produtos: Produto[] = this.listarTodos();
    produtos = produtos.filter(p => p.id !== id);
    localStorage['produtos'] = JSON.stringify(produtos);
  }
}
