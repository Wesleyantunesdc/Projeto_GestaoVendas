import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Negocio } from 'src/app/models/negocio';
import { Produto } from 'src/app/models/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  form: FormGroup;

  public situacao:string = 'Inalterado';
  public produto:Produto;
  constructor( public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Produto,
    private formBuilder: FormBuilder,
    private service:ProdutoService) { }

  ngOnInit(): void {
    this.situacao = this.data.situacao;
    this.form = this.formBuilder.group({
      nome:[[this.data.nome],[Validators.required]],
      marca:[[this.data.marca],[Validators.required]],
      modelo:[[this.data.modelo],[Validators.required]],
      numeroSerie:[[this.data.numeroSerie],[Validators.required]],
      precoCompra:[[this.data.precoCompra],[Validators.required]],
      precoVenda:[[this.data.precoVenda],[Validators.required]]
   })
  }



  cadastrar(){
    if(this.form.invalid) return;
    this.popularProduto();
    this.service.cadatrar(this.data);
    this.dialogRef.close();
  }

  editar(){
    if(this.form.invalid) return;
    this.popularProduto();
    this.service.editar(this.data);
    this.dialogRef.close();
  }

  popularProduto(){
    this.data.nome = this.form.controls.nome.value;
    this.data.marca =  this.form.controls.marca.value;
    this.data.modelo =  this.form.controls.modelo.value;
    this.data.numeroSerie =  this.form.controls.numeroSerie.value;
    this.data.precoCompra =  this.form.controls.precoCompra.value;
    this.data.precoVenda =  this.form.controls.precoVenda.value;
  }
}
