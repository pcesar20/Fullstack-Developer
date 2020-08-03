import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ClienteService} from "../cliente.service";

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private clienteService: ClienteService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      codigo: [Math.floor(1000 + Math.random() * 9000)],
      nome: [null]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.value.nome) {
      this.clienteService.save(this.form.value).subscribe(value => {
        console.log('valore retoronado' + value);
      });
    }
  }
}