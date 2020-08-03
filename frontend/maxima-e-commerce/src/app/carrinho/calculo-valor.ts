import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarrinhoProd} from '../carrinho-prod';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-calculo-valor',
  template: `
    <form [formGroup]="form" fxFlex>
      <div fxLayout="column">
        <div fxLayout="row" fxLayoutAlign="end">
          <input color="warn" name="quantidade" inline="true" fxFlex="15" type="text"
                 [value]="prod.quantidade"
                 (input)="onCalcularPrecoTotal(prod, $event)">
          <mat-label fxFlex="85" name="precoUnitario">
          X  {{prod.precoUnitario | currency:'BRL':true }}</mat-label>
        </div>
        <mat-label><b name="valorTotal" for="valorTotal"
                      id="valorTotal">{{prod.valorTotal | currency:'BRL':true}}</b></mat-label>
      </div>
    </form>`
})
export class CalculoValorComponent implements OnInit {

  @Input() prod: CarrinhoProd;
  form: FormGroup;
  @Output() valorCalculado = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
        precoUnitario: [this.prod.precoUnitario],
        quantidade: [this.prod.quantidade],
        valorTotal: [this.prod.valorTotal]
      }
    );
    this.valorCalculado.emit(this.prod);
  }

  onCalcularPrecoTotal(produto: CarrinhoProd, event: any) {
    this.prod.valorTotal = produto.precoUnitario * event.target.value;
    this.prod.valorTotal = produto.valorTotal;
    this.prod.quantidade = event.target.value;
    if (this.prod.valorTotal > 0 && this.prod.precoUnitario !== this.prod.valorTotal) {
      this.valorCalculado.emit(this.prod);
    }
  }

}