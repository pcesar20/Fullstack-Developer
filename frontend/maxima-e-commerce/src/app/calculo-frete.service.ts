import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalculoFreteService {

  constructor(public httpClient: HttpClient) { }

  calcularFrete(totalItens: any) {
    return this.httpClient.post(`${environment.api_url}calculofrete`, totalItens);
}
}
