import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';
import { FilmeService } from '../../filme.service';
import { Filme } from '../../filme';

@Component({
  selector: 'app-form-pesquisa',
  templateUrl: './form-pesquisa.component.html',
  styleUrls: ['./form-pesquisa.component.css']
})
export class FormPesquisaComponent implements OnInit {

  @Output()
  public pesquisa = new EventEmitter<object[]>();
  listaFilmes: Filme[] = [];

  nome : string;
  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
  }

  onSubmit(nomeFilme) {
    this.filmeService.getFilmes(nomeFilme.value.nome).subscribe(data => {
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
    this.pesquisa.emit(this.listaFilmes);
  }
}
