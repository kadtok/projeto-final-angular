import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.css']
})


export class FilmeCardComponent {

  @Input() filme: Filme;
  @Output() apaga = new EventEmitter<object>();

  constructor() { }

  apagaCard(): void{
    this.apaga.emit(this.filme);
  }

}
