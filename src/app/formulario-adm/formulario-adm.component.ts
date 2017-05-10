import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { OfertaService } from '../oferta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Oferta } from '../oferta';

@Component({
  selector: 'app-formulario-adm',
  templateUrl: './formulario-adm.component.html',
  styleUrls: ['./formulario-adm.component.css']
})
export class FormularioAdmComponent implements OnInit {
  miFormulario: FormGroup;
  private subscripcion: Subscription;
  private esNueva = true;
  private oferta: Oferta;
  private ofertaId: number;

  constructor(private ofertaService: OfertaService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.subscripcion = this.activatedRoute.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.esNueva = false;
          this.ofertaId = params['id'];
          this.oferta = this.ofertaService.devolverOferta(this.ofertaId);
        } else {
          this.esNueva = true;
          this.oferta = null;
        }
        this.inicializarFormulario();
      }
    );
  }

  onSubmit() {
      const ofertaNueva = this.miFormulario.value;
      if (this.esNueva) {
        this.ofertaService.anadirOferta(ofertaNueva);
      } else {
        this.ofertaService.editarOferta(this.oferta, ofertaNueva);
      } 
      this.router.navigate(['lista-ofertas']);
    }

  private inicializarFormulario() {
    let imagenOferta = '';
    let puestoOferta = '';
    let nombreEmpresaOferta = '';
    let lugarOferta = '';
    let estudiosOferta = '';
    let experienciaOferta = '';
    let skillsOferta: FormArray = new FormArray([]);
    let desEmpresaOferta = '';
    let descripOferta = '';
    let vacantesOferta;
    let duracionOferta = '';
    let salarioOferta = '';
    let horarioOferta = '';

    if (!this.esNueva) {
      for (let i = 0; i < this.oferta.skills.length; i++) {
        skillsOferta.push(new FormControl(this.oferta.skills[i], Validators.required)

        );
      }
      imagenOferta = this.oferta.imagenUrl;
      puestoOferta = this.oferta.puesto;
      nombreEmpresaOferta = this.oferta.nombreEmpresa;
      lugarOferta = this.oferta.lugar;
      estudiosOferta = this.oferta.estudios;
      experienciaOferta = this.oferta.experiencia;
      desEmpresaOferta = this.oferta.descEmpresa;
      descripOferta = this.oferta.descripcion;
      vacantesOferta = this.oferta.vacantes;
      duracionOferta = this.oferta.duracion;
      salarioOferta = this.oferta.salario;
      horarioOferta = this.oferta.horario;
    }

    this.miFormulario = new FormGroup({
      'imagenUrl': new FormControl(imagenOferta, Validators.required),
      'puesto': new FormControl(puestoOferta, Validators.required),
      'nombreEmpresa': new FormControl(nombreEmpresaOferta, Validators.required),
      'lugar': new FormControl(lugarOferta, Validators.required),
      'estudios': new FormControl(estudiosOferta, Validators.required),
      'experiencia': new FormControl(experienciaOferta, Validators.required),
      'skills': new FormControl(skillsOferta, Validators.required),
      'descEmpresa': new FormControl(desEmpresaOferta, Validators.required),
      'descripcion': new FormControl(descripOferta, Validators.required),
      'vacantes': new FormControl(vacantesOferta, Validators.required),
      'duracion': new FormControl(duracionOferta, Validators.required),
      'salario': new FormControl(salarioOferta, Validators.required),
      'horario': new FormControl(horarioOferta, Validators.required)
    });
  }
}
