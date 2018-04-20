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
    this.filmeService.getFilmes().subscribe(data => {
      data['Search'].map(
        filmes => {
          let film = {
            'id': filmes.imdbID,
            'titulo':filmes.Title,
            'ano':filmes.Year,
            'tipo':filmes.Type,
            'poster':filmes.Poster
          }
          this.listaFilmes.push(film);
        })
    });
  }

  apagaFilme(filme: Filme): void {
    this.listaFilmes = this.listaFilmes.filter(item => item.id != filme.id);
  }
}
