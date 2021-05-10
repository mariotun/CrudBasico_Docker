import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';

//se importo tambien, no venia por defecto , para la comunicacion con la api
import {HttpClient, HttpClientModule } from '@angular/common/http'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//***
    HttpClientModule//se importo , no venia por defecto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
