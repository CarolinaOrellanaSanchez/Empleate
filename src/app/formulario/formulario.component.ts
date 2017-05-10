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
  mostrado = false;


  cambiarUsuario(activoUsuario){
    this.usuario=activoUsuario;
  }

  onSubmit(form: NgForm) {
    this.mostrado = !this.mostrado;
  }
  constructor() { }

  ngOnInit() {
  }
  

}
