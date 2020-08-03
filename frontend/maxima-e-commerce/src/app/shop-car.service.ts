import { Injectable } from '@angular/core';
import {CarrinhoProd} from './carrinho-prod';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import {CarrinhoValor} from './carrinho-valor';


@Injectable({
  providedIn: 'root'
})
export class ShopCarService {
  produtos: CarrinhoProd[] = [];
  produtosSelecionados: CarrinhoValor[] = [];

  keyStorage: string = 'produto_carrinho';

  private produtosSubject: BehaviorSubject<CarrinhoProd[]>;

  constructor() { 
    const produtosSalvos: CarrinhoProd[] = JSON.parse(this.keyStorage) || [];
    this.produtosSubject = new BehaviorSubject<CarrinhoProd[]>(produtosSalvos);

    this.produtosSubject.subscribe((produtos) => {
      localStorage.setItem(this.keyStorage, JSON.stringify(produtos));
    });
  }
  addProduto(produto: CarrinhoProd) {
    produto.quantidade = 1;
    produto.valorTotal = produto.precoUnitario;
    if (!this.produtos.find(x => x.codigo === produto.codigo)) {
      this.produtos.push(produto);
      this.produtosSubject.next(this.produtos);
    }
  }

  getProdutos() {
    return this.produtosSubject.asObservable();
  }

  limparProdutos() {
    this.produtos = [];
    this.produtosSubject.next(this.produtos);
  }

  getProdutosSelecionados() {
    return new Observable<CarrinhoValor[]>(observador => {
      setTimeout(() => {
        observador.next(this.produtosSelecionados);
      }, 2000);
    });
  }

  setProdutosSelecionados(produtosSelecionados: CarrinhoValor[]) {
    this.produtosSelecionados = produtosSelecionados;
  }

}
