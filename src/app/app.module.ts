import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio.component';
import { UsuarioComponent } from './usuario.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';

import { FormsModule } from '@angular/forms';
import { LibrosService } from './services/libros.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BarNavegationComponent } from './navegation/bar-navegation/bar-navegation.component';
import { MenuListComponent } from './navegation/menu-list/menu-list.component';
import { SeguridadService } from './seguridad/seguridad.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
    RegistrarComponent,
    LoginComponent,
    BarNavegationComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    LibrosService,
    SeguridadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
