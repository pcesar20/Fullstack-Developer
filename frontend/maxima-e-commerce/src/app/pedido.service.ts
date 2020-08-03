import { Injectable } from '@angular/core';
import {ServCore} from './servcore';
import {Pedido} from './pedido';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService extends ServCore<Pedido> {

  constructor(public httpClient: HttpClient) { 
    super(httpClient, `${environment.api_url}pedido`);
  }
}
