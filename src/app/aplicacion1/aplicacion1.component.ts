import { Component, OnInit } from '@angular/core';//importamos el componente y el oninit pa que funcione
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';//lo mismo aca ,importamos lo que vamos a utilizar ,
import { Router } from '@angular/router'; //importo el router para poder utilizarlo
import { FormService } from '../form.service';


@Component({
  selector: 'app-aplicacion1',
  templateUrl: './aplicacion1.html',
  styleUrls: ['./aplicacion1.component.css']
})
export class Aplicacion1Component implements OnInit {
  form: FormGroup = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(4)]),
    apellido: new FormControl("", [Validators.required, Validators.minLength(4)]),
    edad: new FormControl( [Validators.required, this.Validator])
  });

  constructor(private fb: FormBuilder, private router: Router, private formService: FormService) { // Agrega formService como dependencia
  }
   

  ngOnInit(): void {
    // lo omito pa que puea avanzar :D
  }

  get formReactivo() {
    return this.form.controls;
  }

  botonEnviar() {
    if (this.form.valid) {
      const data = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        edad: this.form.value.edad,
      };
  
      this.formService.guardarDatos(data); // Guardar los datos en el servicio
      this.router.navigate(['aplicacion2']); // Navegar a la página aplicacion2
    }
  }

  Validator(control: FormControl) {   //esto es opcional , de hecho es lo mismo que hacerlo en la linea 15 :D
    const value = control.value;
    if (value === null || value === undefined || value === '') {
      return { required: true };
    }
    
    const age = Number(value);
    if (isNaN(age) || age < 0) {
      return { invalidAge: true };
    }

    return null;
  }
}
