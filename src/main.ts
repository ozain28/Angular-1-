import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { Login } from './app/components/login/login';

bootstrapApplication(Login, appConfig)
  .catch((err) => console.error(err));
