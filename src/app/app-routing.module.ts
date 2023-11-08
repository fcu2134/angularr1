import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { Aplicacion1Component } from './aplicacion1/aplicacion1.component';
import { Aplicacion2Component } from './aplicacion2/aplicacion2.component';

const routes: Routes = [
  { path: "aplicacion1", component: Aplicacion1Component }, //creo rutas para poder acceder mientras mas componentes tenga los voy agregando aca 
  { path: "aplicacion2", component: Aplicacion2Component }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
