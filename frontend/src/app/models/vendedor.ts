import { stringify } from "querystring";
import { Pessoa } from "./pessoa";

export class Vendedor extends Pessoa{

    public username: string;
    public senha: string;

    constructor(){
        super(),
        this.username = '',
        this.senha = ''
    }

}