import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
//import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatSortModule} from '@angular/material/sort';

 import {ToolbarComponent} from './toolbar/toolbar.component';
 import {ClienteComponent} from './cliente/cliente.component';
 import {LoaderComponent} from './loader/loader.component';
import { CalculoValorComponent } from './carrinho/calculo-valor';
import {MatTableModule} from '@angular/material/table';

import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoComponent } from './produto/produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';
import { NovoPedidoComponent } from './novo-pedido/novo-pedido.component';





registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoaderComponent,
    ClienteComponent,
    ProdutoComponent,
    CarrinhoComponent,
    CalculoValorComponent,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    ConsultaPedidoComponent,
    NovoPedidoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    AppRoutingModule,
    // FlexModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
     {provide: LOCALE_ID, useValue: 'pt-BR'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}