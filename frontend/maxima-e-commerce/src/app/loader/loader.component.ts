import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {LoadService} from '../load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loading: Subject<boolean> = this.loaderService.loading;

  constructor(private loaderService: LoadService) {    console.log(this.loading)  ; }


  ngOnInit() {
  }

}
