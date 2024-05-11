import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PaisesService } from './services/paises.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes),
              provideClientHydration(),  
              PaisesService,
              {provide: HttpClient, useClass: HttpClient }]
};
