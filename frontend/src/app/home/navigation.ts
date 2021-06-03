import { INavigation } from "../models/INavigation";

export const navigation: INavigation[] =[
    {
        nome: 'Compras',
        path: '/home/compras',
        icon: 'shopping_bag'
    },
    {
        nome: 'Estoque',
        path: '/home/estoque',
        icon: 'storefront'
    },
    {
        nome: 'Produtos',
        path: '/home/produtos',
        icon: 'card_giftcard'
    },
    {
        nome: 'Vendas',
        path: '/home/vendas',
        icon: 'local_shipping'
    }
]