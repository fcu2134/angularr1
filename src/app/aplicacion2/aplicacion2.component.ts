import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-aplicacion2',
  templateUrl: './aplicacion2.html',
  styleUrls: ['./aplicacion2.component.css']
})
export class Aplicacion2Component implements OnInit {
  datos: any;

  constructor(private formService: FormService) {}

  ngOnInit() {
    // Obtengo los datos almacenados en el servicio FormService(nombre que le quiera poner)
    this.datos = this.formService.obtenerDatos();
  }
}
