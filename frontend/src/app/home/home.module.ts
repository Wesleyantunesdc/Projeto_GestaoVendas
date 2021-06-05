import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {navigation} from './navigation'; 
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { VendasComponent } from './vendas/vendas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ComprasComponent } from './compras/compras.component';
import { NAVIGATION } from '../models/navigation.injection';
import { EstoqueComponent } from './estoque/estoque.component';
import {ProdutoService} from './../services/produto.service';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, VendasComponent, ProdutosComponent, ComprasComponent, EstoqueComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule
  ],
  providers:[
    {provide: NAVIGATION, useValue: navigation},
    ProdutoService
  ]
})
export class HomeModule { }
