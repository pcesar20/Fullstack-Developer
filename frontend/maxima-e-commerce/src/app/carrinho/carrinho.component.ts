import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShopCarService} from '../shop-car.service';
import {CarrinhoProd} from '../carrinho-prod';
import {CarrinhoValor} from '../carrinho-valor';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  produtos: CarrinhoProd[] = [];
  valorTotal = new CarrinhoValor();
  produtosComValorCalculado: CarrinhoValor[] = [];

  @Output() carrinhoDeCompras = new EventEmitter();

  constructor(protected shoppingCartService: ShopCarService) {
  }

  ngOnInit() {
    this.shoppingCartService.getProdutos().subscribe(produtos => {
        this.produtos = produtos;
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Dados carregados');
      }
    );
    this.valorTotal.valorTotalDeItens = 0;
    this.valorTotal.quantidadeTotalDeItens = 0;
  }

  onProdutoSelecionado(evento: any) {
    this.shoppingCartService.addProduto(evento.produto);
    console.log(evento);
  }

  onProdutoCalculado(valores: any) {
    if (this.produtosComValorCalculado.length === 0) {
      this.adicionarProduto(valores);
    } else {
      const valor = this.produtosComValorCalculado.find(x => x.codigoProduto === valores.codigo);
      if (valor !== undefined) {
        const newList = this.produtosComValorCalculado.filter(x => x.codigoProduto !== valor.codigoProduto);
        this.produtosComValorCalculado = newList;
        this.adicionarProduto(valores);
      } else {
        this.adicionarProduto(valores);
      }
    }
  }

  adicionarProduto(valores: { codigo: any; valorTotal: any; quantidade: any; }) {
    const valorTotal = new CarrinhoValor();
    valorTotal.codigoProduto = valores.codigo;
    valorTotal.valorTotalDeItens = Number(valores.valorTotal);
    valorTotal.quantidadeTotalDeItens = Number(valores.quantidade);
    this.produtosComValorCalculado.push(valorTotal);
    console.log(this.produtosComValorCalculado);
    this.carrinhoDeCompras.emit({carrinho: this.produtosComValorCalculado});
    this.shoppingCartService.setProdutosSelecionados(this.produtosComValorCalculado);
  }

}