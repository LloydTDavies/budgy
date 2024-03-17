import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import enGb from '@angular/common/locales/en-GB';

registerLocaleData(enGb)
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes), provideAnimationsAsync()],
};
