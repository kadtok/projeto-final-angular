import { Component, OnInit } from '@angular/core';
import { Filme } from '../filme';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  listaFilmes: Filme[] = [];

  constructor(private filmeService: FilmeService) {

  }

  ngOnInit() {
  }

  apagaFilme(filme: Filme): void {
    this.listaFilmes = this.listaFilmes.filter(item => item.id != filme.id);
  }
  carregaLista(lista: Filme[]) {
    this.listaFilmes = lista;
  }
}
