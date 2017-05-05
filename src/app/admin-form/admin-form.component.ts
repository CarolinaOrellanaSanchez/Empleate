import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {
  adminForm: FormGroup; 
  constructor(private formBuilder: FormBuilder) {
    this.adminForm = formBuilder.group({
      'datosUsuario': formBuilder.group({
        'nombre': ['', Validators.required],
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[az0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
      }),
      'password': ['', Validators.required],
      'hobbies': formBuilder.array([
        new FormControl('Cocinar', Validators.required)
      ])
    });
   }

  ngOnInit() {
  }
    enviarFormulario() {
    console.log(this.adminForm);
  }
    anadirOferta() {
      
  }

}
