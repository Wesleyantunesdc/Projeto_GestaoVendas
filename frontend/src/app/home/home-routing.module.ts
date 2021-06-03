import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path:'', component:HomeComponent , children:[
    {path: 'compras', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule)},
    {path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},
    {path: 'vendas', loadChildren: () => import('./vendas/vendas.module').then(m => m.VendasModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
