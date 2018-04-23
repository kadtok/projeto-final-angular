import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FormPesquisaComponent } from './lista-filmes/form-pesquisa/form-pesquisa.component';


import { FilmeService } from './filme.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  declarations: [
    ListaFilmesComponent,
    FilmeCardComponent,
    FormPesquisaComponent
  ],
  exports: [
    ListaFilmesComponent
  ],
  providers: [
    FilmeService
  ]
})
export class ConteudoModule { }
