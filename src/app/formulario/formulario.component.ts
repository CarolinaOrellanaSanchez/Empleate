import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario = true;

  cambiarUsuario(activoUsuario){
    this.usuario=activoUsuario;
}

  onSubmit(form: NgForm) {
    
  }
  constructor() { }

  ngOnInit() {
  }

}
