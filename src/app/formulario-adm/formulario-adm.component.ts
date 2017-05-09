import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { OfertaService } from '../oferta.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulario-adm',
  templateUrl: './formulario-adm.component.html',
  styleUrls: ['./formulario-adm.component.css']
})
export class FormularioAdmComponent implements OnInit {
  miFormulario: FormGroup;

  constructor(private ofertaService: OfertaService, private router: Router) {this.miFormulario = new FormGroup({

'puesto': new FormControl('', Validators.required),
'nombreEmpresa': new FormControl('', Validators.required),
'lugar': new FormControl('', Validators.required),
'estudios': new FormControl('', Validators.required),
'experiencia': new FormControl('', Validators.required),
'skills': new FormControl('', Validators.required),
'descEmpresa': new FormControl('', Validators.required),
'descripcion': new FormControl('', Validators.required),
'vacantes': new FormControl('', Validators.required),
'duracion': new FormControl('', Validators.required),
'salario': new FormControl('', Validators.required),
'horario': new FormControl('', Validators.required)
});
} 

  ngOnInit() {

  }
  onSubmit(){
     this.ofertaService.anadirOferta(this.miFormulario.value);
     this.router.navigate(['lista-ofertas'])

  }
}
