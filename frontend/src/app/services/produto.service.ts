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
    const produtos = this.listarTodos();
    produto.id = new Date().getTime().toString();
    produtos.push(produto);
    localStorage['produtos'] = JSON.stringify(produtos);
  }
}
