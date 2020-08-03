import { Component, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {empty, Observable} from 'rxjs';
import {catchError, map, startWith} from 'rxjs/operators';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  ClientesFormControl = new FormControl();
  options: string[] = [];
  listClientes: Cliente[] = [];
  clientes$: Observable<string[]>;
  selectedCliente: any;
  clienteSelecionado: any;

  
  // @Output
  // @Output() clienteSelecionado = new EventEmitter();

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.onRefresh();
    this.clientes$ = this.ClientesFormControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)));
  }

  
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);

  }

  onRefresh() {
    this.clienteService.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return empty();
      })
    ).subscribe(
      dados => {
        this.listClientes = dados;
        this.options = this.listClientes.map(x => x.nome);
        console.log(this.listClientes);
      }, error => console.error(error),
      () => console.log('Obserservable completo!')
    );
  }

  handleError() {
    console.log('erro');
  }
  onSubmit() {
    this.selectedCliente = this.listClientes.find(x => x.nome === this.ClientesFormControl.value);
    this.clienteSelecionado.emit({cliente: this.selectedCliente});
    console.log(this.selectedCliente);
  }
}


