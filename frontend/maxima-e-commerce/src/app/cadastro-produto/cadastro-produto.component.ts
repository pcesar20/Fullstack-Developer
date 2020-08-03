import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProdutoService} from "../produto.service";

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      codigo: [Math.floor(1000 + Math.random() * 9000)],
      nome: [null],
      precoUnitario: [null]
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.value.nome && this.form.value.precoUnitario) {
      this.produtoService.save(this.form.value).subscribe(
        value => {
          console.log(value + 'Salvo com sucesso');
        }
      );
    }
  }
}