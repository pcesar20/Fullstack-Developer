import {Cliente} from './cliente';

export class Pedido {
    numped: number;
    qtdItens: number;
    valorFrete: number;
    valorTotal: number;
    cliente: Cliente;
}
