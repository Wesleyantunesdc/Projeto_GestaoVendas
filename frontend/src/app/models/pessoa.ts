import { stringify } from "querystring";

export class Pessoa{
    
    public id:string;
    public nome:string;
    public telefone:string;
    public email:string;
    public dataNascimento: Date;

    constructor(){
        this.id = '',
        this.nome = '',
        this.telefone = '',
        this.email = '',
        this.dataNascimento = new Date()
    }

}