import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Asegúrate de importar ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Aplicacion1Component } from './aplicacion1/aplicacion1.component';
import { Aplicacion2Component } from './aplicacion2/aplicacion2.component';
import { FormService } from './form.service'; 

@NgModule({
  declarations: [
    AppComponent,
    Aplicacion1Component,
    Aplicacion2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Registra ReactiveFormsModule aquí
  ],
  providers: [FormService],
  bootstrap: [AppComponent],
})
export class AppModule {}
