import { INavigation } from "../models/INavigation";

export const navigation: INavigation[] =[
    {
        nome: 'Compras',
        path: '/home/compras',
        icon: '/assets/imagens/compras.png'
    },
    {
        nome: 'Estoque',
        path: '/home/estoque',
        icon: '/assets/imagens/estoque.png'
    },
    {
        nome: 'Produtos',
        path: '/home/produtos',
        icon: '/assets/imagens/financeiro.png'
    },
    {
        nome: 'Vendas',
        path: '/home/vendas',
        icon: '/assets/imagens/venda.png'
    }
]