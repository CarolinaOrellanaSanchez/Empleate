import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-adm',
  templateUrl: './formulario-adm.component.html',
  styleUrls: ['./formulario-adm.component.css']
})
export class FormularioAdmComponent implements OnInit {
  miFormulario: FormGroup;

  constructor() {this.miFormulario = new FormGroup({

'puesto': new FormControl('', Validators.required),
'empresa': new FormControl('', Validators.required),
'lugar': new FormControl('', Validators.required),
'estudios_minimos': new FormControl('', Validators.required),
'experiencia': new FormControl('', Validators.required),
'conocimientos_necesarios': new FormControl('', Validators.required),
'descripcion_empresa': new FormControl('', Validators.required),
'descripcion_puesto': new FormControl('', Validators.required),
'numero_vacantes': new FormControl('', Validators.required),
'duracion': new FormControl('', Validators.required),
'salario': new FormControl('', Validators.required),
'horario': new FormControl('', Validators.required)
});
} 

  ngOnInit() {
  }
 
  
}
