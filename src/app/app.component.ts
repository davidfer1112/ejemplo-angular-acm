import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PurebaComponentComponent } from './pureba-component/pureba-component.component';
import { PaisesService } from './services/paises.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    PurebaComponentComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  paises: any[] = [];
  title = 'practica_acm';
  usuarioPadre = "ACMPadre";
  lenguajeFavorito = '';

  paisesServiceexport: PaisesService = inject(PaisesService);

  

  holamundo = this.paisesServiceexport.getholamundo();
  

  obtenerLenguajeFavorito(nombreLenguaje: string) {
    this.lenguajeFavorito = nombreLenguaje;
  }
}

