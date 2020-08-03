import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {PedidoService} from '../pedido.service';
import {Pedido} from '../pedido';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'qtdItens', 'valorFrete', 'valorTotal'];
  dataSource: any;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.pedidoService.list().subscribe(value => {
      const data: Pedido[] = value;
      this.dataSource = new MatTableDataSource(data);
      console.log(data);
    });
    this.dataSource.sort = this.sort;
  }

  constructor(private  pedidoService: PedidoService) {
  }

}