import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  loading = new Subject<boolean>();
  show() {
    this.loading.next(true);
  }
  hide() {
    this.loading.next(false);
  }
  constructor() { }
}
