import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ProdutosRoutingModule } from './produtos-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';




@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ProdutosModule { }
