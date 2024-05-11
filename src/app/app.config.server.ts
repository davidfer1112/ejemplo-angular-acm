import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { PaisesService } from './services/paises.service';
import { HttpClientModule } from '@angular/common/http';

const serverConfig: ApplicationConfig = {

  providers: [
    provideServerRendering(),
    PaisesService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
