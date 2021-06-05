import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  form: FormGroup = this.formBuilder.group({
     nome:['',[Validators.required]],
     marca:['',[Validators.required]],
     modelo:['',[Validators.required]],
     numeroSerie:['',[Validators.required]],
     precoCompra:['',[Validators.required]],
     precoVenda:['',[Validators.required]]
  })

  private produto:Produto;
  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    private formBuilder: FormBuilder,
    private service:ProdutoService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    if(this.form.invalid) return;
    this.produto = new Produto();
    this.produto.nome = this.form.controls.nome.value,
    this.produto.marca= this.form.controls.marca.value,
    this.produto.modelo= this.form.controls.modelo.value,
    this.produto.numeroSerie= this.form.controls.numeroSerie.value,
    this.produto.precoCompra= this.form.controls.precoCompra.value,
    this.produto.precoVenda= this.form.controls.precoVenda.value
    this.service.cadatrar(this.produto);
    this.dialogRef.close();
  }
}
