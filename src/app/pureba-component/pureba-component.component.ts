import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { app } from '../../../server';

@Component({
  selector: 'app-pureba-component',
  standalone: true,
  imports: [CommonModule,PurebaComponentComponent],
  templateUrl: './pureba-component.component.html',
  styleUrl: './pureba-component.component.css'
})
export class PurebaComponentComponent {

  @Input() usuarioPadre = '';

  
  @Output() addLenguajeFavorito = new EventEmitter<string>();
  
  favorito(lenguaje: string) {
    this.addLenguajeFavorito.emit(lenguaje);
  }


  usuario = "ACM"

  estaLogeado = false;

  lenguajes = [
    {
      id: 1,
      nombre: 'JavaScript'
    },
    {
      id: 2,
      nombre: 'Java'
    },
    {
      id: 3,
      nombre: 'Python'
    },
    {
      id: 4,
      nombre: 'C#'
    }
  ]
}







