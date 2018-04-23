import { Injectable } from '@angular/core';
import { Filme } from './filme';
import { HttpClient }from '@angular/common/http';

@Injectable()
export class FilmeService {

  url: string = "http://www.omdbapi.com/";
  apiKey="86740000";
  
  constructor(
    private http: HttpClient) { 
  }
  

  getFilmes(nome: string) {
    const url =`${this.url}?apiKey=${this.apiKey}&s=${nome}`
    return this.http.get(url);
  }

}
