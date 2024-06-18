import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/login/login.component';
import { ContactoComponent } from './app/contacto/contacto.component';
import { RegistroComponent } from './app/registro/registro.component';
import { MenuComponent } from './app/menu/menu.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(MenuComponent, appConfig)
  .catch((err) => console.error(err));


bootstrapApplication(ContactoComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(LoginComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(RegistroComponent, appConfig)
  .catch((err) => console.error(err));

