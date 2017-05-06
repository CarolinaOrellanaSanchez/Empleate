import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario = true;
  popup = false;

  cambiarUsuario(activoUsuario){
    this.usuario=activoUsuario;
  }

  onSubmit(form: NgForm) {
    
  }
  constructor() { }

  ngOnInit() {
  }
  mostrarpopup(activoPopup){
    this.popup=activoPopup;
  }

}
