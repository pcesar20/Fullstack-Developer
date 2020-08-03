import {Injectable} from '@angular/core';
import {ServCore} from './servcore';
import {Cliente} from '../app/cliente';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends ServCore<Cliente> {

  constructor(public httpClient: HttpClient) {
    super(httpClient,  `${environment.api_url}cliente`);
  }
}