import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {ServCore} from './servcore';
import {Produto} from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends ServCore<Produto> {
  constructor(public httpClient: HttpClient) {
    super(httpClient, `${environment.api_url}produto`);
  }
}