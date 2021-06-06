export class Negocio{
    public situacao: 'Inalterado'|'Novo'|'Modificado'|'Excluido';

    constructor(situacao){
        this.situacao = situacao;
    }
}