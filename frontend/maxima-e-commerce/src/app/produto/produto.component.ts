import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Cliente} from '../cliente';
import {empty, Observable} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {ProdutoService} from '../produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  selectedProduto: any;
  produtoFormControl = new FormControl();
  options: string[] = [];
  listProdutos: Cliente[] = [];
  produtos$: Observable<string[]>;

  @Output() produtoSelecionado = new EventEmitter();

  constructor(private produtoService: ProdutoService) {
  }


  ngOnInit() {
    this.onRefresh();
    this.produtos$ = this.produtoFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);

  }

  onRefresh() {
    this.produtoService.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    ).subscribe(
      dados => {
        this.listProdutos = dados;
        this.options = this.listProdutos.map(x => x.nome);
        console.log(this.listProdutos);
      }, error => console.error(error),
      () => console.log('Obserservable completo!')
    );
  }

  handleError() {
    // this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }
  onSubmit() {
    this.selectedProduto = this.listProdutos.find(x => x.nome === this.produtoFormControl.value);
    this.produtoSelecionado.emit({produto: this.selectedProduto });
    console.log(this.selectedProduto );
  }
}